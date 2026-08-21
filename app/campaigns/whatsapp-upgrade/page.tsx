import type { Metadata } from "next";
import CampaignLandingPage, { campaignIcons } from "@/components/CampaignLandingPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Move Beyond the WhatsApp Broadcast Limit | Tracksend",
  description: "Scale WhatsApp campaigns, connect your team, automate follow-ups, and reach more customers with Tracksend.",
  alternates: { canonical: "https://tracksend.co/campaigns/whatsapp-upgrade" },
};

export default function WhatsAppUpgradeCampaignPage() {
  return (
    <>
      <Navbar />
      <main>
        <CampaignLandingPage
          eyebrow="Scale your WhatsApp reach"
          title="Stop being restricted by the"
          highlightedTitle="256-contact broadcast limit"
          description="Your customer list is growing. Upgrade from the WhatsApp Business app and turn WhatsApp into a scalable customer communication channel."
          heroImage="/campaigns/whatsapp-scale.jpg"
          heroImageAlt="Business messaging network expanding beyond limits"
          benefits={["Send campaigns to more customers", "Let multiple teammates manage one number", "Connect WhatsApp to your business tools", "Automate customer messages and follow-ups"]}
          primaryCta="Upgrade your WhatsApp"
          sectionTitle="What happens next?"
          sectionDescription="We help you move from a limited broadcast setup to a scalable WhatsApp workflow."
          features={[
            { title: "Create your account", description: "Tell us about your business and communication needs.", icon: campaignIcons.UserPlus },
            { title: "Connect WhatsApp", description: "Securely link your WhatsApp Business number with guided setup.", icon: campaignIcons.Workflow },
            { title: "Launch at scale", description: "Follow the onboarding guide and send your first approved campaign.", icon: campaignIcons.Rocket },
          ]}
          audienceTitle="Built for businesses that have outgrown broadcasts"
          audienceDescription="Use WhatsApp for campaigns, updates, support, and automated conversations across your operation."
          audiences={[
            { title: "E-commerce", description: "Automate order updates and recover abandoned carts.", icon: campaignIcons.ShoppingCart },
            { title: "Schools", description: "Share announcements with parents and staff instantly.", icon: campaignIcons.School },
            { title: "Hospitals & clinics", description: "Send appointment reminders and health updates.", icon: campaignIcons.Hospital },
            { title: "Financial services", description: "Provide secure updates and manage client enquiries.", icon: campaignIcons.Landmark },
            { title: "Logistics", description: "Coordinate deliveries and send real-time tracking updates.", icon: campaignIcons.Truck },
            { title: "Service businesses", description: "Manage bookings and coordinate field teams.", icon: campaignIcons.Building2 },
          ]}
          finalTitle="Reach more customers without the broadcast ceiling"
          finalDescription="Answer a few quick questions and our team will recommend the best WhatsApp setup for your business."
        />
      </main>
      <Footer />
    </>
  );
}
