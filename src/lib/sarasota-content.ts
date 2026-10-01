import type { ExpertiseTeamOverride } from "@/lib/content";

// Sarasota-only copy for /sarasota. Kept out of the shared content module so
// no other route can pick these overrides up by accident.

export const SARASOTA_SLUG = "sarasota";
const PORTRAIT_DIR = "/images/local-team/sarasota";
// Single source for the featured name: it also drives the #expertise exclusion,
// so a rename can never list the specialist in both sections.
const SPECIALIST_NAME = "Jordan Isaacs";

// ─── Local office (#local-office), Sarasota specialist profile ───
export const SARASOTA_LOCAL_OFFICE = {
  eyebrow: "Your local office",
  headline: "Meet your Sarasota specialist",
  intro: `Get to know ${SPECIALIST_NAME}, who serves Diamond Banc clients in Sarasota.`,
  options:
    "Visit by appointment, or request a quote online. Prefer to mail your item? Free insured shipping is also available.",
  specialist: {
    name: SPECIALIST_NAME,
    role: "Sarasota Market Director",
    bio: "Based at Diamond Banc's Sarasota headquarters, Jordan also serves as National Director of Funding, supporting the company's jewelry-backed lending operations.",
    portrait: {
      alt: SPECIALIST_NAME,
      fallback: `${PORTRAIT_DIR}/jordan-isaacs-440.jpg`,
      webpSrcSet: [96, 192, 220, 440]
        .map((size) => `${PORTRAIT_DIR}/jordan-isaacs-${size}.webp ${size}w`)
        .join(", "),
    },
  },
};

// ─── Expertise (#expertise) roster overrides ───
// Jordan is featured in #local-office, so the roster omits that entry on this route only.
export const SARASOTA_EXPERTISE: ExpertiseTeamOverride = {
  teamHeading: "Backed by the Diamond Banc team",
  teamIntro: "Our local offices are supported by Diamond Banc's broader team of leaders and specialists.",
  roles: {},
  excludeNames: [SPECIALIST_NAME],
};
