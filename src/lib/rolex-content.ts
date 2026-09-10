// Route-local content for the /rolex quote landing page. Kept separate from the
// nationwide `content.ts` so the Rolex variant never mutates the root or market
// routes. All copy strings are transcribed verbatim from the authoritative brief
// (task-assets/LP-BOT-TASK.md). Shared trust content (reviews, proof bar, office
// list, phone, tracking IDs) is still sourced from `content.ts` and imported by
// the reused shared components.

// The single quote target for every non-phone CTA on this route.
export const ROLEX_QUOTE_ANCHOR = "#get-quote";

// Repeated quote CTA label, used by every DualCTA / floating CTA on this route.
export const ROLEX_CTA_LABEL = "Get my Rolex quote";

// ─── Hero (#get-quote) ───
export const R_HERO = {
  eyebrow: "Sell or borrow against your Rolex.",
  h1: "Find out what your Rolex is worth.",
  subhead:
    "Start with a photo of your Rolex and get a free quote. Explore selling your watch or borrowing against its value, with free insured shipping or an appointment at a local office.",
  formHeading: "Get your free Rolex quote",
  formSubhead: "Add a clear photo of your watch to get started.",
  // Existing supporting benefit chips are preserved from the source hero.
  chips: [
    "Instant evaluation",
    "Ship or visit a local office",
    "Free insured shipping",
    "No obligation",
  ],
} as const;

// ─── Two options (#two-options) ───
export const R_TWO_OPTIONS = {
  eyebrow: "Two options, one inquiry",
  headline: "Sell your Rolex, or borrow against it.",
  intro:
    "Start with a quote for your Rolex. Explore a purchase offer or a loan against your watch, and choose the option that fits.",
  cards: [
    {
      id: "sell",
      icon: "tag",
      title: "Sell your Rolex",
      body: "Ready to part with your watch? Our experts evaluate your Rolex and present a purchase offer, with no obligation to accept. Visit a local office or use our free insured shipping service. If you decline the offer after sending your watch, we return it free of charge and fully insured.",
      image: "/images/option-sell.jpg",
      alt: "A Diamond Banc expert presenting a diamond bracelet to a seated client across an office desk",
    },
    {
      id: "borrow",
      icon: "vault",
      title: "Borrow against your Rolex",
      body: "Access funds while retaining ownership of your Rolex. Your watch is held securely for the duration of the loan and returned when the loan is repaid. Request a quote to explore your options, with no obligation to proceed.",
      image: "/images/option-loan.jpg",
      alt: "A Diamond Banc expert showing a jewelry box to a client during an in-office consultation",
    },
  ],
} as const;

// ─── How it works (#how-it-works) ───
export const R_HOW_IT_WORKS = {
  eyebrow: "How it works",
  headline: "Your Rolex quote, in four steps.",
  steps: [
    {
      icon: "camera",
      title: "Share a photo of your Rolex",
      body: "Use the quote form to send a clear photo and any details you have about your watch. Start with what you know; our team can help identify the model.",
    },
    {
      icon: "pin",
      title: "Ship it or visit an office",
      body: "Choose an appointment at a local office or request a prepaid, fully insured shipping label.",
    },
    {
      icon: "ship",
      title: "Receive your final offer",
      body: "Our specialists authenticate and evaluate your Rolex to confirm the offer before you decide.",
    },
    {
      icon: "dollar",
      title: "Accept your offer and get paid",
      body: "Choose the option that fits and complete the transaction with our team. If you decline after shipping your watch, we return it free of charge and fully insured.",
    },
  ],
} as const;

// ─── Rolex models we evaluate (#what-we-buy) ───
export const R_MODELS = {
  eyebrow: "Rolex models we evaluate",
  headline: "A quote for the Rolex you own.",
  intro:
    "Start with your model and a photo. Our experts evaluate your watch's details and condition to help you understand its value.",
  helper:
    "Have a different Rolex model? Send a photo and our team will take a look.",
  // Intrinsic image dimensions are 1600x1200 (4:3) per the asset manifest.
  cards: [
    {
      icon: "watch",
      title: "Rolex Datejust",
      body: "Classic dress watches in a range of sizes, dial styles, and bracelet options. Share a photo to start your quote.",
      image: "/images/rolex-datejust.jpg",
      alt: "A blue-dial Rolex Datejust with a fluted bezel and Jubilee bracelet on a light gray surface.",
    },
    {
      icon: "watch",
      title: "Rolex Submariner",
      body: "Date and no-date models, from earlier references to modern editions. Get a quote for your Submariner.",
      image: "/images/rolex-submariner.jpg",
      alt: "A black-dial Rolex Submariner with a steel Oyster bracelet on a light gray surface.",
    },
    {
      icon: "watch",
      title: "Rolex GMT-Master II",
      body: "Distinctive bezel combinations and references, evaluated for the specific watch you own.",
      image: "/images/rolex-gmt-master-ii.jpg",
      alt: "A Rolex GMT-Master II with a blue-and-black bezel and steel Oyster bracelet on a light gray surface.",
    },
    {
      icon: "watch",
      title: "Rolex Daytona",
      body: "Modern and earlier Daytona chronographs. Start with photos and any model details you have.",
      image: "/images/rolex-daytona.jpg",
      alt: "A white-dial Rolex Daytona with a black bezel and steel Oyster bracelet on a light gray surface.",
    },
  ],
} as const;

// ─── Offices (#office-locations) route-local text (map + city list reused) ───
export const R_LOCATIONS = {
  intro:
    "Prefer to hand your watch across the desk? Book an appointment at any of our local offices. Anywhere else in the country, ship it to us with a free insured label.",
  mailIn:
    "Not near an office? Ship your Rolex to us from anywhere with a free insured label.",
} as const;

// ─── Shipping & security (#shipping-security) ───
export const R_SHIPPING = {
  eyebrow: "Shipping & security",
  headline: "Your Rolex is protected throughout the process.",
  body: "Every shipment travels on a prepaid, fully insured overnight label, so your watch is covered in transit at no cost to you. Once it arrives, it is logged, photographed, and held in secure storage until you make a decision. Everything is handled discreetly by a team that does this every day, and if you decline the offer, your Rolex is returned to you free of charge and fully insured. Nothing about the process asks you to gamble with something valuable.",
  points: [
    { icon: "ship", label: "Free insured overnight shipping, both ways" },
    { icon: "shield", label: "Fully insured the entire time we hold it" },
    { icon: "vault", label: "Secure, monitored storage" },
    { icon: "lock", label: "Discreet, professional handling" },
  ],
} as const;

// ─── Expertise & founder story (#expertise) ───
export const R_EXPERTISE = {
  eyebrow: "Expertise you can trust",
  headline: "Rolex expertise, backed by a team you can meet.",
  intro:
    "Your Rolex deserves an informed evaluation. Our team includes Rolex specialist Jordan Isaacs and experienced buyers who can guide you through selling or borrowing against your watch.",
  body: "Diamond Banc was founded in 2007 by Mills Menser, a third-generation jeweler. That heritage shapes how every item is handled, with the care of people who have spent their lives around fine jewelry. Your item is evaluated by our experienced experts, who know exactly what the market pays for it.",
  image: "/images/expertise.jpg",
  imageAlt: "Mills Menser, founder of Diamond Banc, in a portrait photograph",
  teamHeading: "Meet some of our experts",
  // Jordan Isaacs moved to first position; exact title and all other members
  // and their order preserved from the source team grid.
  team: [
    { name: "Jordan Isaacs", role: "Director of Transactions, Head Buyer & Lender, Rolex Specialist", image: "/images/team/team-jordan.jpg" },
    { name: "Mills Menser", role: "Founder & Owner", image: "/images/team/team-mills.jpg" },
    { name: "Devin Smith", role: "Executive Vice President, Revenue & Operations", image: "/images/team/team-devin.jpg" },
    { name: "Kyle Z. Cook", role: "Vice President, Underwriting & Logistics", image: "/images/team/team-kyle.jpg" },
    { name: "David Fernandez", role: "Regional Director, Miami Markets", image: "/images/team/team-david.jpg" },
    { name: "Jodi Hudson", role: "Director, Tampa", image: "/images/team/team-jodi.jpg" },
    { name: "Deena Maali", role: "Director, Orlando", image: "/images/team/team-deena.jpg" },
  ],
} as const;

// ─── FAQ (#faq) ───
// Source process questions preserved; the general item-category question is
// replaced with a Rolex-model question and three Rolex-specific FAQs are added.
export const R_FAQ = [
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
    q: "Which Rolex models can I submit for a quote?",
    a: "Start with a photo of your Rolex. Our team can review the model and details, including watches beyond the four examples shown on this page.",
  },
  {
    q: "How is my Rolex quote determined?",
    a: "The quote considers the model, condition, and current resale market, along with details such as the original box and papers. Our team evaluates your specific watch before confirming the final offer.",
  },
  {
    q: "Can I sell my Rolex without its original box or papers?",
    a: "Yes. You can request a quote without the original box or papers. Include them if you have them, as they can affect the offer.",
  },
  {
    q: "Do I need to authenticate my Rolex before requesting a quote?",
    a: "You can begin with photos and the details you have. Our specialists authenticate and evaluate your watch before confirming the final offer.",
  },
] as const;

// ─── Final CTA (#get-started) ───
export const R_FINAL_CTA = {
  eyebrow: "Ready when you are",
  headline: "See what your Rolex is worth today.",
  body: "Start with a photo and explore your options for selling or borrowing against your Rolex. Visit a local office or use our free insured shipping service.",
} as const;
