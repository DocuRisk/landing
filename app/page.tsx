import Image from "next/image"
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
  Zap,
  TrendingUp,
  Crown,
  PenLine,
  ShieldCheck,
  FileCheck,
  Eye,
} from "lucide-react"
import FAQItem from "./components/FAQItem"
import CountUp from "./components/CountUp"
import RevealOnScroll from "./components/RevealOnScroll"

const features = [
  {
    name: "Распознавание документов",
    description:
      "Загружайте PDF, Word или изображения — сервис автоматически распознает текст.",
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
      "ИИ генерирует договор на основе вашего описания и создает договор. Используем ИИ-модель от Яндекса, которая лучше всего работает в России и на русском языке.",
    icon: Bot,
  },
  {
    name: "Паритетный договор",
    description: "ИИ генерирует договор, который защищает права и интересы обоих сторон.",
    icon: Scale,
  },
  {
    name: "Договор под свою задачу",
    description:
      "ИИ генерирует договор по вашему описанию, где вы можете изменить пункты договора под себя.",
    icon: SlidersHorizontal,
  },
  {
    name: "Редактирование договора",
    description:
      "Генерируем договор в формате Word, который вы можете продолжить редактировать сами.",
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

const improvements = [
  {
    name: "Исправление формулировок",
    description:
      "ИИ предложит безопасные формулировки вместо рискованных и двусмысленных пунктов.",
    icon: PenLine,
  },
  {
    name: "Защита ваших интересов",
    description:
      "Переработает односторонние условия, чтобы права и обязанности сторон были сбалансированы.",
    icon: ShieldCheck,
  },
  {
    name: "Готовый документ",
    description:
      "Получите улучшенную версию договора в формате Word — с учётом всех правок.",
    icon: FileCheck,
  },
]

const steps_create = [
  {
    step: 1,
    name: "Описание",
    description:
      "Вы отправляете описание договора, который хотите создать, например: «Договор аренды квартиры».",
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
    description: "Создаем документ из пунктов, которые выбрал ИИ, и отдаем вам документ.",
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

const packages = [
  {
    id: "micro",
    name: "Микро",
    price: 199,
    credits: 10,
    icon: Eye,
    iconBg: "bg-stone-100",
    iconColor: "text-stone-600",
  },
  {
    id: "start",
    name: "Старт",
    price: 990,
    credits: 55,
    icon: Zap,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    id: "business",
    name: "Бизнес",
    price: 2990,
    credits: 180,
    icon: TrendingUp,
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    id: "pro",
    name: "Профи",
    price: 5990,
    credits: 400,
    icon: Crown,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
]

const faqs = [
  {
    question: "Можно ли сгенерировать документ с нуля?",
    answer:
      "Да. Если у вас нет шаблона, просто опишите задачу своими словами. Сервис подготовит черновик документа в формате Word, который можно скачать и доработать под себя.",
  },
  {
    question: "Мои документы в безопасности?",
    answer:
      "Да. Мы не используем ваши документы для обучения ИИ. После генерации или анализа данные хранятся в вашей истории и доступны только вам.",
  },
  {
    question: "Какие форматы поддерживаются?",
    answer:
      "Можно отправить описание текстом или загрузить файл в форматах Word, TXT, PDF, PNG и JPEG. Если документ создается с нуля, результат можно скачать в формате Word.",
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
      "Да. После запуска бота вы получите 3 кредита. Обычно этого хватает, чтобы создать первый документ или проверить один небольшой договор.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-nowrap items-center justify-between gap-3 px-6 py-4 sm:gap-4">
          <Image
            src="/logo.svg"
            alt="ДоговорCheck"
            width={220}
            height={36}
            priority
            className="min-w-0 shrink brightness-0 max-h-7 w-auto max-w-[min(11rem,46vw)] sm:max-w-none sm:max-h-9"
          />
          <nav
            className="flex shrink-0 flex-nowrap items-center gap-1.5 sm:gap-5"
            aria-label="Навигация и запуск бота"
          >
            <a
              className="hidden text-sm font-medium text-primary transition-colors duration-200 hover:text-accent sm:inline-flex"
              href="#pricing"
            >
              Цены
            </a>
            <a
              className="header-bot-link flex flex-nowrap items-center gap-2 rounded-full p-2 text-sm font-medium text-primary transition-colors duration-200 hover:text-accent sm:rounded-none sm:p-0"
              href="https://t.me/dogovor_check_bot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть Telegram-бота"
            >
              <Image src="/tg_black.svg" alt="" className="header-bot-icon shrink-0" width={20} height={20} />
              <span className="hidden sm:inline">Telegram-бот</span>
            </a>
            <a
              className="header-bot-link flex flex-nowrap items-center gap-2 rounded-full p-2 text-sm font-medium text-primary transition-colors duration-200 hover:text-accent sm:rounded-none sm:p-0"
              href="https://max.ru/id450125033950_1_bot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть Max-бота"
            >
              <Image src="/max_black.svg" alt="" className="header-bot-icon shrink-0" width={20} height={20} />
              <span className="hidden sm:inline">Max-бот</span>
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
                className="inline-flex items-center border-b-2 border-foreground/10 italic hover:border-accent/50"
                style={{ transition: "border-color 180ms ease-out" }}
                title="Искусственный интеллект"
                aria-label="Искусственный интеллект"
              >
                ИИ
              </span>
              <span className="tooltip-pop pointer-events-none absolute left-1/2 top-full z-20 mt-3 whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-sm not-italic font-sans font-semibold tracking-normal text-background shadow-xl">
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
                  delay={i * 60}
                  className="card flex flex-col p-6 sm:p-8"
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
                delay={i * 70}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5">
                  <Image src={step.image} alt={step.name} width={96} height={96} />
                </div>
                <span className="step-chip mb-3">Шаг {step.step}</span>
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
            DOCUMENT IMPROVEMENT
        ═══════════════════════════════════════════ */}
        <section className="section-document bg-stone-100/60 py-16 sm:py-24">
          <RevealOnScroll className="mb-12 text-center sm:mb-16">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
              Улучшение документа
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
              ИИ доработает документ за вас — переформулирует рискованные
              пункты и подготовит обновлённый договор.
            </p>
          </RevealOnScroll>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {improvements.map((item, i) => (
              <RevealOnScroll
                key={item.name}
                delay={i * 60}
                className="card flex flex-col p-7 sm:p-8"
              >
                <item.icon className="mb-5 size-8 text-accent" aria-hidden />
                <h3 className="mb-2.5 font-serif text-lg font-semibold leading-tight tracking-tight">
                  {item.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </RevealOnScroll>
            ))}
          </div>
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
                  className="inline-flex items-center border-b border-muted/40 italic hover:border-accent/50"
                  style={{ transition: "border-color 180ms ease-out" }}
                  title="Паритет (от лат. paritas — равенство) — это равноправие, равноценность, равенство сторон или показателей в чем-либо."
                  aria-label="Паритет (от лат. paritas — равенство) — это равноправие, равноценность, равенство сторон или показателей в чем-либо."
                >
                  паритетный
                </span>
                <span className="tooltip-pop pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max max-w-[min(16rem,calc(100vw-2rem))] rounded-lg bg-foreground px-3 py-2 text-left text-sm not-italic font-sans font-medium leading-snug tracking-normal text-background shadow-xl">
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
                delay={i * 70}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5">
                  <Image src={step.image} alt={step.name} width={96} height={96} />
                </div>
                <span className="step-chip mb-3">Шаг {step.step}</span>
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
                delay={i * 60}
                className="card flex flex-col p-8"
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
            BOTTOM CTA (hidden — CTA перенесён в секцию «Пакеты кредитов»)
        ═══════════════════════════════════════════ */}
        {false && (
          <section className="section-document py-16 sm:py-24">
            <RevealOnScroll className="flex flex-col items-center text-center">
              <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Попробуйте бесплатно прямо сейчас
              </h2>
              <div className="mt-6 w-full max-w-md px-5 py-4 text-center sm:px-6">
                <p className="mt-2 text-sm text-muted">
                  <span className="font-medium text-accent">3 бесплатных кредита</span>
                  {' '}для проверки или генерации договоров в боте.
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
        )}

        {/* ═══════════════════════════════════════════
            TOKEN PACKAGES
        ═══════════════════════════════════════════ */}
        <section
          id="pricing"
          className="section-document scroll-mt-24 py-16 sm:py-24"
        >
          <RevealOnScroll className="mb-12 flex flex-col items-center text-center sm:mb-16">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
              Пакеты кредитов
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
              Чем больше пакет — тем выгоднее каждый кредит
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200/70">
              <Zap className="size-4" aria-hidden />
              3 бесплатных кредита при запуске бота — попробуйте без оплаты
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {packages.map((pkg, i) => {
              const pricePerCredit = (pkg.price / pkg.credits).toLocaleString("ru-RU", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
              const Icon = pkg.icon
              const basePerCredit = packages[0].price / packages[0].credits
              const currentPerCredit = pkg.price / pkg.credits
              const savings = Math.round((1 - currentPerCredit / basePerCredit) * 100)
              return (
                <RevealOnScroll
                  key={pkg.id}
                  delay={i * 60}
                  className="card flex flex-col p-7 sm:p-8"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${pkg.iconBg}`}
                    >
                      <Icon className={`size-5 ${pkg.iconColor}`} aria-hidden />
                    </div>
                    <h3 className="font-semibold tracking-tight">{pkg.name}</h3>
                    {savings > 0 && (
                      <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200/70">
                        −{savings}%
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <span className="font-serif text-5xl font-normal italic tracking-tight">
                      {pkg.credits}
                    </span>
                    <span className="ml-2 text-base text-muted">кредитов</span>
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-5">
                    <span className="font-serif text-2xl font-semibold tracking-tight">
                      {pkg.price.toLocaleString("ru-RU")} ₽
                    </span>
                    <span className="text-xs tabular-nums text-muted font-medium tracking-tight">
                      {pricePerCredit} ₽ / кредит
                    </span>
                  </div>
                </RevealOnScroll>
              )
            })}
          </div>
        </section>

      </main>
    </div>
  )
}
