import Image from "next/image";
import Link from "next/link";
import {
  MessageCircleQuestion,
  ScanSearch,
  Timer,
  BadgePercent,
  Scale,
  ListChecks,
  History,
  BookText,
  Bot,
  SlidersHorizontal,
  SquarePen,
} from 'lucide-react'
import FAQItem from "./components/FAQItem"
import CountUp from "./components/CountUp"

const features = [
  {
    name: 'Распознавание документов',
    description:
      'Загружайте PDF, DOCX или изображения — сервис автоматически распознает текст.',
    icon: ScanSearch,
  },
  {
    name: 'Экономия времени',
    description:
      'ИИ анализирует договор за минуты и показывает ключевые риски.',
    icon: Timer,
  },
  {
    name: 'История документов',
    description:
      'Все загруженные договоры и результаты анализа сохраняются — вы можете вернуться к ним в любое время.',
    icon: History,
  },
  {
    name: 'Вопросы по договору',
    description:
      'Задавайте вопросы по документу и получайте ответы на основе его содержания.',
    icon: MessageCircleQuestion,
  }
]

const features_create = [
  {
    name: 'Российская ИИ-модель',
    description:
      'ИИ генерирует договор на основе вашего описания и создает договор. Используется российская ИИ-модель, которая лучше всего работает в России.',
    icon: Bot,
  },
  {
    name: 'Паритетный договор',
    description:
      'ИИ генерирует договор который защищает права и интересы обоих сторон.',
    icon: Scale,
  },
  {
    name: 'Договор под свою задачу',
    description:
      'ИИ генерирует договор под вашу задачу, где вы можете изменить пункты договора под себя.',
    icon: SlidersHorizontal,
  },
  {
    name: 'Редактирование договора',
    description:
      'Генерируем договор в формате Word, который вы можете редактировать под себя.',
    icon: SquarePen,
  }
]

const checks = [
  {
    name: 'Соберет черновик',
    description: 'Если шаблона нет, сервис подготовит основу документа за вас.',
    icon: BookText,
  },
  {
    name: 'Найдет денежные риски',
    description: 'Покажет штрафы, неустойки, удержание оплаты и другие потери.',
    icon: BadgePercent,
  },
  {
    name: 'Покажет перекос условий',
    description: 'Подсветит пункты, где у другой стороны больше прав, чем у вас.',
    icon: Scale,
  },
  {
    name: 'Выделит важные пункты',
    description: 'Отметит сроки, обязанности и формулировки, которые нельзя пропустить.',
    icon: ListChecks,
  },
]


const steps = [
  {
    step: 1,
    name: 'Загрузка',
    description: 'Отправьте документ в бот в формате Word, PDF, фото или просто текстом.',
    image: '/step_1.svg',
  },
  {
    step: 2,
    name: 'Анализ',
    description: 'ИИ обрабатывает документ, находит скрытые условия и спорные формулировки.',
    image: '/step_2.svg',
  },
  {
    step: 3,
    name: 'Отчет',
    description: 'Получите выжимку главных рисков с понятными объяснениями и рекомендациями.',
    image: '/step_3.svg',
  },
]

const steps_create = [
  {
    step: 1,
    name: 'Описание',
    description: 'Вы отправляете описание договора, которое хотите создать, например: «Договор аренды квартиры».',
    image: '/step_create_1.svg',
  },
  {
    step: 2,
    name: 'Генерация',
    description: 'ИИ генерирует пункты документа по вашему описанию.',
    image: '/step_create_2.svg',
  },
  {
    step: 3,
    name: 'Создание документа',
    description: 'Создаем документ из пунктов, которые выбрал ИИ и отдаем вам документ.',
    image: '/step_create_3.svg',
  },
]


const audiences = [
  {
    name: 'Обычным людям',
    description: 'Проверка договоров аренды, найма, купли-продажи авто или квартиры.',
    image: '/person_1.svg',
  },
  {
    name: 'Фрилансерам',
    description: 'Анализ договоров на оказание услуг, чтобы избежать штрафов и неоплат.',
    image: '/person_2.svg',
  },
  {
    name: 'Бизнесу',
    description: 'Быстрая проверка договоров контрагентов до отправки юристу.',
    image: '/person_3.svg',
  },
]

const faqs = [
  {
    question: "Можно ли сгенерировать документ с нуля?",
    answer: "Да. Если у вас нет шаблона, просто опишите задачу своими словами. Сервис подготовит черновик документа в формате DOCX, который можно скачать и доработать под себя.",
  },
  {
    question: "Мои документы в безопасности?",
    answer: "Да. Мы не используем ваши документы для обучения ИИ. После генерации или анализа данные хранятся в вашей истории и доступны только вам.",
  },
  {
    question: "Какие форматы поддерживаются?",
    answer: "Можно отправить описание текстом или загрузить файл в форматах DOCX, TXT, PDF, PNG и JPEG. Если документ создается с нуля, результат можно скачать в формате DOCX.",
  },
  {
    question: "Это заменяет живого юриста?",
    answer: "Нет. Сервис помогает быстро подготовить черновик и заметить очевидные риски до подписания. Для сложных и нестандартных ситуаций лучше подключать юриста.",
  },
  {
    question: "Как быстро работает анализ?",
    answer: "Обычно генерация или проверка занимает от 30 секунд до полутора минут. Точное время зависит от объема документа и сложности задачи.",
  },
  {
    question: "Можно ли попробовать бесплатно?",
    answer: "Да. После запуска бота вы получите 24 кредита. Обычно этого хватает, чтобы создать первый документ или проверить 1-3 договора.",
  },
]

export default function Home() {
  const year = new Date().getFullYear()
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* <div
        className="relative z-30 w-full border-b border-amber-500/25 bg-amber-950/50 px-4 py-3 text-center text-sm text-amber-50/95 backdrop-blur-sm sm:text-base"
        role="status"
        aria-live="polite"
      >
        <Construction
          className="inline-block size-4 align-[-0.125em] mr-2 text-amber-400/90 sm:size-[1.125rem]"
          aria-hidden
        />
        Ведутся технические работы. Скоро работа сервиса будет восстановлена.
      </div> */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 relative z-20">
        <div className="flex pt-3 items-center gap-4">
          <Image src="/logo.svg" alt="ДоговорCheck" width={260} height={44} priority />
        </div>

      </header>

      {/* Decorative Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-accent/15 rounded-full blur-[120px] opacity-50 pointer-events-none -z-10" />
      <div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-accent/8 rounded-full blur-[100px] opacity-35 pointer-events-none -z-10" />

      {/* Линии по краям контента — на всю высоту */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-6xl pointer-events-none z-0">
        <div className="document-edge-line absolute left-0 top-0 bottom-0 w-px" />
        <div className="document-edge-line absolute right-0 top-0 bottom-0 w-px" />
      </div>

      <main className="mx-auto max-w-6xl px-6 relative z-10">
        <section className="section-document pt-16 sm:pt-16 pb-6 flex flex-col items-center sm:pb-16 z-10">
          <h1 className="font-serif text-balance text-3xl font-semibold text-center tracking-tight sm:text-5xl lg:text-6xl leading-[1.15]">
            <span className="group relative inline-flex">
              <span
                className="inline-flex items-center border-b-2 border-white/15 italic transition-all duration-200 hover:border-accent-2/60"
                title="Искусственный интеллект"
                aria-label="Искусственный интеллект"
              >
                ИИ
              </span>
              <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 translate-y-1 whitespace-nowrap bg-black/95 px-3 py-2 text-base not-italic font-sans font-semibold tracking-normal text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                Искусственный интеллект
              </span>
            </span>{" "}
            проверит договор <br className="hidden sm:block" /> или создаст новый
          </h1>
          <p className="mt-8 sm:mt-8 font-sans font-semibold text-pretty text-center text-base max-w-3xl leading-tight tracking-tight">
            Найдёт риски и спорные пункты <br className="hidden sm:block" /> или создаст договор по вашему описанию за 1 минуту
          </p>

          <div className="mt-12 flex flex-wrap items-start items-top gap-4 justify-center">
            <a
              className="btn btn-primary text-accent-foreground text-lg px-8 py-4"
              href="https://t.me/dogovor_check_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/tg.svg" alt="Telegram" width={24} height={24} />
              Запустить в Telegram
            </a>
            <a
              className="btn btn-secondary text-lg px-8 py-4"
              href="https://max.ru/id450125033950_1_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/max.svg" alt="Max" width={24} height={24} className="" />
              Запустить в Max
            </a>


          </div>

          <div className="pt-5">
            <div className="text-center font-medium text-muted text-sm text-green-300">
              Попробовать бесплатно • без регистрации • от 1 минуты
            </div>
            <div className="text-center mt-2">
              <BookText className="size-4 inline-block mr-1" />
              <a href="https://storage.yandexcloud.net/dogovorcheck.ru/dogovorcheck_example.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-muted border-b border-muted/50 transition hover:text-foreground"> Пример анализа договора аренды</a>
            </div>
          </div>

        </section>

        {/* Stats block */}
        <section className="section-document pt-6 sm:pt-12 pb-6 sm:pb-12 bg-accent/5">
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-4 sm:gap-6">
            <div className="text-center">
              <CountUp
                target={125}
                suffix="+"
                duration={2000}
                className="text-5xl sm:text-7xl font-serif text-balance font-normal italic tracking-tight"
              />
              <p className="text-muted font-medium text-base sm:text-base mt-1">проверено договоров</p>
            </div>
            <div className="text-center">
              <CountUp
                target={215}
                suffix="+"
                duration={2000}
                delay={100}
                className="text-5xl sm:text-7xl font-normal italic text-balance font-serif tracking-tight"
              />
              <p className="text-muted font-medium text-base sm:text-base mt-1">сэкономлено часов</p>
            </div>
            <div className="text-center">
              <CountUp
                target={685}
                suffix="+"
                duration={2000}
                delay={120}
                className="text-5xl sm:text-7xl font-normal italic text-balance font-serif tracking-tight"
              />
              <p className="text-muted font-medium text-base sm:text-base mt-1">найдено опасных пунктов</p>
            </div>
          </div>
        </section>

        {/* Sticky Layout: What AI checks */}
        <section className="section-document relative pt-6 sm:pt-16 pb-6 sm:pb-16">
          <div className="flex flex-col items-center text-center">
            {/* <h2 className="font-serif text-balance text-2xl md:text-5xl font-semibold tracking-tight mb-16">
              Что умеет?
            </h2> */}
            <div className="lg:w-4/6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2">
              {checks.map((check) => (
                <div key={check.name} className="p-4 sm:p-8 flex flex-col bg-card/80 rounded-2xl items-start text-left shadow-lg">
                  <div className="mb-6">
                    <check.icon className="size-10 text-accent-2" aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-serif sm:text-xl text-se font-semibold mb-3 tracking-tight leading-tight">{check.name}</h3>
                  <p className="text-muted text-base font-medium leading-tight">{check.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works - Timeline */}
        <section className="section-document pt-6 sm:pt-16 pb-6 sm:pb-16">
          <div className="text-center mb-20 relative z-10">
            <h2 className="font-serif text-balance text-3xl font-semibold tracking-tight sm:text-5xl pb-2">
              Как работает анализ?
            </h2>
            <p className="mt-5 text-base font-semibold leading-tight tracking-tight text-muted max-w-2xl mx-auto">
              Три простых шага для вашей безопасности.
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-0">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              {steps.map((step) => (
                <div key={step.name} className="relative flex flex-col items-center text-center z-10 group">
                  <div className="flex flex-col items-center">

                    <div className="p-3 mb-5 relative">
                      <Image src={step.image} alt={step.name} width={120} height={120} className="opacity-95" />
                    </div>
                    <span className="text-xs font-semibold text-muted tracking-widest uppercase">
                      Шаг {step.step}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 tracking-tight text-foreground/95">{step.name}</h3>
                    <p className="text-muted text-sm leading-tight tracking-tight font-semibold max-w-[280px] text-center">{step.description}</p>
                    {step.step === 3 && (
                      <a href="https://storage.yandexcloud.net/dogovorcheck.ru/dogovorcheck_example.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 btn btn-secondary text-base">Пример отчета</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Gen */}
        <section className="section-document px-6 sm:px-10 md:px-12 pt-6 sm:pt-16 pb-6 sm:pb-16 bg-accent/5">
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <div className="flex flex-col gap-4">
                  <feature.icon aria-hidden="true" className="size-7 text-white" />
                  <h3 className="text-base font-semibold leading-tight">{feature.name}</h3>
                </div>
                <p className="mt-2 text-sm font-semibold leading-tight text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-document pt-6 sm:pt-16 pb-6 sm:pb-16">
          <div className="text-center mb-20 relative z-10">
            <h2 className="font-serif text-balance text-3xl font-semibold tracking-tight sm:text-5xl pb-2">
              Как создается договор?
            </h2>
            <p className="mt-5 text-base font-semibold leading-tight tracking-tight text-muted max-w-2xl mx-auto">
              ИИ создаст {" "}
              <span className="group relative inline-flex">
                <span
                  className="inline-flex items-center border-b-2 border-white/15 italic transition-all duration-200 hover:border-accent-2/60"
                  title="Паритет (от лат. paritas — равенство) — это равноправие, равноценность, равенство сторон или показателей в чем-либо."
                  aria-label="Паритет (от лат. paritas — равенство) — это равноправие, равноценность, равенство сторон или показателей в чем-либо."
                >
                  паритетный
                </span>
                <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-max max-w-[min(16rem,calc(100vw-2rem))] -translate-x-1/2 translate-y-1 bg-black/95 px-3 py-2 text-left text-sm leading-snug not-italic font-sans font-semibold tracking-normal text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  Паритет (от лат. paritas — равенство) — это равноправие, равноценность, равенство сторон или показателей в чем-либо.
                </span>
              </span>{" "} договор по вашему описанию
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-0">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              {steps_create.map((step) => (
                <div key={step.name} className="relative flex flex-col items-center text-center z-10 group">
                  <div className="flex flex-col items-center">

                    <div className="p-3 mb-5 relative">
                      <Image src={step.image} alt={step.name} width={120} height={120} className="opacity-95" />
                    </div>
                    <span className="text-xs font-semibold text-muted tracking-widest uppercase">
                      Шаг {step.step}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 tracking-tight text-foreground/95">{step.name}</h3>
                    <p className="text-muted text-sm leading-tight tracking-tight font-semibold max-w-[280px] text-center">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Gen */}
        <section className="section-document px-6 sm:px-10 md:px-12 pt-6 sm:pt-16 pb-6 sm:pb-16 bg-accent/5">
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-4">
            {features_create.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <div className="flex flex-col gap-4">
                  <feature.icon aria-hidden="true" className="size-7 text-white" />
                  <h3 className="text-base font-semibold leading-tight">{feature.name}</h3>
                </div>
                <p className="mt-2 text-sm font-semibold leading-tight text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who is it for */}
        <section className="section-document  pt-6 sm:pt-16 pb-6 sm:pb-16 ">
          <div className="text-center mb-16">
            <h2 className="font-serif text-balance text-3xl font-semibold tracking-tight sm:text-5xl text-gradient pb-2">
              Для кого этот сервис
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {audiences.map((audience) => (
              <div key={audience.name} className="p-8 flex flex-col items-start  min-h-[240px]">
                <div>
                  <div className="pb-6">
                    <Image src={audience.image} alt={audience.name} width={220} height={220} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 tracking-tight">{audience.name}</h3>
                </div>
                <p className="text-muted text-base font-semibold leading-tight">{audience.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-document max-w-full mx-auto pt-6 sm:pt-16 pb-6 sm:pb-16">
          <div className="text-center">
            <h2 className="font-serif text-balance text-3xl font-semibold tracking-tight sm:text-5xl text-gradient pb-2">
              Частые вопросы
            </h2>
          </div>
          <div className="glass-panel mt-6 sm:mt-12 px-6 pb-6 shadow-lg">
            <dl className="space-y-6 divide-y divide-white/10">
              {faqs.map((faq, index) => (
                <div key={index} className={index === 0 ? "pt-0" : ""}>
                  <FAQItem faq={faq} />
                </div>
              ))}
            </dl>

          </div>
        </section>

        <section className="section-document pt-6 sm:pt-16 pb-6 sm:pb-16 bg-accent/5">
          <div className="flex justify-center flex-row items-center gap-4">
            <a
              className="btn btn-secondary text-accent-foreground text-lg px-8 py-4"
              href="https://t.me/dogovor_check_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/tg.svg" alt="Telegram" width={24} height={24} />
              Открыть в Telegram
            </a>
            <a
              className="btn btn-secondary text-accent-foreground text-lg px-8 py-4"
              href="https://max.ru/id450125033950_1_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/max.svg" alt="Max" width={24} height={24} className="" />
              Открыть в Max
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 relative z-20 pt-2 sm:pt-12 pb-2 sm:pb-12 bg-background/50 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:py-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted opacity-50">
            © {year} Договор<span className="italic">Чек</span>. Все права защищены.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted hover:text-foreground hover:underline transition"
            >
              Политика конфиденциальности
            </Link>
            <a
              className="text-sm text-muted hover:text-foreground hover:underline transition"
              href="https://t.me/dogovor_check_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram-бот
            </a>
            <a
              className="text-sm text-muted hover:text-foreground hover:underline transition"
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
  );
}
