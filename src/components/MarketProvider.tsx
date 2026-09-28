"use client";

import { createContext, useContext } from "react";
import { PHONE, PHONE_HREF } from "@/lib/content";
import type { Market, MarketOffice } from "@/lib/markets";

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
  /** Two-letter state on a localized route, null on the root. */
  state: string | null;
  /** Route-specific hero value-prop override, null when the route uses `HERO.h1`. */
  heroValueProp: string | null;
  /** Separator appended to the city line when `heroValueProp` is set; "" for none. */
  heroValueSeparator: string;
  /** Route-specific hero supporting-paragraph override, null when the route uses `HERO.subhead`. */
  heroSubhead: string | null;
  /** Route's local office address, null when the route has no listed office. */
  office: MarketOffice | null;
  /** True only on a localized market route. */
  isMarket: boolean;
}

const NATIONAL_CONTEXT: MarketContextValue = {
  phone: PHONE,
  phoneHref: PHONE_HREF,
  city: null,
  display: null,
  state: null,
  heroValueProp: null,
  heroValueSeparator: "",
  heroSubhead: null,
  office: null,
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
    state: market.state,
    heroValueProp: market.heroValueProp ?? null,
    heroValueSeparator: market.heroValueSeparator ?? "",
    heroSubhead: market.heroSubhead ?? null,
    office: market.office ?? null,
    isMarket: true,
  };
  return <MarketContext.Provider value={value}>{children}</MarketContext.Provider>;
}
