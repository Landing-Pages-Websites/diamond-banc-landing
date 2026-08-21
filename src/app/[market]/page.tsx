import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketLandingPage } from "@/components/MarketLandingPage";
import { getMarket, MARKETS } from "@/lib/markets";

// Only the 15 known market slugs are generated; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams(): Array<{ market: string }> {
  return MARKETS.map((m) => ({ market: m.slug }));
}

interface MarketPageProps {
  params: Promise<{ market: string }>;
}

export async function generateMetadata({ params }: MarketPageProps): Promise<Metadata> {
  const { market } = await params;
  const data = getMarket(market);
  if (!data) return {};

  const title = `Diamond Banc ${data.display} | Sell or Borrow Using Your Jewelry`;
  const description = `Get a free, no-obligation instant quote on your jewelry, diamonds, gold or luxury watch in ${data.display}. Visit our local office or ship it in, with free insured overnight shipping both ways.`;

  return {
    title,
    description,
    alternates: { canonical: `/${data.slug}` },
    openGraph: {
      title: `Diamond Banc ${data.display} | Sell or Borrow Using Your Jewelry`,
      description,
      images: ["/images/hero-jewelry.jpg"],
      type: "website",
    },
    robots: { index: false, follow: false },
  };
}

export default async function MarketPage({ params }: MarketPageProps): Promise<React.ReactElement> {
  const { market } = await params;
  const data = getMarket(market);
  if (!data) notFound();
  return <MarketLandingPage market={data} />;
}
