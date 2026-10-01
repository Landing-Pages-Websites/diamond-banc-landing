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
import { AtlantaLocalOffice } from "@/components/AtlantaLocalOffice";
import { AventuraSpecialist } from "@/components/AventuraSpecialist";
import { TampaLocalOffice } from "@/components/TampaLocalOffice";
import { ShippingSecurity } from "@/components/ShippingSecurity";
import { Expertise } from "@/components/Expertise";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingCTA } from "@/components/FloatingCTA";
import { EXPERTISE_TEAM_OVERRIDES, LOCAL_OFFICE_OVERRIDES, TRACKING } from "@/lib/content";
import { ATLANTA_EXPERTISE, ATLANTA_SLUG } from "@/lib/atlanta-content";
import { AVENTURA_OFFICE, AVENTURA_ROSTER, AVENTURA_SLUG } from "@/lib/aventura-office";
import { TAMPA_SLUG } from "@/lib/tampa-content";
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

  const isAtlanta = market.slug === ATLANTA_SLUG;
  const isTampa = market.slug === TAMPA_SLUG;
  const isAventura = market.slug === AVENTURA_SLUG;
  const localOverride = isAventura ? AVENTURA_OFFICE : LOCAL_OFFICE_OVERRIDES[market.slug];
  const localOffice = (
    <LocalOffice
      override={localOverride}
      aside={isAventura ? <AventuraSpecialist profile={AVENTURA_OFFICE.profile} /> : undefined}
    />
  );
  const routeTeam = isAventura ? AVENTURA_ROSTER : EXPERTISE_TEAM_OVERRIDES[market.slug];
  const earlyLocalOffice = isTampa
    ? <TampaLocalOffice />
    : isAtlanta
      ? <AtlantaLocalOffice />
      : localOverride && localOffice;

  return (
    <MarketProvider market={market}>
      <main className="overflow-x-hidden bg-white">
        <QueryParamPersistence />
        <Header />
        <Hero />
        <ProofBar />
        <TwoOptions />
        {earlyLocalOffice}
        <HowItWorks />
        <WhatWeBuy />
        {!earlyLocalOffice && localOffice}
        <ShippingSecurity />
        <Expertise teamOverride={isAtlanta ? ATLANTA_EXPERTISE : routeTeam} />
        <Reviews />
        <Faq />
        <FinalCta />
        <SiteFooter />
        <FloatingCTA />
      </main>
    </MarketProvider>
  );
}
