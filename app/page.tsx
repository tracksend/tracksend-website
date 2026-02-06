import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Tracksend — Turn messages into opportunities",
  description:
    "Turn every SMS & WhatsApp message into a sales engine—AI-optimized, multimedia SMS & proven ROI.",
  openGraph: {
    title: "Tracksend — Turn messages into opportunities",
    description:
      "Turn every SMS & WhatsApp message into a sales engine—AI-optimized, multimedia SMS & proven ROI.",
    url: "https://tracksend.co/",
    siteName: "Tracksend",
    images: [
      {
        url: "https://tracksend.co/og-image.png",
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
    title: "Tracksend — Turn messages into opportunities",
    description:
      "Turn every SMS & WhatsApp message into a sales engine—AI-optimized, multimedia SMS & proven ROI.",
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
