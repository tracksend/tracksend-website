import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MessageCircleMore, RefreshCw, UserPlus } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Customer Messaging & Engagement | Tracksend",
  description: "Attract new customers and bring existing customers back with targeted WhatsApp and SMS campaigns from Tracksend.",
  alternates: { canonical: "https://tracksend.co/campaigns/customer-engagement" },
};

const growthOptions = [
  {
    eyebrow: "Acquisition",
    title: "Get New Customers",
    description: "Reach potential customers in your target location and turn them into enquiries, bookings, visits or sales.",
    benefits: ["Targeted location reach", "Inbound WhatsApp enquiries", "High conversion offers"],
    icon: UserPlus,
    isCyan: true,
  },
  {
    eyebrow: "Retention",
    title: "Bring Customers Back",
    description: "Reconnect with existing and past customers with offers, reminders and campaigns that give them a reason to come back.",
    benefits: ["Automated re-engagement", "Personalized SMS & WhatsApp", "Promos & visit reminders"],
    icon: RefreshCw,
    isCyan: false,
  },
];

const steps = [
  { title: "Tell us about your business", description: "Tell us what you sell, where you operate and what you want to achieve." },
  { title: "We create the campaign", description: "We identify the right audience and create the message and offer." },
  { title: "We reach your customers", description: "We run your WhatsApp and SMS campaigns for you." },
  { title: "You get the results", description: "See how many people were reached, responded, booked, visited or took action." },
];

export default function CustomerEngagementCampaignPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-[#f5fafb] text-slate-900">
        <section className="relative isolate pt-36 pb-24 lg:pt-48 lg:pb-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.12),transparent_40%)]" />
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-black tracking-[0.16em] text-cyan-700 uppercase">
                <MessageCircleMore className="size-4" /> Customer Messaging & Engagement
              </div>
              <h1 className="mx-auto max-w-4xl text-4xl leading-[1.05] font-black tracking-tight sm:text-5xl lg:text-6xl">
                Get More Customers. <span className="text-primary">Bring Existing Customers Back.</span>
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
                Tracksend helps businesses attract new customers and get existing customers to buy, book, or visit again — using targeted WhatsApp and SMS campaigns.
              </p>
              <Link href="https://tsn.pub/jui" className="mt-10 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-black text-navy shadow-lg shadow-cyan-200 transition hover:-translate-y-0.5 hover:shadow-xl">
                Book a Call <ArrowRight className="size-5" />
              </Link>
              <p className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-slate-500">
                <Check className="size-4 text-cyan-600" /> No marketing team required • Fast setup
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Choose what you need</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Whether your goal is discovering fresh buyers or maximizing the lifetime value of existing contacts, Tracksend provides targeted messaging that converts.
              </p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {growthOptions.map(({ eyebrow, title, description, benefits, icon: Icon, isCyan }) => (
                <article key={title} className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
                  <p className={isCyan ? "inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-black tracking-[0.12em] text-cyan-600 uppercase" : "inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-black tracking-[0.12em] text-orange-500 uppercase"}>{eyebrow}</p>
                  <span className={isCyan ? "mt-5 flex size-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600" : "mt-5 flex size-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500"}>
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-2xl font-black sm:text-3xl">{title}</h3>
                  <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
                  <ul className="mt-7 space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3 font-semibold text-slate-700">
                        <span className={isCyan ? "flex size-5 items-center justify-center rounded-full bg-cyan-100 text-cyan-700" : "flex size-5 items-center justify-center rounded-full bg-orange-100 text-orange-600"}>
                          <Check className="size-3.5" strokeWidth={3} />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">How It Works</h2>
              <p className="mt-4 text-lg text-slate-600">Four simple steps to predictable, automated messaging growth.</p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ title, description }, index) => (
                <article key={title} className="relative rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
                  <span className="text-3xl font-black text-cyan-500">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-6 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-500">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8 lg:pb-32">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white px-7 py-14 text-center shadow-xl shadow-slate-200/60 sm:px-12 lg:px-20 lg:py-18">
            <div className="absolute -top-24 -left-24 size-72 rounded-full bg-cyan-100/70 blur-3xl" />
            <div className="relative">
              <p className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-xs font-black tracking-[0.14em] text-cyan-600 uppercase">Simple & Transparent</p>
              <p className="mt-6 text-4xl font-black sm:text-5xl">Start From <span className="text-cyan-500">₦10,000/Month</span></p>
              <ul className="mx-auto mt-8 max-w-xl space-y-4 text-lg font-semibold text-slate-600">
                {["No marketing team required.", "No complicated setup.", "Just tell us what you want to achieve and we'll handle the campaigns."].map((benefit) => (
                  <li key={benefit} className="flex items-start justify-center gap-3">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-navy"><Check className="size-3.5" strokeWidth={3} /></span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link href="https://tsn.pub/jui" className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-black text-navy shadow-lg shadow-cyan-200 transition hover:scale-105">
                Book a Call <ArrowRight className="size-5" />
              </Link>
              <p className="mt-4 text-sm font-semibold text-slate-500">Instant onboarding • Cancel anytime</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
