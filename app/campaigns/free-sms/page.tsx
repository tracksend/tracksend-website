import type { Metadata } from "next";
import CampaignLandingPage, { campaignIcons } from "@/components/CampaignLandingPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Get 100 Free SMS for Your Business | Tracksend",
  description: "Create your Tracksend account and send your first 100 business SMS messages free.",
  alternates: { canonical: "https://tracksend.co/campaigns/free-sms" },
};

export default function FreeSmsCampaignPage() {
  return (
    <>
      <Navbar />
      <main>
        <CampaignLandingPage
          eyebrow="100 messages on us"
          title="Get 100 free SMS for"
          highlightedTitle="your business"
          description="Reach customers in seconds with reliable bulk SMS. Perfect for promotions, reminders, updates, and the campaigns that keep your business moving."
          heroImage="/campaigns/free-sms.jpg"
          heroImageAlt="Tracksend free SMS campaign preview"
          benefits={["Fast message delivery", "Easy contact uploads", "Pay only for what you send", "Simple campaign reporting"]}
          primaryCta="Claim your 100 free SMS"
          sectionTitle="Send your first campaign in three simple steps"
          sectionDescription="No complicated onboarding. Import your audience, write your message, and start reaching customers."
          features={[
            { title: "Sign up", description: "Create your free Tracksend account in less than a minute.", icon: campaignIcons.UserPlus },
            { title: "Upload contacts", description: "Securely import the customer list you already use.", icon: campaignIcons.CloudUpload },
            { title: "Send your campaign", description: "Draft your message, choose your audience, and send immediately.", icon: campaignIcons.Send },
          ]}
          audienceTitle="Useful in every customer-facing business"
          audienceDescription="From appointment reminders to flash sales, Tracksend gives teams a direct and dependable way to communicate."
          audiences={[
            { title: "Schools", icon: campaignIcons.School },
            { title: "Hospitals & clinics", icon: campaignIcons.Hospital },
            { title: "E-commerce", icon: campaignIcons.ShoppingCart },
            { title: "Logistics", icon: campaignIcons.Truck },
            { title: "SMEs", icon: campaignIcons.Store },
            { title: "Financial services", icon: campaignIcons.Landmark },
            { title: "Religious Bodies", icon: campaignIcons.Church },
            { title: "Non-profit", icon: campaignIcons.HeartHandshake },
            { title: "Professional Services", icon: campaignIcons.Building2 },
            { title: "Events", icon: campaignIcons.Megaphone },
          ]}
          finalTitle="Ready to reach more customers?"
          finalDescription="Open your free account today and turn your first 100 SMS messages into real conversations."
        />
      </main>
      <Footer />
    </>
  );
}
