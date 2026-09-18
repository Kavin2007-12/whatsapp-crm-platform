"use client";

import React, { useState } from "react";
import { 
  CheckCheck, 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  Smartphone, 
  Laptop, 
  Zap, 
  CreditCard, 
  Database,
  ArrowRight,
  TrendingUp,
  Clock,
  Phone,
  Building,
  CheckCircle2,
  Lock
} from "lucide-react";

interface Scenario {
  id: string;
  tabTitle: string;
  badge: string;
  customerName: string;
  customerPhone: string;
  customerCompany: string;
  dealValue: string;
  leadStage: string;
  leadStageColor: string;
  assignedAgent: string;
  intentScore: string;
  sheetsRow: string;
  mobileMessages: {
    from: "customer" | "business";
    text: string;
    time: string;
    attachment?: { title: string; size: string };
    buttons?: string[];
    paymentCard?: { amount: string; status: string; utr: string };
  }[];
  crmTimeline: { time: string; event: string; status: string }[];
}

export default function DualDeviceShowcase() {
  const scenarios: Scenario[] = [
    {
      id: "annual-deal",
      tabTitle: "₹48,000 Deal & UPI Payment",
      badge: "High-Value Enterprise Lead",
      customerName: "Priya Kumar",
      customerPhone: "+91 98451 22910",
      customerCompany: "Apex Healthcare Ltd.",
      dealValue: "₹48,000 / yr",
      leadStage: "Deal Won (Paid)",
      leadStageColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
      assignedAgent: "Arjun Mehta (Senior Sales)",
      intentScore: "98% (High Intent)",
      sheetsRow: "Row #348 · Real-time Bi-directional",
      mobileMessages: [
        {
          from: "customer",
          text: "Hi! Can we connect 5 sales agents to 1 WhatsApp number for our hospital chain?",
          time: "10:42 AM"
        },
        {
          from: "business",
          text: "Hello Priya! Yes, Gradix auto-routes incoming chats with zero collision lock.",
          time: "10:43 AM",
          attachment: { title: "Apex_Hospital_Proposal.pdf", size: "2.4 MB" }
        },
        {
          from: "business",
          text: "Click below to complete annual onboarding via official UPI checkout:",
          time: "10:44 AM",
          paymentCard: {
            amount: "₹48,000.00",
            status: "Payment Confirmed ✅",
            utr: "UPI-RR98421890-GPAY"
          }
        },
        {
          from: "customer",
          text: "Payment done! Can you invite our other 4 team members now?",
          time: "10:45 AM"
        }
      ],
      crmTimeline: [
        { time: "10:42 AM", event: "Inbound WhatsApp message received via Meta Cloud API", status: "Verified" },
        { time: "10:42 AM", event: "AI Lead Scorer classified buying intent as 98%", status: "Hot Lead" },
        { time: "10:43 AM", event: "Auto-routed to Arjun Mehta (Senior Sales) · Collision Locked", status: "Locked" },
        { time: "10:44 AM", event: "In-chat ₹48,000 UPI Payment link dispatched", status: "Sent" },
        { time: "10:45 AM", event: "1-Tap UPI Payment Confirmed (UTR: RR98421890)", status: "Success" },
        { time: "10:45 AM", event: "Bi-directional sync updated Google Sheets (Row #348)", status: "Synced" }
      ]
    },
    {
      id: "retail-catalog",
      tabTitle: "Interactive Catalog & Quick Replies",
      badge: "E-Commerce & Retail Sales",
      customerName: "Arun Patel",
      customerPhone: "+91 97123 44820",
      customerCompany: "Luxe Retail Store",
      dealValue: "₹24,000 / yr",
      leadStage: "Payment Processing",
      leadStageColor: "bg-blue-50 text-blue-800 border-blue-300",
      assignedAgent: "Neha Sharma (Retail Success)",
      intentScore: "92% (Ready to Buy)",
      sheetsRow: "Row #349 · Real-time Bi-directional",
      mobileMessages: [
        {
          from: "customer",
          text: "Do you have the new festive product catalog and bulk discount slab?",
          time: "11:15 AM"
        },
        {
          from: "business",
          text: "Here is our interactive festive collection with 1-click bulk ordering:",
          time: "11:16 AM",
          attachment: { title: "Festive_Catalog_2026.pdf", size: "3.8 MB" },
          buttons: ["View Wholesale Slabs", "Talk to Sales Rep", "Instant UPI Checkout"]
        },
        {
          from: "customer",
          text: "Selected 50 wholesale units. Ready for payment link.",
          time: "11:18 AM"
        }
      ],
      crmTimeline: [
        { time: "11:15 AM", event: "Customer tapped WhatsApp QR code campaign", status: "Campaign" },
        { time: "11:16 AM", event: "Interactive Meta WhatsApp template with 3 CTA buttons sent", status: "Delivered" },
        { time: "11:17 AM", event: "Customer clicked button [Instant UPI Checkout]", status: "Clicked" },
        { time: "11:18 AM", event: "Neha Sharma assigned · Live typing broadcast active", status: "Active" }
      ]
    },
    {
      id: "auto-booking",
      tabTitle: "AI Auto-Qualification & Booking",
      badge: "Automated 24/7 Drip",
      customerName: "Rahul Sharma",
      customerPhone: "+91 99881 12399",
      customerCompany: "NexGen Motors",
      dealValue: "₹1,20,000 / yr",
      leadStage: "Enterprise Demo Booked",
      leadStageColor: "bg-purple-50 text-purple-800 border-purple-300",
      assignedAgent: "Vikram Malhotra (VP Enterprise)",
      intentScore: "99% (High Value)",
      sheetsRow: "Row #350 · Real-time Bi-directional",
      mobileMessages: [
        {
          from: "customer",
          text: "We need WhatsApp API for 40+ car dealerships across India with ERP sync.",
          time: "02:10 PM"
        },
        {
          from: "business",
          text: "Welcome NexGen Motors! Gradix handles 10M+ monthly messages with custom ERP webhooks.",
          time: "02:10 PM"
        },
        {
          from: "business",
          text: "Select your preferred slot for a private engineering walkthrough:",
          time: "02:11 PM",
          buttons: ["Today · 4:00 PM", "Tomorrow · 11:30 AM", "Connect with Vikram Now"]
        },
        {
          from: "customer",
          text: "Booked Tomorrow 11:30 AM. Added our CTO to the calendar.",
          time: "02:12 PM"
        }
      ],
      crmTimeline: [
        { time: "02:10 PM", event: "Inbound Enterprise query tagged as 40+ Multi-location", status: "VIP Lead" },
        { time: "02:10 PM", event: "Instant AI qualification responded in 380ms", status: "Instant" },
        { time: "02:11 PM", event: "Google Calendar & ERP Webhook slot reserved", status: "Booked" },
        { time: "02:12 PM", event: "Lead synced to CRM & Vikram Malhotra notified via Slack", status: "Notified" }
      ]
    }
  ];

  const [activeScenarioId, setActiveScenarioId] = useState("annual-deal");
  const current = scenarios.find(s => s.id === activeScenarioId) || scenarios[0];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-emerald-400">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>DUAL-DEVICE LIVE TELEMETRY</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Your customer is on WhatsApp. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
              Your team is on Gradix CRM.
            </span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Every chat on official WhatsApp instantly updates your team’s lead scores, collision locks, UPI payment confirmations, and Google Sheets bi-directionally in &lt;150ms.
          </p>
        </div>

        {/* Interactive Scenario Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {scenarios.map((sc) => {
            const isActive = sc.id === activeScenarioId;
            return (
              <button
                key={sc.id}
                onClick={() => setActiveScenarioId(sc.id)}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40 scale-[1.02]"
                    : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? "bg-white animate-ping" : "bg-emerald-400"}`} />
                {sc.tabTitle}
              </button>
            );
          })}
        </div>

        {/* DUAL-DEVICE SHOWCASE STAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* DEVICE 1: PHOTOREALISTIC IPHONE WHATSAPP BUSINESS MOCKUP (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Device Label */}
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Customer Mobile View (Official WhatsApp)</span>
            </div>

            {/* iPhone Chassis Frame */}
            <div className="w-full max-w-[360px] bg-slate-950 rounded-[44px] p-3.5 border-4 border-slate-700/80 shadow-2xl shadow-black/80 relative">
              
              {/* Dynamic Island Pill */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800 ml-auto mr-2" />
              </div>

              {/* Phone Screen Screen Container */}
              <div className="bg-[#0b141a] rounded-[36px] overflow-hidden border border-slate-800 flex flex-col h-[520px] text-xs">
                
                {/* WhatsApp Chat Top Header */}
                <div className="bg-[#1f2c34] text-white pt-8 pb-3 px-3.5 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      G
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-xs text-white">Gradix Connect</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400 text-slate-900" />
                      </div>
                      <p className="text-[10px] text-emerald-400 font-medium">Official Business Account</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                    256-Bit SSL
                  </span>
                </div>

                {/* WhatsApp Chat Wallpaper Feed */}
                <div className="flex-1 p-3.5 whatsapp-chat-wallpaper overflow-y-auto space-y-3 text-slate-900">
                  
                  {/* Privacy Badge */}
                  <div className="text-center">
                    <span className="inline-block bg-[#182229] text-slate-300 text-[9.5px] px-2.5 py-0.5 rounded border border-slate-700/60 shadow-xs">
                      🔒 Official Cloud API Verified
                    </span>
                  </div>

                  {/* Messages Loop */}
                  {current.mobileMessages.map((m, idx) => (
                    <div
                      key={idx}
                      className={`flex ${m.from === "customer" ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[88%] p-2.5 rounded-xl shadow-sm space-y-1.5 ${
                          m.from === "customer"
                            ? "bg-[#202c33] text-slate-100 rounded-tl-xs border border-slate-700/40"
                            : "bg-[#005c4b] text-white rounded-tr-xs"
                        }`}
                      >
                        <p className="leading-relaxed text-[11.5px]">{m.text}</p>

                        {/* PDF Attachment Card */}
                        {m.attachment && (
                          <div className="bg-[#111b21] rounded-lg p-2 flex items-center gap-2 border border-slate-700/60 mt-1">
                            <div className="w-6 h-6 rounded bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                              <FileText className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0 text-left">
                              <div className="text-[10.5px] font-semibold text-slate-200 truncate">{m.attachment.title}</div>
                              <div className="text-[9px] text-slate-400">{m.attachment.size} • Official PDF</div>
                            </div>
                          </div>
                        )}

                        {/* Interactive Buttons */}
                        {m.buttons && (
                          <div className="space-y-1 pt-1">
                            {m.buttons.map((btn, bIdx) => (
                              <div
                                key={bIdx}
                                className="bg-[#1f2c34] hover:bg-[#2a3942] text-emerald-400 text-center py-1.5 px-2 rounded-lg text-[10.5px] font-semibold border border-slate-700/60 flex items-center justify-center gap-1 transition-colors"
                              >
                                <span>{btn}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* In-Chat UPI Payment Card */}
                        {m.paymentCard && (
                          <div className="bg-[#111b21] rounded-xl p-2.5 border border-emerald-500/40 shadow-xs space-y-1.5 mt-1">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] text-slate-400 font-medium">Instant UPI Collection</span>
                              <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                            </div>
                            <div className="text-sm font-bold text-emerald-400">{m.paymentCard.amount}</div>
                            <div className="flex items-center justify-between text-[9px] pt-1 border-t border-slate-800">
                              <span className="text-emerald-300 font-semibold">{m.paymentCard.status}</span>
                              <span className="text-slate-400 font-mono">{m.paymentCard.utr}</span>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-end gap-1 text-[9px] text-slate-400">
                          <span>{m.time}</span>
                          {m.from === "business" && <CheckCheck className="w-3 h-3 text-sky-400" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Bottom Input Bar */}
                <div className="p-2 bg-[#1f2c34] border-t border-slate-800 flex items-center gap-2">
                  <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5 text-[11px] text-slate-400">
                    Message Gradix...
                  </div>
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* DEVICE 2: PHOTOREALISTIC ENTERPRISE DESKTOP CRM DASHBOARD (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Device Label */}
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-blue-400 bg-blue-950/60 border border-blue-800/60 px-3 py-1 rounded-full self-start">
              <Laptop className="w-3.5 h-3.5" />
              <span>Enterprise CRM Dashboard View (Gradix Connect)</span>
            </div>

            {/* Desktop Mac Window Container */}
            <div className="w-full bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
              
              {/* macOS Window Titlebar */}
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-semibold text-slate-200">Customer 360 · Lead Telemetry Center</span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-400 font-mono font-semibold text-[11px]">Webhook &lt;120ms Active</span>
                </div>
              </div>

              {/* Main Dashboard Body */}
              <div className="p-5 sm:p-6 space-y-6 bg-slate-950">
                
                {/* 1. Customer Summary Header */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-base flex items-center justify-center shadow-md">
                      {current.customerName.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-white">{current.customerName}</h3>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-semibold border ${current.leadStageColor}`}>
                          {current.leadStage}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                        <Building className="w-3 h-3 text-slate-500" /> {current.customerCompany}
                        <span>•</span>
                        <Phone className="w-3 h-3 text-slate-500" /> {current.customerPhone}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Deal Pipeline Value</div>
                    <div className="text-xl font-bold text-emerald-400">{current.dealValue}</div>
                  </div>
                </div>

                {/* 2. Real-Time Telemetry Grid (4 Live Badges) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Collision Shield Status */}
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase">Collision Shield</div>
                      <div className="text-xs font-semibold text-slate-200 truncate">{current.assignedAgent}</div>
                      <div className="text-[10px] text-amber-400/90 font-medium mt-0.5">Active session lock engaged</div>
                    </div>
                  </div>

                  {/* AI Intent & Lead Scoring */}
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase">AI Buying Intent</div>
                      <div className="text-xs font-semibold text-blue-400 truncate">{current.intentScore}</div>
                      <div className="text-[10px] text-slate-400 font-medium mt-0.5">Auto-scored from inquiry message</div>
                    </div>
                  </div>

                  {/* Google Sheets Bi-Directional Sync */}
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <Database className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase">Bi-Directional Database</div>
                      <div className="text-xs font-semibold text-emerald-400 truncate">{current.sheetsRow}</div>
                      <div className="text-[10px] text-slate-400 font-medium mt-0.5">Instant 2-way cloud sync</div>
                    </div>
                  </div>

                  {/* Anti-Ban Meta Partner Verified */}
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase">Meta Cloud API</div>
                      <div className="text-xs font-semibold text-purple-300 truncate">100% Anti-Ban Guarantee</div>
                      <div className="text-[10px] text-slate-400 font-medium mt-0.5">Official Tier-1 Meta Partner</div>
                    </div>
                  </div>

                </div>

                {/* 3. Live Webhook Audit Timeline */}
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-400" /> Live Audit Log & Webhook Telemetry
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">100% End-to-End Traced</span>
                  </div>

                  <div className="space-y-2.5">
                    {current.crmTimeline.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span className="text-slate-300 text-[11.5px]">{item.event}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-slate-500 font-mono">{item.time}</span>
                          <span className="text-[9.5px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-medium border border-slate-700">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 p-4 rounded-2xl bg-slate-800/40 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Experience official Meta WhatsApp Cloud API speed</h4>
              <p className="text-xs text-slate-400">Zero QR code disconnection. 99.99% uptime. Multi-agent collision protection.</p>
            </div>
          </div>

          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02] inline-flex items-center gap-2"
          >
            Launch Live Sandbox
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
