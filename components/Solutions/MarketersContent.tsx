"use client";

import React, { useState } from "react";
import CTASection from "../CTASection";
// import { GoogleGenAI } from "@google/genai";

const MarketersContent: React.FC = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [optimizedMessage, setOptimizedMessage] = useState("");
  const [isOptimizing, setIsOptimizing] = useState(false);

  // const optimizeMessage = async () => {
  //   if (!inputMessage.trim()) return;
  //   setIsOptimizing(true);
  //   try {
  //     const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  //     const response = await ai.models.generateContent({
  //       model: 'gemini-3-flash-preview',
  //       contents: `You are a world-class growth marketer. Optimize this message for maximum CTR on WhatsApp/SMS. Keep it punchy, include emojis, and a clear call to action. Message: "${inputMessage}"`,
  //       config: {
  //         systemInstruction: "You specialize in short-form mobile copywriting that drives conversions.",
  //         temperature: 0.8,
  //       },
  //     });
  //     setOptimizedMessage(response.text || 'Failed to optimize. Try again!');
  //   } catch (error) {
  //     console.error("Optimization failed", error);
  //     setOptimizedMessage("Unable to connect to AI. Please check your configuration.");
  //   } finally {
  //     setIsOptimizing(false);
  //   }
  // };

  return (
    <div className="bg-white text-deep-navy animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="section-padding pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              Marketing Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-deep-navy">
              Turn messaging into a{" "}
              <span className="text-primary">predictable growth</span> channel
            </h1>
            <p className="mt-8 text-lg text-gray-500 max-w-lg leading-relaxed">
              Connect with customers on the channels they actually use. SMS,
              WhatsApp, and RCS automation built for marketing teams.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-primary text-white h-14 px-8 rounded-full font-bold text-base shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                <a href="https://app.tracksend.co/register">Get Started</a>
              </button>
              <button className="border-2 border-border-gray text-deep-navy h-14 px-8 rounded-full font-bold text-base hover:bg-gray-50 transition-colors">
                <a href="https://tracksend.as.me/schedule/9cf8d404">
                  Book Demo
                </a>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-border-gray bg-gray-50 p-8 lg:p-12 shadow-inner relative z-10 flex items-center justify-center">
              {/* Funnel/Growth Diagram */}
              <svg
                className="w-full h-full max-w-sm"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Horizontal Flow Line */}
                <path d="M40 150H360" stroke="#eeeeee" strokeWidth="2" />

                {/* Nodes with increasing engagement indicators */}
                {/* Node 1: Awareness */}
                <g transform="translate(40, 150)">
                  <circle
                    cx="0"
                    cy="0"
                    r="12"
                    fill="white"
                    stroke="#2db9c8"
                    strokeWidth="2"
                  />
                  <rect
                    x="-30"
                    y="25"
                    width="60"
                    height="30"
                    rx="4"
                    fill="white"
                    stroke="#eeeeee"
                    strokeWidth="1"
                  />
                  <text
                    x="0"
                    y="44"
                    textAnchor="middle"
                    fill="#666"
                    className="text-[8px] font-bold"
                  >
                    REACH
                  </text>
                  <path
                    d="M-10 -40 L0 -20 L10 -40"
                    stroke="#2db9c8"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                  />
                </g>

                {/* Node 2: Engagement */}
                <g transform="translate(145, 150)">
                  <circle
                    cx="0"
                    cy="0"
                    r="16"
                    fill="white"
                    stroke="#2db9c8"
                    strokeWidth="2"
                  />
                  <rect
                    x="-35"
                    y="25"
                    width="70"
                    height="30"
                    rx="4"
                    fill="white"
                    stroke="#eeeeee"
                    strokeWidth="1"
                  />
                  <text
                    x="0"
                    y="44"
                    textAnchor="middle"
                    fill="#666"
                    className="text-[8px] font-bold"
                  >
                    CLICK (15%)
                  </text>
                  <path
                    d="M-15 -60 L0 -30 L15 -60"
                    stroke="#2db9c8"
                    strokeWidth="2"
                    strokeOpacity="0.5"
                  />
                </g>

                {/* Node 3: Conversion */}
                <g transform="translate(255, 150)">
                  <circle
                    cx="0"
                    cy="0"
                    r="20"
                    fill="white"
                    stroke="#2db9c8"
                    strokeWidth="2"
                  />
                  <rect
                    x="-35"
                    y="25"
                    width="70"
                    height="30"
                    rx="4"
                    fill="white"
                    stroke="#eeeeee"
                    strokeWidth="1"
                  />
                  <text
                    x="0"
                    y="44"
                    textAnchor="middle"
                    fill="#666"
                    className="text-[8px] font-bold"
                  >
                    CONVERT
                  </text>
                  <path
                    d="M-20 -80 L0 -40 L20 -80"
                    stroke="#2db9c8"
                    strokeWidth="3"
                  />
                </g>

                {/* Growth Curve Line */}
                <path
                  d="M40 140 C 145 120, 255 60, 360 20"
                  stroke="#2db9c8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                />
                <text
                  x="360"
                  y="15"
                  textAnchor="end"
                  fill="#2db9c8"
                  className="text-[10px] font-bold"
                >
                  ROI LIFT
                </text>
              </svg>

              <div className="absolute top-4 right-4 bg-white p-3 rounded-xl shadow-lg border border-border-gray animate-bounce transition-all">
                <span className="material-symbols-outlined text-primary">
                  sms
                </span>
              </div>
              <div className="absolute bottom-10 -left-6 bg-white p-3 rounded-xl shadow-lg border border-border-gray">
                <span className="material-symbols-outlined text-green-500">
                  chat_bubble
                </span>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-teal/30 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-peach/30 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* AI Message Optimizer Section (New Interactive Element) */}
      {/* <section className="section-padding px-6 bg-white border-y border-border-gray">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-brand-navy rounded-[2rem] p-8 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px] rounded-full"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full">
                  <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">AI-Powered Tools</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Smart Message Optimizer</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Struggling with low CTR? Drop your draft here and our AI will rewrite it for maximum impact on WhatsApp, SMS, and RCS.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 lg:p-8 space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Your Draft</label>
                  <textarea 
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="e.g. Come buy our shoes, we have 20% off today only."
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all min-h-[100px]"
                  />
                </div>
                <button 
                  onClick={optimizeMessage}
                  disabled={isOptimizing || !inputMessage}
                  className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-bold h-14 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  {isOptimizing ? (
                    <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-sm">magic_button</span>
                      Optimize for Conversion
                    </>
                  )}
                </button>
                {optimizedMessage && (
                  <div className="mt-6 p-5 bg-primary/10 rounded-xl border border-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-bold uppercase text-primary tracking-widest">Optimized Version</span>
                      <button 
                        onClick={() => navigator.clipboard.writeText(optimizedMessage)}
                        className="text-[10px] font-bold text-white/40 hover:text-white flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-xs">content_copy</span> Copy
                      </button>
                    </div>
                    <p className="text-sm italic leading-relaxed text-white/90">"{optimizedMessage}"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Capabilities Section */}
      <section className="section-padding pt-24 pb-12 px-6 bg-[#b7f4fb]/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-primary font-extrabold uppercase tracking-widest text-xs">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-deep-navy">
              What Marketers Can Do
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: "rocket_launch",
                label: "Launch",
                desc: "Run engaging SMS, WhatsApp, and SMS with images and videos — with built-in tracking.",
                color: "bg-brand-teal/40",
              },
              {
                icon: "schema",
                label: "Automate",
                desc: "Follow up automatically using time-based and click-triggered sequences.",
                color: "bg-brand-peach/40",
              },
              {
                icon: "ads_click",
                label: "Convert",
                desc: "Use AI to generate, nurture, and route leads and replies into real conversions.",
                color: "bg-brand-teal/40",
              },
              {
                icon: "monitoring",
                label: "Manage",
                desc: "Handle all conversations in one inbox with full visibility and control.",
                color: "bg-brand-peach/40",
              },
            ].map((cap, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-[16px] border border-border-gray hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div
                  className={`size-14 rounded-full ${cap.color} flex items-center justify-center mb-6`}
                >
                  <span className="material-symbols-outlined text-deep-navy">
                    {cap.icon}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3">{cap.label}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Use Cases */}
      <section className="section-padding pt-24 pb-12 px-6 bg-[#efbdb1]/10">
        <div className="max-w-300 mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-accent-orange font-extrabold uppercase tracking-widest text-xs">
                Practical Outcomes
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-deep-navy">
                Growth Use Cases
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm">
              Battle-tested messaging strategies that drive measurable business
              results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lead Generation",
                tags: ["SMS", "WhatsApp"],
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
                desc: "Capture more leads with interactive automated chat flows and instant follow-ups on mobile.",
              },
              {
                title: "Flash Sales",
                tags: ["RCS", "Promotions"],
                img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
                desc: "Drive immediate traffic with time-sensitive offers sent through channels with 98% open rates.",
              },
              {
                title: "Churn Prevention",
                tags: ["Retention", "Automation"],
                img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
                desc: "Automatically re-engage customers before they drop off with tailored win-back campaigns.",
              },
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] border border-border-gray overflow-hidden group hover:border-primary/30 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={useCase.img}
                  />
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {useCase.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-[10px] font-bold uppercase rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{useCase.title}</h4>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {useCase.desc}
                  </p>
                  <a
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm"
                    href="#"
                  >
                    Learn more{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding pt-24 pb-12 px-6 bg-white">
        <div className="max-w-200 mx-auto text-center">
          <div className="flex justify-center mb-10">
            <span className="material-symbols-outlined text-5xl text-primary/30">
              format_quote
            </span>
          </div>
          <blockquote className="text-3xl md:text-4xl font-semibold text-deep-navy leading-[1.4] mb-12">
            "Tracksend has completely changed how we think about customer
            outreach. Our SMS and WhatsApp engagement rates are 10x higher than
            email"
          </blockquote>
          <div className="flex flex-col items-center">
            {/* <div className="size-16 rounded-full overflow-hidden mb-4 border-2 border-primary/20 p-1">
              <img
                alt="Oke"
                className="w-full h-full object-cover rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
              />
            </div> */}
            <p className="font-bold text-lg text-deep-navy"></p>
            <p className="text-gray-500 text-sm">
              Head of Growth, SooyaBristo.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Path */}
      <section className="section-padding pt-24 pb-12 px-6 border-t border-border-gray bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-deep-navy mb-16">
            Integrated with your favorite tools
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {[
              { label: "Customer.io", icon: "hub" },
              { label: "Mailchimp", icon: "mail" },
              { label: "WooCommerce", icon: "shopping_bag" },
              { label: "Freshdesk", icon: "support_agent" },
            ].map((tool, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center gap-3 group">
                  <div className="size-16 md:size-20 bg-white rounded-full flex items-center justify-center border border-border-gray shadow-sm group-hover:border-primary/50 transition-colors">
                    <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">
                      {tool.icon}
                    </span>
                  </div>
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    {tool.label}
                  </span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden lg:flex items-center text-gray-200">
                    <span className="material-symbols-outlined text-4xl">
                      trending_flat
                    </span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
};

export default MarketersContent;
