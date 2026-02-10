"use client";

import React, { useState } from "react";
import { getCurrencySymbol } from "@/lib/geolocation";

interface LocationData {
  countryCode: string;
  currency: string;
  country: string;
}

interface PricingContentProps {
  location: LocationData;
  countryPrices: any;
  countryRates: any;
  planTemplates: any;
}

export default function PricingContent({
  location,
  countryPrices,
  countryRates,
  planTemplates,
}: PricingContentProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly",
  );

  // Build plans with country-specific pricing
  const plans = [
    {
      ...planTemplates.growth,
      basePrice:
        billingCycle === "monthly"
          ? countryPrices.growth.monthly
          : countryPrices.growth.annual,
      currency: getCurrencySymbol(location.currency),
      currencyCode: location.currency,
    },
    {
      ...planTemplates.scale,
      basePrice:
        billingCycle === "monthly"
          ? countryPrices.scale.monthly
          : countryPrices.scale.annual,
      currency: getCurrencySymbol(location.currency),
      currencyCode: location.currency,
    },
    {
      ...planTemplates.enterprise,
      currency: "",
      currencyCode: "",
      basePrice: 0,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#b7f4fb] py-32 px-4 lg:px-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        <div className="max-w-240 mx-auto flex flex-col items-center gap-8 relative z-10 text-center">
          <h1 className="text-navy-dark text-4xl lg:text-5xl font-black leading-tight tracking-tight">
            Simple plans + included credits.{" "}
            <br className="hidden md:block" /> Clear rates in every country.
          </h1>
          <p className="text-navy-dark/70 text-lg font-medium max-w-2xl">
            Transparent pricing that scales with your business. Showing rates
            for <span className="font-semibold">{location.country}</span>.
          </p>

          <div className="w-full max-w-150 bg-white p-2 rounded-xl shadow-lg border border-white/50 flex flex-col sm:flex-row items-center gap-2">
            <div className="relative w-full sm:w-1/2 h-12 text-left">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <span className="material-symbols-outlined text-sm">
                  public
                </span>
              </div>
              <select
                value={location.currency}
                disabled
                className="block w-full h-full pl-10 pr-10 py-2 text-base border-none rounded-lg bg-gray-50 cursor-not-allowed font-semibold text-navy-dark appearance-none"
              >
                <option>{location.currency}</option>
              </select>
            </div>
            <div className="w-full sm:w-1/2 bg-gray-100 p-1 rounded-lg flex h-12">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`flex-1 rounded-md text-sm font-bold transition-all ${billingCycle === "monthly" ? "bg-white shadow text-navy-dark" : "text-gray-500 hover:text-navy-dark"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`flex-1 rounded-md text-sm font-bold transition-all ${billingCycle === "annual" ? "bg-white shadow text-navy-dark" : "text-gray-500 hover:text-navy-dark"}`}
              >
                Annual{" "}
                <span className="text-[10px] text-primary ml-1 font-bold">
                  -10%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="bg-[#f8f6f6] py-24 px-4 lg:px-20 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col rounded-3xl p-8 transition-all duration-300 text-left ${
                plan?.isPopular
                  ? "bg-white border-2 border-secondary shadow-2xl relative lg:-translate-y-4 scale-105"
                  : "bg-white border border-gray-200 shadow-sm hover:shadow-lg"
              }`}
            >
              {plan?.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-navy-dark text-xl font-bold mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-navy-dark text-4xl font-black tracking-tight">
                    {plan.id === "enterprise"
                      ? "Custom"
                      : `${plan.currency}${String(plan.basePrice)}`}
                  </span>
                  {plan.id !== "enterprise" && (
                    <span className="text-gray-500 text-sm font-medium">
                      /{billingCycle === "monthly" ? "mo" : "yr"}
                    </span>
                  )}
                </div>
                {plan.credits > 0 && (
                  <p className="text-secondary text-sm font-bold mt-2">
                    Includes {plan.credits * 1000} credits
                  </p>
                )}
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                  {plan.description}
                </p>
              </div>
              <button
                className={`w-full h-12 rounded-xl font-bold text-sm transition-all mb-8 ${
                  plan.isPopular
                    ? "bg-secondary text-white hover:shadow-glow-cyan"
                    : "bg-gray-100 text-navy-dark hover:bg-gray-200"
                }`}
              >
                {plan.buttonText}
              </button>
              <div className="space-y-4 mt-auto">
                {plan.features.map((feature: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-sm text-navy-dark font-medium"
                  >
                    <span
                      className={`material-symbols-outlined text-[20px] ${plan.isPopular ? "text-secondary" : "text-gray-300"}`}
                    >
                      check_circle
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Just testing or occasional sends?
            <a
              className="text-secondary font-bold hover:underline transition-all ml-1 inline-flex items-center gap-0.5"
              href="https://app.tracksend.co/register"
              target="_blank"
            >
              Start Free{" "}
              <span className="material-symbols-outlined text-[14px]">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-300 dark:bg-[#3a2d2a]"></div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Developer?
            <a
              className="text-secondary font-bold hover:underline transition-all ml-1 inline-flex items-center gap-0.5"
              href="https://app.tracksend.co/register"
              target="_blank"
            >
              API (Pay-as-you-go){" "}
              <span className="material-symbols-outlined text-[14px]">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Usage Rates */}
      <section className="py-24 px-4 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 text-left">
            <div>
              <h2 className="text-3xl font-bold text-navy-dark mb-2">
                Transparent usage rates
              </h2>
              <p className="text-gray-500">
                Pay only for what you use. Showing rates for{" "}
                <span className="font-semibold text-navy-dark">
                  {location.country}
                </span>
                .
              </p>
            </div>
          </div>
          <div className="overflow-hidden border border-gray-100 rounded-2xl shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                <tr>
                  <th className="px-6 py-4">Channel</th>
                  <th className="px-6 py-4">Rate ({location.countryCode})</th>
                  <th className="px-6 py-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-400">
                      sms
                    </span>{" "}
                    SMS
                  </td>
                  <td className="px-6 py-4 font-mono">{countryRates.sms}</td>
                  <td className="px-6 py-4 text-gray-500">
                    Per segment (160 chars)
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-400">
                      chat_bubble
                    </span>{" "}
                    RCS
                  </td>
                  <td className="px-6 py-4 font-mono">{countryRates.rcs}</td>
                  <td className="px-6 py-4 text-gray-500">Basic message</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-400">
                      forum
                    </span>{" "}
                    WhatsApp
                  </td>
                  <td className="px-6 py-4 font-mono">
                    {countryRates.whatsapp} + Meta fees
                  </td>
                  <td className="px-6 py-4 text-gray-500 flex items-center gap-1">
                    Tracksend fee per conversation.
                    <span className="material-symbols-outlined text-[14px] text-gray-300 cursor-help">
                      info
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Request rates for other countries?
            <a
              className="text-secondary font-bold hover:underline transition-all ml-1 inline-flex items-center gap-0.5"
              href="mailto:sales@tracksend.co?subject=Request%20Message%20Rate&body=Hello%2C%0A%0AI%E2%80%99d%20like%20to%20request%20messaging%20rates%20for%20countries%20other%20than%20my%20current%20location.%0APlease%20share%20the%20available%20countries%20and%20their%20respective%20rates.%0A%0AThank%20you."
              // target="_blank"
            >
              Contact Sales{" "}
              <span className="material-symbols-outlined text-[14px]"></span>
            </a>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-300 dark:bg-[#3a2d2a]"></div>
        </div>
      </section>

      {/* Billing Process */}
      <section className="py-24 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-dark mb-16 text-center">
            How your billing works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gray-200"></div>
            {[
              {
                id: 1,
                icon: "subscriptions",
                title: "Choose Plan",
                desc: "Select a monthly plan. Each plan comes with a bundled amount of credits.",
              },
              {
                id: 2,
                icon: "send",
                title: "Send Messages",
                desc: "Usage (SMS, WA, etc.) is deducted from your included credits automatically.",
              },
              {
                id: 3,
                icon: "account_balance_wallet",
                title: "Top Up",
                desc: "If you exceed your plan's credits, simply top up your wallet to keep sending.",
              },
            ].map((step) => (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-6 shadow-md">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {step.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy-dark mb-3">
                  {step.id}. {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-60">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-dark mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Do unused credits roll over to the next month?",
                a: "Yes, for annual plans, credits are issued in bulk. For monthly plans, unused credits from your subscription bundle expire at the end of the billing cycle. However, any additional wallet top-ups never expire.",
              },
              {
                q: "How does WhatsApp billing work with Meta fees?",
                a: "WhatsApp (Meta) charges per 24-hour conversation window. The price depends on who initiates the conversation and the category. We pass this fee directly to you plus our small platform fee of ₦1.50.",
              },
              {
                q: "Can I upgrade or downgrade my plan at any time?",
                a: "Absolutely. You can upgrade immediately, and we'll prorate the cost. Downgrades take effect at the start of your next billing cycle.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group border border-gray-100 rounded-2xl bg-white overflow-hidden transition-all duration-300 open:shadow-md"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-navy-dark hover:bg-gray-50 transition-colors">
                  {faq.q}
                  <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-gray-400">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4 text-left">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
