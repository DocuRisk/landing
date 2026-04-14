# ДоговорCheck

Исходный код лендинга сервиса **[ДоговорCheck](https://dogovorcheck.ru/)**.  
Сайт рассказывает о продукте для проверки и генерации договоров с помощью ИИ.

Проект собран на [Next.js](https://nextjs.org) и экспортируется как полностью статический сайт.  
Готовая сборка публикуется в **Yandex Object Storage** и работает без Node.js на сервере.

## Что в репозитории

- Лендинг для публичного сайта проекта `dogovorcheck.ru`
- Статическая сборка через `output: "export"`
- Деплой в S3-совместимое хранилище через `npm run deploy`

## Локальный запуск

Установите зависимости и запустите dev-сервер:

```bash
npm run dev
```

После запуска сайт будет доступен по адресу [http://localhost:3000](http://localhost:3000).

## Production-сборка

```bash
npm run build
```

Результат сборки попадает в каталог `out/`.

Для быстрой проверки после публикации можно использовать файл [`public/health.json`](public/health.json):  
ожидаемый ответ по пути `/health.json`:

```json
{"status":"ok"}
```

## Деплой в Yandex Object Storage

### 1. Подготовьте переменные окружения

Скопируйте [`.env.example`](.env.example) в `.env` и укажите значения:

```bash
KEY_ID=your_access_key_id
SECRET_KEY=your_secret_key
```

Для деплоя в **Yandex Object Storage** также укажите S3 endpoint:

```bash
S3_ENDPOINT_URL=https://storage.yandexcloud.net
```

При необходимости можно явно задать регион:

```bash
AWS_REGION=ru-central1
```

### 2. Выполните сборку и деплой

```bash
npm run build
npm run deploy -- '<BUCKET URL>'
```

Вместо `<BUCKET URL>` укажите адрес бакета, например:

- `https://storage.yandexcloud.net/your-bucket`
- `s3://your-bucket`

Скрипт деплоя очищает целевой префикс и затем загружает содержимое каталога `out/`.

### 3. Включите статический хостинг

В настройках бакета Yandex Cloud включите **статический хостинг** и укажите индексную страницу `index.html`, если сайт должен открываться по публичному URL бакета или через подключённый домен.
