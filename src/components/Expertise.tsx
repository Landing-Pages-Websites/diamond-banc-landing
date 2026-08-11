"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { EXPERTISE } from "@/lib/content";

export function Expertise(): React.ReactElement {
  return (
    <section id="expertise" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">{EXPERTISE.eyebrow}</p>
            <h2 className="mt-3 font-display text-[2.25rem] leading-[1.1] text-[var(--color-ink)] md:text-[2.75rem]">
              {EXPERTISE.headline}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-muted)] md:text-base">
              {EXPERTISE.body}
            </p>
            <p className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-[var(--color-cream)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] ring-1 ring-[var(--color-border)]">
              <Icon name="gem" className="h-4 w-4 text-[var(--color-gold)]" />
              Rooted in Buchroeders Jewelers, established 1896.
            </p>
          </Reveal>

          <Reveal
            delay={100}
            className="lg:col-span-6 lg:flex lg:flex-col lg:gap-8"
          >
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-card-lg ring-1 ring-[var(--color-border)] lg:aspect-auto lg:min-h-[168px] lg:flex-1">
              <Image
                src={EXPERTISE.image}
                alt={EXPERTISE.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-cream)] p-7 md:p-8 lg:mt-0">
              <h3 className="font-display text-xl text-[var(--color-ink)]">
                Your GIA-certified team
              </h3>
              <div className="mt-5 hr-gold" />
              <ul className="mt-5 space-y-4">
                {EXPERTISE.team.map((member) => (
                  <li key={member.name} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-teal-900)] text-white">
                      <Icon name="award" className="h-5 w-5" />
                    </span>
                    <span className="leading-snug">
                      <span className="block font-semibold text-[var(--color-ink)]">
                        {member.name}
                      </span>
                      <span className="block text-sm text-[var(--color-muted)]">
                        {member.role}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <DualCTA align="center" />
        </Reveal>
      </div>
    </section>
  );
}
