"use client";

import Image from "next/image";
import { BRAND, CURRENT_YEAR } from "@/lib/content";
import { useMarket } from "@/components/MarketProvider";
import { Icon } from "@/components/icons";

export function SiteFooter(): React.ReactElement {
  const { phone, phoneHref } = useMarket();
  return (
    <footer className="bg-[var(--color-ink)] text-white/65">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Image
            src="/images/logo-white.png"
            alt={BRAND.name}
            width={1280}
            height={200}
            className="h-12 w-auto object-contain md:h-14"
          />
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2.5 text-lg font-semibold text-white transition-colors hover:text-[var(--color-teal-400)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-400)] rounded-md"
            aria-label={`Call ${BRAND.name} at ${phone}`}
          >
            <Icon name="phone" className="h-5 w-5 text-[var(--color-teal-400)]" strokeWidth={0} fill="currentColor" />
            {phone}
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {CURRENT_YEAR} {BRAND.legal} All rights reserved. {BRAND.name} is a service of{" "}
            {BRAND.legal}
          </p>
          <p className="flex items-center gap-5">
            <a href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-white">
              Terms
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
