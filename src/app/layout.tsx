import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display-active",
  display: "swap",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-active",
  display: "swap",
});

// === MEGA TAG CONFIG === (real Diamond Banc values , Meta Pixel is ON)
const SITE_KEY = "ae75ylrmfqweqelx";
const SITE_ID = "75a85d64-2685-47a6-82e4-6010397e3ddb";
const GTM_ID = "GTM-WBLZ2J9";
const PIXEL_ID = "1344125387527189";

export const metadata: Metadata = {
  metadataBase: new URL("https://quote.diamondbanc.com"),
  title: "Sell or Borrow Using Your Jewelry | Free Quote | Diamond Banc",
  description:
    "Get a free, no-obligation quote on your jewelry, diamonds, gold or luxury watch. Free insured overnight shipping, 24-hour evaluation by GIA-certified gemologists, same-day funding.",
  openGraph: {
    title: "Sell or Borrow Using Your Jewelry | Diamond Banc",
    description:
      "Get a free, no-obligation quote in 24 hours. Sell your jewelry, diamonds, gold or luxury watch, or use it to get a loan. Free insured overnight shipping both ways.",
    images: ["/images/hero-jewelry.jpg"],
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: { index: false, follow: false }, // ads LP , not indexed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const megaTagConfig = `window.MEGA_TAG_CONFIG={siteKey:"${SITE_KEY}",siteId:"${SITE_ID}",gtmId:"${GTM_ID}",pixelId:"${PIXEL_ID}"};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`;

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <meta name="mega-site-id" content={SITE_ID} />
        <script
          id="mega-tag-config"
          dangerouslySetInnerHTML={{ __html: megaTagConfig }}
        />
        <script
          id="optimizer-script"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          data-site-id={SITE_ID}
          async
        />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        {children}
        {/* CallTrackingMetrics , universal Mega account (never remove) */}
        <Script src="https://572388.tctm.co/t.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
