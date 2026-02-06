import { NextResponse } from "next/server";

const SITE_URL = process.env.SITE_URL || "https://tracksend.co";

export async function GET() {
  const staticUrls = [
    ``,
    `/pricing`,
    `/resources`,
    `/solutions/product-managers`,
    `/solutions/marketers`,
    `/solutions/agencies`,
    `/solutions/founders`,
    `/privacy`,
    `/terms`,
  ];

  const urls = staticUrls
    .map((path) => {
      return `<url><loc>${SITE_URL}${path}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
