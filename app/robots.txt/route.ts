import { NextResponse } from "next/server";

export function GET() {
  const content = `User-agent: *
Disallow:

Sitemap: https://tracksend.co/sitemap.xml
`;

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
