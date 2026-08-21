import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Check,
  Church,
  CircleDollarSign,
  CloudUpload,
  HeartHandshake,
  Hospital,
  Landmark,
  Megaphone,
  MessageCircleMore,
  Rocket,
  School,
  Send,
  ShoppingCart,
  Store,
  Truck,
  UserPlus,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Audience = {
  title: string;
  description?: string;
  icon: LucideIcon;
};

export type CampaignLandingPageProps = {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  benefits: string[];
  primaryCta: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  sectionTitle: string;
  sectionDescription: string;
  features: Feature[];
  audienceTitle: string;
  audienceDescription: string;
  audiences: Audience[];
  finalTitle: string;
  finalDescription: string;
};

export const campaignIcons = {
  Building2,
  Check,
  Church,
  CircleDollarSign,
  CloudUpload,
  HeartHandshake,
  Hospital,
  Landmark,
  Megaphone,
  MessageCircleMore,
  Rocket,
  School,
  Send,
  ShoppingCart,
  Store,
  Truck,
  UserPlus,
  Users,
  Workflow,
  Zap,
};

export default function CampaignLandingPage({
  eyebrow,
  title,
  highlightedTitle,
  description,
  heroImage,
  heroImageAlt,
  benefits,
  primaryCta,
  primaryHref = "https://app.tracksend.co/register",
  secondaryCta = "Book a demo",
  secondaryHref = "https://cal.com/tracksend-discover/tdc",
  sectionTitle,
  sectionDescription,
  features,
  audienceTitle,
  audienceDescription,
  audiences,
  finalTitle,
  finalDescription,
}: CampaignLandingPageProps) {
  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <section className="relative isolate pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_10%_70%,rgba(249,115,22,0.08),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-black tracking-[0.16em] text-cyan-700 uppercase">
              <Zap className="size-4" />
              {eyebrow}
            </div>
            <h1 className="max-w-3xl text-4xl leading-[1.05] font-black tracking-tight sm:text-5xl lg:text-6xl">
              {title} <span className="text-primary">{highlightedTitle}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
              {description}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-4 font-black text-navy shadow-lg shadow-cyan-200 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                {primaryCta} <ArrowRight className="size-5" />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-800 transition hover:border-cyan-300 hover:bg-cyan-50"
                >
                  {secondaryCta}
                </Link>
              )}
            </div>
            <p className="mt-4 text-xs font-semibold text-slate-400">
              No credit card required · Set up in minutes
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-cyan-100/60 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-cyan-100 bg-white p-3 shadow-2xl shadow-slate-200/70">
              <div className="aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-slate-50">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  width={1264}
                  height={848}
                  priority
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{sectionTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{sectionDescription}</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map(({ title: featureTitle, description: featureDescription, icon: Icon }, index) => (
              <article key={featureTitle} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                    <Icon className="size-7" />
                  </span>
                  <span className="text-sm font-black text-slate-200">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-black">{featureTitle}</h3>
                <p className="mt-3 leading-7 text-slate-500">{featureDescription}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-black tracking-[0.18em] text-cyan-600 uppercase">Built for your workflow</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">{audienceTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{audienceDescription}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map(({ title: audienceName, description: audienceCopy, icon: Icon }) => (
                <article key={audienceName} className="group rounded-3xl border border-slate-100 p-6 transition hover:border-cyan-200 hover:bg-cyan-50/40">
                  <Icon className="size-7 text-cyan-600 transition group-hover:scale-110" />
                  <h3 className="mt-5 text-lg font-black">{audienceName}</h3>
                  {audienceCopy && <p className="mt-2 leading-6 text-slate-500">{audienceCopy}</p>}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-navy-dark px-6 py-16 text-center text-white sm:px-12 lg:py-20">
          <div className="absolute -top-24 -left-24 size-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 size-72 rounded-full bg-orange-500/15 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">{finalTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">{finalDescription}</p>
            <Link
              href={primaryHref}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-black text-navy transition hover:scale-105"
            >
              {primaryCta} <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
