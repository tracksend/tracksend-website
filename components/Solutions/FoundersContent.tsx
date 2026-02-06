"use client";

import React from "react";
import CTASection from "../CTASection";

const FoundersContent: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              Built for early-stage & growth
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 mb-8 font-display">
              Scale your startup with{" "}
              <span className="text-primary">automated</span> engagement
            </h1>
            <p className="text-l text-slate-500 leading-relaxed mb-10 max-w-lg">
              The messaging infrastructure that helps founders automate sales,
              qualify leads, and support customers without increasing headcount.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-5 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all text-lg">
                Launch your platform
              </button>
              <button className="px-10 py-5 border-2 border-slate-100 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all text-lg">
                View Demo
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="bg-white border border-slate-100 rounded-3xl shadow-3xl p-4 overflow-hidden relative">
              <div className="aspect-4/3 flex flex-col gap-4">
                <div className="h-10 border-b border-slate-50 flex items-center justify-between px-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                  </div>
                  <div className="w-24 h-2 bg-slate-50 rounded-full"></div>
                </div>
                <div className="flex-1 flex gap-4 p-2">
                  <div className="w-1/3 space-y-4">
                    <div className="h-12 bg-primary/5 rounded-xl border border-primary/20"></div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-slate-50 rounded"></div>
                      <div className="h-2 w-2/3 bg-slate-50 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white border border-slate-50 rounded-2xl shadow-inner relative overflow-hidden flex flex-col p-6 justify-end">
                    <svg
                      className="absolute inset-0 w-full h-full opacity-20"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 80 Q25 40 50 60 T100 20"
                        fill="none"
                        stroke="#2db8c8"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 w-fit animate-bounce">
                      <span className="material-symbols-outlined text-primary">
                        trending_up
                      </span>
                      <span className="font-bold text-sm text-slate-800">
                        +1360% Conversions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-teal-light/40 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-peach/20 rounded-full blur-3xl opacity-30 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Founder Promise */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl font-extrabold text-slate-900 font-display">
              Founders don't have time for manual follow-ups
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              Building a startup is hard. Every lead that slips through the
              cracks is wasted capital.
            </p>
            <div className="space-y-8">
              <FounderListItem
                icon="timer_off"
                title="Slow lead response"
                desc="Wait times over 5 minutes kill 80% of sales opportunities."
              />
              <FounderListItem
                icon="person_remove"
                title="Lean team burnout"
                desc="Manual messaging doesn't scale as your user base grows."
              />
            </div>
          </div>
          <div className="bg-teal-light/20 rounded-[2.5rem] p-12 lg:p-16 border border-teal-light/30 text-slate-800">
            <span className="material-symbols-outlined text-primary text-6xl mb-8">
              auto_awesome
            </span>
            <h3 className="text-3xl font-bold mb-6">Our Promise to Founders</h3>
            <p className="text-2xl font-medium leading-relaxed italic opacity-90">
              "We provide the automated bridge between your ads and your bank
              account. Stop managing messages and start managing your growth."
            </p>
            <div className="mt-12 flex gap-12">
              <div>
                <div className="text-4xl font-black text-primary">24/7</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
                  Response Time
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary">3x</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
                  Lead Volume
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Outcomes */}
      <section className="py-24 bg-surface-light">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 font-display">
            Core Outcomes for Growth
          </h2>
          <p className="text-slate-500 text-lg mb-16">
            Focus on the product while we handle the conversation.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <OutcomeCard
              icon="psychology"
              title="Qualify on Autopilot"
              desc="Let AI chatbots handle initial triage. Only spend time on founders ready to close."
            />
            <OutcomeCard
              icon="payments"
              title="Shorten Sales Cycles"
              desc="Use WhatsApp to send payment links and contracts directly to pockets."
            />
            <OutcomeCard
              icon="hub"
              title="Platform Integration"
              desc="Connect to CRM, Stripe, and Ad accounts in one click to unify your data."
            />
          </div>
        </div>
      </section>

      {/* Rich Media Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative justify-center flex">
            <div className="w-75 h-152.5 bg-slate-900 rounded-[3.5rem] border-8 border-slate-900 shadow-3xl overflow-hidden relative">
              <div className="w-24 h-6 bg-slate-900 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20"></div>
              <div className="w-full h-full bg-[#f8f9fa] flex flex-col pt-8">
                <div className="bg-white p-4 flex items-center gap-3 border-b border-slate-100 shadow-sm">
                  <div className="size-8 bg-primary rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                    TS
                  </div>
                  <div>
                    <div className="text-[10px] font-bold">Tracksend Start</div>
                    <div className="text-[8px] text-green-500 font-bold">
                      Verified
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="bg-white p-3 rounded-xl rounded-tl-none text-[11px] text-slate-600 shadow-sm max-w-[85%] border border-slate-100">
                    Ready to see how we scale your founder-led sales?
                  </div>
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100">
                    <img
                      src="https://picsum.photos/seed/p/300/150"
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-3">
                      <div className="text-[11px] font-bold mb-1">
                        Founder Playbook v2
                      </div>
                      <p className="text-[9px] text-slate-400 mb-3">
                        Download the guide for 2024.
                      </p>
                      <button className="w-full py-2 bg-primary text-white rounded-lg text-[10px] font-bold">
                        Get Playbook
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Stats */}
            <div className="absolute -bottom-8 w-full max-w-lg bg-white/90 backdrop-blur-md rounded-2xl border border-slate-100 p-6 shadow-2xl grid grid-cols-4 gap-4">
              <StatItem val="98%" label="Open Rates" />
              <StatItem val="45%" label="CTR" />
              <StatItem val="Zero" label="Dev" />
              <StatItem val="24/7" label="AI" />
            </div>
          </div>
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peach/10 text-accent-orange text-[10px] font-bold uppercase tracking-widest">
              Proprietary Tech
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 font-display">
              Rich Media is your unfair advantage
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              Standard SMS is noisy. Our rich media carousels and verified
              sender profiles ensure your brand looks like a unicorn from day
              one.
            </p>
            <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              See the capabilities{" "}
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
};

const FounderListItem = ({ icon, title, desc }: any) => (
  <div className="flex items-start gap-4">
    <div className="size-10 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-slate-400 text-xl">
        {icon}
      </span>
    </div>
    <div>
      <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
      <p className="text-slate-500">{desc}</p>
    </div>
  </div>
);

const OutcomeCard = ({ icon, title, desc }: any) => (
  <div className="bg-white p-10 rounded-3xl border border-slate-50 hover:border-primary/50 transition-all hover:shadow-2xl group text-left">
    <div className="size-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

const StatItem = ({ val, label }: any) => (
  <div className="text-center">
    <div className="text-xl font-bold text-slate-900">{val}</div>
    <div className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">
      {label}
    </div>
  </div>
);

export default FoundersContent;
