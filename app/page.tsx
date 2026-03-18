import Image from "next/image";
import Link from "next/link";
import {
  MessageCircleQuestion,
  ScanSearch,
  Timer,
  BadgePercent,
  FileX,
  ScanEye,
  ListChecks,
  History,
  BookText,
  FileCheck,
  AlertTriangle
} from 'lucide-react'
import FAQItem from "./components/FAQItem"

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

const checks = [
  {
    name: 'Штрафы и неустойки',
    description: 'Показываем финансовую ответственность и возможные санкции.',
    icon: BadgePercent,
  },
  {
    name: 'Одностороннее расторжение',
    description: 'Находим условия, при которых договор могут расторгнуть.',
    icon: FileX,
  },
  {
    name: 'Скрытые ограничения',
    description: 'Выявляем формулировки, которые могут ограничивать ваши права.',
    icon: ScanEye,
  },
  {
    name: 'Сроки и обязательства',
    description: 'Подсвечиваем ключевые условия и важные сроки договора.',
    icon: ListChecks,
  },
]

const steps = [
  {
    step: 1,
    name: 'Загрузка',
    description: 'Отправьте документ в Telegram-бот в формате Word, PDF, фото или просто текстом.',
    image: '/step_1.svg',
  },
  {
    step: 2,
    name: 'Анализ',
    description: 'ИИ моментально читает документ, находит скрытые условия и спорные формулировки.',
    image: '/step_2.svg',
  },
  {
    step: 3,
    name: 'Отчет',
    description: 'Получите выжимку главных рисков с понятными объяснениями и рекомендациями.',
    image: '/step_3.svg',
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
    question: "Мои документы в безопасности?",
    answer: "Мы не используем ваши документы для обучения ИИ. После анализа данные надежно хранятся в вашей истории, доступной только вам.",
  },
  {
    question: "Какие форматы поддерживаются?",
    answer: "Сейчас бот принимает текст сообщением, а также файлы в форматах DOCX (Word), TXT, PDF, PNG и JPEG.",
  },
  {
    question: "Это заменяет живого юриста?",
    answer: "Сервис создан как «первая линия обороны». Он быстро найдет очевидные ловушки и риски. Для сложных нестандартных сделок мы всегда рекомендуем консультацию юриста.",
  },
  {
    question: "Как быстро работает анализ?",
    answer: "В среднем проверка занимает от 30 секунд до полутора минут, в зависимости от объема документа.",
  },
]

export default function Home() {
  const year = new Date().getFullYear()
  return (
    <div className="min-h-screen relative overflow-hidden">
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
        <section className="section-document pt-6 sm:pt-16 pb-6 flex flex-col items-center sm:pb-16 z-10">
          <h1 className="font-serif text-balance text-3xl font-semibold text-center tracking-tight sm:text-5xl lg:text-6xl leading-[1.15]">
            Покажем риски в договоре <br className="hidden sm:block" /> <span className="text-gradient">до того</span>, как они станут проблемой.
          </h1>
          <p className="mt-6 sm:mt-8 font-sans font-semibold text-pretty text-center text-lg sm:text-2xl lg:text-2xl text-muted max-w-3xl leading-tight tracking-tight">
            90% договоров содержат скрытые риски — найдём их за 1 минуту<br className="hidden sm:block" />и объясним простым языком.
          </p>

          <div className="mt-12 flex flex-wrap items-start items-top gap-4 justify-center">
            <a
              className="btn btn-primary text-accent-foreground text-lg px-8 py-4"
              href="https://t.me/dogovor_check_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/tg.svg" alt="Telegram" width={24} height={24} />
              Проверить договор в Telegram
            </a>
            <a
              className="btn btn-secondary text-lg px-8 py-4 disabled opacity-60 cursor-not-allowed"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled="true"
            >
              <Image src="/max.svg" alt="Max" width={24} height={24} className="opacity-70" />
              Скоро в Max
            </a>


          </div>

          <div className="pt-5">
            <div className="text-center text-muted text-sm">
              бесплатно • без регистрации • от 1 минуты
            </div>
            <div className="text-center mt-2">
              <BookText className="size-4 inline-block mr-1" />
              <a href="https://storage.yandexcloud.net/dogovorcheck.ru/dogovorcheck_example.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-muted border-b border-muted/50 transition hover:text-foreground"> Пример анализа договора аренды</a>
            </div>
          </div>

        </section>

        {/* Stats block */}
        <section className="section-document pt-6 sm:pt-12 pb-6 sm:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-4 sm:gap-6">
            <div className="text-center">
              <p className="text-5xl sm:text-7xl font-serif text-balance font-regular tracking-tight">100+</p>
              <p className="text-muted font-semibold text-base sm:text-base mt-1">проверено договоров</p>
            </div>
            <div className="text-center">
              <p className="text-5xl sm:text-7xl font-regular text-balance font-serif tracking-tight">200+</p>
              <p className="text-muted font-semibold text-base sm:text-base mt-1">сэкономлено часов</p>
            </div>
            <div className="text-center">
              <p className="text-5xl sm:text-7xl font-regular text-balance font-serif tracking-tight">600+</p>
              <p className="text-muted font-semibold text-base sm:text-base mt-1">найдено опасных пунктов</p>
            </div>
          </div>
        </section>

        {/* Sticky Layout: What AI checks */}
        <section className="section-document relative pt-6 sm:pt-16 pb-6 sm:pb-16">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-2/6 lg:sticky lg:top-36 lg:pb-4 z-20">

              <h2 className="font-serif text-balance text-2xl md:text-5xl font-semibold tracking-tight">
                Что ИИ проверяет в договоре
              </h2>
              <p className="mt-4 mb-8 text-base leading-tight text-muted font-semibold">
                Наш алгоритм детально анализирует документы, находя скрытые ловушки и уязвимости. Мы защищаем ваши интересы и экономим время на вычитку.
              </p>
              <div className="pt-4 hidden lg:flex lg:w-full lg:justify-center">
                <Image src="/robot_1.svg" alt="AI" width={160} height={90} className="" />
              </div>

            </div>
            <div className="lg:w-4/6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2">
              {checks.map((check) => (
                <div key={check.name} className="p-4 sm:p-8 flex flex-col bg-card/80 rounded-2xl items-start text-left shadow-lg">
                  <div className="mb-6">
                    <check.icon className="size-7 text-accent-2" aria-hidden="true" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold mb-3 tracking-tight leading-tight">{check.name}</h3>
                  <p className="text-muted text-base font-semibold leading-tight">{check.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works - Timeline */}
        <section className="section-document pt-6 sm:pt-16 pb-6 sm:pb-16">
          <div className="text-center mb-20 relative z-10">
            <h2 className="font-serif text-balance text-3xl font-semibold tracking-tight sm:text-5xl pb-2">
              Как это работает
            </h2>
            <p className="mt-5 text-base font-semibold leading-tight tracking-tight text-muted max-w-2xl mx-auto">
              Всего три простых шага для вашей безопасности.
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-0">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              {steps.map((step) => (
                <div key={step.name} className="relative flex flex-col items-center text-center z-10 group">
                  <div className="flex flex-col items-center">

                    <div className="p-3 mb-5 relative">
                      <Image src={step.image} alt={step.name} width={160} height={160} className="opacity-95" />
                    </div>
                    <span className="text-xs font-semibold text-muted tracking-widest uppercase">
                      Шаг {step.step}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 tracking-tight text-foreground/95">{step.name}</h3>
                    <p className="text-muted text-base leading-tight tracking-tight font-semibold max-w-[280px] text-center">{step.description}</p>
                    {step.step === 3 && (
                      <a href="https://storage.yandexcloud.net/dogovorcheck.ru/dogovorcheck_example.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 btn btn-secondary text-base">Пример отчета</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-document pt-6 sm:pt-16 pb-6 sm:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <div className="flex flex-col gap-4">
                  <feature.icon aria-hidden="true" className="size-7 text-white" />
                  <h3 className="text-base font-semibold leading-tight">{feature.name}</h3>
                </div>
                <p className="mt-2 text-base font-semibold leading-tight text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who is it for */}
        <section className="section-document  pt-6 sm:pt-16 pb-6 sm:pb-16">
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

          <div className="flex justify-center pt-12">
            <a
              className="btn btn-primary text-accent-foreground text-lg px-8 py-4"
              href="https://t.me/dogovor_check_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/tg.svg" alt="Telegram" width={24} height={24} />
              Проверить договор
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 relative z-20 pt-2 sm:pt-12 pb-2 sm:pb-12 bg-background/50 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:py-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
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
          </div>
        </div>
      </footer>
    </div>
  );
}
