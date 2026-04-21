"use client"

import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

type FAQ = {
  question: string
  answer: string
}

export default function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="py-5">
      <dt>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex w-full cursor-pointer items-start justify-between gap-4 text-left active:scale-[0.998]"
          style={{ transition: "transform 140ms cubic-bezier(0.23, 1, 0.32, 1)" }}
          aria-expanded={isOpen}
        >
          <span
            className="text-base font-semibold leading-snug text-foreground group-hover:text-accent"
            style={{ transition: "color 180ms ease-out" }}
          >
            {faq.question}
          </span>
          <span
            className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ring-1 ring-border group-hover:ring-accent/30"
            style={{ transition: "box-shadow 180ms ease-out, background-color 180ms ease-out" }}
          >
            <ChevronDownIcon
              className="size-3.5 text-muted"
              style={{
                transition: "transform 220ms cubic-bezier(0.23, 1, 0.32, 1)",
                transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)",
              }}
              aria-hidden="true"
            />
          </span>
        </button>
      </dt>
      <dd
        className="grid"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 280ms cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        <div className="overflow-hidden">
          <p
            className="pt-3 pr-10 text-sm sm:text-base leading-relaxed text-muted"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: "opacity 200ms ease-out",
              transitionDelay: isOpen ? "80ms" : "0ms",
            }}
          >
            {faq.answer}
          </p>
        </div>
      </dd>
    </div>
  )
}
