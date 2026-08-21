"use client";

import { useTracking } from "@/hooks/useTracking";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import { MarketProvider } from "@/components/MarketProvider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProofBar } from "@/components/ProofBar";
import { TwoOptions } from "@/components/TwoOptions";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatWeBuy } from "@/components/WhatWeBuy";
import { LocalOffice } from "@/components/LocalOffice";
import { ShippingSecurity } from "@/components/ShippingSecurity";
import { Expertise } from "@/components/Expertise";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingCTA } from "@/components/FloatingCTA";
import { TRACKING } from "@/lib/content";
import type { Market } from "@/lib/markets";

// Shared template for every localized market route. Mirrors the nationwide
// root page section-for-section, swapping the all-market LocationMap for a
// focused LocalOffice and wrapping everything in the market context so the
// shared surfaces render the route's exact phone and city.
export function MarketLandingPage({ market }: { market: Market }): React.ReactElement {
  useTracking({
    siteKey: TRACKING.siteKey,
    siteId: TRACKING.siteId,
    gtmId: TRACKING.gtmId,
    pixelId: TRACKING.pixelId,
  });

  return (
    <MarketProvider market={market}>
      <main className="overflow-x-hidden bg-white">
        <QueryParamPersistence />
        <Header />
        <Hero />
        <ProofBar />
        <TwoOptions />
        <HowItWorks />
        <WhatWeBuy />
        <LocalOffice />
        <ShippingSecurity />
        <Expertise />
        <Reviews />
        <Faq />
        <FinalCta />
        <SiteFooter />
        <FloatingCTA />
      </main>
    </MarketProvider>
  );
}
