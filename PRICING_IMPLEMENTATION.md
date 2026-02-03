# Pricing Page - Server-Side Geolocation Implementation

## Overview

The pricing page has been converted to use server-side rendering with MaxMind GeoIP2 integration to detect user location and display country-specific pricing without any "flash" of incorrect data.

## Architecture

### Components

#### 1. **Server Component: `app/pricing/page.tsx`**

- Async server component that runs on the server
- Detects user's IP from request headers (x-forwarded-for, x-real-ip, cf-connecting-ip)
- Calls MaxMind GeoIP2 API to determine country and currency
- Fetches country-specific prices and message rates from `lib/pricingConstants.ts`
- Passes all data to the client component `PricingContent`

**Key Functions:**

- `getLocationFromGeoIP(ip)` - Fetches location from MaxMind API
- `extractClientIP(headersList)` - Extracts client IP from request headers

#### 2. **Client Component: `components/PricingContent.tsx`**

- Manages billing cycle toggle (monthly/annual)
- Renders all pricing UI sections:
  - Hero section with location selector and billing cycle toggle
  - Pricing grid with 3 plans (Growth, Scale, Enterprise)
  - Transparent usage rates table (SMS, RCS, WhatsApp)
  - Billing process explanation
  - FAQ section

**Props:**

- `location: LocationData` - Country code, currency, country name
- `countryPrices` - Price object for detected country
- `countryRates` - Message rates for detected country
- `planTemplates` - Plan definitions from constants

### Data Sources

#### `lib/pricingConstants.ts`

Exports:

- `basePrices` - Per-country pricing for Growth/Scale plans (monthly & annual)
- `messageChargesPerCountry` - Per-country SMS/RCS/WhatsApp rates
- `planTemplates` - Plan definitions (growth, scale, enterprise)
- `currencySymbols` - Currency code to symbol mapping

## Setup Requirements

### 1. Environment Variables

Create or update `.env.local` with MaxMind credentials:

```bash
GEOIP_ACCOUNT_ID=your_maxmind_account_id
GEOIP_LICENSE_KEY=your_maxmind_license_key
```

Get credentials at: https://www.maxmind.com/en/geoip2/city

### 2. MaxMind API Details

- **Endpoint:** `https://geoip.maxmind.com/geoip/v2.1/city/json`
- **Method:** POST
- **Auth:** Basic authentication (account_id:license_key)
- **Payload:** `{ "ip": "client_ip" }`

### 3. Supported Countries (Currently)

- United States (USD)
- United Kingdom (GBP)
- Nigeria (NGN)
- Ghana (GHS)
- South Africa (ZAR)

_Note: All countries fall back to USD and United States if not supported_

## Data Flow

```
User visits /pricing
        ↓
Server component extracts client IP from headers
        ↓
Calls MaxMind GeoIP2 API
        ↓
Gets country code & maps to currency
        ↓
Looks up country-specific prices/rates from constants
        ↓
Passes location + prices to client component
        ↓
Client component renders pricing UI with correct country data
        ↓
No flash! Correct data from initial page load
```

## Advantages Over Client-Side Geolocation

✅ **No Flash:** Country data loaded before page renders
✅ **Accurate:** Server-side IP detection is more reliable
✅ **SSR-Friendly:** Works with server-side rendering and static generation
✅ **No Client Libraries:** Reduced JavaScript bundle size
✅ **Security:** Sensitive API keys stay on server

## Next Steps

1. **Update Pricing Values:**
   - Edit `lib/pricingConstants.ts`
   - Update `basePrices` with actual country-specific pricing
   - Update `messageChargesPerCountry` with actual rates

2. **Test the Implementation:**

   ```bash
   pnpm dev
   # Visit http://localhost:3000/pricing
   # Verify correct country is detected and pricing displays
   ```

3. **Deploy:**
   - Set MaxMind environment variables in your deployment platform (Vercel, etc.)
   - Deploy with `pnpm build && pnpm start`

## Troubleshooting

### "Falling back to US pricing"

- Check `.env.local` has valid GEOIP_ACCOUNT_ID and GEOIP_LICENSE_KEY
- Verify MaxMind API credentials are correct
- Check that country code is mapped in `getLocationFromGeoIP` function

### Build errors

- Run `pnpm build` to check for TypeScript errors
- Verify all imports in `PricingContent` are correct
- Ensure `pricingConstants.ts` exports all required objects

### Pricing page shows wrong country

- Check network tab: Is GeoIP API being called?
- Verify response from MaxMind has correct `country.iso_code`
- Check if country is in the mapping in `getLocationFromGeoIP`
