"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { faqData } from "@/data/landing-page";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-24" id="faq">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
              {faqData.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {faqData.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {faqData.description}
            </p>
          </div>

          <div className="space-y-4">
            {faqData.items.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              const questionId = `faq-question-${index}`;

              return (
                <div
                  key={item.question}
                  className={cn(
                    "overflow-hidden rounded-[1.5rem] border bg-slate-50 transition-all duration-300",
                    isOpen
                      ? "border-teal-200 bg-teal-50/40"
                      : "border-slate-200 hover:border-slate-300",
                  )}
                >
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-semibold text-slate-900">
                      {item.question}
                    </span>

                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-lg font-medium text-slate-700 transition-transform duration-300",
                        isOpen && "rotate-45 text-teal-600",
                      )}
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-7 text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
