"use client";

import { useTracking } from "@/hooks/useTracking";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import { Header } from "@/components/Header";
import { ProofBar } from "@/components/ProofBar";
import { SiteFooter } from "@/components/SiteFooter";
import { RolexHero } from "@/components/rolex/RolexHero";
import { RolexTwoOptions } from "@/components/rolex/RolexTwoOptions";
import { RolexHowItWorks } from "@/components/rolex/RolexHowItWorks";
import { RolexModels } from "@/components/rolex/RolexModels";
import { RolexLocationMap } from "@/components/rolex/RolexLocationMap";
import { RolexShipping } from "@/components/rolex/RolexShipping";
import { RolexExpertise } from "@/components/rolex/RolexExpertise";
import { RolexReviews } from "@/components/rolex/RolexReviews";
import { RolexFaq } from "@/components/rolex/RolexFaq";
import { RolexFinalCta } from "@/components/rolex/RolexFinalCta";
import { RolexFloatingCTA } from "@/components/rolex/RolexFloatingCTA";
import { TRACKING } from "@/lib/content";

// Rolex quote variant. Mirrors the nationwide root page section-for-section,
// reusing the shared header, proof bar, and footer verbatim and swapping in the
// Rolex-specific hero, copy, model grid, and imagery. Rendered without a
// MarketProvider so the shared surfaces use the nationwide phone/config exactly
// as the root page does. Tracking is initialized once through the same setup.
export function RolexLandingPage(): React.ReactElement {
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
      <RolexHero />
      <ProofBar />
      <RolexTwoOptions />
      <RolexHowItWorks />
      <RolexModels />
      <RolexLocationMap />
      <RolexShipping />
      <RolexExpertise />
      <RolexReviews />
      <RolexFaq />
      <RolexFinalCta />
      <SiteFooter />
      <RolexFloatingCTA />
    </main>
  );
}
