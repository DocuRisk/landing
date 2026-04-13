import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 bg-background py-8 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted/60">
          © {year}{" "}
          <span className="font-serif font-semibold">
            Договор<span className="italic">Чек</span>
          </span>
          . Все права защищены.
        </p>
        <div className="flex flex-wrap gap-5">
          <a
            className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            href="mailto:admin@dogovorcheck.ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            Поддержка
          </a>
          <Link
            href="/privacy"
            className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
          >
            Политика конфиденциальности
          </Link>
          <a
            className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            href="https://t.me/dogovor_check_bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram-бот
          </a>
          <a
            className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            href="https://max.ru/id450125033950_1_bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            Max-бот
          </a>
        </div>
      </div>
    </footer>
  )
}
