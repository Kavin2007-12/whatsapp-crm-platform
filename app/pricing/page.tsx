import React from "react";
import PricingSection from "@/components/PricingSection";
import { ShieldCheck, CheckCircle2, Zap, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const faqs = [
    {
      q: "Are Meta WhatsApp conversation charges included?",
      a: "Meta provides 1,000 free service (user-initiated customer support) conversations every month per WhatsApp Business Account. Additional marketing or utility messages are billed directly at official Meta regional rates without any markup."
    },
    {
      q: "Can I bring my existing WhatsApp business phone number?",
      a: "Yes! You can migrate your existing 10-digit mobile number or landline to the official WhatsApp Cloud API. Our engineering team assists with zero downtime verification."
    },
    {
      q: "How does the Green Tick verification work?",
      a: "We submit and manage the official Meta Green Tick badge application directly with Meta Trust & Safety for Growth and Scale tier customers."
    },
    {
      q: "Can multiple sales agents log in from different laptops?",
      a: "Yes. All plans include collaborative agent seats with individual login credentials, round-robin routing, and collision detection from a single WhatsApp number."
    }
  ];

  return (
    <div className="w-full">
      {/* Flagship Pricing Component */}
      <PricingSection />

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <h3 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h3>
            <p className="text-xs text-slate-500">Everything you need to know about billing, Meta rates, and onboarding.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {faqs.map((f, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  {f.q}
                </h4>
                <p className="text-slate-600 leading-relaxed pl-6">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


