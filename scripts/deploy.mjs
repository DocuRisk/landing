import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import {
  DeleteObjectsCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import mime from "mime-types";

dotenv.config({ quiet: true });

const OUT_DIR = path.resolve(process.cwd(), "out");

function exitWithError(message) {
  console.error(message);
  process.exit(1);
}

function resolveEnv(...keys) {
  for (const key of keys) {
    if (process.env[key]) {
      return process.env[key];
    }
  }

  return undefined;
}

function normalizePrefix(prefix) {
  if (!prefix) {
    return "";
  }

  return prefix.replace(/^\/+|\/+$/g, "");
}

function buildObjectKey(prefix, relativePath, isDirectory = false) {
  const normalizedPath = relativePath.split(path.sep).join("/");
  const key = prefix ? `${prefix}/${normalizedPath}` : normalizedPath;

  if (isDirectory) {
    return key.endsWith("/") ? key : `${key}/`;
  }

  return key;
}

function parseBucketUrl(input) {
  let url;
  const endpointFromEnv = resolveEnv("S3_ENDPOINT_URL", "ENDPOINT_URL");
  const urlStyle = resolveEnv("S3_URL_STYLE");

  try {
    url = new URL(input);
  } catch {
    exitWithError(
      [
        "Некорректный bucket url.",
        "Поддерживаются форматы:",
        "- s3://bucket",
        "- s3://bucket/prefix",
        "- https://storage.example.com/bucket",
        "- https://storage.example.com/bucket/prefix",
      ].join("\n"),
    );
  }

  if (url.protocol === "s3:") {
    return {
      bucket: url.hostname,
      prefix: normalizePrefix(url.pathname),
      endpoint: endpointFromEnv,
      forcePathStyle: process.env.S3_FORCE_PATH_STYLE === "true",
    };
  }

  const pathParts = url.pathname.split("/").filter(Boolean);
  const hostnameParts = url.hostname.split(".");

  if (urlStyle === "virtual") {
    if (hostnameParts.length < 2) {
      exitWithError("Для virtual-hosted url нужен адрес вида https://bucket.endpoint/prefix");
    }

    const [bucket, ...endpointHostParts] = hostnameParts;

    return {
      bucket,
      prefix: normalizePrefix(pathParts.join("/")),
      endpoint: endpointFromEnv ?? `${url.protocol}//${endpointHostParts.join(".")}`,
      forcePathStyle: false,
    };
  }

  if (pathParts.length > 0) {
    const [bucket, ...prefixParts] = pathParts;

    return {
      bucket,
      prefix: normalizePrefix(prefixParts.join("/")),
      endpoint: endpointFromEnv ?? `${url.protocol}//${url.host}`,
      forcePathStyle: true,
    };
  }

  if (hostnameParts.length < 2) {
    exitWithError("Bucket url должен содержать имя бакета.");
  }

  const [bucket, ...endpointHostParts] = hostnameParts;

  return {
    bucket,
    prefix: "",
    endpoint: endpointFromEnv ?? `${url.protocol}//${endpointHostParts.join(".")}`,
    forcePathStyle: false,
  };
}

async function walkDirectory(directory, relativeBase = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const directories = [];
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    const relativePath = path.join(relativeBase, entry.name);

    if (entry.isDirectory()) {
      directories.push(relativePath);
      const nested = await walkDirectory(absolutePath, relativePath);
      directories.push(...nested.directories);
      files.push(...nested.files);
      continue;
    }

    if (entry.isFile()) {
      files.push(relativePath);
    }
  }

  return { directories, files };
}

async function ensureOutDirectoryExists() {
  try {
    const target = await stat(OUT_DIR);

    if (!target.isDirectory()) {
      exitWithError(`Путь ${OUT_DIR} существует, но это не директория.`);
    }
  } catch {
    exitWithError(`Директория ${OUT_DIR} не найдена. Сначала соберите сайт.`);
  }
}

async function uploadDirectoryMarkers(client, bucket, prefix, directories) {
  for (const directory of directories) {
    const key = buildObjectKey(prefix, directory, true);
    const body = Buffer.alloc(0);

    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentLength: body.byteLength,
      }),
    );

    console.log(`dir  -> ${key}`);
  }
}

async function listExistingObjectKeys(client, bucket, prefix) {
  const keys = [];
  let continuationToken;

  do {
    const response = await client.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: prefix || undefined,
        ContinuationToken: continuationToken,
      }),
    );

    for (const object of response.Contents ?? []) {
      if (object.Key) {
        keys.push(object.Key);
      }
    }

    continuationToken = response.IsTruncated ? response.NextContinuationToken : undefined;
  } while (continuationToken);

  return keys;
}

async function deleteObjectsBatch(client, bucket, keys) {
  if (keys.length === 0) {
    return;
  }

  const response = await client.send(
    new DeleteObjectsCommand({
      Bucket: bucket,
      Delete: {
        Objects: keys.map((key) => ({ Key: key })),
        Quiet: false,
      },
    }),
  );

  for (const deleted of response.Deleted ?? []) {
    if (deleted.Key) {
      console.log(`del  -> ${deleted.Key}`);
    }
  }

  if ((response.Errors ?? []).length > 0) {
    const details = response.Errors.map(({ Key, Message }) => `${Key}: ${Message}`).join("\n");
    throw new Error(`Не удалось удалить часть объектов:\n${details}`);
  }
}

async function clearRemotePrefix(client, bucket, prefix) {
  const existingKeys = await listExistingObjectKeys(client, bucket, prefix);

  console.log(`Deleting existing objects: ${existingKeys.length}`);

  for (let index = 0; index < existingKeys.length; index += 1000) {
    const batch = existingKeys.slice(index, index + 1000);
    await deleteObjectsBatch(client, bucket, batch);
  }
}

async function uploadFiles(client, bucket, prefix, files) {
  for (const file of files) {
    const absolutePath = path.join(OUT_DIR, file);
    const key = buildObjectKey(prefix, file);
    const body = await readFile(absolutePath);
    const contentType = mime.lookup(file) || "application/octet-stream";

    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentLength: body.byteLength,
        ContentType: contentType,
      }),
    );

    console.log(`file -> ${key}`);
  }
}

async function main() {
  const bucketUrl = process.argv[2];
  const accessKeyId = resolveEnv(
    "AWS_ACCESS_KEY_ID",
    "S3_ACCESS_KEY_ID",
    "ACCESS_KEY_ID",
    "KEY_ID",
  );
  const secretAccessKey = resolveEnv(
    "AWS_SECRET_ACCESS_KEY",
    "S3_SECRET_ACCESS_KEY",
    "SECRET_ACCESS_KEY",
    "SECRET_KEY",
  );

  if (!bucketUrl) {
    exitWithError("Использование: npm run deploy -- <bucket-url>");
  }

  if (!accessKeyId) {
    exitWithError(
      "Не найден ключ доступа в .env. Поддерживаются AWS_ACCESS_KEY_ID, S3_ACCESS_KEY_ID, ACCESS_KEY_ID, KEY_ID",
    );
  }

  if (!secretAccessKey) {
    exitWithError(
      "Не найден secret key в .env. Поддерживаются AWS_SECRET_ACCESS_KEY, S3_SECRET_ACCESS_KEY, SECRET_ACCESS_KEY, SECRET_KEY",
    );
  }

  await ensureOutDirectoryExists();

  const { bucket, prefix, endpoint, forcePathStyle } = parseBucketUrl(bucketUrl);
  const { directories, files } = await walkDirectory(OUT_DIR);

  const client = new S3Client({
    region: process.env.AWS_REGION || "us-east-1",
    endpoint,
    forcePathStyle,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  console.log(`Bucket: ${bucket}`);
  console.log(`Prefix: ${prefix || "/"}`);
  console.log(`Endpoint: ${endpoint || "AWS default"}`);
  console.log("Mode: replace");
  console.log(`Uploading directories: ${directories.length}`);
  console.log(`Uploading files: ${files.length}`);

  await clearRemotePrefix(client, bucket, prefix);
  await uploadDirectoryMarkers(client, bucket, prefix, directories);
  await uploadFiles(client, bucket, prefix, files);

  console.log("Загрузка завершена.");
}

main().catch((error) => {
  console.error("Ошибка загрузки:", error);
  process.exit(1);
});
