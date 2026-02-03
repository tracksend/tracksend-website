import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketersContent from "@/components/Solutions/MarketersContent";

export const metadata = {
  title: "Solutions for Marketers - Tracksend",
  description:
    "Execute powerful marketing campaigns across SMS, WhatsApp, and RCS with Tracksend. Personalize messaging, track performance, and drive conversions.",
  openGraph: {
    title: "Solutions for Marketers - Tracksend",
    description:
      "Execute powerful marketing campaigns across SMS, WhatsApp, and RCS with Tracksend. Personalize messaging, track performance, and drive conversions.",
    type: "website",
  },
  keywords: [
    "marketing campaigns",
    "SMS marketing",
    "WhatsApp marketing",
    "customer engagement",
  ],
};

export default function MarketersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <MarketersContent />
      </main>
      <Footer />
    </>
  );
}
