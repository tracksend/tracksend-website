import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Tracksend — SMS and WhatsApp Marketing Platform",
  description:
    "Send SMS and WhatsApp messages that converts.",
  openGraph: {
    title: "Tracksend — SMS and WhatsApp Marketing Platform",
    description:
      "Send SMS and WhatsApp messages that converts.",
    url: "https://tracksend.co/",
    siteName: "Tracksend",
    images: [
      {
        url: "https://tracksend.co/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Tracksend — messaging growth platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tracksend — SMS and WhatsApp Marketing Platform",
    description:
      "Send SMS and WhatsApp messages that converts.",
    site: "@tracksend",
  },
  alternates: {
    canonical: "https://tracksend.co/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Home() {
  return <HomeClient />;
}
