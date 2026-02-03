import { NextRequest, NextResponse } from "next/server";

// Mapping of country codes to country names
const countryCodeMap: Record<string, string> = {
  US: "United States",
  GB: "United Kingdom",
  NG: "Nigeria",
  GH: "Ghana",
  ZA: "South Africa",
};

// Mapping of country codes to currency codes
const countryCurrencyMap: Record<string, string> = {
  US: "USD",
  GB: "GBP",
  NG: "NGN",
  GH: "GHS",
  ZA: "ZAR",
};

export async function GET(request: NextRequest) {
  try {
    // Get client IP from headers
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      request.headers.get("cf-connecting-ip") ||
      "0.0.0.0";

    // Call MaxMind GeoIP2 API
    const geoResponse = await fetch(
      `https://geoip.maxmind.com/geoip/v2.1/city/${ip}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.MAXMIND_GEOIP_ACCOUNT_ID}:${process.env.MAXMIND_GEOIP_LICENSE_KEY}`,
          ).toString("base64")}`,
        },
      },
    );

    if (!geoResponse.ok) {
      throw new Error("Failed to fetch GeoIP data");
    }

    const geoData = await geoResponse.json();

    const countryCode = geoData.country?.iso_code || "US";
    const country =
      countryCodeMap[countryCode] ||
      geoData.country?.names?.en ||
      "United States";
    const currency = countryCurrencyMap[countryCode] || "USD";

    return NextResponse.json(
      {
        countryCode,
        currency,
        country,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("GeoIP API error:", error);
    // Return default location on error
    return NextResponse.json(
      {
        countryCode: "US",
        currency: "USD",
        country: "United States",
      },
      { status: 200 },
    );
  }
}
