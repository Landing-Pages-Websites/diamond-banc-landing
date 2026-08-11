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
    "Get a free, no-obligation quote in 24 hours. Sell it or use it to get a loan. Free insured overnight shipping both ways.",
  chips: [
    "Free insured shipping",
    "24-hour evaluation",
    "Same-day funding",
    "No obligation",
  ],
  formHeading: "Get your free, no-obligation quote",
  formSubhead:
    "Add a photo and our GIA-certified gemologists will review it within 24 hours.",
};

// ─── Proof bar (#proof-bar) ───
export const PROOF_BAR = [
  { icon: "star", value: "5.0 / 5", label: "1,836+ Trustpilot reviews" },
  { icon: "award", value: "A+", label: "BBB rating" },
  { icon: "gem", value: "GIA-certified", label: "Expert gemologists" },
  { icon: "pin", value: "15 offices", label: "Local, plus nationwide service" },
];

// ─── Two options (#two-options) ───
export const TWO_OPTIONS = {
  eyebrow: "Two options, one inquiry",
  headline: "Sell it, or keep it and borrow against it.",
  intro:
    "One quote opens both doors. Tell us about your item and our team returns a real offer to purchase it outright and a separate offer to lend against it. You decide which path fits once you have seen the numbers, and there is never any obligation to accept either.",
  cards: [
    {
      id: "sell",
      icon: "tag",
      title: "Sell your item",
      body: "Turn jewelry, diamonds, gold, or a luxury watch you no longer wear into cash. Our GIA-certified gemologists evaluate your item within 24 hours of receiving it and present a firm purchase offer. If you accept, funds are released the same day. There is no pressure and no cost to see what your item is worth, and if the offer is not right for you, we return your item free of charge, fully insured. It is the simplest way to realize the value of something sitting in a drawer.",
      cta: "Get my quote",
      image: "/images/option-sell.jpg",
      alt: "An open dark velvet tray displaying gold and diamond jewelry pieces ready for evaluation",
    },
    {
      id: "borrow",
      icon: "vault",
      title: "Get a loan and keep your item",
      body: "Not ready to part with a piece that matters to you? Use it to access its value instead. We hold your item securely and return an offer to lend against it, so you keep ownership and get it back when the loan is repaid. The same 24-hour evaluation and same-day funding apply, and requesting an offer costs nothing and commits you to nothing. It is the right choice when the sentiment is worth as much as the stone.",
      cta: "Get my quote",
      image: "/images/option-loan.jpg",
      alt: "A diamond ring resting in a secure case with a vault door softly blurred behind it",
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
      title: "Tell us about your item",
      body: "Share a few details and a photo through the quote form. It takes about two minutes and starts your evaluation.",
    },
    {
      icon: "ship",
      title: "Free insured overnight shipping",
      body: "We send a prepaid, fully insured overnight label. Pack your item, hand it off, and track it every step of the way.",
    },
    {
      icon: "gem",
      title: "24-hour expert evaluation",
      body: "Our GIA-certified gemologists assess your item and prepare a firm offer within 24 hours of its arrival.",
    },
    {
      icon: "dollar",
      title: "Same-day funding",
      body: "Accept the offer and funds are released the same day. Decline, and we return your item free and fully insured.",
    },
  ],
};

// ─── What we evaluate (#what-we-buy) ───
export const WHAT_WE_BUY = {
  eyebrow: "What we evaluate",
  headline: "Expert valuations across the pieces that hold real value.",
  intro:
    "If it is fine jewelry, a signed piece, or a luxury timepiece, our gemologists can put a number on it.",
  categories: [
    {
      icon: "gem",
      title: "Diamonds & engagement rings",
      body: "Loose diamonds and diamond jewelry of every shape and size, graded by GIA-certified gemologists against the same standards used to certify them.",
      image: "/images/cat-diamonds.jpg",
      alt: "Loose brilliant cut diamonds beside a platinum solitaire ring on a charcoal surface",
    },
    {
      icon: "watch",
      title: "Luxury watches, including Rolex",
      body: "Rolex, Patek Philippe, Audemars Piguet, and other fine timepieces, evaluated by a dedicated Rolex specialist who knows what the market pays.",
      image: "/images/cat-watches.jpg",
      alt: "A gold dress watch and a steel sport watch resting on a cream stone slab",
    },
    {
      icon: "gem",
      title: "Designer & signed jewelry",
      body: "Cartier, Tiffany & Co., Van Cleef & Arpels, and Bvlgari pieces valued for the brand, craftsmanship, and materials that make them sought after.",
      image: "/images/cat-designer.jpg",
      alt: "A diamond tennis bracelet, a gold rope chain, and emerald drop earrings arranged together",
    },
    {
      icon: "bar",
      title: "Gold & precious metals",
      body: "Gold, platinum, and precious-metal jewelry weighed and valued transparently against current market rates, with nothing hidden in the math.",
      image: "/images/cat-gold.jpg",
      alt: "Gold rings and chains piled beside a brass balance scale",
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
  headline: "Founded by a third-generation jeweler. Evaluated by certified experts.",
  body: "Diamond Banc was founded in 2007 by Mills Menser, a third-generation jeweler who went on to purchase Buchroeders Jewelers, a firm established in 1896. That heritage shapes how every item is handled: with the care of people who have spent their lives around fine jewelry. Your item is evaluated by GIA-certified gemologists, the same credential used to grade the world's finest diamonds.",
  image: "/images/expertise.jpg",
  imageAlt: "A GIA-certified gemologist examining a diamond through a loupe at a workbench",
  team: [
    { name: "Jodi Hudson", role: "GIA Graduate Gemologist" },
    {
      name: "Jason Perry",
      role: "GIA Graduate Gemologist, Certified Jewelry Appraiser",
    },
    {
      name: "Jordan Isaacs",
      role: "Director of Transactions, Head Buyer & Rolex Specialist",
    },
  ],
};

// ─── Reviews / aggregate proof (#reviews) ───
export const REVIEWS = {
  eyebrow: "The reputation behind the offer",
  headline: "Trusted by thousands, rated 5.0 out of 5.",
  body: "Diamond Banc holds a 5.0 out of 5 rating on Trustpilot across more than 1,836 reviews, alongside an A+ rating from the Better Business Bureau. It is the kind of track record that only comes from treating people fairly, one transaction at a time.",
  stats: [
    { value: "5.0 / 5", label: "Trustpilot rating" },
    { value: "1,836+", label: "Verified reviews" },
    { value: "A+", label: "BBB rating" },
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
    a: "Our GIA-certified gemologists evaluate your item within 24 hours of receiving it. You will have a firm offer in hand quickly, with no drawn-out back and forth.",
  },
  {
    q: "How fast do I get paid?",
    a: "Once you accept an offer, funds are released the same day. There is no waiting period and no hidden processing delay.",
  },
  {
    q: "What if I want a loan instead of selling?",
    a: "One inquiry covers both. We return an offer to purchase your item and a separate offer to lend against it, so you can keep your item and access its value instead of selling. You choose the option that fits after you have seen both.",
  },
  {
    q: "What items do you evaluate?",
    a: "Diamonds and diamond jewelry, engagement rings, luxury watches including Rolex, designer and signed pieces from houses like Cartier, Tiffany & Co., Van Cleef & Arpels and Bvlgari, and gold and precious metals. When in doubt, request a quote and our gemologists will take a look.",
  },
];

// ─── Final CTA (#get-started) ───
export const FINAL_CTA = {
  eyebrow: "Ready when you are",
  headline: "See what your jewelry is worth today.",
  body: "Get a free, no-obligation quote in 24 hours, then decide whether to sell or borrow. Free insured overnight shipping both ways, and same-day funding once you accept.",
};

// ─── Mega tracking , real Diamond Banc IDs. Meta Pixel is ON. ───
export const TRACKING = {
  siteKey: "ae75ylrmfqweqelx",
  siteId: "75a85d64-2685-47a6-82e4-6010397e3ddb",
  gtmId: "GTM-WBLZ2J9",
  pixelId: "1344125387527189",
};
