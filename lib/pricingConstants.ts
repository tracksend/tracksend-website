// Currency symbols per currency code
export const currencySymbols: Record<string, string> = {
  USD: "$",
  GBP: "£",
  ZAR: "R",
  NGN: "₦",
  GHS: "₵",
};

// Base prices per country and billing cycle
// TODO: Update with correct prices
export const basePrices: Record<
  string,
  {
    growth: { monthly: number | string; annual: number | string };
    scale: { monthly: number | string; annual: number | string };
  }
> = {
  "united states": {
    growth: { monthly: 60, annual: 600 },
    scale: { monthly: 100, annual: 1000 },
  },
  "united kingdom": {
    growth: { monthly: 50, annual: 500 },
    scale: { monthly: 80, annual: 800 },
  },
  nigeria: {
    growth: { monthly: "80k", annual: "800k" },
    scale: { monthly: "150k", annual: "1.5M" },
  },
  ghana: {
    growth: { monthly: 250, annual: 2500 },
    scale: { monthly: 700, annual: 7000 },
  },
  "south africa": {
    growth: { monthly: 1000, annual: "10k" },
    scale: { monthly: 2000, annual: "20k" },
  },
};

// Default/fallback prices
basePrices.default = basePrices["united states"];

// Message charges per channel and country
// TODO: Update with correct rates
export const messageChargesPerCountry: Record<
  string,
  {
    sms: string;
    rcs: string;
    whatsapp: string;
  }
> = {
  "united states": {
    sms: "$0.006",
    rcs: "$0.006",
    whatsapp: "$0.003",
  },
  "united kingdom": {
    sms: "£0.032",
    rcs: "£0.040",
    whatsapp: "£0.0025",
  },
  nigeria: {
    sms: "₦5.50",
    rcs: "₦5",
    whatsapp: "₦2.50",
  },
  ghana: {
    sms: "₵2.5",
    rcs: "Not enabled",
    whatsapp: "₵3.5",
  },
  "south africa": {
    sms: "R0.25",
    rcs: "R0.35",
    whatsapp: "R0.3",
  },
};

// Default/fallback message rates
messageChargesPerCountry.default = messageChargesPerCountry["united states"];

// Plan templates (reusable across countries)
export const planTemplates = {
  growth: {
    id: "growth",
    name: "Growth",
    credits: 45,
    description:
      "Best for teams running campaigns and automated follow-ups.",
    features: [
      "Multi Channel",
      "Unlimited Campaigns",
      "Smart follow-ups",
      "Integrations + webhooks",
      "AI Basics",
    ],
    buttonText: "Get Growth",
    isPopular: false,
  },
  scale: {
    id: "scale",
    name: "Scale",
    credits: 85,
    description:
      "Best for teams that need two-way messaging and conversion workflows.",
    features: [
      "Everything in Growth",
      "Conversation Inbox",
      "AI Chatbots",
      "Dynamic Segments ",
      "Priority support",
    ],
    buttonText: "Get Scale",
    isPopular: true,
  },
  enterprise: {
    id: "enterprise",
    name: "Enterprise",
    credits: 0,
    description:
      "Tailored solutions for high-volume senders and custom needs.",
    features: [
      "SLA Support",
      "Volume-based pricing",
      "Custom integrations",
      "High throughput",
      "Dedicated success manager",
     
    ],
    buttonText: "Contact Sales",
    isPopular: false,
  },
};
