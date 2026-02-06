"use client";

import React from "react";
import CTASection from "../CTASection";

const ProductManagersContent: React.FC = () => {
  return (
    <div className="bg-white animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="section-padding pt-32 pb-24 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                  Product Manager Solutions
                </div>
                {/* <h4 className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Product Manager Solutions</h4> */}
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.05] text-brand-navy">
                  Build product messaging users{" "}
                  <span className="text-primary">actually</span> notice
                </h1>
                <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                  Send transactional alerts, lifecycle nudges, and rich
                  notifications across SMS, WhatsApp, and RCS. Reduce
                  engineering bottlenecks and unify product communication.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-gray-200 text-brand-navy font-bold rounded-full hover:bg-gray-50 transition-all">
                  Book Demo
                </button>
              </div>
            </div>
            <div className="flex-1 relative w-full">
              <div className="relative w-full aspect-square rounded-3xl bg-gray-50 flex items-center justify-center p-8 lg:p-12 border border-gray-100 shadow-inner">
                {/* Simple Architectural Diagram */}
                <svg
                  className="w-full h-full max-w-md text-brand-navy"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Lines */}
                  <path
                    d="M200 120V180"
                    stroke="#2db9c8"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M120 200H180"
                    stroke="#2db9c8"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M220 200H280"
                    stroke="#2db9c8"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M200 220V280"
                    stroke="#2db9c8"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />

                  {/* Central Hub */}
                  <rect
                    x="160"
                    y="160"
                    width="80"
                    height="80"
                    rx="12"
                    fill="white"
                    stroke="#2db9c8"
                    strokeWidth="2"
                    className="shadow-lg"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="15"
                    fill="#2db9c8"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M200 192V208M192 200H208"
                    stroke="#2db9c8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Outer Nodes */}
                  {/* Top: Trigger */}
                  <rect
                    x="160"
                    y="60"
                    width="80"
                    height="60"
                    rx="8"
                    fill="white"
                    stroke="#eeeeee"
                    strokeWidth="2"
                  />
                  <text
                    x="200"
                    y="95"
                    textAnchor="middle"
                    fill="#121c36"
                    className="text-[10px] font-bold"
                  >
                    EVENT API
                  </text>

                  {/* Left: SMS */}
                  <rect
                    x="40"
                    y="170"
                    width="80"
                    height="60"
                    rx="8"
                    fill="white"
                    stroke="#eeeeee"
                    strokeWidth="2"
                  />
                  <text
                    x="80"
                    y="205"
                    textAnchor="middle"
                    fill="#666"
                    className="text-[10px] font-bold"
                  >
                    SMS
                  </text>

                  {/* Right: WhatsApp */}
                  <rect
                    x="280"
                    y="170"
                    width="80"
                    height="60"
                    rx="8"
                    fill="white"
                    stroke="#eeeeee"
                    strokeWidth="2"
                  />
                  <text
                    x="320"
                    y="205"
                    textAnchor="middle"
                    fill="#666"
                    className="text-[10px] font-bold"
                  >
                    WHATSAPP
                  </text>

                  {/* Bottom: RCS */}
                  <rect
                    x="160"
                    y="280"
                    width="80"
                    height="60"
                    rx="8"
                    fill="white"
                    stroke="#eeeeee"
                    strokeWidth="2"
                  />
                  <text
                    x="200"
                    y="315"
                    textAnchor="middle"
                    fill="#666"
                    className="text-[10px] font-bold"
                  >
                    RCS RICH
                  </text>
                </svg>

                {/* Floating Metrics Overlay */}
                <div className="absolute bottom-12 right-12 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">
                        chat_bubble
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Live Campaign
                      </p>
                      <p className="text-sm font-bold text-brand-navy">
                        Onboarding Nudge #4
                      </p>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[72%]"></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[10px] font-bold text-gray-400">
                      72% CTR
                    </span>
                    <span className="text-[10px] font-bold text-gray-400">
                      +12% vs last week
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="section-padding bg-brand-teal/10">
        <div className="max-w-[1280px] mx-auto pt-24 pb-12 px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
                Unify product + marketing messaging
              </h2>
              <p className="text-lg text-gray-600 max-w-lg">
                Stop choosing between developer agility and marketing control.
                Tracksend brings both teams into a single flow for transactional
                and lifecycle comms.
              </p>
              <div className="grid gap-6 pt-4">
                <div className="flex gap-5 items-start">
                  <div className="size-10 shrink-0 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined">
                      auto_fix_high
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy">
                      No-code Template Editor
                    </h4>
                    <p className="text-gray-500">
                      Create and edit templates quickly — no Jira tickets, no
                      deploys.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="size-10 shrink-0 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined">api</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy">
                      Scalable API Endpoint
                    </h4>
                    <p className="text-gray-500">
                      Support multiple channels. Scale instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-[#eeeeee]">
                <div className="space-y-8">
                  <div className="flex justify-between items-end">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400">
                      Implementation Efficiency
                    </h4>
                    <span className="text-3xl lg:text-4xl font-extrabold text-primary">
                      85%
                    </span>
                  </div>
                  <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                  <div className="flex justify-between items-end">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400">
                      User Retention Lift
                    </h4>
                    <span className="text-3xl lg:text-4xl font-extrabold text-brand-purple">
                      2.4x
                    </span>
                  </div>
                  <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-purple w-[92%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section-padding bg-brand-peach/10">
        <div className="max-w-[1280px] mx-auto pt-24 pb-12 px-6 lg:px-10">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl font-extrabold text-brand-navy">
              Core platform features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to build robust, scalable messaging flows that
              your users will love.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#eeeeee] shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
              <div className="size-14 rounded-full bg-brand-teal/30 flex items-center justify-center text-teal-700 mb-8">
                <span className="material-symbols-outlined text-3xl">
                  notifications_active
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                Transactional alerts
              </h3>
              <p className="text-gray-500 leading-relaxed flex-grow">
                Send mission-critical alerts for payments, logins, and shipping
                updates with 99.9% deliverability.
              </p>
              <a
                className="mt-8 flex items-center gap-2 font-bold text-primary"
                href="#"
              >
                Learn more{" "}
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#eeeeee] shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
              <div className="size-14 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple mb-8">
                <span className="material-symbols-outlined text-3xl">
                  smart_toy
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                AI-driven support flows
              </h3>
              <p className="text-gray-500 leading-relaxed flex-grow">
                Automate complex queries with intelligent chatbots that
                understand intent across every channel.
              </p>
              <a
                className="mt-8 flex items-center gap-2 font-bold text-primary"
                href="#"
              >
                Learn more{" "}
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#eeeeee] shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
              <div className="size-14 rounded-full bg-brand-peach/30 flex items-center justify-center text-orange-700 mb-8">
                <span className="material-symbols-outlined text-3xl">
                  touch_app
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                Behavioral nudges
              </h3>
              <p className="text-gray-500 leading-relaxed flex-grow">
                Trigger messages based on real-time app actions. Reach users
                where they are, when it matters.
              </p>
              <a
                className="mt-8 flex items-center gap-2 font-bold text-primary"
                href="#"
              >
                Learn more{" "}
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Device Mockup Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto pt-24 pb-12 px-6 lg:px-10 flex flex-col items-center text-center">
          <div className="space-y-6 mb-16 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
              Deliver rich experiences, not just text
            </h2>
            <p className="text-xl text-gray-500">
              Move beyond plain SMS. Use WhatsApp and RCS to send rich cards,
              quick replies, and secure payment confirmations.
            </p>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-72 md:w-80 h-[580px] md:h-[640px] bg-black rounded-[3rem] md:rounded-[3.5rem] p-3 md:p-4 shadow-2xl border-[8px] md:border-[10px] border-brand-navy">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-6 md:h-8 bg-brand-navy rounded-b-2xl md:rounded-b-3xl z-20"></div>
              <div className="w-full h-full bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex flex-col relative pt-10 md:pt-12 p-3 md:p-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-8 md:size-10 rounded-full bg-brand-teal/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg md:text-xl">
                      account_balance
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-xs md:text-sm text-brand-navy">
                      FinBank Verified
                    </p>
                    <p className="text-[9px] md:text-[10px] text-gray-400">
                      Official Channel
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-none p-3 md:p-4 space-y-4">
                  <div className="aspect-video bg-white rounded-xl flex items-center justify-center border border-gray-100 shadow-sm">
                    <div className="text-center">
                      <div className="size-8 md:size-10 rounded-full bg-green-50 text-green-500 mx-auto flex items-center justify-center mb-1">
                        <span className="material-symbols-outlined text-sm md:text-base">
                          check_circle
                        </span>
                      </div>
                      <p className="text-[9px] md:text-[10px] font-bold text-gray-400">
                        SECURE TRANSACTION
                      </p>
                    </div>
                  </div>
                  <div className="text-left space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-brand-navy">
                        Debit Alert: $142.00
                      </p>
                      <span className="bg-blue-50 text-blue-600 text-[8px] font-bold px-1.5 py-0.5 rounded">
                        NEW
                      </span>
                    </div>
                    <p className="text-[10px] md:text-[11px] text-gray-500">
                      Your debit card was used at 'Store NYC'.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="w-full py-2 bg-white border border-primary/20 text-primary font-bold text-[9px] md:text-[10px] rounded-lg">
                      View Receipt
                    </button>
                    <button className="w-full py-2 bg-white border border-red-100 text-red-500 font-bold text-[9px] md:text-[10px] rounded-lg">
                      Report Fraud
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 -left-20 -translate-y-1/2 size-64 bg-brand-teal/30 rounded-full blur-[100px]"></div>
            <div className="absolute -z-10 top-1/2 -right-20 -translate-y-1/2 size-64 bg-brand-purple/20 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </section>

      {/* Lifecycle & Integrations */}
      <section className="section-padding bg-brand-purple/5">
        <div className="max-w-[1280px] mx-auto pt-24 pb-12 px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-20 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
                Master the user lifecycle
              </h2>
              <p className="text-xl text-gray-600">
                Sync with your favorite tools. Tracksend integrates deeply with
                your existing marketing and commerce stack.
              </p>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="size-14 shrink-0 rounded-2xl bg-white flex items-center justify-center text-brand-purple shadow-sm">
                    <span className="material-symbols-outlined text-3xl">
                      rocket_launch
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-brand-navy">
                      Onboarding Flows
                    </h4>
                    <p className="text-gray-500">
                      Guide new users to their first "Aha!" moment with
                      well-timed WhatsApp prompts.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="size-14 shrink-0 rounded-2xl bg-white flex items-center justify-center text-brand-purple shadow-sm">
                    <span className="material-symbols-outlined text-3xl">
                      autorenew
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-brand-navy">
                      Subscription Recovery
                    </h4>
                    <p className="text-gray-500">
                      Automate failed payment recovery with high-urgency RCS
                      notifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="logo-grid-item">
                    <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
                <div className="logo-grid-item bg-primary/5 border-primary/20 grayscale-0">
                  <span className="text-primary font-bold text-sm">
                    50+ More
                  </span>
                </div>
              </div>
              <div className="mt-8 text-center lg:text-left">
                <p className="text-sm font-bold text-brand-purple">
                  Built-in integrations for Customer.io, Klaviyo, WooCommerce,
                  Freshsales, and Mailchimp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      {/* <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto pt-24 pb-12 px-6 lg:px-10 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-navy tracking-tighter">
              Ready to upgrade your product messaging?
            </h2>
            <p className="text-xl text-gray-500">
              Join 500+ product teams delivering modern communication
              experiences at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <button className="px-10 py-5 bg-primary text-white font-extrabold rounded-full text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                Get Started
              </button>
              <button className="px-10 py-5 border border-gray-200 text-brand-navy font-extrabold rounded-full text-lg hover:bg-gray-50 transition-all">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ProductManagersContent;
