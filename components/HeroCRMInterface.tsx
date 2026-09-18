"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MessageSquare, 
  CheckCheck, 
  Send, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Sparkles,
  UserCheck,
  CreditCard,
  ChevronRight
} from "lucide-react";

export default function HeroCRMInterface() {
  const [selectedId, setSelectedId] = useState("priya");
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  // Subtle cyclic animation for the compact 4-step workflow
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWorkflowStep((prev) => (prev + 1) % 4);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const contactsData: Record<string, {
    name: string;
    phone: string;
    company: string;
    avatar: string;
    avatarBg: string;
    time: string;
    preview: string;
    unread: boolean;
    status: string;
    statusColor: string;
    agent: string;
    followUp: string;
    deal: string;
    messages: { from: "customer" | "agent"; text: string; time: string; attachment?: boolean }[];
  }> = {
    priya: {
      name: "Priya Kumar",
      phone: "+91 98451 22910",
      company: "Apex Healthcare",
      avatar: "PK",
      avatarBg: "bg-emerald-600 text-white",
      time: "2m ago",
      preview: "Can we connect 5 agents to 1 WhatsApp number?",
      unread: true,
      status: "Hot Lead",
      statusColor: "bg-amber-50 text-amber-800 border-amber-200/80",
      agent: "Arjun (Sales)",
      followUp: "Today · 4:30 PM",
      deal: "₹48,000 / yr",
      messages: [
        { from: "customer", text: "Hi! Can we connect 5 sales agents to our official WhatsApp number?", time: "10:42 AM" },
        { from: "agent", text: "Yes Priya! Gradix auto-routes incoming chats to your team with zero collision.", time: "10:43 AM" },
        { from: "agent", text: "Here is our 1-page feature & pricing breakdown:", time: "10:43 AM", attachment: true },
        { from: "customer", text: "Great! Can you schedule a quick 10-min live demo for our team?", time: "10:44 AM" }
      ]
    },
    arun: {
      name: "Arun Patel",
      phone: "+91 97123 44820",
      company: "Luxe Retail Store",
      avatar: "AP",
      avatarBg: "bg-blue-600 text-white",
      time: "15m ago",
      preview: "Sent the catalog. Waiting for payment.",
      unread: false,
      status: "In Conversation",
      statusColor: "bg-blue-50 text-blue-800 border-blue-200/80",
      agent: "Neha (Support)",
      followUp: "Tomorrow · 11:00 AM",
      deal: "₹24,000 / yr",
      messages: [
        { from: "customer", text: "Do you have the new festive product catalog ready?", time: "10:20 AM" },
        { from: "agent", text: "Here is the interactive catalog with instant UPI checkout links.", time: "10:22 AM", attachment: true },
        { from: "customer", text: "Looks great, completing payment now via GPay.", time: "10:25 AM" }
      ]
    },
    rahul: {
      name: "Rahul Sharma",
      phone: "+91 99881 12399",
      company: "NexGen Motors",
      avatar: "RS",
      avatarBg: "bg-indigo-600 text-white",
      time: "1h ago",
      preview: "Payment received! Onboarding complete.",
      unread: false,
      status: "Won Deal",
      statusColor: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
      agent: "Vikram (Success)",
      followUp: "Completed",
      deal: "₹1,20,000 / yr",
      messages: [
        { from: "customer", text: "Just completed the annual subscription payment.", time: "9:30 AM" },
        { from: "agent", text: "Payment confirmed! Your WhatsApp Cloud API is active and ready for your team.", time: "9:31 AM" }
      ]
    }
  };

  const contact = contactsData[selectedId] || contactsData.priya;

  const workflowSteps = [
    {
      title: "Message",
      subtitle: "Inquiry In",
      icon: MessageSquare,
      color: "text-emerald-600",
      activeBg: "bg-emerald-50 border-emerald-400 text-emerald-700 shadow-2xs"
    },
    {
      title: "AI Intent",
      subtitle: "Hot Lead",
      icon: Sparkles,
      color: "text-amber-600",
      activeBg: "bg-amber-50 border-amber-400 text-amber-700 shadow-2xs"
    },
    {
      title: "Assigned",
      subtitle: "Right Agent",
      icon: UserCheck,
      color: "text-blue-600",
      activeBg: "bg-blue-50 border-blue-400 text-blue-700 shadow-2xs"
    },
    {
      title: "Payment",
      subtitle: "1-Tap UPI",
      icon: CreditCard,
      color: "text-emerald-600",
      activeBg: "bg-emerald-50 border-emerald-400 text-emerald-700 shadow-2xs"
    }
  ];

  return (
    <section className="relative pt-3 sm:pt-4 lg:pt-5 pb-8 sm:pb-10 lg:pb-12 overflow-hidden min-h-0 lg:min-h-[calc(100vh-64px)] flex flex-col justify-center">
      
      {/* Uploaded High-Res Brand World Map Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <Image 
          src="/images/hero-bg.png"
          alt="Gradix Global WhatsApp Network"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-bottom select-none"
        />
        {/* Soft subtle backdrop gradient to keep text readable while keeping map, plant, and WhatsApp brand elements completely vivid */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/5 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* 2-Column Equal Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: DEVELOPER-GRADE PRECISION HERO CONTENT                       */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left py-1 space-y-3 sm:space-y-3.5 lg:pr-2">
            
            {/* 1. TOP: Badge + Main Heading + Subtitle */}
            <div className="space-y-1.5">
              <div className="w-fit inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white shadow-2xs border border-slate-200/90 text-[11px] font-medium text-slate-700 tracking-tight">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Official Meta WhatsApp Cloud API</span>
              </div>

              <h1 className="text-2xl sm:text-[26px] lg:text-[29px] font-bold text-slate-900 tracking-tight leading-[1.2]">
                Turn every conversation{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-500">
                  into a customer.
                </span>
              </h1>

              <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed">
                One workspace for conversations, customers and growth.
              </p>
            </div>

            {/* 2. MIDDLE: 3 Feature Bullet Points */}
            <div className="space-y-1.5 pt-0.5">
              <div className="flex items-center gap-2 text-xs sm:text-[12.5px] text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Multi-agent shared inbox with collision lock</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-[12.5px] text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Real-time Google Sheets & lead sync</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-[12.5px] text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>In-chat 1-tap UPI payment collection</span>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* COMPACT PRODUCT-FLOW WORKFLOW (Message → AI → Agent → Payment)       */}
            {/* --------------------------------------------------------------------- */}
            <div className="p-1.5 sm:p-2 rounded-xl bg-white/95 backdrop-blur-xs border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between gap-1">
                {workflowSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeWorkflowStep === idx;
                  return (
                    <React.Fragment key={idx}>
                      <div
                        className={`flex-1 flex items-center justify-center gap-1 py-1 px-1.5 rounded-lg border transition-all duration-300 ${
                          isActive
                            ? step.activeBg
                            : "bg-slate-50/70 border-slate-200/60 text-slate-600"
                        }`}
                      >
                        <Icon className={`w-3 h-3 shrink-0 ${isActive ? "text-inherit" : step.color}`} />
                        <span className="text-[10.5px] font-semibold truncate leading-none">
                          {step.title}
                        </span>
                      </div>

                      {idx < workflowSteps.length - 1 && (
                        <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* 3. BOTTOM: CTA Buttons + Trust Line */}
            <div className="space-y-3 pt-1">
              {/* CTA Buttons with generous, adaptable padding */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  prefetch={true}
                  className="bg-[#005AEB] hover:bg-[#0048C0] text-white text-xs sm:text-[13px] font-semibold px-5 sm:px-6 py-2.5 rounded-lg shadow-sm shadow-blue-600/20 transition-all hover:scale-[1.01] inline-flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
                <Link
                  href="/pricing"
                  prefetch={true}
                  className="bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-[13px] font-semibold px-5 sm:px-6 py-2.5 rounded-lg border border-slate-200/90 shadow-2xs transition-all hover:border-slate-300 inline-flex items-center justify-center shrink-0"
                >
                  View Pricing
                </Link>
              </div>

              {/* Bottom Trust Line */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 font-normal">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Meta Verified
                </span>
                <span className="text-slate-400">•</span>
                <span>1,000 Free Monthly Chats</span>
                <span className="text-slate-400">•</span>
                <span>Zero Ban Risk</span>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: COMPACT MACBOOK LAPTOP FRAME WITH LIVE CRM                 */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center items-end">
            
            <div className="w-full max-w-[430px] sm:max-w-[450px] lg:max-w-[460px] ml-auto">
              
              {/* 1. MacBook Display Bezel */}
              <div className="rounded-t-[16px] p-1.5 sm:p-2 bg-slate-950 border border-slate-800 shadow-xl shadow-slate-900/20 relative">
                
                {/* Webcam Notch */}
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mx-auto mb-1 ring-1 ring-slate-700/50" />

                {/* Display Screen */}
                <div className="bg-white rounded-lg overflow-hidden border border-slate-200/80">
                  
                  {/* macOS Titlebar */}
                  <div className="bg-slate-950 text-white px-3 py-1.5 flex items-center justify-between text-[11px] shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <span className="font-semibold text-slate-200 text-[10.5px] ml-1">Gradix Connect CRM</span>
                    </div>

                    <div className="flex items-center gap-1 text-slate-300 text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-medium text-emerald-400">Live API Connected</span>
                    </div>
                  </div>

                  {/* 2-Panel Authentic WhatsApp Desktop Interface */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 h-[300px] sm:h-[320px] text-xs">
                    
                    {/* 1. WhatsApp Inbox Column (5 Cols) */}
                    <div className="sm:col-span-5 border-r border-slate-200/80 bg-white flex flex-col h-full min-h-0">
                      
                      {/* Inbox Header */}
                      <div className="p-2 bg-slate-50/80 border-b border-slate-200/70 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-[#005AEB] text-white text-[9px] font-bold flex items-center justify-center shadow-2xs">
                            G
                          </div>
                          <span className="font-bold text-slate-800 text-[11px]">Chats (3)</span>
                        </div>
                        <span className="text-[8.5px] font-semibold bg-emerald-50 text-emerald-700 px-1.5 py-0.2 rounded-full border border-emerald-200/80 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" /> Live
                        </span>
                      </div>

                      {/* Contacts List */}
                      <div className="divide-y divide-slate-100 flex-1 min-h-0 overflow-y-auto">
                        {Object.entries(contactsData).map(([id, c]) => {
                          const isSelected = id === selectedId;
                          return (
                            <div
                              key={id}
                              onClick={() => setSelectedId(id)}
                              className={`p-2 cursor-pointer transition-colors ${
                                isSelected
                                  ? "bg-slate-100/90 border-l-2 border-l-[#25D366]"
                                  : "hover:bg-slate-50/70 border-l-2 border-l-transparent"
                              }`}
                            >
                              <div className="flex items-start gap-2">
                                <div className={`w-6.5 h-6.5 rounded-full ${c.avatarBg} font-semibold text-[10px] flex items-center justify-center shrink-0 shadow-2xs`}>
                                  {c.avatar}
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center justify-between">
                                    <h4 className="text-[10.5px] font-semibold text-slate-900 truncate">{c.name}</h4>
                                    <span className="text-[8.5px] text-slate-400">{c.time}</span>
                                  </div>
                                  <p className="text-[9px] text-slate-500 truncate">{c.company}</p>
                                  <p className="text-[9.5px] text-slate-600 line-clamp-1 mt-0.5 font-normal">{c.preview}</p>
                                  
                                  <div className="flex items-center justify-between mt-1 pt-0.5 border-t border-slate-100/60">
                                    <span className={`text-[8px] px-1 py-0.2 rounded font-medium border ${c.statusColor}`}>
                                      {c.status}
                                    </span>
                                    <span className="text-[8.5px] text-slate-400 font-medium">
                                      {c.agent.split(" ")[0]}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. WhatsApp Conversation Column (7 Cols) */}
                    <div className="sm:col-span-7 flex flex-col bg-slate-50/60 h-full min-h-0 overflow-hidden">
                      
                      {/* Chat Header */}
                      <div className="p-2 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-6 h-6 rounded-full ${contact.avatarBg} font-semibold text-[10px] flex items-center justify-center shadow-2xs`}>
                            {contact.avatar}
                          </div>
                          <div>
                            <h3 className="text-[10.5px] font-semibold text-slate-900 leading-tight">{contact.name}</h3>
                            <p className="text-[8.5px] text-emerald-600 font-medium flex items-center gap-0.5">
                              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" /> online
                            </p>
                          </div>
                        </div>
                        <span className="text-[9px] bg-white text-slate-600 px-1.5 py-0.5 rounded border border-slate-200 font-mono shadow-2xs">
                          {contact.phone}
                        </span>
                      </div>

                      {/* Chat Messages Timeline */}
                      <div className="flex-1 min-h-0 p-2.5 whatsapp-chat-wallpaper overflow-y-auto space-y-1.5">
                        <div className="text-center">
                          <span className="inline-block bg-white/95 text-slate-500 text-[8.5px] px-2 py-0.5 rounded-full border border-slate-200/70 shadow-2xs">
                            🔒 256-bit Encrypted WhatsApp API
                          </span>
                        </div>

                        {contact.messages.map((m, idx) => (
                          <div
                            key={idx}
                            className={`flex ${m.from === "customer" ? "justify-start" : "justify-end"}`}
                          >
                            <div
                              className={`max-w-[85%] p-2 rounded-xl shadow-2xs space-y-0.5 ${
                                m.from === "customer"
                                  ? "bg-white text-slate-900 border border-slate-200/80 rounded-tl-xs"
                                  : "bg-[#D9FDD3] text-slate-900 rounded-tr-xs"
                              }`}
                            >
                              <p className="text-[10px] leading-relaxed font-normal">{m.text}</p>
                              
                              {m.attachment && (
                                <div className="mt-1 p-1.5 bg-white/90 rounded-lg border border-slate-200/80 flex items-center gap-1.5">
                                  <div className="w-5 h-5 rounded bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
                                    <FileText className="w-3 h-3 text-rose-600" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p className="text-[9.5px] font-semibold text-slate-800 truncate leading-tight">Gradix_Feature_Sheet.pdf</p>
                                    <p className="text-[8px] text-slate-400">1.8 MB • Official PDF</p>
                                  </div>
                                </div>
                              )}

                              <div className="flex items-center justify-end gap-0.5 text-[8px] text-slate-400 pt-0.5">
                                <span>{m.time}</span>
                                {m.from === "agent" && (
                                  <CheckCheck className="w-2.5 h-2.5 text-emerald-600" />
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* WhatsApp Input Bar */}
                      <div className="p-1.5 bg-white border-t border-slate-200/80 flex items-center gap-1.5 shrink-0">
                        <input
                          type="text"
                          readOnly
                          value="Type a reply to customer..."
                          className="flex-1 text-[9.5px] bg-slate-100/90 border border-slate-200/80 rounded-full px-2.5 py-1 text-slate-400 outline-hidden"
                        />
                        <button className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-2xs hover:bg-emerald-600 transition-colors">
                          <Send className="w-2.5 h-2.5" />
                        </button>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* 2. MacBook Aluminum Base / Bottom Lip */}
              <div className="relative">
                {/* Aluminum Base Top Plate */}
                <div className="h-2 sm:h-2.5 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400 rounded-b-[10px] border-x border-b border-slate-400 shadow-md relative flex justify-center items-start">
                  {/* Thumb Opening Notch */}
                  <div className="w-12 sm:w-14 h-1 bg-slate-500 rounded-b-md shadow-inner" />
                </div>
                {/* Bottom Shadow Footing */}
                <div className="w-3/4 mx-auto h-1.5 bg-slate-900/10 blur-[4px] rounded-full mt-0.5" />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
