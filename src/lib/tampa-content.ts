// Tampa-only local-office copy and staff roster. Portrait derivatives live in
// public/images/local-team/tampa; archival originals + crop inventory live in
// assets/originals/tampa (never served).

export const TAMPA_SLUG = "tampa";

export const TAMPA_OFFICE = {
  eyebrow: "Your local office",
  heading: "Meet your Tampa team",
  intro: "Meet the team serving Diamond Banc clients in Tampa.",
  visitLine:
    "Visit by appointment, or request a quote online. Prefer to mail your item? Free insured shipping is also available.",
} as const;

export interface TampaStaffMember {
  name: string;
  role: string;
  bio: string;
  alt: string;
  /** Basename in public/images/local-team/tampa, e.g. "jodi-hudson". */
  portrait: string;
}

export const TAMPA_STAFF: readonly TampaStaffMember[] = [
  {
    name: "Jodi Hudson",
    role: "Tampa Market Director",
    bio: "Jodi is a Graduate Gemologist with experience in luxury-jewelry leadership and appraisals. She leads Diamond Banc's Tampa team.",
    alt: "Jodi Hudson",
    portrait: "jodi-hudson",
  },
  {
    name: "Tori Rivera",
    role: "Tampa Buyer & Lender",
    bio: "Tori brings luxury-jewelry sales experience to her work as a Tampa buyer and lender, having progressed from a client-service role.",
    alt: "Tori Rivera",
    portrait: "tori-rivera",
  },
  {
    name: "Kaila Riefesel",
    role: "Tampa Client Benefit Agent",
    bio: "A GIA Graduate Gemologist, Kaila supports Tampa clients with experience in appraisals, gemstone identification and jewelry valuation.",
    alt: "Kaila Riefesel",
    portrait: "kaila-riefesel",
  },
];
