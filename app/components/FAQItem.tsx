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
          className="flex w-full items-start justify-between gap-4 text-left cursor-pointer group"
          aria-expanded={isOpen}
        >
          <span className="text-base font-semibold leading-snug text-foreground group-hover:text-accent transition-colors duration-200">
            {faq.question}
          </span>
          <span className="flex-shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-border group-hover:ring-accent/30 transition-all duration-200">
            <ChevronDownIcon
              className={`size-3.5 text-muted transition-transform duration-300 ease-in-out ${
                isOpen ? "-rotate-180" : "rotate-0"
              }`}
              aria-hidden="true"
            />
          </span>
        </button>
      </dt>
      <dd
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "300px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="pt-3 pr-10 text-sm sm:text-base leading-relaxed text-muted">
          {faq.answer}
        </p>
      </dd>
    </div>
  )
}
