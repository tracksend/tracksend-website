import { headers } from "next/headers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingContent from "@/components/PricingContent";
import {
  basePrices,
  messageChargesPerCountry,
  planTemplates,
} from "@/lib/pricingConstants";

interface LocationData {
  countryCode: string;
  currency: string;
  country: string;
}

async function getLocationFromGeoIP(ip: string): Promise<LocationData> {
  // Combined implementation:
  // - If env GEOIP_PREFERRED=ipapi use ip-api
  // - Otherwise try MaxMind (GET /city/{ip}) and fall back to ip-api on error
  const preferred = (process.env.GEOIP_PREFERRED || "ipapi").toLowerCase();
  // const preferred = (process.env.GEOIP_PREFERRED || "maxmind").toLowerCase();

  if (preferred === "ipapi") {
    // console.log("getLocationFromGeoIP: preferred=ipapi, using ip-api for", ip);
    return await getLocationFromIpApi(ip);
  }

  if (!process.env.GEOIP_ACCOUNT_ID || !process.env.GEOIP_LICENSE_KEY) {
    console.log(
      "getLocationFromGeoIP: MaxMind credentials missing, falling back to ip-api for",
      ip,
    );
    return await getLocationFromIpApi(ip);
  }

  try {
    // console.log("getLocationFromGeoIP: trying MaxMind for", ip);
    const auth = Buffer.from(
      `${process.env.GEOIP_ACCOUNT_ID}:${process.env.GEOIP_LICENSE_KEY}`,
    ).toString("base64");
    const url = `https://geoip.maxmind.com/geoip/v2.1/city/${encodeURIComponent(ip)}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: `Basic ${auth}` },
    });
    if (!response.ok) {
      const text = await response.text().catch(() => "<no-body>");
      console.error(
        "getLocationFromGeoIP: MaxMind response not ok",
        response.status,
        text,
      );
      throw new Error("GeoIP (MaxMind) request failed");
    }
    const data = await response.json();
    const countryCode = data.country?.iso_code || "US";
    const currencyMap: Record<string, string> = {
      US: "USD",
      GB: "GBP",
      NG: "NGN",
      GH: "GHS",
      ZA: "ZAR",
    };
    const currency = currencyMap[countryCode] || "USD";
    const countryNames: Record<string, string> = {
      US: "United States",
      GB: "United Kingdom",
      NG: "Nigeria",
      GH: "Ghana",
      ZA: "South Africa",
    };
    // console.log("getLocationFromGeoIP: MaxMind succeeded for", ip, countryCode);
    return {
      countryCode,
      currency,
      country: countryNames[countryCode] || countryCode,
    };
  } catch (err) {
    console.error(
      "getLocationFromGeoIP: MaxMind failed, falling back to ip-api:",
      String(err),
    );
    return await getLocationFromIpApi(ip);
  }
}

async function getLocationFromIpApi(ip: string): Promise<LocationData> {
  try {
    // console.log("getLocationFromIpApi: requesting ip-api for", ip);
    const url = `http://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,message,country,countryCode`;
    const res = await fetch(url, { method: "GET" });
    if (!res.ok) {
      const text = await res.text().catch(() => "<no-body>");
      console.error("getLocationFromIpApi: response not ok", res.status, text);
      throw new Error("ip-api request failed");
    }
    const body = await res.json();
    if (body.status !== "success") {
      console.error(
        "getLocationFromIpApi: ip-api returned error",
        body.message,
        body,
      );
      throw new Error(body.message || "ip-api error");
    }
    const countryCode = body.countryCode || "US";
    const countryNames: Record<string, string> = {
      US: "United States",
      GB: "United Kingdom",
      NG: "Nigeria",
      GH: "Ghana",
      ZA: "South Africa",
    };
    const currencyMap: Record<string, string> = {
      US: "USD",
      GB: "GBP",
      NG: "NGN",
      GH: "GHS",
      ZA: "ZAR",
    };
    const currency = currencyMap[countryCode] || "USD";
    console.log("getLocationFromIpApi: succeeded for", ip, countryCode);
    return {
      countryCode,
      currency,
      country: countryNames[countryCode] || countryCode,
    };
  } catch (err) {
    console.error(
      "getLocationFromIpApi: failed, using fallback US:",
      String(err),
    );
    return { countryCode: "US", currency: "USD", country: "United States" };
  }
}

function extractClientIP(headersList: Headers): string {
  const forwarded = headersList.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();

  const realIp = headersList.get("x-real-ip");
  if (realIp) return realIp;

  const cfIp = headersList.get("cf-connecting-ip");
  if (cfIp) return cfIp;

  return "1.1.1.1"; // Default fallback
}

export default async function PricingPage() {
  const isDev = process.env.NODE_ENV === "development";
  const headersList = await headers();
  const clientIP = isDev ? "8.8.8.8" : extractClientIP(headersList);
  const location = await getLocationFromGeoIP(clientIP);

  console.log("Determined location:", location);

  // Get prices for the current country
  const countryKey = location.country?.toLowerCase() || "united states";
  const countryPrices =
    (basePrices as any)[countryKey] || (basePrices as any)["united states"];

  // Get message rates for the current country
  const countryRates =
    (messageChargesPerCountry as any)[countryKey] ||
    (messageChargesPerCountry as any)["united states"];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <PricingContent
          location={location}
          countryPrices={countryPrices}
          countryRates={countryRates}
          planTemplates={planTemplates}
        />
      </main>
      <Footer />
    </div>
  );
}

export const metadata = {
  title: "Pricing - Tracksend",
  description:
    "Transparent pricing for SMS, WhatsApp, and RCS. Pay-as-you-go messaging with developer-friendly APIs and predictable billing.",
  openGraph: {
    title: "Pricing - Tracksend",
    description:
      "Transparent pricing for SMS, WhatsApp, and RCS. Pay-as-you-go messaging with developer-friendly APIs and predictable billing.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pricing - Tracksend",
    description:
      "Transparent pricing for SMS, WhatsApp, and RCS. Pay-as-you-go messaging with developer-friendly APIs and predictable billing.",
  },
};
