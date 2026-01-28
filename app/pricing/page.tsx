"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCurrencySymbol } from "@/lib/geolocation";

interface LocationData {
  countryCode: string;
  currency: string;
  country: string;
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly",
  );
  const [location, setLocation] = useState<LocationData>({
    countryCode: "US",
    currency: "USD",
    country: "United States",
  });
  const [exchangeRates, setExchangeRates] = useState<Record<
    string,
    number
  > | null>(null);
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState("United States"); // Declare country and setCountry variables

  // Fetch location and exchange rates on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get location
        const geoRes = await fetch("/api/geo");
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          setLocation(geoData);
          setCountry(geoData.country); // Set country based on fetched location data
        }

        // Get exchange rates
        const ratesRes = await fetch("/api/exchange-rates");
        if (ratesRes.ok) {
          const ratesData = await ratesRes.json();
          setExchangeRates(ratesData.rates);
        }
      } catch (error) {
        console.log("[v0] Error fetching location/rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Base prices in USD
  const basePrices = {
    growth: { monthly: 80, annual: 72 },
    scale: { monthly: 150, annual: 135 },
  };

  // Convert prices if we have exchange rates
  const getConvertedPrice = (basePrice: number): number => {
    if (!exchangeRates || location.currency === "USD") {
      return basePrice;
    }
    const rate = exchangeRates[location.currency] || 1;
    return Math.round(basePrice * rate * 100) / 100;
  };

  const plans = [
    {
      id: "growth",
      name: "Growth",
      basePrice:
        billingCycle === "monthly"
          ? basePrices.growth.monthly
          : basePrices.growth.annual,
      currency: getCurrencySymbol(location.currency),
      currencyCode: location.currency,
      credits: 450,
      description:
        "Perfect for growing startups needing reliable messaging channels.",
      features: [
        "Up to 5 seats",
        "Unlimited campaigns",
        "Advanced segments",
        "Basic automations",
        "Standard support",
      ],
      buttonText: "Get Growth",
    },
    {
      id: "scale",
      name: "Scale",
      basePrice:
        billingCycle === "monthly"
          ? basePrices.scale.monthly
          : basePrices.scale.annual,
      currency: getCurrencySymbol(location.currency),
      currencyCode: location.currency,
      credits: 850,
      description:
        "For teams that need full power, advanced bots, and priority care.",
      features: [
        "Up to 10 seats",
        "Conversation Inbox (full)",
        "Advanced automations + sequences",
        "Bots",
        "Priority support",
      ],
      buttonText: "Get Scale",
      isPopular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      basePrice: 0,
      currency: "",
      currencyCode: "",
      credits: 0,
      description:
        "Tailored solutions for high-volume senders and large organizations.",
      features: [
        "Custom seats",
        "Dedicated success manager",
        "Volume-based pricing",
        "Custom integrations",
        "Invoicing",
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-[#b7f4fb] py-32 px-4 lg:px-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        <div className="max-w-[960px] mx-auto flex flex-col items-center gap-8 relative z-10 text-center">
          <h1 className="text-navy-dark text-4xl lg:text-5xl font-black leading-tight tracking-tight">
            One monthly plan + included credits.{" "}
            <br className="hidden md:block" /> Clear rates in every country.
          </h1>
          <p className="text-navy-dark/70 text-lg font-medium max-w-2xl">
            Transparent pricing that scales with your business. Choose your
            location to see local rates.
          </p>

          <div className="w-full max-w-[600px] bg-white p-2 rounded-xl shadow-lg border border-white/50 flex flex-col sm:flex-row items-center gap-2">
            <div className="relative w-full sm:w-1/2 h-12 text-left">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <span className="material-symbols-outlined text-sm">
                  public
                </span>
              </div>
              <select
                value={location.country}
                disabled
                className="block w-full h-full pl-10 pr-10 py-2 text-base border-none rounded-lg bg-gray-50 cursor-not-allowed font-semibold text-navy-dark appearance-none"
              >
                <option>{location.country}</option>
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
      <section className="py-24 px-4 lg:px-20 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col rounded-3xl p-8 transition-all duration-300 text-left ${
                plan.isPopular
                  ? "bg-white border-2 border-primary shadow-2xl relative lg:-translate-y-4 scale-105"
                  : "bg-white border border-gray-200 shadow-sm hover:shadow-lg"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-navy px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
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
                      : `${plan.currency}${getConvertedPrice(
                          plan.basePrice,
                        ).toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}`}
                  </span>
                  {plan.id !== "enterprise" && (
                    <span className="text-gray-500 text-sm font-medium">
                      /{billingCycle === "monthly" ? "mo" : "yr"}
                    </span>
                  )}
                </div>
                {plan.credits > 0 && (
                  <p className="text-primary text-sm font-bold mt-2">
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
                    ? "bg-primary text-navy hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                    : "bg-gray-100 text-navy-dark hover:bg-gray-200"
                }`}
              >
                {plan.buttonText}
              </button>
              <div className="space-y-4 mt-auto">
                {plan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-sm text-navy-dark font-medium"
                  >
                    <span
                      className={`material-symbols-outlined text-[20px] ${plan.isPopular ? "text-primary" : "text-gray-300"}`}
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
                  <td className="px-6 py-4 font-mono">
                    {getCurrencySymbol(location.currency)}0.055
                  </td>
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
                  <td className="px-6 py-4 font-mono">
                    {getCurrencySymbol(location.currency)}0.05
                  </td>
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
                    {getCurrencySymbol(location.currency)}0.015 + Meta fees
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
      </section>

      {/* Billing Process */}
      <section className="py-24 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-dark mb-16 text-center">
            How your billing works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-gray-200"></div>
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
                <p className="text-sm text-gray-500 leading-relaxed max-w-[240px]">
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

      <Footer />
    </div>
  );
}
