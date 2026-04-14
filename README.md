# ДоговорCheck — лендинг

Статический сайт для сервиса **[ДоговорCheck](https://dogovorcheck.ru/)** (проверка и генерация договоров с помощью ИИ). Собирается из [Next.js](https://nextjs.org) в режиме [`output: "export"`](https://nextjs.org/docs/app/building-your-application/deploying/static-exports); готовые файлы лежат в каталоге `out/` и отдаются **как статический сайт из [Yandex Object Storage](https://yandex.cloud/ru/docs/storage/concepts/hosting)** (без Node.js на сервере).

## Локально

```bash
npm ci
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
```

Результат — каталог `out/`. Проверка доступности после выкладки: [`/health.json`](public/health.json) → `{"status":"ok"}`.

## Деплой в Yandex Object Storage

1. Скопируйте [`.env.example`](.env.example) в `.env` и заполните ключи доступа к бакету:
   - `KEY_ID` — идентификатор ключа сервисного аккаунта;
   - `SECRET_KEY` — секрет ключа.

2. Для **Yandex Object Storage** в том же `.env` задайте endpoint (S3-совместимый API), например:

   ```bash
   S3_ENDPOINT_URL=https://storage.yandexcloud.net
   ```

   Регион при необходимости: `AWS_REGION=ru-central1`.

3. Соберите сайт и загрузите содержимое `out/` в бакет (скрипт сначала очищает префикс, затем заливает файлы):

   ```bash
   npm run build
   npm run deploy -- '<BUCKET URL>'
   ```

   Вместо `<BUCKET URL>` укажите URL вашего бакета в поддерживаемом формате, например `https://storage.yandexcloud.net/имя-бакета` или `s3://имя-бакета` (при `S3_ENDPOINT_URL` в `.env`). Подробнее о вариантах URL см. сообщения об ошибке в [`scripts/deploy.mjs`](scripts/deploy.mjs) или запустите деплой без аргумента — скрипт выведет подсказку.

В консоли Yandex Cloud для бакета включите **хостинг статического сайта** и укажите индексную страницу (обычно `index.html`), если требуется открывать сайт по публичному URL хранилища или через подключённый домен.
