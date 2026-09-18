"use client";

import { createContext, useContext } from "react";
import { PHONE, PHONE_HREF } from "@/lib/content";
import type { Market } from "@/lib/markets";

// Route-aware phone + locale, read by the shared header/hero/CTA surfaces.
// The default value is the nationwide root config, so components rendered
// without a provider (the root page) produce byte-identical output.
export interface MarketContextValue {
  phone: string;
  phoneHref: string;
  /** City name on a localized route, null on the nationwide root. */
  city: string | null;
  /** City + state label on a localized route, null on the root. */
  display: string | null;
  /** Route-specific hero value-prop override, null when the route uses `HERO.h1`. */
  heroValueProp: string | null;
  /** Route-specific hero supporting-paragraph override, null when the route uses `HERO.subhead`. */
  heroSubhead: string | null;
  /** True only on a localized market route. */
  isMarket: boolean;
}

const NATIONAL_CONTEXT: MarketContextValue = {
  phone: PHONE,
  phoneHref: PHONE_HREF,
  city: null,
  display: null,
  heroValueProp: null,
  heroSubhead: null,
  isMarket: false,
};

const MarketContext = createContext<MarketContextValue>(NATIONAL_CONTEXT);

export function useMarket(): MarketContextValue {
  return useContext(MarketContext);
}

interface MarketProviderProps {
  market: Market;
  children: React.ReactNode;
}

export function MarketProvider({ market, children }: MarketProviderProps): React.ReactElement {
  const value: MarketContextValue = {
    phone: market.phone,
    phoneHref: market.phoneHref,
    city: market.city,
    display: market.display,
    heroValueProp: market.heroValueProp ?? null,
    heroSubhead: market.heroSubhead ?? null,
    isMarket: true,
  };
  return <MarketContext.Provider value={value}>{children}</MarketContext.Provider>;
}
