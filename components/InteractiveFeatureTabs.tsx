"use client";

import React, { useState } from "react";
import { 
  Inbox, 
  Users, 
  Flame, 
  GitBranch, 
  Send, 
  BarChart3, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Database,
  FileSpreadsheet,
  CheckCheck
} from "lucide-react";

export default function InteractiveFeatureTabs() {
  const [activeTab, setActiveTab] = useState("inbox");

  const tabs = [
    {
      id: "inbox",
      name: "Inbox",
      shortDesc: "Unified team inbox for multi-agent WhatsApp conversations with collision protection.",
      icon: Inbox
    },
    {
      id: "contacts",
      name: "Contacts",
      shortDesc: "Rich customer profiles with custom attributes, purchase history, and tag segmentation.",
      icon: Users
    },
    {
      id: "leads",
      name: "Leads",
      shortDesc: "Visual pipeline to track conversion velocity from initial chat to won deal.",
      icon: Flame
    },
    {
      id: "automation",
      name: "Automation",
      shortDesc: "Visual workflow builder for instant keyword routing and Google Sheets sync.",
      icon: GitBranch
    },
    {
      id: "campaigns",
      name: "Campaigns",
      shortDesc: "Targeted rich media WhatsApp broadcasts with dynamic name and discount variables.",
      icon: Send
    },
    {
      id: "analytics",
      name: "Analytics",
      shortDesc: "Real-time agent SLA response times, message volume, and revenue attribution.",
      icon: BarChart3
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            PRODUCT CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore the platform.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Click through each core module of the Gradix Connect WhatsApp CRM architecture.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm scale-105"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-emerald-400" : "text-slate-500"}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Product Interface Visual Container */}
        <div className="max-w-5xl mx-auto bg-[#F8FAFC] rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
          
          <div className="mb-6 pb-4 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 capitalize">
              {tabs.find(t => t.id === activeTab)?.name} Module
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {tabs.find(t => t.id === activeTab)?.shortDesc}
            </p>
          </div>

          {/* TAB 1: INBOX VIEW */}
          {activeTab === "inbox" && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 font-bold">
                <span className="text-slate-900">Multi-Agent Live Queue</span>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ● 3 Agents Active
                </span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center">PK</div>
                    <div>
                      <div className="font-bold text-slate-900">Priya Kumar (Apex Healthcare)</div>
                      <div className="text-slate-500">"Looking to connect 10 agent logins."</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Assigned: Arjun (Sales)
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center">AP</div>
                    <div>
                      <div className="font-bold text-slate-900">Arun Patel (Luxe Retail)</div>
                      <div className="text-slate-500">"How to setup abandoned cart recovery flow?"</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Assigned: Neha (Support)
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CONTACTS VIEW */}
          {activeTab === "contacts" && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 font-bold">
                <span className="text-slate-900">Customer CRM Directory (50,000 Contacts)</span>
                <span className="text-blue-700 font-mono">Sync: Shopify + Zoho CRM</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Total Audience</span>
                  <div className="text-2xl font-extrabold text-slate-900">48,290</div>
                  <div className="text-[11px] text-emerald-600 font-semibold">99.4% WhatsApp Verified</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400">VIP / Returning</span>
                  <div className="text-2xl font-extrabold text-slate-900">3,412</div>
                  <div className="text-[11px] text-slate-500">High Lifetime Value</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Custom Fields</span>
                  <div className="text-2xl font-extrabold text-slate-900">24</div>
                  <div className="text-[11px] text-indigo-600 font-semibold">Dynamic Attributes</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LEADS VIEW */}
          {activeTab === "leads" && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 font-bold">
                <span className="text-slate-900">Visual Sales Kanban Pipeline</span>
                <span className="text-emerald-700 font-bold">Pipeline Value: ₹18.4 Lakhs</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-700 flex items-center justify-between">
                    <span>New Leads</span>
                    <span className="text-[10px] bg-slate-200 px-1.5 py-0.5 rounded">12</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs">
                    <div className="font-bold text-slate-900">Apex Healthcare</div>
                    <div className="text-[11px] text-slate-500">Est. ₹57.5k • Pro Growth</div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-200 space-y-2">
                  <div className="font-bold text-blue-900 flex items-center justify-between">
                    <span>In Negotiation</span>
                    <span className="text-[10px] bg-blue-200 px-1.5 py-0.5 rounded">6</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs">
                    <div className="font-bold text-slate-900">Royal Heritage Hotels</div>
                    <div className="text-[11px] text-slate-500">Est. ₹1.43L • Enterprise</div>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-200 space-y-2">
                  <div className="font-bold text-emerald-900 flex items-center justify-between">
                    <span>Won Deals</span>
                    <span className="text-[10px] bg-emerald-200 px-1.5 py-0.5 rounded">86</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs">
                    <div className="font-bold text-slate-900">NexGen Motors</div>
                    <div className="text-[11px] text-emerald-700 font-bold">Closed ₹1.43L • Paid</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: AUTOMATION VIEW */}
          {activeTab === "automation" && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 font-bold">
                <span className="text-slate-900">No-Code Conversational Flow</span>
                <span className="text-emerald-700">● 14 Active Workflows</span>
              </div>
              <div className="p-4 bg-slate-900 text-white rounded-xl font-mono text-xs space-y-2">
                <div className="text-emerald-400 font-bold">&gt; IF message contains ("catalog" OR "brochure")</div>
                <div className="text-slate-300 pl-4">→ Action: Dispatch Interactive Product Catalog Carousel</div>
                <div className="text-slate-300 pl-4">→ Action: Log Lead in Google Sheet: "Incoming_Inquiries"</div>
                <div className="text-slate-300 pl-4">→ Action: Assign round-robin to Available Sales Agent</div>
              </div>
            </div>
          )}

          {/* TAB 5: CAMPAIGNS VIEW */}
          {activeTab === "campaigns" && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 font-bold">
                <span className="text-slate-900">Meta Bulk Broadcast Engine</span>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                  Zero Number Blocking
                </span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                <div>
                  <div className="font-bold text-slate-900 text-sm">Festive_Offer_VIP_Segment</div>
                  <div className="text-slate-500 mt-0.5">Template: &quot;Hello &#123;&#123;1&#125;&#125;, here is your exclusive 20% pass: &#123;&#123;2&#125;&#125;&quot;</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-extrabold text-slate-900 text-base">98.6%</div>
                    <div className="text-[10px] text-emerald-600 font-semibold">Open Rate</div>
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold text-slate-900 text-base">42.1%</div>
                    <div className="text-[10px] text-blue-600 font-semibold">Click Through</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: ANALYTICS VIEW */}
          {activeTab === "analytics" && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 font-bold">
                <span className="text-slate-900">Response SLA & Attribution Metrics</span>
                <span className="text-slate-500 font-normal">Last 30 Days</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-slate-400 text-[10px]">Avg First Reply</div>
                  <div className="text-xl font-bold text-slate-900 mt-1">38 sec</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-slate-400 text-[10px]">Resolution Rate</div>
                  <div className="text-xl font-bold text-emerald-700 mt-1">94.2%</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-slate-400 text-[10px]">Customer CSAT</div>
                  <div className="text-xl font-bold text-[#0066FF] mt-1">4.9 / 5.0</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-slate-400 text-[10px]">In-Chat Revenue</div>
                  <div className="text-xl font-bold text-emerald-700 mt-1">₹18.4L</div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
