// Site-wide content + config for Diamond Banc , sell-or-borrow quote LP.
// Single source of truth for copy, phone, tracking IDs, and section data.
// All factual claims are mirrored in /content-sources.json.

export const PHONE = "573-875-2265";
export const PHONE_HREF = "tel:+15738752265";

// The single quote target. Every non-phone CTA scrolls to the hero embed.
export const QUOTE_ANCHOR = "#get-quote";

export const CTA = {
  primary: "Get my free quote",
  phone: PHONE,
};

export const BRAND = {
  name: "Diamond Banc",
  legal: "Menser & Co., Inc.",
  tagline: "Sell or borrow using your jewelry.",
};

export const CURRENT_YEAR = 2026;

// ─── Hero (#get-quote) ───
export const HERO = {
  h1: "Find out what your jewelry is worth.",
  subhead:
    "Get an instant quote for your jewelry, watch, or diamonds. Ship your items to us with free insured shipping, or book an appointment at a local office.",
  chips: [
    "Instant evaluation",
    "Ship or visit a local office",
    "Free insured shipping",
    "No obligation",
  ],
  formHeading: "Get your free, no-obligation quote",
  formSubhead:
    "Add a photo and get an instant estimate from our experts.",
};

// ─── Proof bar (#proof-bar) ───
export const PROOF_BAR = [
  { icon: "star", value: "10,000+", label: "reviews across Google, Trustpilot, and Yelp" },
  { icon: "award", value: "A+", label: "BBB rating" },
  { icon: "gem", value: "Experienced", label: "experts" },
  { icon: "pin", value: "15+ offices", label: "local, plus nationwide service" },
];

// ─── Office locations (#office-locations) ───
export const LOCATIONS = {
  eyebrow: "Where we are",
  headline: "15+ offices, coast to coast, plus nationwide mail-in service.",
  intro:
    "Prefer to hand your item across the desk? Book an appointment at any of our local offices. Anywhere else in the country, ship it to us with a free insured label.",
  // Active office markets, grouped by state for accessible, non-color-only labels.
  states: [
    { state: "Florida", cities: ["Aventura", "Boca Raton", "Coral Gables", "Orlando", "Sarasota", "Tampa", "West Palm Beach"] },
    { state: "Georgia", cities: ["Atlanta", "Roswell"] },
    { state: "Missouri", cities: ["Columbia", "Kansas City", "St. Louis"] },
    { state: "Tennessee", cities: ["Nashville"] },
    { state: "Arizona", cities: ["Scottsdale"] },
    { state: "California", cities: ["Beverly Hills", "San Diego"] },
  ],
};

// ─── Two options (#two-options) ───
export const TWO_OPTIONS = {
  eyebrow: "Two options, one inquiry",
  headline: "Sell it, or keep it and borrow against it.",
  intro:
    "Tell us about your item and we'll tell you what it's worth. Use that number to sell it outright or borrow against it, whichever fits.",
  cards: [
    {
      id: "sell",
      icon: "tag",
      title: "Sell your item",
      body: "Turn jewelry, diamonds, gold, or a luxury watch you no longer wear into funds. Our experts review your item and present a firm purchase offer, with no pressure and no cost to see what it's worth. If the offer is not right for you, we return your item free of charge, fully insured. It is the simplest way to realize the value of something sitting in a drawer.",
      cta: "Get my instant quote",
      image: "/images/option-sell.jpg",
      alt: "A Diamond Banc expert presenting a diamond bracelet to a seated client across an office desk",
    },
    {
      id: "borrow",
      icon: "vault",
      title: "Get a loan and keep your item",
      body: "Not ready to part with a piece that matters to you? Use it to access its value instead. We hold your item securely and return an offer to lend against it, so you keep ownership and get it back when the loan is repaid. Requesting an offer costs nothing and commits you to nothing. It is the right choice when the sentiment is worth as much as the stone.",
      cta: "Get my instant quote",
      image: "/images/option-loan.jpg",
      alt: "A Diamond Banc expert showing a jewelry box to a client during an in-office consultation",
    },
  ],
};

// ─── How it works (#how-it-works) ───
export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  headline: "From your drawer to a decision in four steps.",
  steps: [
    {
      icon: "camera",
      title: "Tell us about your item and get an instant quote",
      body: "Share a few details and a photo through the quote form. It takes about two minutes, and our experts return an instant quote so you know where you stand up front.",
    },
    {
      icon: "pin",
      title: "Ship it in or visit a local office",
      body: "Decide what works for you. Ship your item to us with a free insured label, or book an appointment and bring it to one of our local offices.",
    },
    {
      icon: "ship",
      title: "Free insured shipping",
      body: "If you ship, we send a prepaid, fully insured overnight label. Pack your item, hand it off, and track it every step of the way.",
    },
    {
      icon: "dollar",
      title: "Funding within 24 hours of accepting your offer.",
      body: "Accept your offer and we get you paid fast. Decline, and we return your item free of charge and fully insured.",
    },
  ],
};

// ─── What we evaluate (#what-we-buy) ───
export const WHAT_WE_BUY = {
  eyebrow: "What we evaluate",
  headline: "Expert valuations across the pieces that hold real value.",
  intro:
    "If it is fine jewelry, designer jewelry, or a luxury timepiece, our experts can provide a market-backed quote.",
  categories: [
    {
      icon: "gem",
      title: "Diamonds & engagement rings",
      body: "Natural diamonds and engagement rings of every shape and size. We do not purchase lab-grown stones.",
      image: "/images/cat-diamonds.jpg",
      alt: "Diamond tennis necklaces laid over GIA Diamond Dossier reports",
    },
    {
      icon: "watch",
      title: "Rolex watches and other Swiss timepieces",
      body: "Rolex, Patek Philippe, Audemars Piguet, and other Swiss timepieces, evaluated by our Rolex- and watch-trained experts who know what the market pays.",
      image: "/images/cat-watches.jpg",
      alt: "A silver Rolex Turn-O-Graph resting on a dark green Rolex presentation box",
    },
    {
      icon: "gem",
      title: "Designer jewelry",
      body: "Cartier, Tiffany & Co., Van Cleef & Arpels, and Bvlgari pieces valued for the brand, craftsmanship, and materials that make them sought after.",
      image: "/images/cat-designer.jpg",
      alt: "Four ornate designer pieces on white geometric pedestals, including enamel animal jewelry and gold bracelets",
    },
    {
      icon: "bar",
      title: "Gold & precious metals",
      body: "Gold, platinum, and precious-metal jewelry weighed and valued transparently against current market rates, with nothing hidden in the math.",
      image: "/images/cat-gold.jpg",
      alt: "Two yellow-gold cuff bracelets on white studio blocks",
    },
  ],
};

// ─── Shipping & security (#shipping-security) ───
export const SHIPPING = {
  eyebrow: "Shipping & security",
  headline: "Your item is protected from the moment it leaves your hands.",
  body: "Every shipment travels on a prepaid, fully insured overnight label, so your item is covered in transit at no cost to you. Once it arrives, it is logged, photographed, and held in secure storage until you make a decision. Everything is handled discreetly by a team that does this every day, and if you decline the offer, your item is returned to you free of charge and fully insured. Nothing about the process asks you to gamble with something valuable.",
  points: [
    { icon: "ship", label: "Free insured overnight shipping, both ways" },
    { icon: "shield", label: "Fully insured the entire time we hold it" },
    { icon: "vault", label: "Secure, monitored storage" },
    { icon: "lock", label: "Discreet, professional handling" },
  ],
};

// ─── Expertise & founder story (#expertise) ───
export const EXPERTISE = {
  eyebrow: "Expertise you can trust",
  headline: "Founded by a third-generation jeweler, backed by a team of experts.",
  body: "Diamond Banc was founded in 2007 by Mills Menser, a third-generation jeweler. That heritage shapes how every item is handled, with the care of people who have spent their lives around fine jewelry. Your item is evaluated by our experienced experts, who know exactly what the market pays for it.",
  image: "/images/expertise.jpg",
  imageAlt: "Mills Menser, founder of Diamond Banc, in a portrait photograph",
  teamHeading: "Meet some of our experts",
  team: [
    { name: "Mills Menser", role: "Founder & Owner", image: "/images/team/team-mills.jpg" },
    { name: "Devin Smith", role: "Executive Vice President, Revenue & Operations", image: "/images/team/team-devin.jpg" },
    { name: "Kyle Z. Cook", role: "Vice President, Underwriting & Logistics", image: "/images/team/team-kyle.jpg" },
    { name: "Jordan Isaacs", role: "Director of Transactions, Head Buyer & Lender, Rolex Specialist", image: "/images/team/team-jordan.jpg" },
    { name: "David Fernandez", role: "Regional Director, Miami Markets", image: "/images/team/team-david.jpg" },
    { name: "Jodi Hudson", role: "Director, Tampa", image: "/images/team/team-jodi.jpg" },
    { name: "Deena Maali", role: "Director, Orlando", image: "/images/team/team-deena.jpg" },
  ],
};

// ─── Route-specific team overrides, keyed by market slug ───
// Only the routes listed here change; every other route (and the root) keeps
// the shared LocalOffice and EXPERTISE output untouched.

/** A local specialist shown in a route's #local-office profile column. */
export interface LocalProfile {
  name: string;
  role: string;
  bio: string;
  imageAlt: string;
  /** Path prefix for pre-sized derivatives: `${imageBase}-${width}.{avif,webp,jpg}`. */
  imageBase: string;
  /** Pixel widths of the square derivatives available for `imageBase`. */
  imageWidths: readonly number[];
}

export interface LocalOfficeOverride {
  headline: string;
  intro: string;
  compactLine: string;
  profile: LocalProfile;
}

/** Local-team variant: several specialists render as stacked profile rows. */
export interface LocalTeamOverride extends Omit<LocalOfficeOverride, "profile"> {
  profiles: readonly LocalProfile[];
}

export type LocalSectionOverride = LocalOfficeOverride | LocalTeamOverride;

/** Square derivative widths for stacked profile rows: 96/112 CSS px at 1x and 2x. */
const ROW_PORTRAIT_WIDTHS = [96, 112, 192, 224] as const;

export const LOCAL_OFFICE_OVERRIDES: Readonly<Record<string, LocalSectionOverride>> = {
  "boca-raton": {
    headline: "Meet your Boca Raton specialist",
    intro: "Get to know Alex Perdomo, who serves Diamond Banc clients in Boca Raton.",
    compactLine:
      "Visit by appointment, or request a quote online. Prefer to mail your item? Free insured shipping is also available.",
    profile: {
      name: "Alex Perdomo",
      role: "Boca Raton Market Director",
      bio: "Alex brings more than 20 years of experience in luxury jewelry and watches to the Boca Raton office. He speaks English and Spanish.",
      imageAlt: "Alex Perdomo",
      imageBase: "/images/team/alex-perdomo",
      imageWidths: [96, 192, 220, 440],
    },
  },
  "beverly-hills": {
    headline: "Meet your Beverly Hills team",
    intro:
      "Meet Silvea, your Beverly Hills Market Director, and Thuyvi, who supports our California offices.",
    compactLine:
      "Visit by appointment, or request a quote online. Prefer to mail your item? Free insured shipping is also available.",
    profiles: [
      {
        name: "Silvea Parsamyan",
        role: "Beverly Hills Market Director",
        bio: "Silvea leads the Beverly Hills office with more than 20 years of jewelry experience, including helping open five jewelry locations across Los Angeles.",
        imageAlt: "Silvea Parsamyan",
        imageBase: "/images/team/silvea-parsamyan",
        imageWidths: ROW_PORTRAIT_WIDTHS,
      },
      {
        name: "Thuyvi Tran",
        role: "Regional & Market Director",
        bio: "A GIA Graduate Gemologist, Thuyvi supports Diamond Banc's California offices and brings regional expertise to the Beverly Hills team.",
        imageAlt: "Thuyvi Tran",
        imageBase: "/images/team/thuyvi-tran",
        imageWidths: ROW_PORTRAIT_WIDTHS,
      },
    ],
  },
  columbia: {
    headline: "Meet Christine in Columbia",
    intro: "Get to know Christine Weimer, who serves Diamond Banc clients in Columbia.",
    compactLine:
      "Visit by appointment, or request a quote online. Prefer to mail your item? Free insured shipping is also available.",
    profile: {
      name: "Christine Weimer",
      role: "Transaction Coordinator",
      bio: "Christine works with Columbia clients as a buyer and lender and coordinates mail-in transactions. Her background includes diamond-grading training through GIA.",
      imageAlt: "Christine Weimer",
      imageBase: "/images/team/christine-weimer",
      imageWidths: [96, 192, 220, 440],
    },
  },
  "kansas-city": {
    headline: "Meet your Kansas City specialist",
    intro: "Get to know Sicily Von Overfelt, who serves Diamond Banc clients in Kansas City.",
    compactLine:
      "Visit by appointment, or request a quote online. Prefer to mail your item? Free insured shipping is also available.",
    profile: {
      name: "Sicily Von Overfelt",
      role: "Missouri Director of Buying & Lending",
      bio: "Sicily is a GIA Diamonds Graduate who serves Kansas City clients and helps train Diamond Banc's market directors and buyers.",
      imageAlt: "Sicily Von Overfelt",
      imageBase: "/images/team/sicily-von-overfelt",
      imageWidths: [96, 192, 220, 440],
    },
  },
  "st-louis": {
    headline: "Meet your St. Louis specialist",
    intro: "Get to know Jonathan Willis, who serves Diamond Banc clients in St. Louis.",
    compactLine:
      "Visit by appointment, or request a quote online. Prefer to mail your item? Free insured shipping is also available.",
    profile: {
      name: "Jonathan Willis",
      role: "St. Louis Market Director",
      bio: "Jonathan brings more than 20 years of experience in luxury jewelry, valuation and client advisory to the St. Louis office.",
      imageAlt: "Jonathan Willis",
      imageBase: "/images/team/jonathan-willis",
      imageWidths: [96, 192, 220, 440],
    },
  },
  "san-diego": {
    headline: "Meet your San Diego specialist",
    intro: "Get to know Thuyvi Tran, who serves Diamond Banc clients in San Diego.",
    compactLine:
      "Visit by appointment, or request a quote online. Prefer to mail your item? Free insured shipping is also available.",
    profile: {
      name: "Thuyvi Tran",
      role: "Regional & Market Director",
      bio: "An experienced expert, Thuyvi supports Diamond Banc’s California offices and works directly with San Diego clients on their jewelry needs.",
      imageAlt: "Thuyvi Tran",
      imageBase: "/images/team/san-diego/thuyvi-tran",
      imageWidths: [96, 192, 220, 440],
    },
  },
  roswell: {
    headline: "Meet your Roswell specialist",
    intro: "Get to know Jae Back, who serves Diamond Banc clients in Roswell.",
    compactLine:
      "Visit by appointment, or request a quote online. Prefer to mail your item? Free insured shipping is also available.",
    profile: {
      name: "Jae Back",
      role: "Georgia Director of Buying & Lending",
      bio: "Jae brings more than 27 years of jewelry and watch leadership experience to his work with Georgia clients. He speaks English and Korean.",
      imageAlt: "Jae Back",
      imageBase: "/images/team/jae-back",
      imageWidths: [96, 192, 220, 440],
    },
  },
};

export interface ExpertiseTeamOverride {
  teamHeading: string;
  teamIntro: string;
  /** Role replacements by roster name; unlisted members keep their shared role. */
  roles: Readonly<Record<string, string>>;
  /** Roster names hidden on this route; omit to show the full shared roster. */
  excludeNames?: readonly string[];
}

export const EXPERTISE_TEAM_OVERRIDES: Readonly<Record<string, ExpertiseTeamOverride>> = {
  "boca-raton": {
    teamHeading: "Backed by the Diamond Banc team",
    teamIntro:
      "Our local offices are supported by Diamond Banc's broader team of leaders and specialists.",
    roles: { "Jordan Isaacs": "National Director of Funding" },
  },
  "beverly-hills": {
    teamHeading: "Backed by the Diamond Banc team",
    teamIntro:
      "Our local offices are supported by Diamond Banc's broader team of leaders and specialists.",
    roles: { "Jordan Isaacs": "National Director of Funding" },
  },
  columbia: {
    teamHeading: "Backed by the Diamond Banc team",
    teamIntro:
      "Our local offices are supported by Diamond Banc's broader team of leaders and specialists.",
    roles: { "Jordan Isaacs": "National Director of Funding" },
  },
  "kansas-city": {
    teamHeading: "Backed by the Diamond Banc team",
    teamIntro:
      "Our local offices are supported by Diamond Banc's broader team of leaders and specialists.",
    roles: { "Jordan Isaacs": "National Director of Funding" },
  },
  "st-louis": {
    teamHeading: "Backed by the Diamond Banc team",
    teamIntro:
      "Our local offices are supported by Diamond Banc's broader team of leaders and specialists.",
    roles: { "Jordan Isaacs": "National Director of Funding" },
  },
  // Jodi leads the Tampa team in #local-office, so she is not repeated here.
  tampa: {
    teamHeading: "Backed by the Diamond Banc team",
    teamIntro:
      "Our local offices are supported by Diamond Banc's broader team of leaders and specialists.",
    roles: { "Jordan Isaacs": "National Director of Funding" },
    excludeNames: ["Jodi Hudson"],
  },
  "san-diego": {
    teamHeading: "Backed by the Diamond Banc team",
    teamIntro:
      "Our local offices are supported by Diamond Banc's broader team of leaders and specialists.",
    roles: { "Jordan Isaacs": "National Director of Funding" },
  },
  roswell: {
    teamHeading: "Backed by the Diamond Banc team",
    teamIntro:
      "Our local offices are supported by Diamond Banc's broader team of leaders and specialists.",
    roles: { "Jordan Isaacs": "National Director of Funding" },
  },
};

// ─── Reviews / aggregate proof (#reviews) ───
export const REVIEWS = {
  eyebrow: "The reputation behind the offer",
  headline: "Trusted by thousands, rated 5 out of 5.",
  body: "Diamond Banc holds a 5 out of 5 rating with 10,000+ reviews across Google, Trustpilot, and Yelp, alongside an A+ rating from the Better Business Bureau. It is the kind of track record that only comes from treating people fairly, one transaction at a time.",
  stats: [
    { value: "5 out of 5", label: "Average rating" },
    { value: "10,000+", label: "Reviews across Google, Trustpilot, and Yelp" },
    { value: "A+", label: "BBB rating" },
  ],
  testimonials: [
    {
      quote:
        "After watching countless videos on YouTube, I reached out to Diamond Banc and was introduced to Jordan. He made the process seamless and simple and answered all of my questions. The entire process, from initial contact to securing a loan took less than 48 hours. I am very impressed with their process and level of customer service and highly recommend them to anyone needing to access their jewelry's equity. Thank you again!",
      name: "Sebastian C.",
      source: "Google review",
    },
    {
      quote:
        "I got 4 different estimates. Diamond Banc was the clear winner. Christine was a great advocate in making sure I got the best deal. Everyone was delightful and the location of the office was beautiful and convenient. Highly recommend.",
      name: "Shirley Farrah",
      source: "Google review",
    },
    {
      quote:
        "Christine Weimer was extremely friendly, professional, and helpful. She made the whole process quick and easy, and everything went very smoothly. Excellent customer service. Highly recommended!",
      name: "Mehmet Ali Ünal",
      source: "Google review",
    },
  ],
};

// ─── FAQ (#faq) ───
export const FAQ = [
  {
    q: "Is there any obligation to accept an offer?",
    a: "None at all. Requesting a quote and receiving your offer is completely free and carries no obligation. If the numbers are not right for you, simply decline and we return your item to you free of charge, fully insured.",
  },
  {
    q: "How does the shipping work?",
    a: "We send you a prepaid, fully insured overnight shipping label. You pack your item, hand it off, and track it the whole way. Your item is insured in transit and again the entire time we hold it, so it is protected from the moment it leaves your hands.",
  },
  {
    q: "How long does the evaluation take?",
    a: "Send a few details and a photo through the form and our experts return an instant quote up front. Once your item arrives or you visit a local office, they confirm a firm offer promptly, with no drawn-out back and forth.",
  },
  {
    q: "How fast do I get paid?",
    a: "Once you accept an offer, funding is released quickly, with no lengthy waiting period and no hidden processing delay.",
  },
  {
    q: "What if I want a loan instead of selling?",
    a: "One inquiry covers both. We return an offer to purchase your item and a separate offer to lend against it, so you can keep your item and access its value instead of selling. You choose the option that fits after you have seen both.",
  },
  {
    q: "What items do you evaluate?",
    a: "Diamonds and diamond jewelry, engagement rings, Rolex and other Swiss timepieces, designer jewelry from houses like Cartier, Tiffany & Co., Van Cleef & Arpels and Bvlgari, and gold and precious metals. When in doubt, request a quote and our experts will take a look.",
  },
];

// ─── Final CTA (#get-started) ───
export const FINAL_CTA = {
  eyebrow: "Ready when you are",
  headline: "See what your jewelry is worth today.",
  body: "Get an instant quote for your jewelry, watch, or diamonds. Ship your items to us with free insured shipping, or book an appointment at a local office.",
};

// ─── Mega tracking , real Diamond Banc IDs. Meta Pixel is ON. ───
export const TRACKING = {
  siteKey: "ae75ylrmfqweqelx",
  siteId: "75a85d64-2685-47a6-82e4-6010397e3ddb",
  gtmId: "GTM-WBLZ2J9",
  pixelId: "1344125387527189",
};
