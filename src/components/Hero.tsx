"use client";

import Image from "next/image";
import AppraisalEmbed from "@/components/AppraisalEmbed";
import { useMarket } from "@/components/MarketProvider";
import { Icon } from "@/components/icons";
import { HERO, BRAND } from "@/lib/content";

export function Hero(): React.ReactElement {
  const { phone, phoneHref, city, isMarket } = useMarket();
  return (
    <section
      id="get-quote"
      className="relative isolate overflow-hidden bg-[var(--color-ink)] pt-24 pb-14 md:pt-28 md:pb-24"
    >
      {/* Decorative background: jewelry still-life + single left-to-right scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-jewelry.jpg"
          alt="A Diamond Banc diamond riviera necklace beside an emerald-cut green gemstone and diamond ring"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/95 via-[var(--color-ink)]/70 to-[var(--color-ink)]/25" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-5 md:px-8 lg:grid lg:grid-cols-12 lg:gap-x-10 lg:gap-y-7">
        {/* Copy */}
        <div className="order-2 lg:order-none lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:self-end">
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[var(--color-teal-400)]">
            <span className="h-px w-6 bg-[var(--color-gold)]" />
            {BRAND.tagline}
          </p>
          {isMarket ? (
            <h1 className="mt-4 font-display text-[2.45rem] font-semibold leading-[1.05] tracking-[-0.01em] text-white sm:text-5xl lg:text-[4.1rem]">
              <span className="block text-2xl text-[var(--color-gold-soft)] md:text-3xl">
                Diamond Banc {city}
              </span>
              <span className="mt-1 block text-[2.45rem] leading-[1.05] sm:text-5xl lg:text-[4.1rem]">
                {HERO.h1}
              </span>
            </h1>
          ) : (
            <h1 className="mt-4 font-display text-[2.45rem] font-semibold leading-[1.05] tracking-[-0.01em] text-white sm:text-5xl lg:text-[4.1rem]">
              {HERO.h1}
            </h1>
          )}
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            {HERO.subhead}
          </p>
        </div>

        {/* Form , mounts the customer's embedded widget exactly once.
            Rendered first on mobile so the embed card clears the hero-form
            floor (top <= 480px); repositioned to the right column on lg. */}
        <div className="order-1 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-center">
          <AppraisalEmbed />
        </div>

        {/* Trust row: chips + phone control */}
        <div className="order-3 lg:order-none lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:self-start">
          <ul className="flex flex-wrap gap-2">
            {HERO.chips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm"
              >
                <Icon
                  name="check"
                  className="h-3.5 w-3.5 text-[var(--color-teal-400)]"
                  strokeWidth={2.5}
                />
                {chip}
              </li>
            ))}
          </ul>

          <a
            href={phoneHref}
            className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/[0.06] px-5 py-3 backdrop-blur-sm transition-colors hover:border-[var(--color-teal-400)] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-400)]"
            aria-label={`Call ${BRAND.name} at ${phone}`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-teal-900)] text-white">
              <Icon name="phone" className="h-4 w-4" strokeWidth={0} fill="currentColor" />
            </span>
            <span className="text-left leading-tight">
              <span className="block text-xs text-white/60">Prefer to talk? Call us</span>
              <span className="block font-semibold text-white">{phone}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
