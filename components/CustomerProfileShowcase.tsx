"use client";

import React from "react";
import { 
  User, 
  Flame, 
  Tag, 
  Clock, 
  ShoppingBag, 
  Calendar, 
  CheckCircle2, 
  Phone, 
  Mail, 
  CreditCard,
  Building2,
  ExternalLink,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export default function CustomerProfileShowcase() {
  return (
    <section className="py-20 bg-[#FBFBFD] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">
            360° CUSTOMER INTELLIGENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Know the customer behind the message.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Order history, lead qualification scores, and CRM custom fields update automatically in every conversation.
          </p>
        </div>

        {/* Customer Intelligence Sheet */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Sheet Header */}
          <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                PK
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg font-bold">Priya Kumar</h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> WhatsApp Active
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">+91 98451 22910 • priya@apexhealthcare.in</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-3.5 py-1.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-400" /> Hot Lead (Score 92)
              </div>
            </div>
          </div>

          {/* Customer Metadata Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-xs">
            
            {/* Column 1: Core CRM Details */}
            <div className="space-y-4 pr-0 md:pr-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Account Data</h4>
              
              <div className="space-y-2.5">
                <div>
                  <div className="text-slate-400 text-[10px]">Organization</div>
                  <div className="font-semibold text-slate-800 text-sm">Apex Healthcare Hospitals</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px]">Industry Segment</div>
                  <div className="font-semibold text-slate-800">Healthcare / Hospital Network</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px]">Assigned Sales Rep</div>
                  <div className="font-semibold text-slate-800">Arjun Mehta (Senior Sales)</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px]">Acquisition Source</div>
                  <div className="font-semibold text-slate-800">WhatsApp QR • Meta Ad Campaign</div>
                </div>
              </div>
            </div>

            {/* Column 2: Commercial & Transaction History */}
            <div className="space-y-4 pt-4 md:pt-0 px-0 md:px-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Pipeline & Deals</h4>
              
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 font-medium">Pro Growth Plan</span>
                  <span className="text-emerald-700 font-bold">₹57,588/yr</span>
                </div>
                <div className="text-[11px] text-slate-500">10 Seats • 50,000 Contacts • UPI Auto-Pay</div>
                <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Quote Generated
                </div>
              </div>

              <div>
                <div className="text-slate-400 text-[10px] mb-1">Customer Tags</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-semibold">
                    Decision Maker
                  </span>
                  <span className="bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded text-[10px] font-semibold">
                    Pro Suite
                  </span>
                  <span className="bg-purple-50 text-purple-800 border border-purple-200 px-2 py-0.5 rounded text-[10px] font-semibold">
                    Google Sheets Sync
                  </span>
                </div>
              </div>
            </div>

            {/* Column 3: Scheduled Follow-ups & Activity */}
            <div className="space-y-4 pt-4 md:pt-0 pl-0 md:pl-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Activity Timeline</h4>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-800">WhatsApp Brochure Sent</div>
                    <div className="text-slate-400 text-[10px]">Today · 10:43 AM</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-800">Demo Call Scheduled</div>
                    <div className="text-slate-400 text-[10px]">Today · 4:30 PM (Google Meet)</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-slate-300 mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-800">First Contact Initiated</div>
                    <div className="text-slate-400 text-[10px]">Today · 10:42 AM</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
