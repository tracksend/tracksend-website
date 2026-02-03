import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgenciesContent from "@/components/Solutions/AgenciesContent";

export const metadata = {
  title: "Solutions for Agencies - Tracksend",
  description:
    "Empower your agency with Tracksend's multi-channel communication platform. Manage client campaigns, scale operations, and deliver exceptional results across SMS, WhatsApp, and RCS.",
  openGraph: {
    title: "Solutions for Agencies - Tracksend",
    description:
      "Empower your agency with Tracksend's multi-channel communication platform. Manage client campaigns, scale operations, and deliver exceptional results across SMS, WhatsApp, and RCS.",
    type: "website",
  },
  keywords: [
    "agency solutions",
    "campaign management",
    "multi-channel messaging",
    "client management",
  ],
};

export default function AgenciesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <AgenciesContent />
      </main>
      <Footer />
    </>
  );
}
