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
      "Best for businesses running campaigns and optimizing engagement.",
    features: [
      "Unlimited Campaigns",
      "Click Tracking",
      "Dynamic Segments",
      "Integrations + webhooks",
      "AI Optimization",
    ],
    buttonText: "Get Growth",
    isPopular: false,
  },
  scale: {
    id: "scale",
    name: "Scale",
    credits: 85,
    description:
      "Best for businesses that need two-way messaging and higher conversion.",
    features: [
      "Everything in Growth",
      "Conversation Inbox",
      "AI Chatbots",
      "Smart Follow-ups",
      "Priority support",
    ],
    buttonText: "Get Scale",
    isPopular: true,
  },
  enterprise: {
    id: "enterprise",
    name: "Enterprise",
    credits: 0,
    description: "Tailored solutions for high-volume senders and custom needs.",
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

// Mapping of pins used in the register URL per country, plan and billing cycle.
// Keys are ISO country codes (uppercase). Pins are strings to allow non-numeric
// ids if needed. Update pin values to match the real values from the billing
// system when available.
export const planPins: Record<
  string,
  {
    growth: { monthly: string; annual: string };
    scale: { monthly: string; annual: string };
    enterprise?: { contact: string };
  }
> = {
  US: {
    growth: { monthly: "8", annual: "9" },
    scale: { monthly: "10", annual: "11" },
  },
  GB: {
    growth: { monthly: "18", annual: "19" },
    scale: { monthly: "20", annual: "21" },
  },
  NG: {
    growth: { monthly: "28", annual: "29" },
    scale: { monthly: "30", annual: "31" },
  },
  GH: {
    growth: { monthly: "38", annual: "39" },
    scale: { monthly: "40", annual: "41" },
  },
  ZA: {
    growth: { monthly: "48", annual: "49" },
    scale: { monthly: "50", annual: "51" },
  },
};

export const defaultPlanPinPlatform = "smsapp";

// Helper to get pin for a given country code, plan id and billing cycle.
export function getPlanPin(
  countryCode: string | undefined,
  planId: "growth" | "scale" | "enterprise",
  billing: "monthly" | "annual",
): string | null {
  if (!countryCode) return null;
  const key = countryCode.toUpperCase();
  const mapping = planPins[key] || planPins["US"];

  if (planId === "enterprise") return null;

  const pin = mapping?.[planId]?.[billing];
  return pin ?? null;
}

// Build the registration URL for the given country/plan/billing. Falls back to
// a basic register URL when no pin is found.
export function getRegisterUrl(
  countryCode: string | undefined,
  planId: "growth" | "scale" | "enterprise",
  billing: "monthly" | "annual",
  platform = defaultPlanPinPlatform,
): string {
  const pin = getPlanPin(countryCode, planId, billing);
  if (pin)
    return `https://app.tracksend.co/register?pin=${pin}&platform=${platform}`;
  // Fallback to the more explicit query params when pin is missing
  if (planId === "enterprise") return "https://cal.com/tracksend-discover/tdc";
  return `https://app.tracksend.co/register?pin=8&platform=${platform}`;
}

// Credits per country, plan and billing cycle (actual credit counts).
// Keys are ISO country codes (uppercase). Numbers are total credits included
// for the given plan and billing cycle. Update these values to match real
// product settings as needed.
export const planCredits: Record<
  string,
  {
    growth: { monthly: number; annual: number };
    scale: { monthly: number; annual: number };
  }
> = {
  US: { growth: { monthly: 45000, annual: 540000 }, scale: { monthly: 85000, annual: 1020000 } },
  GB: { growth: { monthly: 45000, annual: 540000 }, scale: { monthly: 85000, annual: 1020000 } },
  NG: { growth: { monthly: 80000, annual: 960000 }, scale: { monthly: 150000, annual: 1800000 } },
  GH: { growth: { monthly: 25000, annual: 300000 }, scale: { monthly: 70000, annual: 840000 } },
  ZA: { growth: { monthly: 100000, annual: 1200000 }, scale: { monthly: 200000, annual: 2400000 } },
};

planCredits.default = planCredits.US;

// Return raw credits (number) for a given country/plan/billing. Falls back
// to `planTemplates` values multiplied by 1000 if no mapping exists.
export function getRawPlanCredits(
  countryCode: string | undefined,
  planId: "growth" | "scale" | "enterprise",
  billing: "monthly" | "annual",
): number {
  if (planId === "enterprise") return 0;
  const key = countryCode ? countryCode.toUpperCase() : "US";
  const mapping = planCredits[key] || planCredits["US"];
  const raw = mapping?.[planId]?.[billing];
  if (typeof raw === "number") return raw;
  // fallback to template (template `credits` represents thousands)
  const templateBase = (planTemplates as any)[planId]?.credits || 0;
  return templateBase * 1000;
}

// Format number with commas and prefix with currency symbol when available.
export function formatCreditsWithCurrency(
  amount: number,
  currencyCode?: string,
): string {
  const formatted = new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(amount);
  const symbol = currencyCode ? (currencySymbols[currencyCode] || "") : "";
  return `${symbol}${formatted}`;
}

// High-level helper: returns the formatted credits string for display.
export function getFormattedPlanCredits(
  countryCode: string | undefined,
  planId: "growth" | "scale" | "enterprise",
  billing: "monthly" | "annual",
  currencyCode?: string,
): string {
  const raw = getRawPlanCredits(countryCode, planId, billing);
  return formatCreditsWithCurrency(raw, currencyCode);
}
