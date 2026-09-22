"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const TELEGRAM_BOT_URL = "https://t.me/dogovor_check_bot"
const MAX_BOT_URL = "https://max.ru/id450125033950_1_bot"

export default function MobileBotBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="mobile-bot-bar fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/95 p-3 backdrop-blur-md sm:hidden">
      <div className="flex gap-2">
        <a
          className="btn btn-primary min-w-0 flex-1 py-3.5"
          href={TELEGRAM_BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/tg_white.svg" alt="" width={20} height={20} />
          <span className="truncate">Проверить договор</span>
        </a>
        <a
          className="btn btn-secondary shrink-0 py-3.5"
          href={MAX_BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/max_accent.svg" alt="" className="icon-accent" width={20} height={20} />
          Max
        </a>
      </div>
    </div>
  )
}
