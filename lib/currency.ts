// Hardcoded fallback exchange rates (USD to other currencies)
// These are approximate rates as a fallback when API is unavailable
const FALLBACK_RATES: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 149.5,
  CNY: 7.24,
  INR: 83.12,
  NGN: 1546,
  GHS: 12.5,
  KES: 157.5,
  ZAR: 18.96,
  BRL: 4.97,
  MXN: 20.14,
  CAD: 1.36,
  AUD: 1.53,
  NZD: 1.67,
  SEK: 10.5,
  CHF: 0.88,
  SGD: 1.35,
  HKD: 7.81,
  AED: 3.67,
  SAR: 3.75,
  ILS: 3.65,
}

interface ExchangeRates {
  rates: Record<string, number>
  timestamp: number
}

let cachedRates: ExchangeRates | null = null
const CACHE_DURATION = 3600000 // 1 hour in milliseconds

export async function getExchangeRates(): Promise<Record<string, number>> {
  // Check if we have cached rates that are still valid
  if (cachedRates && Date.now() - cachedRates.timestamp < CACHE_DURATION) {
    console.log('[v0] Using cached exchange rates')
    return cachedRates.rates
  }

  try {
    const apiKey = process.env.OPEN_EXCHANGE_RATES_API_KEY
    if (!apiKey) {
      console.warn('[v0] No API key provided, using fallback rates')
      cachedRates = {
        rates: FALLBACK_RATES,
        timestamp: Date.now(),
      }
      return FALLBACK_RATES
    }

    const response = await fetch(
      `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=USD`,
      {
        next: { revalidate: 3600 },
      }
    )

    if (!response.ok) {
      console.warn('[v0] Exchange rate API failed, using fallback')
      cachedRates = {
        rates: FALLBACK_RATES,
        timestamp: Date.now(),
      }
      return FALLBACK_RATES
    }

    const data = (await response.json()) as {
      rates: Record<string, number>
    }

    cachedRates = {
      rates: data.rates,
      timestamp: Date.now(),
    }

    return data.rates
  } catch (error) {
    console.error('[v0] Error fetching exchange rates:', error)
    cachedRates = {
      rates: FALLBACK_RATES,
      timestamp: Date.now(),
    }
    return FALLBACK_RATES
  }
}

export async function convertPrice(
  usdPrice: number,
  targetCurrency: string
): Promise<number> {
  const rates = await getExchangeRates()
  const rate = rates[targetCurrency] || 1
  return Math.round(usdPrice * rate * 100) / 100
}

export function formatPrice(
  price: number,
  currencyCode: string,
  locale: string = 'en-US'
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price)
  } catch {
    return `${price} ${currencyCode}`
  }
}
