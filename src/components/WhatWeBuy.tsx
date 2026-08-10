"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { WHAT_WE_BUY } from "@/lib/content";

export function WhatWeBuy(): React.ReactElement {
  return (
    <section id="what-we-buy" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{WHAT_WE_BUY.eyebrow}</p>
          <h2 className="mt-3 font-display text-[2.25rem] leading-[1.08] text-[var(--color-ink)] md:text-5xl">
            {WHAT_WE_BUY.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted)]">
            {WHAT_WE_BUY.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {WHAT_WE_BUY.categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 70}>
              <article className="group flex h-full gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-7 transition-colors duration-200 hover:border-[var(--color-teal-400)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--color-teal-900)] shadow-card ring-1 ring-[var(--color-border)]">
                  <Icon name={cat.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl leading-snug text-[var(--color-ink)]">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-muted)]">
                    {cat.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <DualCTA align="center" />
        </Reveal>
      </div>
    </section>
  );
}
