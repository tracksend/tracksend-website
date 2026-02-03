import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoundersContent from "@/components/Solutions/FoundersContent";

export const metadata = {
  title: "Solutions for Founders - Tracksend",
  description:
    "Build and scale your startup with Tracksend. Reach customers efficiently with affordable, reliable messaging solutions designed for growing businesses.",
  openGraph: {
    title: "Solutions for Founders - Tracksend",
    description:
      "Build and scale your startup with Tracksend. Reach customers efficiently with affordable, reliable messaging solutions designed for growing businesses.",
    type: "website",
  },
  keywords: [
    "startup solutions",
    "customer communication",
    "growth marketing",
    "scalable messaging",
  ],
};

export default function FoundersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <FoundersContent />
      </main>
      <Footer />
    </>
  );
}
