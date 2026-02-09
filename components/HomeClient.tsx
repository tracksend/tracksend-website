"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CampaignPreview } from "@/components/CampaignPreview";
import CTASection from "./CTASection";

export default function HomeClient() {
  const [activeTab, setActiveTab] = useState<"sms" | "whatsapp">("sms");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    "Hi there! Your order #12345 has been shipped. Track it here: trck.sn/x9y8z",
  );

  const featureData = [
    {
      title: "Launch campaigns",
      desc: "Full tracking for SMS, WhatsApp, and RCS. Know exactly who clicked and when.",
      icon: "rocket_launch",
      colorClass: "bg-primary",
      bgClass: "bg-tint-cyan/20 border-primary/10",
    },
    {
      title: "Convert replies",
      desc: "Use AI to qualify inbound leads and handle orders at scale.",
      icon: "forum",
      colorClass: "bg-secondary",
      bgClass: "bg-white border-gray-100",
    },
    {
      title: "Follow up",
      desc: "Trigger sequences based on clicks, ignored messages, or number of days.",
      icon: "sync_alt",
      colorClass: "bg-navy-dark",
      bgClass: "bg-gray-50 border-gray-100",
    },
    {
      title: "Manage conversations",
      desc: "One unified inbox for all channels. Collaborate across your entire organization.",
      icon: "inbox",
      colorClass: "bg-secondary/80",
      bgClass: "bg-tint-coral/20 border-secondary/10",
    },
  ];

  const brandLogos = [
    { name: "Score", domain: "scorethebusiness.com" },
    { name: "Medplus", domain: "medplusnig.com" },
    { name: "Jobberman", domain: "jobberman.com" },
    { name: "Renmoney", domain: "renmoney.com" },
    { name: "Customer.io", domain: "customer.io" },
    { name: "YellowCard", domain: "yellowcard.io" },
    { name: "Redtag", domain: "/logos/redtag.png" },
  ];

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-225 flex flex-col pt-20 overflow-hidden bg-navy pb-24">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            alt="Hero Background"
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-linear-to-t from-navy via-transparent to-transparent"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full grow flex flex-col justify-center gap-12 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 mb-6 backdrop-blur-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                Next Gen Engagement
              </span>
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-6xl mb-6 tracking-tight">
              Turn every message <br /> into an{" "}
              <span className="text-gradient-cyan">opportunity.</span>
            </h1>
            <p className="text-lg text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              Send SMS, rich SMS with images and videos, and WhatsApp messages
              with engagement tracking, automated follow-ups, and AI-driven
              replies — all from one simple platform
            </p>
          </div>
          <div className="mx-auto w-full max-w-5xl">
            <CampaignPreview />
          </div>
        </div>
      </section>

      {/* Rest of the page unchanged (logo marquee, features, use cases, integrations, testimonials, CTA) */}
      <section className="bg-white py-16 relative overflow-hidden border-y border-gray-100 marquee-container">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 mb-10 text-center">
          <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
            Trusted by the world's most innovative teams
          </h2>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-16 lg:gap-24 items-center px-4">
            {brandLogos.map((brand, idx) => (
              <div
                key={`brand-1-${idx}`}
                className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mx-4"
              >
                <img
                  className="h-10 w-auto object-contain max-w-40"
                  src={
                    brand.name === "Redtag"
                      ? brand.domain
                      : `https://cdn.brandfetch.io/domain/${brand.domain}/w/800/h/978/logo?c=1idjwiaJVKk9cUBgNgH`
                  }
                  alt={brand.name}
                  loading="lazy"
                  onError={(e) => {
                    console.log({ error: e });

                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${brand.name}&background=f3f4f6&color=121c36&bold=true&length=2`;
                  }}
                />
              </div>
            ))}
            {brandLogos.map((brand, idx) => (
              <div
                key={`brand-2-${idx}`}
                className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mx-4"
              >
                <img
                  className="h-10 w-auto object-contain max-w-40"
                  src={
                    brand.name === "Redtag"
                      ? brand.domain
                      : `https://cdn.brandfetch.io/domain/${brand.domain}/w/800/h/978/logo?c=1idjwiaJVKk9cUBgNgH`
                  }
                  alt={brand.name}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${brand.name}&background=f3f4f6&color=121c36&bold=true&length=2`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-dark tracking-tight mb-4">
              Everything you need to grow with messaging
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Scalable infrastructure designed for marketing, product, and CX
              teams.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureData.map((feature, i) => (
              <div
                key={i}
                className={`p-8 rounded-4xl border hover:shadow-float transition-all group cursor-default ${feature.bgClass}`}
              >
                <div
                  className={`w-12 h-12 ${feature.colorClass} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                >
                  <span className="material-symbols-outlined">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-main/70 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-#f6e0d9 bg-tint-coral/30 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-coral opacity-20 pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl text-left">
              <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">
                Solutions by goals
              </h2>
              <h3 className="text-4xl font-extrabold text-navy-dark tracking-tight">
                High-conversion growth strategies.
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mb-4">
                  Sales Auto
                </span>
                <h4 className="text-lg font-bold text-navy-dark mb-2">
                  Capture Leads
                </h4>
                <p className="text-text-main/80 text-sm leading-relaxed mb-6">
                  Handle orders at scale and capture leads from ads via WhatsApp
                </p>
                <a
                  className="text-green-600 font-bold text-sm flex items-center hover:gap-2 transition-all"
                  href="/solutions/marketers"
                >
                  Learn more{" "}
                  <span className="material-symbols-outlined text-sm ml-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
                  Ecommerce
                </span>
                <h4 className="text-lg font-bold text-navy-dark mb-2">
                  Cart Recovery
                </h4>
                <p className="text-text-main/80 text-sm leading-relaxed mb-6">
                  Win back 25%• of lost carts With timed multi-channel
                  reminders.
                </p>
                <a
                  className="text-blue-600 font-bold text-sm flex items-center hover:gap-2 transition-all"
                  href="/solutions/marketers"
                >
                  Learn more{" "}
                  <span className="material-symbols-outlined text-sm ml-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 mb-4">
                  Marketing
                </span>
                <h4 className="text-lg font-bold text-navy-dark mb-2">
                  Product Launches
                </h4>
                <p className="text-text-main/80 text-sm leading-relaxed mb-6">
                  Send rich promo messages and automate follow-ups on SMS and
                  WhatsApp.
                </p>
                <a
                  className="text-purple-600 font-bold text-sm flex items-center hover:gap-2 transition-all"
                  href="/solutions/product-managers"
                >
                  Learn more{" "}
                  <span className="material-symbols-outlined text-sm ml-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10 mb-4">
                  CX
                </span>
                <h4 className="text-lg font-bold text-navy-dark mb-2">
                  Renewals & Retention
                </h4>
                <p className="text-text-main/80 text-sm leading-relaxed mb-6">
                  Automate renewal reminders and provide sales support via
                  WhatsApp.
                </p>
                <a
                  className="text-orange-600 font-bold text-sm flex items-center hover:gap-2 transition-all"
                  href="/solutions/product-managers"
                >
                  Learn more{" "}
                  <span className="material-symbols-outlined text-sm ml-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-text-muted uppercase tracking-[0.3em] mb-4">
              Connectivity
            </h2>
            <h3 className="text-3xl font-black text-navy">
              Seamlessly integrates with your stack
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center">
            {[
              {
                name: "WooCommerce",
                domain: "woocommerce.com",
              },
              {
                name: "Freshdesk",
                domain: "freshdesk.com",
              },
              {
                name: "Freshsales",
                domain: "freshdesk.com",
              },
              {
                name: "Mailchimp",
                logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg",
              },
              {
                name: "Customer.io",
                domain: "customer.io",
              },
            ].map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 group cursor-pointer"
              >
                <div className="h-12 w-full flex items-center justify-center px-4">
                  <img
                    src={
                      brand.logo
                        ? brand.logo
                        : `https://cdn.brandfetch.io/domain/${brand.domain}/w/400/h/400?c=1idjwiaJVKk9cUBgNgH`
                    }
                    alt={brand.name}
                    className="h-full w-auto object-contain max-h-10 group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="mt-4 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-navy">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`https://picsum.photos/seed/dev${i}/100`}
                      alt="Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-navy leading-tight">
                  Built for developers
                </p>
                <p className="text-sm text-text-muted">
                  REST API, Webhooks, and SDKs.
                </p>
              </div>
            </div>
            <button className="px-8 py-3 bg-navy text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors">
              <a
                href="https://tracksend.readme.io/reference/overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore API Docs
              </a>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 relative overflow-hidden">
        <div className="absolute -left-20 top-0 text-[12rem] font-black text-slate-50 pointer-events-none select-none leading-none opacity-50">
          “
        </div>
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center relative z-10">
          <div className="mb-10 flex justify-center">
            <div className="flex gap-1 text-secondary">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className="material-symbols-outlined fill-current"
                >
                  star
                </span>
              ))}
            </div>
          </div>
          <blockquote className="text-3xl md:text-4xl font-extrabold text-navy leading-tight tracking-tight mb-12">
            “Tracksend transformed how we track and act on our marketing
            campaigns. Integrations like SMS with our Prestashop stack meant we
            met — and often exceeded — our KPIs. Their support team is quick and
            helpful, making implementation stress-free.”
          </blockquote>
          <div className="flex flex-col items-center">
            <h5 className="font-black text-navy text-lg">Dami</h5>
            <p className="text-sm font-bold text-text-muted uppercase tracking-widest">
              Head of Marketing, Medplus
            </p>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
