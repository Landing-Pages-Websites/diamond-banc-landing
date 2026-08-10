"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { SHIPPING } from "@/lib/content";

export function ShippingSecurity(): React.ReactElement {
  return (
    <section id="shipping-security" className="bg-[var(--color-cream)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card-lg ring-1 ring-[var(--color-border)]">
              <Image
                src="/images/shipping-secure.jpg"
                alt="A jewelry gift box, protective pouch, and envelope prepared for insured shipping"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow">{SHIPPING.eyebrow}</p>
            <h2 className="mt-3 font-display text-[2.25rem] leading-[1.1] text-[var(--color-ink)] md:text-[2.75rem]">
              {SHIPPING.headline}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-muted)] md:text-base">
              {SHIPPING.body}
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {SHIPPING.points.map((point) => (
                <li key={point.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-teal-100)] text-[var(--color-teal-900)]">
                    <Icon name={point.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-sm font-medium leading-snug text-[var(--color-ink)]">
                    {point.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <DualCTA align="center" />
        </Reveal>
      </div>
    </section>
  );
}
