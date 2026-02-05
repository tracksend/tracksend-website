"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CampaignPreview } from "@/components/CampaignPreview";

export default function Home() {
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
      desc: "Use AI to qualify inbound leads and handle simple replies automatically.",
      icon: "forum",
      colorClass: "bg-secondary",
      bgClass: "bg-white border-gray-100",
    },
    {
      title: "Follow up",
      desc: "Trigger sequences based on clicks, ignored messages, or purchase events.",
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
              The platform that transforms simple notifications into two-way
              conversations that convert, engage, and delight your customers at
              scale.
            </p>
          </div>

          {/* <div className="mx-auto w-full max-w-4xl">
            <div className="rounded-[2rem] overflow-hidden bg-surface-card shadow-2xl border border-white/20 backdrop-blur-xl">
              <div className="grid md:grid-cols-5 items-stretch">
                <div className="md:col-span-2 p-8 lg:p-10 bg-tint-cyan/30 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-navy-dark mb-3 text-left">
                    Test Drive
                  </h3>
                  <p className="text-text-main/80 text-sm leading-relaxed mb-6 text-left">
                    See how your messages look in real-time. Pick a channel and
                    start typing.
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="flex -space-x-2">
                      <img
                        alt="User"
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        src="https://picsum.photos/seed/user1/64/64"
                      />
                      <img
                        alt="User"
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        src="https://picsum.photos/seed/user2/64/64"
                      />
                      <img
                        alt="User"
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        src="https://picsum.photos/seed/user3/64/64"
                      />
                    </div>
                    <p className="text-[10px] font-bold text-navy-dark uppercase tracking-wider ml-2">
                      Trusted by 2k+ teams
                    </p>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 lg:p-10 bg-white">
                  <div className="flex space-x-1 rounded-xl bg-gray-100 p-1 mb-6">
                    <button
                      onClick={() => setActiveTab("sms")}
                      className={`w-full rounded-lg py-2.5 text-sm font-bold transition-all ${activeTab === "sms" ? "bg-white shadow text-navy-dark" : "text-gray-500 hover:text-navy-dark hover:bg-white/50"}`}
                    >
                      SMS
                    </button>
                    <button
                      onClick={() => setActiveTab("whatsapp")}
                      className={`w-full rounded-lg py-2.5 text-sm font-bold transition-all ${activeTab === "whatsapp" ? "bg-white shadow text-navy-dark" : "text-gray-500 hover:text-navy-dark hover:bg-white/50"}`}
                    >
                      WhatsApp
                    </button>
                  </div>
                  <form
                    className="space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Preview sent!");
                    }}
                  >
                    <div className="text-left">
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                        Phone Number
                      </label>
                      <div className="relative rounded-xl shadow-sm">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">📞</span>
                        </div>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="block w-full rounded-xl border border-gray-200 pl-10 text-navy-dark placeholder-gray-400 focus:border-primary focus:ring-primary sm:text-sm py-3 bg-gray-50"
                          placeholder="+1 (555) 987-6543"
                        />
                      </div>
                    </div>
                    <div className="text-left">
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                        Message
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="block w-full rounded-xl border border-gray-200 text-navy-dark placeholder-gray-400 focus:border-primary focus:ring-primary sm:text-sm py-3 bg-gray-50 resize-none h-24"
                      ></textarea>
                    </div>
                    <button className="w-full h-12 bg-secondary text-white rounded-xl font-bold text-sm hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 flex items-center justify-center gap-2">
                      Send Preview{" "}
                      <span className="material-symbols-outlined text-sm">
                        send
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="mx-auto w-full max-w-5xl">
            <CampaignDemo />
          </div> */}
          <div className="mx-auto w-full max-w-5xl">
            <CampaignPreview />
          </div>
        </div>
      </section>

      {/* Results Section */}
      {/* <section className="bg-tint-cyan/30 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-cyan opacity-20 pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
              Results that speak for themselves
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              See how leading brands are transforming their customer engagement
              metrics.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-white/50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center text-xl font-bold">
                    N
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-navy-dark text-lg leading-tight">
                      NovaMart
                    </h4>
                    <span className="text-xs text-text-muted">
                      Global Retailer
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  Retail
                </span>
              </div>
              <div className="space-y-6 text-left">
                <div>
                  <p className="text-4xl font-extrabold text-navy-dark mb-1">
                    300%
                  </p>
                  <p className="text-sm font-medium text-text-muted">
                    Increase in abandoned cart recovery
                  </p>
                </div>
                <div className="h-px w-full bg-gray-100"></div>
                <p className="text-text-main leading-relaxed italic">
                  {
                    "Tracksend's automated flows helped us recapture revenue we thought was lost forever. The setup was instant."
                  }
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-white/50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center text-xl font-bold">
                    P
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-navy-dark text-lg leading-tight">
                      PayBright
                    </h4>
                    <span className="text-xs text-text-muted">
                      Fintech Solutions
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider">
                  Fintech
                </span>
              </div>
              <div className="space-y-6 text-left">
                <div>
                  <p className="text-4xl font-extrabold text-navy-dark mb-1">
                    45%
                  </p>
                  <p className="text-sm font-medium text-text-muted">
                    Reduction in support ticket volume
                  </p>
                </div>
                <div className="h-px w-full bg-gray-100"></div>
                <p className="text-text-main leading-relaxed italic">
                  {
                    "By proactively updating users on transaction status via WhatsApp, we drastically reduced inbound support calls."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Results Section - Clean Image-based Logo Grid */}
      <section className="bg-white py-20 relative overflow-hidden border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">
              Trusted by the world's most innovative teams
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-12 lg:gap-x-20 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
            <img
              className="h-8 w-auto object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Shopify_logo_2018.svg"
              alt="Shopify"
            />
            <img
              className="h-8 w-auto object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
              alt="Salesforce"
            />
            <img
              className="h-8 w-auto object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/HubSpot_Logo.svg"
              alt="HubSpot"
            />
            <img
              className="h-8 w-auto object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Mailchimp_Logo.svg"
              alt="Mailchimp"
            />
            <img
              className="h-6 w-auto object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Stripe_logo%2C_revised_2016.svg"
              alt="Stripe"
            />
            <img
              className="h-8 w-auto object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
              alt="Slack"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-16 text-left">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">
              Platform
            </h2>
            <h3 className="text-4xl font-extrabold text-navy-dark tracking-tight mb-6">
              The full conversational suite.
            </h3>
            <p className="text-lg text-text-muted">
              Everything you need to build meaningful relationships with your
              customers on their favorite channels.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div className="flex flex-col items-start group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <span className="material-symbols-outlined text-blue-600 text-3xl">
                  chat_bubble
                </span>
              </div>
              <h4 className="text-xl font-bold text-navy-dark mb-3">
                Multichannel Messaging
              </h4>
              <p className="text-text-muted leading-relaxed mb-4">
                Unified inbox for SMS, WhatsApp, and Email. Manage all your
                customer conversations from a single, intuitive dashboard.
              </p>
              <a
                className="text-blue-600 font-bold text-sm flex items-center hover:gap-2 transition-all"
                href="#"
              >
                Learn more{" "}
                <span className="material-symbols-outlined text-sm ml-1">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="flex flex-col items-start group">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                <span className="material-symbols-outlined text-purple-600 text-3xl">
                  smart_toy
                </span>
              </div>
              <h4 className="text-xl font-bold text-navy-dark mb-3">
                AI Chatbots
              </h4>
              <p className="text-text-muted leading-relaxed mb-4">
                Deploy intelligent assistants that qualify leads, answer FAQs,
                and handle routine tasks 24/7 without human intervention.
              </p>
              <a
                className="text-purple-600 font-bold text-sm flex items-center hover:gap-2 transition-all"
                href="#"
              >
                Learn more{" "}
                <span className="material-symbols-outlined text-sm ml-1">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="flex flex-col items-start group">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                <span className="material-symbols-outlined text-orange-600 text-3xl">
                  bolt
                </span>
              </div>
              <h4 className="text-xl font-bold text-navy-dark mb-3">
                Smart Automation
              </h4>
              <p className="text-text-muted leading-relaxed mb-4">
                Visual flow builder to automate complex customer journeys based
                on behavior, purchase history, and real-time events.
              </p>
              <a
                className="text-orange-600 font-bold text-sm flex items-center hover:gap-2 transition-all"
                href="#"
              >
                Learn more{" "}
                <span className="material-symbols-outlined text-sm ml-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-dark tracking-tight mb-4">
              Everything you need to grow with messaging
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Scalable infrastructure designed for marketing, operations, and
              support teams.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureData.map((feature, i) => (
              <div
                key={i}
                className={`p-8 rounded-[2rem] border hover:shadow-float transition-all group cursor-default ${feature.bgClass}`}
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

      {/* Use Cases Section */}
      {/* <section className="bg-tint-coral/30 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-coral opacity-20 pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl text-left">
              <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">
                Use Cases
              </h2>
              <h3 className="text-4xl font-extrabold text-navy-dark tracking-tight">
                Solutions built for growth.
              </h3>
            </div>
            <div className="hidden md:block">
              <a
                className="text-sm font-bold text-navy-dark hover:text-secondary transition-colors flex items-center gap-2"
                href="#"
              >
                Explore all use cases{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-tint-coral/30 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mb-4">
                  WhatsApp
                </span>
                <h4 className="text-lg font-bold text-navy-dark mb-2">
                  Abandoned cart recovery
                </h4>
                <p className="text-text-main/80 text-sm leading-relaxed mb-6">
                  Automatically re-engage shoppers who left items behind with
                  personalized WhatsApp reminders.
                </p>
                <ul className="space-y-2 mt-auto">
                  <li className="flex items-center text-xs text-text-muted font-medium">
                    <span className="material-symbols-outlined text-green-500 text-sm mr-2">
                      check_circle
                    </span>
                    25% higher recovery rate
                  </li>
                  <li className="flex items-center text-xs text-text-muted font-medium">
                    <span className="material-symbols-outlined text-green-500 text-sm mr-2">
                      check_circle
                    </span>
                    Rich media product cards
                  </li>
                </ul>
              </div>
            </div>
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-tint-cyan/30 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
                  Omnichannel
                </span>
                <h4 className="text-lg font-bold text-navy-dark mb-2">
                  Lead qualification chatbot
                </h4>
                <p className="text-text-main/80 text-sm leading-relaxed mb-6">
                  Deploy an intelligent bot to screen inbound leads 24/7 and
                  route hot prospects to sales.
                </p>
                <ul className="space-y-2 mt-auto">
                  <li className="flex items-center text-xs text-text-muted font-medium">
                    <span className="material-symbols-outlined text-blue-500 text-sm mr-2">
                      check_circle
                    </span>
                    Instant response time
                  </li>
                  <li className="flex items-center text-xs text-text-muted font-medium">
                    <span className="material-symbols-outlined text-blue-500 text-sm mr-2">
                      check_circle
                    </span>
                    CRM sync included
                  </li>
                </ul>
              </div>
            </div>
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 mb-4">
                  SMS
                </span>
                <h4 className="text-lg font-bold text-navy-dark mb-2">
                  Order status updates
                </h4>
                <p className="text-text-main/80 text-sm leading-relaxed mb-6">
                  Keep customers in the loop from purchase to delivery to reduce
                  support tickets.
                </p>
                <ul className="space-y-2 mt-auto">
                  <li className="flex items-center text-xs text-text-muted font-medium">
                    <span className="material-symbols-outlined text-purple-500 text-sm mr-2">
                      check_circle
                    </span>
                    40% fewer support tickets
                  </li>
                  <li className="flex items-center text-xs text-text-muted font-medium">
                    <span className="material-symbols-outlined text-purple-500 text-sm mr-2">
                      check_circle
                    </span>
                    98% open rates
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Use Cases Section */}
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
            {/* <div className="hidden md:block">
              <a
                className="text-sm font-bold text-navy-dark hover:text-secondary transition-colors flex items-center gap-2"
                href="#"
              >
                Explore all use cases{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mb-4">
                  Lead Gen
                </span>
                <h4 className="text-lg font-bold text-navy-dark mb-2">
                  Instant Qualification
                </h4>
                <p className="text-text-main/80 text-sm leading-relaxed mb-6">
                  Route hot prospects to your CRM instantly after a text opt-in
                </p>
                {/* <ul className="space-y-2 mt-auto">
                  <li className="flex items-center text-xs text-text-muted font-medium">
                    <span className="material-symbols-outlined text-green-500 text-sm mr-2">
                      check_circle
                    </span>
                    25% higher recovery rate
                  </li>
                  <li className="flex items-center text-xs text-text-muted font-medium">
                    <span className="material-symbols-outlined text-green-500 text-sm mr-2">
                      check_circle
                    </span>
                    Rich media product cards
                  </li>
                </ul> */}
                <a
                  className="text-green-600 font-bold text-sm flex items-center hover:gap-2 transition-all"
                  href="#"
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
                  href="#"
                >
                  Learn more{" "}
                  <span className="material-symbols-outlined text-sm ml-1">
                    arrow_forward
                  </span>
                </a>
                {/* <ul className="space-y-2 mt-auto">
                  <li className="flex items-center text-xs text-text-muted font-medium">
                    <span className="material-symbols-outlined text-blue-500 text-sm mr-2">
                      check_circle
                    </span>
                    Instant response time
                  </li>
                  <li className="flex items-center text-xs text-text-muted font-medium">
                    <span className="material-symbols-outlined text-blue-500 text-sm mr-2">
                      check_circle
                    </span>
                    CRM sync included
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 mb-4">
                  Product
                </span>
                <h4 className="text-lg font-bold text-navy-dark mb-2">
                  VIP Launches
                </h4>
                <p className="text-text-main/80 text-sm leading-relaxed mb-6">
                  Create hype with SMS-exclusive drops and waitlist
                  notifications.
                </p>
                {/* <ul className="space-y-2 mt-auto">
                  <li className="flex items-center text-xs text-text-muted font-medium">
                    <span className="material-symbols-outlined text-purple-500 text-sm mr-2">
                      check_circle
                    </span>
                    40% fewer support tickets
                  </li>
                  <li className="flex items-center text-xs text-text-muted font-medium">
                    <span className="material-symbols-outlined text-purple-500 text-sm mr-2">
                      check_circle
                    </span>
                    98% open rates
                  </li>
                </ul> */}
                <a
                  className="text-purple-600 font-bold text-sm flex items-center hover:gap-2 transition-all"
                  href="#"
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
                  Customer Success
                </span>
                <h4 className="text-lg font-bold text-navy-dark mb-2">
                  Active Retention
                </h4>
                <p className="text-text-main/80 text-sm leading-relaxed mb-6">
                  Automate renewal reminders and NPS surveys via WhatsApp.
                </p>
                {/* <ul className="space-y-2 mt-auto">
                  <li className="flex items-center text-xs text-text-muted font-medium">
                    <span className="material-symbols-outlined text-purple-500 text-sm mr-2">
                      check_circle
                    </span>
                    40% fewer support tickets
                  </li>
                  <li className="flex items-center text-xs text-text-muted font-medium">
                    <span className="material-symbols-outlined text-purple-500 text-sm mr-2">
                      check_circle
                    </span>
                    98% open rates
                  </li>
                </ul> */}
                <a
                  className="text-orange-600 font-bold text-sm flex items-center hover:gap-2 transition-all"
                  href="#"
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

      {/* Integration Logos - UPDATED */}
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
            {[
              {
                name: "Salesforce",
                logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
              },
              {
                name: "HubSpot",
                logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg",
              },
              {
                name: "Shopify",
                logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
              },
              {
                name: "Zapier",
                logo: "https://cdn.worldvectorlogo.com/logos/zapier-2.svg",
              },
              {
                name: "Mailchimp",
                logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg",
              },
              {
                name: "Slack",
                logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
              },
            ].map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 group cursor-pointer"
              >
                <div className="h-12 w-full flex items-center justify-center px-4">
                  <img
                    src={brand.logo}
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
              Explore API Docs
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section - NEW */}
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
            “Tracksend didn't just give us a tool; they gave us a whole new way
            to connect with our customers. Our engagement rates jumped 40% in
            the first month alone.”
          </blockquote>
          <div className="flex flex-col items-center">
            <img
              src="https://picsum.photos/seed/ceo/200"
              alt="CEO"
              className="w-20 h-20 rounded-full border-4 border-slate-50 mb-4 object-cover shadow-lg"
            />
            <h5 className="font-black text-navy text-lg">Marcus Holloway</h5>
            <p className="text-sm font-bold text-text-muted uppercase tracking-widest">
              Director of Growth, FinStream
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - NEW */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[3rem] bg-linear-to-br from-navy to-navy-dark p-12 md:p-24 relative overflow-hidden text-center shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-pattern-cyan opacity-5 pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                Ready to transform your conversations?
              </h2>
              <p className="text-xl text-gray-300 mb-12 font-medium">
                Join 2,000+ businesses using Tracksend to scale their engagement
                effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-10 py-4 bg-primary text-navy rounded-2xl font-black text-lg hover:shadow-glow-cyan hover:scale-105 transition-all">
                  <a
                    href="/pricing"
                    // className="px-4 py-3 text-center text-base font-semibold text-gray-700 hover:text-primary transition-colors"
                  >
                    Start your free trial
                  </a>
                </button>
                <button className="px-10 py-4 bg-white/10 text-white rounded-2xl font-black text-lg border border-white/20 hover:bg-white/20 transition-all">
                  <a
                    href="https://tracksend.as.me/schedule/9cf8d404"
                    // className="px-4 py-3 text-center text-base font-semibold text-gray-700 hover:text-primary transition-colors"
                  >
                    Book a demo
                  </a>
                </button>
              </div>
              <p className="mt-8 text-gray-500 text-sm font-bold uppercase tracking-widest">
                No credit card required • Instant setup
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
