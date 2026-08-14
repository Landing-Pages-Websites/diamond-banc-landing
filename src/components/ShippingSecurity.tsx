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
                alt="A Diamond Banc team member packing a jewelry box into insured FedEx Express shipping envelopes"
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
          </Reveal>
        </div>

        {/* Reassurance row, given the same weight as the trust bar up top */}
        <Reveal delay={120}>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-14">
            {SHIPPING.points.map((point) => (
              <li
                key={point.label}
                className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-teal-100)] text-[var(--color-teal-900)]">
                  <Icon name={point.icon} className="h-6 w-6" />
                </span>
                <span className="text-sm font-semibold leading-snug text-[var(--color-ink)]">
                  {point.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <DualCTA align="center" />
        </Reveal>
      </div>
    </section>
  );
}
