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
    essential?: { monthly: number | string; annual: number | string };
    growth: { monthly: number | string; annual: number | string };
    scale: { monthly: number | string; annual: number | string };
  }
> = {
  "united states": {
    growth: { monthly: 60, annual: 600 },
    scale: { monthly: 100, annual: 1000 },
  },
  "united kingdom": {
    growth: { monthly: 60, annual: 600 },
    scale: { monthly: 100, annual: 1000 },
  },
  nigeria: {
    essential: { monthly: "30k", annual: "300k" },
    growth: { monthly: "80k", annual: "800k" },
    scale: { monthly: "150k", annual: "1.5M" },
  },
  ghana: {
    growth: { monthly: 750, annual: "7.5k" },
    scale: { monthly: 1400, annual: "14k" },
  },
  "south africa": {
    growth: { monthly: 500, annual: "5k" },
    scale: { monthly: 1500, annual: "15k" },
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
  essential: {
    id: "essential",
    name: "Essential",
    credits: 15,
    description:
      "Best for businesses running campaigns and optimizing engagement.",
    features: [
      "Unlimited Campaigns",
      "Click Tracking",
      "Basic segments",
      "Integrations",
      "Up to 15K contacts",
      "500 inbound replies/mo",
    ],
    buttonText: "Get Essential",
    isPopular: false,
  },
  growth: {
    id: "growth",
    name: "Growth",
    credits: 45,
    description:
      "Best for businesses running campaigns and optimizing engagement.",
    features: [
      "Everything in Essential",
      "Dynamic Segments",
      "Delivery Optimizer",
      "AI Optimization",
      "Up to 80K contacts",
      "3,000 inbound replies/mo",
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
      "Smart URLs & Follow-ups",
      "Up to 200K contacts",
      "10,000 inbound replies/mo",
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
    essential?: { monthly: string; annual: string };
    growth: { monthly: string; annual: string };
    scale: { monthly: string; annual: string };
    enterprise?: { contact: string };
  }
> = {
  US: {
    growth: {
      monthly: "2zsDe0ocr37GDz7XZCeN5V6Po4H",
      annual: "2zsDe5ZYiDFueGsZWCDgRJ3NwjN",
    },
    scale: {
      monthly: "2zsDe439OcJwZj0hzJqAbjExRVX",
      annual: "2zsDe0LLERxQFhQesEJVdppLZJE",
    },
  },
  GB: {
    growth: {
      monthly: "33DkWqNFSzThu9at5xziUHCSaNJ",
      annual: "2zsDe3XTP1soIPumcMqwiYeFwPk",
    },
    scale: {
      monthly: "33DlMvXRcfQfvPddo2UXGj0UEOR",
      annual: "33DlK3XIxuRwTZiTAtVSxEYf58T",
    },
  },
  NG: {
    essential: {
      monthly: "2zsDdztr222s1H0DGMRy0vBym5i",
      annual: "2zsDe0wqaCAs50TmesKRWNvu18w",
    },
    growth: {
      monthly: "2zsDe4Z4j0Oe4QO8qvc5JIwt9F6",
      annual: "2zsDe26zBSJ6iwwM3iizanEC8n5",
    },
    scale: {
      monthly: "2zsDe4Mcgrkh1Y2z8R7r1QuGL0N",
      annual: "2zsDe1UG352MAHTIL5thSSo8JcZ",
    },
  },
  GH: {
    growth: {
      monthly: "2zsDe0adg7N20MmBKw552pgwUIw",
      annual: "2zsDe2URjqjMpwhNbQhrH3wtPIR",
    },
    scale: {
      monthly: "2zsDe6ECkM5V0zxZrdmhH4jVMxO",
      annual: "2zsDe6aA23xE4faYv48eg5mZbKr",
    },
  },
  ZA: {
    growth: {
      monthly: "33DoLpbY0jEKy2TKWO4DUldtnc9",
      annual: "2zsDdzQSQp9VymAoLbEbGCkTXL5",
    },
    scale: {
      monthly: "2zsDe2Vttqtpx5HsK0BjzTSp7RC",
      annual: "2zsDe06HvUl23SbdW3Go5c5MEKY",
    },
  },
};

export const defaultPlanPinPlatform = "smsapp";

// Helper to get pin for a given country code, plan id and billing cycle.
export function getPlanPin(
  countryCode: string | undefined,
  planId: "essential" | "growth" | "scale" | "enterprise",
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
  planId: "essential" | "growth" | "scale" | "enterprise",
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
    essential?: { monthly: number; annual: number };
    growth: { monthly: number; annual: number };
    scale: { monthly: number; annual: number };
  }
> = {
  US: {
    growth: { monthly: 30, annual: 300 },
    scale: { monthly: 60, annual: 600 },
  },
  GB: {
    growth: { monthly: 30, annual: 300 },
    scale: { monthly: 60, annual: 600 },
  },
  NG: {
    essential: { monthly: 15000, annual: 150000 },
    growth: { monthly: 45000, annual: 450000 },
    scale: { monthly: 85000, annual: 850000 },
  },
  GH: {
    growth: { monthly: 400, annual: 4000 },
    scale: { monthly: 800, annual: 8000 },
  },
  ZA: {
    growth: { monthly: 250, annual: 2500 },
    scale: { monthly: 1125, annual: 11250 },
  },
};

planCredits.default = planCredits.US;

// Return raw credits (number) for a given country/plan/billing. Falls back
// to `planTemplates` values multiplied by 1000 if no mapping exists.
export function getRawPlanCredits(
  countryCode: string | undefined,
  planId: "essential" | "growth" | "scale" | "enterprise",
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
  const formatted = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 0,
  }).format(amount);
  const symbol = currencyCode ? currencySymbols[currencyCode] || "" : "";
  return `${symbol}${formatted}`;
}

// High-level helper: returns the formatted credits string for display.
export function getFormattedPlanCredits(
  countryCode: string | undefined,
  planId: "essential" | "growth" | "scale" | "enterprise",
  billing: "monthly" | "annual",
  currencyCode?: string,
): string {
  const raw = getRawPlanCredits(countryCode, planId, billing);
  return formatCreditsWithCurrency(raw, currencyCode);
}
