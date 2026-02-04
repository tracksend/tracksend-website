"use client";

import React from "react";

const AgenciesContent: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* <div className="animate-in fade-in duration-700"> */}
      {/* Hero */}
      <section className="relative pt-12 pb-24 lg:pt-34 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 h-full w-1/3 bg-linear-to-l from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
              <span className="material-symbols-outlined text-sm">
                verified
              </span>{" "}
              For Agencies
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black leading-[1.1] tracking-tight text-slate-900 font-display">
              Launch high-performing campaigns for{" "}
              <span className="text-primary">every client</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              The all-in-one messaging platform built for agency scale. Increase
              retention and unlock new revenue with white-label solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="h-14 px-8 rounded-xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/25 hover:scale-[1.02] transition-all flex items-center gap-2">
                Partner with Tracksend{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="h-14 px-8 rounded-xl border border-slate-200 text-slate-900 font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-2">
                Book a demo{" "}
                <span className="material-symbols-outlined">
                  calendar_today
                </span>
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-400 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/${i + 10}/100/100`}
                    className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-slate-100"
                  />
                ))}
              </div>
              <p>Trusted by 500+ top-tier agencies</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-4xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-white rounded-2xl border border-slate-100 shadow-2xl p-6 overflow-hidden aspect-4/3">
              {/* Mock Dashboard UI */}
              <div className="flex flex-col h-full gap-4">
                <div className="h-10 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="w-32 h-2 bg-slate-100 rounded-full"></div>
                </div>
                <div className="flex gap-4 flex-1">
                  <div className="w-1/4 space-y-3">
                    <div className="h-10 bg-primary/10 rounded-lg"></div>
                    <div className="h-2 w-full bg-slate-50 rounded"></div>
                    <div className="h-2 w-3/4 bg-slate-50 rounded"></div>
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex-1 bg-slate-50 rounded-xl flex items-end gap-3 p-4">
                      {[40, 60, 45, 80, 55].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-primary rounded-t-sm transition-all duration-500 ease-out origin-bottom hover:brightness-90"
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="h-20 grid grid-cols-2 gap-4">
                      <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm"></div>
                      <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 font-display">
                Solving Agency Pain Points
              </h2>
              <p className="text-xl text-slate-500">
                The digital landscape is crowded. Your clients expect results,
                but traditional channels are becoming saturated.
              </p>
              <div className="space-y-6">
                <PointItem
                  icon="trending_up"
                  color="text-red-500"
                  title="Rising Ad Costs"
                  desc="CAC is skyrocketing on Meta and Google, squeezing agency margins."
                />
                <PointItem
                  icon="mail"
                  color="text-orange-500"
                  title="Low Email Engagement"
                  desc="Open rates are plummeting below 20%, making retention difficult."
                />
                <PointItem
                  icon="layers"
                  color="text-slate-500"
                  title="Platform Fatigue"
                  desc="Clients are tired of disjointed tools that don't talk to each other."
                />
              </div>
            </div>
            <div className="bg-surface-light rounded-3xl p-10 lg:p-14 border border-slate-100 relative overflow-hidden">
              <span className="material-symbols-outlined text-primary text-6xl mb-6">
                verified_user
              </span>
              <h3 className="text-2xl font-bold mb-4">
                Our Promise to Agencies
              </h3>
              <p className="text-2xl font-medium leading-relaxed text-slate-700 italic">
                "We help you turn ads into conversations. By integrating direct
                messaging into your funnels, you can bypass the inbox noise."
              </p>
              <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-black text-primary">98%</div>
                  <div className="text-xs font-bold uppercase text-slate-400">
                    Open Rates
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary">45%</div>
                  <div className="text-xs font-bold uppercase text-slate-400">
                    Conv. Lift
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary">10x</div>
                  <div className="text-xs font-bold uppercase text-slate-400">
                    ROI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-channel flow simulation */}
      <section className="py-24 bg-surface-light">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-4 font-display">
            Intelligent Cross-Channel Flows
          </h2>
          <p className="text-slate-500 text-lg mb-12">
            Combine Email, WhatsApp, and SMS for maximum coverage.
          </p>
          <div className="space-y-4">
            <FlowRow
              title="Welcome Series"
              steps={[
                { icon: "mail", label: "Email 1" },
                { icon: "schedule", label: "Wait 2d" },
                { icon: "sms", label: "SMS Nudge", active: true },
              ]}
            />
            <FlowRow
              title="Cart Abandon"
              steps={[
                { icon: "chat", label: "WhatsApp", active: true },
                { icon: "trending_flat", label: "No Reply?" },
                { icon: "mail", label: "Discount" },
              ]}
            />
            <FlowRow
              title="Review Gen"
              steps={[
                { icon: "shopping_bag", label: "Delivered" },
                { icon: "star", label: "Review Req", active: true },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-2xl font-bold text-slate-400 mb-12 uppercase tracking-widest">
            Agencies scaling with Tracksend
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <TestimonialCard
              quote="Before Tracksend, we struggled to prove ROI. Now, it's our most profitable service line. The attribution is flawless."
              name="Mark Davis"
              role="Founder, AdVantage"
              img="https://picsum.photos/seed/mark/100/100"
            />
            <TestimonialCard
              quote="The RCS features are a game changer. Being able to send carousels directly to phones has doubled our CTRs."
              name="Elena Rodriguez"
              role="Head of CRM, PixelPerfect"
              img="https://picsum.photos/seed/elena/100/100"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,white_0%,transparent_70%)] opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-display tracking-tight">
            Ready to scale your agency revenue?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join the platform that turns messaging into a performance channel.
            Start your free account today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="h-14 px-10 rounded-xl bg-primary text-white font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20">
              Become a Partner
            </button>
            <button className="h-14 px-10 rounded-xl border-2 border-slate-700 text-white font-bold text-lg hover:bg-slate-800 transition-all">
              Talk to Partnerships
            </button>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            No credit card required for partner sandbox.
          </p>
        </div>
      </section>
    </div>
  );
};

const PointItem = ({ icon, color, title, desc }: any) => (
  <div className="flex gap-4">
    <div
      className={`shrink-0 size-12 rounded-full bg-slate-50 flex items-center justify-center ${color}`}
    >
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-900">{title}</h4>
      <p className="text-slate-500">{desc}</p>
    </div>
  </div>
);

const FlowRow = ({ title, steps }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-6 group hover:border-primary/50 transition-colors">
    <div className="w-40 text-left font-bold text-slate-900 shrink-0">
      {title}
    </div>
    <div className="flex-1 flex items-center gap-4 w-full justify-start overflow-x-auto pb-2 md:pb-0">
      {steps.map((s: any, i: number) => (
        <React.Fragment key={i}>
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${s.active ? "bg-primary/10 border border-primary/20 text-primary font-bold shadow-sm" : "bg-slate-50 text-slate-500 border border-transparent"}`}
          >
            <span className="material-symbols-outlined text-base">
              {s.icon}
            </span>{" "}
            {s.label}
          </div>
          {i < steps.length - 1 && (
            <div className="h-px w-8 flow-line opacity-50 shrink-0"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const TestimonialCard = ({ quote, name, role, img }: any) => (
  <div className="p-10 rounded-3xl border border-slate-100 bg-surface-light/30 hover:bg-white hover:shadow-xl transition-all duration-300">
    <div className="text-primary text-6xl font-serif mb-4 leading-none">“</div>
    <p className="text-slate-700 text-lg mb-8 font-medium leading-relaxed">
      {quote}
    </p>
    <div className="flex items-center gap-4">
      <img
        src={img}
        className="size-12 rounded-full border border-slate-200"
        alt={name}
      />
      <div>
        <div className="font-bold text-slate-900">{name}</div>
        <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
          {role}
        </div>
      </div>
    </div>
  </div>
);

export default AgenciesContent;
