"use client";

import { useTracking } from "@/hooks/useTracking";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProofBar } from "@/components/ProofBar";
import { TwoOptions } from "@/components/TwoOptions";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatWeBuy } from "@/components/WhatWeBuy";
import { ShippingSecurity } from "@/components/ShippingSecurity";
import { Expertise } from "@/components/Expertise";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingCTA } from "@/components/FloatingCTA";
import { TRACKING } from "@/lib/content";

export default function Page(): React.ReactElement {
  useTracking({
    siteKey: TRACKING.siteKey,
    siteId: TRACKING.siteId,
    gtmId: TRACKING.gtmId,
    pixelId: TRACKING.pixelId,
  });

  return (
    <main className="overflow-x-hidden bg-white">
      <QueryParamPersistence />
      <Header />
      <Hero />
      <ProofBar />
      <TwoOptions />
      <HowItWorks />
      <WhatWeBuy />
      <ShippingSecurity />
      <Expertise />
      <Reviews />
      <Faq />
      <FinalCta />
      <SiteFooter />
      <FloatingCTA />
    </main>
  );
}
