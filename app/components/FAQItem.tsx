"use client"

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type FAQ = {
    question: string;
    answer: string;
}

export default function FAQItem({ faq }: { faq: FAQ }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="pt-6">
            <dt>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full items-start justify-between text-left text-foreground"
                >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                            className={classNames(isOpen ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform transition duration-200 ease-in-out text-muted')}
                            aria-hidden="true"
                        />
                    </span>
                </button>
            </dt>
            {isOpen && (
                <dd className="mt-2 pr-12">
                    <p className="text-base leading-tight font-semibold tracking-tight text-muted">{faq.answer}</p>
                </dd>
            )}
        </div>
    )
}
