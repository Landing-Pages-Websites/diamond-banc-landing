// Typed route configuration for Diamond Banc localized market landing pages.
// One source of truth for the 15 paid-traffic routes: slug, display name, and
// the exact task-specified phone number. Every localized route renders ONLY its
// own number in raw source, visible text, aria labels, and tel hrefs. CTM may
// swap at runtime; these are the source-of-record values. The nationwide root
// route keeps Columbia's 573-875-2265 and is defined outside this matrix.

export interface Market {
  /** URL slug, kebab-case. */
  slug: string;
  /** City name used in the localized H1 and office copy. */
  city: string;
  /** Two-letter state abbreviation. */
  state: string;
  /** City + state label, e.g. "Tampa, FL". */
  display: string;
  /** Human-readable phone, formatted exactly as supplied for the route. */
  phone: string;
  /** tel: href with the E.164 number. */
  phoneHref: string;
}

// Route matrix, exact values from the build task. Order is the paid-traffic
// priority order and is used verbatim for static generation.
export const MARKETS: readonly Market[] = [
  { slug: "tampa", city: "Tampa", state: "FL", display: "Tampa, FL", phone: "813-609-4331", phoneHref: "tel:+18136094331" },
  { slug: "orlando", city: "Orlando", state: "FL", display: "Orlando, FL", phone: "407-232-7688", phoneHref: "tel:+14072327688" },
  { slug: "coral-gables", city: "Coral Gables", state: "FL", display: "Coral Gables, FL", phone: "(786) 605-9593", phoneHref: "tel:+17866059593" },
  { slug: "aventura", city: "Aventura", state: "FL", display: "Aventura, FL", phone: "954-323-8475", phoneHref: "tel:+19543238475" },
  { slug: "boca-raton", city: "Boca Raton", state: "FL", display: "Boca Raton, FL", phone: "561-430-5035", phoneHref: "tel:+15614305035" },
  { slug: "west-palm-beach", city: "West Palm Beach", state: "FL", display: "West Palm Beach, FL", phone: "561-899-7575", phoneHref: "tel:+15618997575" },
  { slug: "sarasota", city: "Sarasota", state: "FL", display: "Sarasota, FL", phone: "941-877-5472", phoneHref: "tel:+19418775472" },
  { slug: "nashville", city: "Nashville", state: "TN", display: "Nashville, TN", phone: "615-695-7675", phoneHref: "tel:+16156957675" },
  { slug: "atlanta", city: "Atlanta", state: "GA", display: "Atlanta, GA", phone: "404-407-5046", phoneHref: "tel:+14044075046" },
  { slug: "roswell", city: "Roswell", state: "GA", display: "Roswell, GA", phone: "678-403-6344", phoneHref: "tel:+16784036344" },
  { slug: "scottsdale", city: "Scottsdale", state: "AZ", display: "Scottsdale, AZ", phone: "(602) 878-6698", phoneHref: "tel:+16028786698" },
  { slug: "beverly-hills", city: "Beverly Hills", state: "CA", display: "Beverly Hills, CA", phone: "310-299-9557", phoneHref: "tel:+13102999557" },
  { slug: "st-louis", city: "St. Louis", state: "MO", display: "St. Louis, MO", phone: "314-876-6659", phoneHref: "tel:+13148766659" },
  { slug: "columbia", city: "Columbia", state: "MO", display: "Columbia, MO", phone: "573-875-2265", phoneHref: "tel:+15738752265" },
  { slug: "kansas-city", city: "Kansas City", state: "MO", display: "Kansas City, MO", phone: "816-597-5773", phoneHref: "tel:+18165975773" },
] as const;

export function getMarket(slug: string): Market | undefined {
  return MARKETS.find((m) => m.slug === slug);
}
