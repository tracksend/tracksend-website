import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductManagersContent from "@/components/Solutions/ProductManagersContent";

export const metadata = {
  title: "Solutions for Product Managers - Tracksend",
  description:
    "Streamline user engagement and communication with Tracksend solutions designed for product managers. Launch campaigns, gather feedback, and drive adoption effortlessly.",
  openGraph: {
    title: "Solutions for Product Managers - Tracksend",
    description:
      "Streamline user engagement and communication with Tracksend solutions designed for product managers. Launch campaigns, gather feedback, and drive adoption effortlessly.",
    type: "website",
  },
  keywords: [
    "product management",
    "user engagement",
    "campaign management",
    "product communication",
  ],
};

export default function ProductManagersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ProductManagersContent />
      </main>
      <Footer />
    </>
  );
}
