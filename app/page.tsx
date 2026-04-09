import Image from "next/image"
import Link from "next/link"
import {
  MessageCircleQuestion,
  ScanSearch,
  Timer,
  BadgePercent,
  Scale,
  ListChecks,
  History,
  ChartArea,
  BookText,
  Bot,
  SlidersHorizontal,
  SquarePen,
} from "lucide-react"
import FAQItem from "./components/FAQItem"
import CountUp from "./components/CountUp"
import RevealOnScroll from "./components/RevealOnScroll"

const features = [
  {
    name: "Распознавание документов",
    description:
      "Загружайте PDF, DOCX или изображения — сервис автоматически распознает текст.",
    icon: ScanSearch,
  },
  {
    name: "Экономия времени",
    description: "ИИ анализирует договор за минуты и показывает ключевые риски.",
    icon: Timer,
  },
  {
    name: "История документов",
    description:
      "Все загруженные договоры и результаты анализа сохраняются — вы можете вернуться к ним в любое время.",
    icon: History,
  },
  {
    name: "Вопросы по договору",
    description:
      "Задавайте вопросы по документу и получайте ответы на основе его содержания.",
    icon: MessageCircleQuestion,
  },
]

const features_create = [
  {
    name: "Российская ИИ-модель",
    description:
      "ИИ генерирует договор на основе вашего описания и создает договор. Используется российская ИИ-модель, которая лучше всего работает в России.",
    icon: Bot,
  },
  {
    name: "Паритетный договор",
    description: "ИИ генерирует договор который защищает права и интересы обоих сторон.",
    icon: Scale,
  },
  {
    name: "Договор под свою задачу",
    description:
      "ИИ генерирует договор под вашу задачу, где вы можете изменить пункты договора под себя.",
    icon: SlidersHorizontal,
  },
  {
    name: "Редактирование договора",
    description:
      "Генерируем договор в формате Word, который вы можете редактировать под себя.",
    icon: SquarePen,
  },
]

const checks = [
  {
    name: "Соберет черновик",
    description: "Если шаблона нет, сервис подготовит основу документа за вас.",
    icon: BookText,
  },
  {
    name: "Найдет денежные риски",
    description: "Покажет штрафы, неустойки, удержание оплаты и другие потери.",
    icon: BadgePercent,
  },
  {
    name: "Покажет перекос условий",
    description: "Подсветит пункты, где у другой стороны больше прав, чем у вас.",
    icon: Scale,
  },
  {
    name: "Выделит важные пункты",
    description: "Отметит сроки, обязанности и формулировки, которые нельзя пропустить.",
    icon: ListChecks,
  },
]

const steps = [
  {
    step: 1,
    name: "Загрузка",
    description: "Отправьте документ в бот в формате Word, PDF, фото или просто текстом.",
    image: "/step_1.svg",
  },
  {
    step: 2,
    name: "Анализ",
    description: "ИИ обрабатывает документ, находит скрытые условия и спорные формулировки.",
    image: "/step_2.svg",
  },
  {
    step: 3,
    name: "Отчет",
    description: "Получите выжимку главных рисков с понятными объяснениями и рекомендациями.",
    image: "/step_3.svg",
  },
]

const steps_create = [
  {
    step: 1,
    name: "Описание",
    description:
      "Вы отправляете описание договора, которое хотите создать, например: «Договор аренды квартиры».",
    image: "/step_create_1.svg",
  },
  {
    step: 2,
    name: "Генерация",
    description: "ИИ генерирует пункты документа по вашему описанию.",
    image: "/step_create_2.svg",
  },
  {
    step: 3,
    name: "Создание документа",
    description: "Создаем документ из пунктов, которые выбрал ИИ и отдаем вам документ.",
    image: "/step_create_3.svg",
  },
]

const audiences = [
  {
    name: "Обычным людям",
    description: "Проверка договоров аренды, найма, купли-продажи авто или квартиры.",
    image: "/person_1.svg",
  },
  {
    name: "Фрилансерам",
    description: "Анализ договоров на оказание услуг, чтобы избежать штрафов и неоплат.",
    image: "/person_2.svg",
  },
  {
    name: "Бизнесу",
    description: "Быстрая проверка договоров контрагентов до отправки юристу.",
    image: "/person_3.svg",
  },
]

const faqs = [
  {
    question: "Можно ли сгенерировать документ с нуля?",
    answer:
      "Да. Если у вас нет шаблона, просто опишите задачу своими словами. Сервис подготовит черновик документа в формате DOCX, который можно скачать и доработать под себя.",
  },
  {
    question: "Мои документы в безопасности?",
    answer:
      "Да. Мы не используем ваши документы для обучения ИИ. После генерации или анализа данные хранятся в вашей истории и доступны только вам.",
  },
  {
    question: "Какие форматы поддерживаются?",
    answer:
      "Можно отправить описание текстом или загрузить файл в форматах DOCX, TXT, PDF, PNG и JPEG. Если документ создается с нуля, результат можно скачать в формате DOCX.",
  },
  {
    question: "Это заменяет живого юриста?",
    answer:
      "Нет. Сервис помогает быстро подготовить черновик и заметить очевидные риски до подписания. Для сложных и нестандартных ситуаций лучше подключать юриста.",
  },
  {
    question: "Как быстро работает анализ?",
    answer:
      "Обычно генерация или проверка занимает от 30 секунд до полутора минут. Точное время зависит от объема документа и сложности задачи.",
  },
  {
    question: "Можно ли попробовать бесплатно?",
    answer:
      "Да. После запуска бота вы получите 24 кредита. Обычно этого хватает, чтобы создать первый документ или проверить 1-3 договора.",
  },
]

export default function Home() {
  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-background">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-6 py-4">
          <Image
            src="/logo.svg"
            alt="ДоговорCheck"
            width={220}
            height={36}
            priority
            className="brightness-0"
          />
          <nav className="flex shrink-0 items-center gap-3 sm:gap-5" aria-label="Запуск бота">
            <a
              className="header-bot-link flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-200 hover:text-accent"
              href="https://t.me/dogovor_check_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/tg_black.svg" alt="" className="header-bot-icon" width={20} height={20} />
              Telegram-бот
            </a>
            <a
              className="header-bot-link flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-200 hover:text-accent"
              href="https://max.ru/id450125033950_1_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/max_black.svg" alt="" className="header-bot-icon" width={20} height={20} />
              Max-бот
            </a>
          </nav>
        </div>
      </header>

      {/* ─── Decorative edge lines ─── */}
      <div className="pointer-events-none fixed inset-y-0 left-1/2 z-0 w-full max-w-6xl -translate-x-1/2">
        <div className="document-edge-line absolute bottom-0 left-0 top-0 w-px" />
        <div className="document-edge-line absolute bottom-0 right-0 top-0 w-px" />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6">
        {/* ═══════════════════════════════════════════
            HERO (-mx-6 px-6: фон на ширину колонки, как у section-document)
        ═══════════════════════════════════════════ */}
        <section className="relative -mx-6 flex flex-col items-center overflow-hidden border-x border-border/80 bg-[url('/hero_bg.svg')] bg-cover bg-center bg-no-repeat px-6 pt-20 pb-16 text-center sm:pt-28 sm:pb-20">
          <h1 className="hero-fade-1 font-serif text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.75rem] leading-[1.1]">
            <span className="group relative inline-flex">
              <span
                className="inline-flex items-center border-b-2 border-foreground/10 italic transition-all duration-200 hover:border-accent/50"
                title="Искусственный интеллект"
                aria-label="Искусственный интеллект"
              >
                ИИ
              </span>
              <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-sm not-italic font-sans font-semibold tracking-normal text-background opacity-0 shadow-xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                Искусственный интеллект
              </span>
            </span>{" "}
            проверит договор <br className="hidden sm:block" /> или создаст новый
          </h1>

          <p className="hero-fade-2 mt-6 max-w-md text-base sm:text-lg leading-relaxed text-muted">
            Найдёт риски и спорные пункты <br className="hidden sm:block" /> или создаст
            договор по вашему описанию <br className="hidden sm:block" /> за 1 минуту
          </p>

          <div className="hero-fade-3 mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              className="btn btn-primary text-base px-7 py-3.5"
              href="https://t.me/dogovor_check_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/tg_white.svg" alt="Telegram" width={20} height={20} />
              Запустить в Telegram
            </a>
            <a
              className="btn btn-secondary text-base px-7 py-3.5"
              href="https://max.ru/id450125033950_1_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/max_accent.svg" alt="Max" className="icon-accent" width={20} height={20} />
              Запустить в Max
            </a>
          </div>

          <div className="hero-fade-4 mt-7">
            <p className="mb-3 text-sm tracking-wide text-muted/60">
              Попробовать бесплатно · без регистрации · от 1 минуты
            </p>
            <div className="flex flex-row items-center justify-center gap-5">
              <a
                href="https://storage.yandexcloud.net/dogovorcheck-assets/dogovorcheck_example.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-foreground"
              >
                <ChartArea className="size-4" />
                <span className="border-b border-muted/30 transition-colors duration-200 hover:border-foreground/30">
                  Пример анализа
                </span>
              </a>
              <a
                href="https://storage.yandexcloud.net/dogovorcheck-assets/dogovorcheck_example_gen.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-foreground"
              >
                <BookText className="size-4" />
                <span className="border-b border-muted/30 transition-colors duration-200 hover:border-foreground/30">
                  Пример генерации
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            STATS
        ═══════════════════════════════════════════ */}
        <section className="section-document py-12 sm:py-16">
          <RevealOnScroll>
            <div className="grid grid-cols-3 divide-x divide-border">
              <div className="px-4 py-3 text-center sm:px-12">
                <CountUp
                  target={125}
                  suffix="+"
                  duration={2000}
                  className="font-serif text-4xl font-normal italic tracking-tight sm:text-6xl"
                />
                <p className="mt-2 text-sm font-medium text-muted sm:text-base">
                  проверено договоров
                </p>
              </div>
              <div className="px-4 py-3 text-center sm:px-12">
                <CountUp
                  target={215}
                  suffix="+"
                  duration={2000}
                  delay={100}
                  className="font-serif text-4xl font-normal italic tracking-tight sm:text-6xl"
                />
                <p className="mt-2 text-sm font-medium text-muted sm:text-base">
                  сэкономлено часов
                </p>
              </div>
              <div className="px-4 py-3 text-center sm:px-12">
                <CountUp
                  target={685}
                  suffix="+"
                  duration={2000}
                  delay={120}
                  className="font-serif text-4xl font-normal italic tracking-tight sm:text-6xl"
                />
                <p className="mt-2 text-sm font-medium text-muted sm:text-base">
                  найдено опасных пунктов
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══════════════════════════════════════════
            WHAT AI CHECKS
        ═══════════════════════════════════════════ */}
        <section className="section-document py-16 sm:py-24">
          <div className="flex flex-col items-center">
            <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:w-4/6">
              {checks.map((check, i) => (
                <RevealOnScroll
                  key={check.name}
                  delay={i * 80}
                  className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-border transition-shadow duration-300 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] sm:p-8"
                >
                  <check.icon className="mb-5 size-8 text-accent" aria-hidden />
                  <h3 className="mb-2.5 font-serif text-lg font-semibold leading-tight tracking-tight">
                    {check.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{check.description}</p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            HOW ANALYSIS WORKS
        ═══════════════════════════════════════════ */}
        <section className="section-document bg-stone-100/60 py-16 sm:py-24">
          <RevealOnScroll className="mb-14 text-center sm:mb-16">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
              Как работает анализ?
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-muted">
              Три простых шага для вашей безопасности.
            </p>
          </RevealOnScroll>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <RevealOnScroll
                key={step.name}
                delay={i * 100}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5">
                  <Image src={step.image} alt={step.name} width={96} height={96} />
                </div>
                <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent/60">
                  Шаг {step.step}
                </span>
                <h3 className="mb-3 text-xl font-semibold tracking-tight">{step.name}</h3>
                <p className="max-w-[240px] text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ANALYSIS FEATURES
        ═══════════════════════════════════════════ */}
        <section className="section-document px-4 py-12 sm:px-10 sm:py-16">
          <RevealOnScroll>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col gap-3">
                  <feature.icon aria-hidden className="size-6 text-accent" />
                  <h3 className="text-base font-semibold leading-tight tracking-tight">
                    {feature.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══════════════════════════════════════════
            HOW CONTRACT CREATED
        ═══════════════════════════════════════════ */}
        <section className="section-document py-16 sm:py-24">
          <RevealOnScroll className="mb-14 text-center sm:mb-16">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
              Как создается договор?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
              ИИ создаст{" "}
              <span className="group relative inline-flex">
                <span
                  className="inline-flex items-center border-b border-muted/40 italic transition-all duration-200 hover:border-accent/50"
                  title="Паритет (от лат. paritas — равенство) — это равноправие, равноценность, равенство сторон или показателей в чем-либо."
                  aria-label="Паритет (от лат. paritas — равенство) — это равноправие, равноценность, равенство сторон или показателей в чем-либо."
                >
                  паритетный
                </span>
                <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max max-w-[min(16rem,calc(100vw-2rem))] -translate-x-1/2 translate-y-1 rounded-lg bg-foreground px-3 py-2 text-left text-sm not-italic font-sans font-medium leading-snug tracking-normal text-background opacity-0 shadow-xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  Паритет (от лат. paritas — равенство) — это равноправие, равноценность,
                  равенство сторон или показателей в чем-либо.
                </span>
              </span>{" "}
              договор по вашему описанию
            </p>
          </RevealOnScroll>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {steps_create.map((step, i) => (
              <RevealOnScroll
                key={step.name}
                delay={i * 100}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5">
                  <Image src={step.image} alt={step.name} width={96} height={96} />
                </div>
                <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent/60">
                  Шаг {step.step}
                </span>
                <h3 className="mb-3 text-xl font-semibold tracking-tight">{step.name}</h3>
                <p className="max-w-[240px] text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CREATE FEATURES
        ═══════════════════════════════════════════ */}
        <section className="section-document bg-stone-100/60 px-4 py-12 sm:px-10 sm:py-16">
          <RevealOnScroll>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {features_create.map((feature) => (
                <div key={feature.name} className="flex flex-col gap-3">
                  <feature.icon aria-hidden className="size-6 text-accent" />
                  <h3 className="text-base font-semibold leading-tight tracking-tight">
                    {feature.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══════════════════════════════════════════
            WHO IS IT FOR
        ═══════════════════════════════════════════ */}
        <section className="section-document py-16 sm:py-24">
          <RevealOnScroll className="mb-12 text-center sm:mb-16">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
              Для кого этот сервис
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {audiences.map((audience, i) => (
              <RevealOnScroll
                key={audience.name}
                delay={i * 80}
                className="flex flex-col rounded-2xl bg-white p-8 ring-1 ring-border transition-shadow duration-300 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)]"
              >
                <div className="mb-6">
                  <Image src={audience.image} alt={audience.name} width={180} height={180} />
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-tight">{audience.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{audience.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════ */}
        <section className="section-document bg-stone-100/60 py-16 sm:py-24">
          <RevealOnScroll className="mb-10 text-center sm:mb-12">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
              Частые вопросы
            </h2>
          </RevealOnScroll>

          <RevealOnScroll
            delay={120}
            className="mx-auto max-w-3xl divide-y divide-border/60 rounded-2xl bg-white px-6 ring-1 ring-border sm:px-8"
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </RevealOnScroll>
        </section>

        {/* ═══════════════════════════════════════════
            BOTTOM CTA
        ═══════════════════════════════════════════ */}
        <section className="section-document py-16 sm:py-24">
          <RevealOnScroll className="flex flex-col items-center text-center">
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              Попробуйте бесплатно прямо сейчас
            </h2>
            <div className="mt-6 w-full max-w-md px-5 py-4 text-center sm:px-6">
              <p className="text-lg font-semibold tracking-tight text-foreground">
                Получите в два раза больше кредитов
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="mr-1.5 inline-block line-through decoration-2 decoration-foreground/20">
                  12 кредитов
                </span>
                <span className="font-medium text-accent">24 кредита</span>
                {' '}для проверки или генерации договоро в боте.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                className="btn btn-primary text-base px-7 py-3.5"
                href="https://t.me/dogovor_check_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/tg_white.svg" alt="Telegram" width={20} height={20} />
                Открыть в Telegram
              </a>
              <a
                className="btn btn-secondary text-base px-7 py-3.5"
                href="https://max.ru/id450125033950_1_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/max_accent.svg" alt="Max" width={20} height={20} />
                Открыть в Max
              </a>
            </div>
          </RevealOnScroll>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border/60 bg-background py-8 sm:py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted/60">
            © {year} <span className="font-serif font-semibold">Договор<span className="italic">Чек</span></span>. Все права защищены.
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
    </div>
  )
}
