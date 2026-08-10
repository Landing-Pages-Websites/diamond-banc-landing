"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { FAQ } from "@/lib/content";

export function Faq(): React.ReactElement {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">Before you send anything in</p>
          <h2 className="mt-3 font-display text-[2.25rem] leading-[1.1] text-[var(--color-ink)] md:text-5xl">
            Questions, answered.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div
                  className={`rounded-2xl border transition-colors ${
                    isOpen
                      ? "border-[var(--color-teal-900)] bg-white shadow-card"
                      : "border-[var(--color-border)] bg-[var(--color-cream)] hover:border-[var(--color-teal-400)]"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 rounded-2xl p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-400)] md:p-6"
                    >
                      <span className="font-display text-lg leading-snug text-[var(--color-ink)] md:text-xl">
                        {item.q}
                      </span>
                      <Icon
                        name="plus"
                        className={`mt-1 h-5 w-5 shrink-0 text-[var(--color-teal-900)] transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        strokeWidth={2.2}
                      />
                    </button>
                  </h3>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 text-[15px] leading-relaxed text-[var(--color-muted)] md:px-6">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <DualCTA align="center" />
        </Reveal>
      </div>
    </section>
  );
}
