import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, HandHeart, Megaphone, MessageCircleMore, MessagesSquare, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Church Care & Connection | Tracksend",
  description: "Use WhatsApp and SMS to reach church members directly with announcements, reminders, prayer updates, and fundraising campaigns.",
  alternates: { canonical: "https://tracksend.co/campaigns/churches" },
};

const useCases = [
  { title: "Church Announcements", description: "Keep everyone in the loop with instant updates about church news and essential information.", icon: Megaphone },
  { title: "Service & Program Reminders", description: "Ensure high attendance by sending timely reminders for weekly services and special programs.", icon: CalendarCheck },
  { title: "Prayer & Bible Study", description: "Nurture spiritual growth with daily or weekly reminders for study groups and prayer chains.", icon: MessagesSquare },
  { title: "Conference Updates", description: "Manage large events smoothly with broadcast messages to all attendees.", icon: Users },
  { title: "Giving & Fundraising", description: "Securely and clearly communicate campaign goals and provide easy links for congregation support.", icon: HandHeart },
];

export default function ChurchesCampaignPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-white text-slate-900">
        <section className="relative isolate pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.17),transparent_34%),radial-gradient(circle_at_8%_72%,rgba(249,115,22,0.08),transparent_28%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-black tracking-[0.16em] text-cyan-700 uppercase">
                <MessageCircleMore className="size-4" /> Church care & connection
              </div>
              <h1 className="max-w-3xl text-4xl leading-[1.05] font-black tracking-tight sm:text-5xl lg:text-6xl">
                Stop Letting Important Church Messages <span className="text-primary">Get Lost</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
                WhatsApp + SMS lets you reach members directly instead of relying entirely on WhatsApp groups...
              </p>
              <Link href="https://app.tracksend.co/register" className="mt-10 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-4 font-black text-navy shadow-lg shadow-cyan-200 transition hover:-translate-y-0.5 hover:shadow-xl">
                Help Us Reach Our Members Better <ArrowRight className="size-5" />
              </Link>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-cyan-100/60 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-cyan-100 bg-white p-3 shadow-2xl shadow-slate-200/70">
                <Image src="/campaigns/church-care.jpg" alt="Church leader using direct messaging to care for a congregation" width={1264} height={848} priority className="h-auto w-full rounded-[1.4rem]" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-100 bg-slate-50 py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500"><MessagesSquare className="size-6" /></span>
                <span className="text-sm font-black tracking-[0.16em] text-orange-500 uppercase">The challenge</span>
              </div>
              <div className="mt-8 space-y-3 opacity-65">
                {["Good morning everyone...", "Please remember that...", "Can someone share the...", "Sunday service update..."].map((message) => (
                  <div key={message} className="rounded-2xl bg-slate-100 px-5 py-4 text-sm text-slate-500">{message}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Stop Relying Only on WhatsApp Groups</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                WhatsApp groups can get noisy. Members mute them, and important updates get buried in the chatter. Ensure your message is seen by sending it directly to their personal inbox.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black tracking-[0.18em] text-cyan-600 uppercase">Reach Your Members</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">One Message. <span className="text-primary">WhatsApp + SMS.</span></h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Use Tracksend to communicate and reach hundreds or thousands of members without manually sending messages one by one.</p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map(({ title, description, icon: Icon }, index) => (
                <article key={title} className={`rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                  <span className="flex size-13 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600"><Icon className="size-6" /></span>
                  <h3 className="mt-6 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-500">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 lg:px-8 lg:pb-28">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-navy-dark px-6 py-16 text-center text-white sm:px-12 lg:py-20">
            <div className="absolute -top-24 -left-24 size-72 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 size-72 rounded-full bg-orange-500/15 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Ready to Communicate With Your Members Better?</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Click the link below to sign up and we&apos;ll show you how Tracksend can help.</p>
              <Link href="https://app.tracksend.co/register" className="mt-9 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-black text-navy transition hover:scale-105">
                Get Started <ArrowRight className="size-5" />
              </Link>
              <p className="mt-4 text-sm font-semibold text-slate-400">It takes less than 2 minutes.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
