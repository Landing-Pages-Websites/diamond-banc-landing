"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BRAND, QUOTE_ANCHOR } from "@/lib/content";
import { useMarket } from "@/components/MarketProvider";
import { Icon } from "@/components/icons";

export function Header(): React.ReactElement {
  const { phone, phoneHref } = useMarket();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-[0_1px_16px_-8px_rgba(34,36,40,0.35)]"
          : "bg-white/90 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-2.5 md:px-8 md:py-3">
        <a
          href={QUOTE_ANCHOR}
          className="flex min-w-0 max-w-[190px] items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-400)] md:max-w-none"
          aria-label={`${BRAND.name} home`}
        >
          <Image
            src="/images/logo-dark.png"
            alt={BRAND.name}
            width={1280}
            height={200}
            priority
            className="h-12 w-auto max-w-full object-contain object-left md:h-14"
          />
        </a>

        <a
          href={phoneHref}
          className="inline-flex shrink-0 items-center gap-2 rounded-full border-[1.5px] border-[var(--color-teal-900)] px-3 py-2 text-sm font-semibold text-[var(--color-teal-900)] transition-colors hover:bg-[var(--color-teal-100)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-400)] md:px-5 md:py-2.5"
          aria-label={`Call ${BRAND.name} at ${phone}`}
        >
          <Icon name="phone" className="h-4 w-4" strokeWidth={0} fill="currentColor" />
          <span>{phone}</span>
        </a>
      </div>
    </header>
  );
}
