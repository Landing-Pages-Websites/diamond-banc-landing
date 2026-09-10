import type { Metadata } from "next";
import { RolexLandingPage } from "@/components/rolex/RolexLandingPage";

// Route-only metadata. Title, description, and canonical are Rolex-specific;
// the noindex/nofollow robots directive is inherited from the root layout, and
// tracking/integrations initialize once through that shared layout.
export const metadata: Metadata = {
  title: "Rolex Quote | Sell or Borrow | Diamond Banc",
  description:
    "Get a free quote for your Rolex. Explore selling or borrowing against your watch with Diamond Banc, with local offices and free insured shipping.",
  alternates: { canonical: "https://quote.diamondbanc.com/rolex" },
  openGraph: {
    title: "Rolex Quote | Sell or Borrow | Diamond Banc",
    description:
      "Get a free quote for your Rolex. Explore selling or borrowing against your watch with Diamond Banc, with local offices and free insured shipping.",
    images: ["/images/rolex-hero-desktop.jpg"],
    type: "website",
  },
};

export default function RolexPage(): React.ReactElement {
  return <RolexLandingPage />;
}
