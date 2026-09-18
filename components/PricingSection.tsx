"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  X
} from "lucide-react";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      tagline: "For boutique shops, clinics & small teams.",
      monthlyPrice: 2499,
      annualPrice: 1999,
      popular: false,
      features: [
        "3 Collaborative Agent Seats",
        "10,000 Active Contacts CRM",
        "Official WhatsApp Cloud API Access",
        "Multi-Agent Shared Inbox",
        "Google Sheet Bot Connector",
        "Standard Chat & Email Support"
      ],
      notIncluded: [
        "In-Chat Native UPI Payments",
        "Shopify & Zoho Auto-Connectors"
      ],
      ctaText: "Start 14-Day Free Trial",
      ctaHref: "/contact"
    },
    {
      name: "Growth",
      tagline: "For scaling e-commerce brands & clinics.",
      monthlyPrice: 5999,
      annualPrice: 4799,
      popular: true,
      badge: "POPULAR",
      features: [
        "10 Collaborative Agent Seats",
        "50,000 Active Contacts CRM",
        "Green Tick Verification Assistance",
        "Shared Inbox with Collision Protection",
        "No-Code Conversational Flow Builder",
        "Two-Way Google Sheets Sync",
        "In-Chat 1-Tap UPI Payments",
        "Priority 24/7 WhatsApp Support"
      ],
      notIncluded: [],
      ctaText: "Get Growth Suite",
      ctaHref: "/contact"
    },
    {
      name: "Scale",
      tagline: "For high-volume enterprise teams.",
      monthlyPrice: 14999,
      annualPrice: 11999,
      popular: false,
      badge: "ENTERPRISE",
      features: [
        "Unlimited Agent Seats",
        "Unlimited Contacts & Broadcasts",
        "Green Tick Verification Included",
        "High-Throughput REST APIs & Webhooks",
        "Custom ERP & CRM Connectors",
        "Dedicated Account Manager",
        "99.99% Uptime Enterprise SLA"
      ],
      notIncluded: [],
      ctaText: "Contact Sales",
      ctaHref: "/contact"
    }
  ];

  return (
    <section className="py-14 bg-[#FAFAFA] border-t border-slate-200" id="pricing">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-lg mx-auto space-y-1.5 mb-8">
          <span className="text-[10.5px] font-semibold text-emerald-700 uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Simple, predictable pricing.
          </h2>
          <p className="text-slate-600 text-xs leading-relaxed">
            Direct Meta Cloud API integration with 1,000 free monthly conversations included.
          </p>

          {/* Annual / Monthly Toggle */}
          <div className="flex items-center justify-center gap-2.5 pt-2.5">
            <span className={`text-[11.5px] font-medium ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-9 h-5 rounded-full bg-slate-200 p-0.5 relative transition-colors cursor-pointer"
              aria-label="Toggle Annual Billing"
            >
              <div
                className={`w-4 h-4 rounded-full bg-emerald-500 shadow-xs transition-transform duration-150 ${
                  isAnnual ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-[11.5px] font-medium ${isAnnual ? "text-slate-900" : "text-slate-500"}`}>
                Annual
              </span>
              <span className="bg-emerald-100 text-emerald-800 font-semibold text-[9.5px] px-2 py-0.2 rounded-full">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
          {plans.map((plan, idx) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl p-5 flex flex-col justify-between relative transition-all ${
                  plan.popular
                    ? "border-2 border-slate-900 shadow-md ring-2 ring-slate-900/5 z-10"
                    : "border border-slate-200 shadow-2xs"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-slate-900 text-white font-semibold text-[9.5px] px-2.5 py-0.5 rounded-full shadow-xs">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="mb-2.5">
                    <h3 className="text-sm font-semibold text-slate-900">{plan.name}</h3>
                    <p className="text-[10.5px] text-slate-500 mt-0.5">{plan.tagline}</p>
                  </div>

                  {/* Price Block */}
                  <div className="py-2.5 border-y border-slate-100 my-2.5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl sm:text-2xl font-bold text-slate-900">
                        ₹{price.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-slate-500 font-normal">/ month</span>
                    </div>
                    <p className="text-[10.5px] text-emerald-700 font-medium mt-0.5">
                      {isAnnual ? "Billed annually • 2 months FREE" : "Billed monthly"}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-5 text-xs">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-[11px]">{feat}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((notFeat, nIdx) => (
                      <div key={nIdx} className="flex items-start gap-2 text-slate-400">
                        <X className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
                        <span className="text-[11px]">{notFeat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={plan.ctaHref}
                  prefetch={true}
                  className={`w-full py-2 rounded-lg font-semibold text-center text-xs transition-colors cursor-pointer block ${
                    plan.popular
                      ? "btn-primary"
                      : "btn-secondary"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
