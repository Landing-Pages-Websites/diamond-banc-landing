import { ROW_PORTRAIT_WIDTHS, type ExpertiseTeamOverride, type LocalTeamOverride } from "@/lib/content";

// Nashville-only copy for /nashville. Kept out of the shared content module so
// no other route can pick these overrides up by accident.

export const NASHVILLE_SLUG = "nashville";
const PORTRAIT_DIR = "/images/team/nashville";

// ─── Local office (#local-office), two stacked team profiles ───
export const NASHVILLE_LOCAL_OFFICE: LocalTeamOverride = {
  headline: "Meet your Nashville team",
  intro: "Meet the team serving Diamond Banc clients in Nashville.",
  compactLine:
    "Visit by appointment, or request a quote online. Prefer to mail your item? Free insured shipping is also available.",
  splitFromMd: true,
  profiles: [
    {
      name: "Lensey Hudson",
      role: "Nashville Market Director",
      bio: "A GIA Accredited Jewelry Professional, Lensey leads the Nashville office with experience in diamonds, luxury watches and designer jewelry.",
      imageAlt: "Lensey Hudson",
      imageBase: `${PORTRAIT_DIR}/lensey-hudson`,
      imageWidths: ROW_PORTRAIT_WIDTHS,
    },
    {
      name: "McConnell Jones",
      role: "Client Benefit Agent",
      bio: "McConnell supports Nashville clients with a background in high-end jewelry sales and multimedia management.",
      imageAlt: "McConnell Jones",
      imageBase: `${PORTRAIT_DIR}/mcconnell-jones`,
      imageWidths: ROW_PORTRAIT_WIDTHS,
    },
  ],
};

// ─── Expertise (#expertise) roster overrides ───
export const NASHVILLE_EXPERTISE: ExpertiseTeamOverride = {
  teamHeading: "Backed by the Diamond Banc team",
  teamIntro: "Our local offices are supported by Diamond Banc's broader team of leaders and specialists.",
  roles: { "Jordan Isaacs": "National Director of Funding" },
};
