interface LocationData {
  countryCode: string
  currency: string
  country: string
}

// Mapping of country codes to currency codes
const countryToCurrency: Record<string, string> = {
  US: 'USD',
  GB: 'GBP',
  CA: 'CAD',
  AU: 'AUD',
  NZ: 'NZD',
  JP: 'JPY',
  CN: 'CNY',
  IN: 'INR',
  NG: 'NGN',
  GH: 'GHS',
  KE: 'KES',
  ZA: 'ZAR',
  BR: 'BRL',
  MX: 'MXN',
  FR: 'EUR',
  DE: 'EUR',
  IT: 'EUR',
  ES: 'EUR',
  NL: 'EUR',
  SE: 'SEK',
  CH: 'CHF',
  SG: 'SGD',
  HK: 'HKD',
  AE: 'AED',
  SA: 'SAR',
  IL: 'ILS',
}

const countryNames: Record<string, string> = {
  US: 'United States',
  GB: 'United Kingdom',
  CA: 'Canada',
  AU: 'Australia',
  NZ: 'New Zealand',
  JP: 'Japan',
  CN: 'China',
  IN: 'India',
  NG: 'Nigeria',
  GH: 'Ghana',
  KE: 'Kenya',
  ZA: 'South Africa',
  BR: 'Brazil',
  MX: 'Mexico',
  FR: 'France',
  DE: 'Germany',
  IT: 'Italy',
  ES: 'Spain',
  NL: 'Netherlands',
  SE: 'Sweden',
  CH: 'Switzerland',
  SG: 'Singapore',
  HK: 'Hong Kong',
  AE: 'United Arab Emirates',
  SA: 'Saudi Arabia',
  IL: 'Israel',
}

export async function getLocationFromIP(ip?: string): Promise<LocationData> {
  try {
    // Use the IP from request, or call external API
    const url = 'https://ipapi.co/json/'
    const response = await fetch(url, {
      next: { revalidate: 86400 },
    })

    if (!response.ok) {
      console.warn('Failed to fetch geolocation, using defaults')
      return {
        countryCode: 'US',
        currency: 'USD',
        country: 'United States',
      }
    }

    const data = (await response.json()) as {
      country_code?: string
      country_name?: string
    }
    const countryCode = data.country_code || 'US'
    const currency = countryToCurrency[countryCode] || 'USD'
    const countryName = countryNames[countryCode] || data.country_name || 'United States'

    return {
      countryCode,
      currency,
      country: countryName,
    }
  } catch (error) {
    console.error('Geolocation error:', error)
    return {
      countryCode: 'US',
      currency: 'USD',
      country: 'United States',
    }
  }
}

export function getCurrencySymbol(currency: string): string {
  const symbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    CNY: '¥',
    INR: '₹',
    NGN: '₦',
    GHS: '₵',
    KES: 'KSh',
    ZAR: 'R',
    BRL: 'R$',
    MXN: '$',
    CAD: 'C$',
    AUD: 'A$',
    NZD: 'NZ$',
    SEK: 'kr',
    CHF: 'CHF',
    SGD: 'S$',
    HKD: 'HK$',
    AED: 'د.إ',
    SAR: '﷼',
    ILS: '₪',
  }
  return symbols[currency] || currency
}
