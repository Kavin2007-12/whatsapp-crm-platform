"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Bot,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
  ShieldCheck,
  ShoppingBag,
  TrendingUp,
  Users,
  BarChart3,
  Layers,
  Globe2,
  Headphones,
  Send,
  Check,
  CheckCheck,
  ChevronRight,
  Building2,
  GraduationCap,
  HeartPulse,
  CreditCard,
  Briefcase,
  Play,
  Cpu,
  Smile,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Flame,
  Lock,
  Calendar,
  DollarSign,
  Package,
  Activity,
  FileText
} from "lucide-react";

export default function WhatsAppChatbotPage() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Demo Chatbot State
  const [demoMessages, setDemoMessages] = useState<
    Array<{ sender: "user" | "bot"; text: string; time: string; options?: string[] }>
  >([
    {
      sender: "bot",
      text: "👋 Hi! Welcome to GRADIX Store. How can our AI assistant help you today?",
      time: "10:30 AM",
      options: ["Check pricing plans", "Track my order #8492", "Connect with human agent", "Book a live demo"]
    }
  ]);
  const [demoInput, setDemoInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const demoChatEndRef = useRef<HTMLDivElement>(null);

  // Active Benefit Tab
  const [activeTab, setActiveTab] = useState<"sales" | "support" | "marketing" | "operations">("sales");

  const handleSendOption = (optionText: string) => {
    const userMsg = {
      sender: "user" as const,
      text: optionText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    setDemoMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let reply = "";
      let newOptions: string[] | undefined;

      if (optionText.includes("pricing") || optionText.includes("price")) {
        reply = "Gradix plans start at ₹1,999/mo ($49/mo) with unlimited WhatsApp AI conversations, Meta Cloud API integration, and CRM sync! Would you like to view our tiered plan breakdown?";
        newOptions = ["View Starter vs Pro", "Start 14-Day Free Trial", "Speak with Sales"];
      } else if (optionText.includes("order") || optionText.includes("Track")) {
        reply = "📦 Order #8492 status: Out for delivery! Your courier partner is BlueDart Express and expected delivery is today before 5:00 PM.";
        newOptions = ["Reschedule delivery", "Download invoice", "Need assistance"];
      } else if (optionText.includes("human") || optionText.includes("agent")) {
        reply = "Connecting you to an available specialist... ⚡ Handover complete! Sarah from Customer Support has joined the chat with complete context.";
        newOptions = ["Thanks Sarah!", "Ask product question"];
      } else if (optionText.includes("demo") || optionText.includes("Book")) {
        reply = "Great choice! We have demo slots open today at 3:00 PM and 5:30 PM. Would you like me to reserve one for your team?";
        newOptions = ["Reserve 3:00 PM", "Reserve 5:30 PM", "Choose another date"];
      } else {
        reply = `Thanks for reaching out! Our AI engine understood: "${optionText}". We can automate your customer workflows end-to-end. What would you like to explore next?`;
        newOptions = ["Explore CRM Sync", "Check API Docs", "Start Free Trial"];
      }

      setDemoMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          options: newOptions
        }
      ]);
      setIsTyping(false);
    }, 700);
  };

  const handleManualSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoInput.trim()) return;
    const text = demoInput.trim();
    setDemoInput("");
    handleSendOption(text);
  };

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    demoChatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [demoMessages, isTyping]);

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#005AEB] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. WHY WHATSAPP CHATBOT (HEAD-TO-HEAD COMPARISON)                         */}
      {/* ========================================================================= */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#005AEB] text-xs font-semibold mb-3">
            <span>Competitive Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Businesses Switch to GRADIX AI Chatbot
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            Traditional web forms, email ticketing, and rigid telephone IVRs cause customer friction and drop-offs.
            Meet your customers where they are already active every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-on-scroll">
          {/* The Old Way */}
          <div className="p-8 rounded-2xl bg-white border border-rose-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-rose-100 mb-6">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-base">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>The Old Way (Email, Web Forms & IVR)</span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-50 text-rose-600 font-semibold">
                High Friction
              </span>
            </div>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✕
                </span>
                <span>
                  <strong className="text-slate-800">12-48 hour response delays:</strong> Potential leads turn cold and
                  purchase from competitors before your team opens the ticket.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✕
                </span>
                <span>
                  <strong className="text-slate-800">Rigid, dumb button trees:</strong> Customers get trapped in
                  unhelpful automated loops that cannot comprehend typos or context.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✕
                </span>
                <span>
                  <strong className="text-slate-800">Sub-18% email open rates:</strong> Follow-ups and marketing
                  newsletters land directly in spam or promotions folders.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✕
                </span>
                <span>
                  <strong className="text-slate-800">High operational burn:</strong> Expensive support reps bogged down
                  answering repetitive &quot;Where is my order?&quot; queries.
                </span>
              </li>
            </ul>
          </div>

          {/* The GRADIX AI Way */}
          <div className="p-8 rounded-2xl bg-white border-2 border-emerald-500/80 shadow-md shadow-emerald-500/5 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-emerald-100 mb-6">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>The GRADIX AI Way</span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold">
                Autonomous Engine
              </span>
            </div>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </span>
                <span>
                  <strong className="text-slate-900">Under 1.5-second conversational resolution:</strong> Instant
                  responses capture buying momentum and close sales around the clock.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </span>
                <span>
                  <strong className="text-slate-900">Generative NLP & Context Memory:</strong> Recognizes intent, typos,
                  slang, voice notes, and 50+ languages natively.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </span>
                <span>
                  <strong className="text-slate-900">98% open rates on WhatsApp:</strong> Messages are delivered
                  directly to your customer&apos;s preferred messaging app.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </span>
                <span>
                  <strong className="text-slate-900">Seamless Human-in-the-Loop Handover:</strong> Transfers high-value
                  deals to live agents with full context and conversation history.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CORE FEATURES SECTION                                                  */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#005AEB] text-xs font-semibold mb-3">
              <span>Platform Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Enterprise-Grade AI Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5">
              Built on official Meta Cloud API infrastructure with visual drag-and-drop tools and generative AI models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-on-scroll">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all group">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-[#005AEB] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Visual No-Code Flow Builder</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Design multi-turn conversations, conditional logic, product recommendations, and API webhooks using an
                intuitive drag-and-drop canvas.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-[#005AEB] font-semibold">
                <span>Visual logic editor</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all group">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Generative AI Intent Engine</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Train AI on your product catalog, website URLs, and knowledge base PDFs. Recognizes nuanced customer intent
                with accurate RAG search.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <span>Document & RAG sync</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-indigo-300 hover:bg-white hover:shadow-md transition-all group">
              <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">In-Chat Commerce & Catalog</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Sync product catalogs directly. Customers can browse item collections, select variations, add items to
                cart, and complete in-chat checkout.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-indigo-700 font-semibold">
                <span>Shopify & WooCommerce</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-amber-300 hover:bg-white hover:shadow-md transition-all group">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Intelligent Agent Handoff</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Smart routing algorithms detect high-value leads or sensitive queries and transfer chats to the right human
                agent with complete conversation history.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-amber-700 font-semibold">
                <span>Shared team inbox sync</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-cyan-300 hover:bg-white hover:shadow-md transition-all group">
              <div className="w-11 h-11 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">50+ Multilingual Intelligence</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Communicate fluently with customers in English, Hindi, Tamil, Telugu, Spanish, Arabic, and 45+ languages
                with automated real-time translation.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-cyan-700 font-semibold">
                <span>Global customer reach</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-violet-300 hover:bg-white hover:shadow-md transition-all group">
              <div className="w-11 h-11 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Send className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Rich Interactive Messages</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Send interactive CTA buttons, product carousels, scrollable list pickers, dynamic PDF invoices, and
                location maps with 1-tap engagement.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-violet-700 font-semibold">
                <span>High conversion format</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BENEFITS SECTION (BY TEAM ROLE)                                        */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 reveal-on-scroll">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-3">
            <span>Organizational ROI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tailored Outcomes for Every Department
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            A single WhatsApp AI system empowering sales, support, marketing, and operations teams.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 reveal-on-scroll">
          {[
            { id: "sales", label: "For Sales Teams", icon: TrendingUp },
            { id: "support", label: "For Support Teams", icon: Headphones },
            { id: "marketing", label: "For Marketing Teams", icon: Zap },
            { id: "operations", label: "For Operations Teams", icon: BarChart3 }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#005AEB] text-white shadow-sm shadow-blue-600/30"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:bg-slate-50"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/80 shadow-sm reveal-on-scroll">
          {activeTab === "sales" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-mono font-semibold border border-emerald-200">
                  REVENUE ACCELERATION
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Qualify & Close Inbound Buyers Around the Clock
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Gradix AI engages website and ad traffic instantly, captures budget and timeline parameters, presents
                  tailored product options, and books meetings onto your sales team&apos;s calendars.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instant abandoned cart recovery with custom discount links</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Lead scoring synced directly with HubSpot and Salesforce pipelines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automated product upsells based on real-time catalog stock</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#F8FAFC] rounded-xl border border-slate-200 p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 pb-2.5 border-b border-slate-200">
                  <span>Pipeline Sync: Active Lead Funnel</span>
                  <span className="text-emerald-600 font-bold">+184% MoM</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                  <div>
                    <div className="text-xs font-bold text-slate-900">Enterprise Deal Identified</div>
                    <div className="text-[11px] text-slate-500">Budget: ₹1,50,000 • 50 User Licenses</div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Lead Captured
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                  <div>
                    <div className="text-xs font-bold text-slate-900">Live Demo Scheduled</div>
                    <div className="text-[11px] text-slate-500">Auto-assigned to Senior Rep Vikram</div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    Calendar Booked
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "support" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-semibold border border-blue-200">
                  SUPPORT EXCELLENCE
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Deflect 80% of Repetitive Inquiries Autonomously
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Eliminate support ticket backlogs. Gradix AI answers routine questions, validates order tracking
                  requests, and handles return workflows while transferring complex cases to live reps.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Real-time shipping API integration for instant tracking updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automated warranty verification and instant refund claim status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automated CSAT satisfaction surveys following chat resolution</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#F8FAFC] rounded-xl border border-slate-200 p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 pb-2.5 border-b border-slate-200">
                  <span>Support Efficiency Metrics</span>
                  <span className="text-[#005AEB] font-bold">1.2s Resolution</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                  <div>
                    <div className="text-xs font-bold text-slate-900">Order Inquiry #7921</div>
                    <div className="text-[11px] text-slate-500">Dispatched via BlueDart Express</div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Auto-Resolved
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                  <div>
                    <div className="text-xs font-bold text-slate-900">Live Agent Escalation</div>
                    <div className="text-[11px] text-slate-500">Context summary delivered to Neha</div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                    Handover Complete
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "marketing" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-mono font-semibold border border-purple-200">
                  BROADCAST ENGAGEMENT
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Two-Way WhatsApp Broadcasts That Actually Convert
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Go beyond static announcements. When a customer receives your WhatsApp broadcast campaign, the Gradix
                  AI chatbot instantly engages them in conversation to assist their purchase.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Personalized product recommendations based on past purchase history</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Trigger automated drip follow-ups when customers click campaign buttons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instant response engine for Click-to-WhatsApp Facebook/Instagram ads</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#F8FAFC] rounded-xl border border-slate-200 p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 pb-2.5 border-b border-slate-200">
                  <span>Campaign: Festive Flash Sale</span>
                  <span className="text-purple-600 font-bold">64.2% CTR</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                  <div>
                    <div className="text-xs font-bold text-slate-900">10,000 Messages Sent</div>
                    <div className="text-[11px] text-slate-500">9,812 Opened • 4,120 Replied</div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    98.1% Open Rate
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                  <div>
                    <div className="text-xs font-bold text-slate-900">Direct In-Chat Revenue</div>
                    <div className="text-[11px] text-slate-500">₹4,82,000 generated in 4 hours</div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                    High Conversion
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "operations" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-mono font-semibold border border-amber-200">
                  OPERATIONAL EFFICIENCY
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Automate Logistics, Invoicing, and Delivery Confirmation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Connect ERP and warehouse databases to WhatsApp. Dispatch automated shipping notifications, PDF tax
                  invoices, address correction workflows, and delivery slot confirmations.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Address verification flows prior to parcel dispatch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automated Cash on Delivery (COD) order confirmation to minimize RTO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instant dynamic PDF invoice delivery synced with Zoho Books</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#F8FAFC] rounded-xl border border-slate-200 p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 pb-2.5 border-b border-slate-200">
                  <span>Logistics Automation Status</span>
                  <span className="text-emerald-600 font-bold">-45% RTO Rate</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                  <div>
                    <div className="text-xs font-bold text-slate-900">COD Verification Complete</div>
                    <div className="text-[11px] text-slate-500">Customer confirmed delivery address via 1-tap</div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Ready to Ship
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                  <div>
                    <div className="text-xs font-bold text-slate-900">Dynamic Tax Invoice Sent</div>
                    <div className="text-[11px] text-slate-500">Generated & delivered in 400ms</div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    Synced
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. AUTOMATION WORKFLOW PIPELINE                                           */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#005AEB] text-xs font-semibold mb-3">
              <span>Step-by-Step Pipeline</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              How the GRADIX AI Engine Operates
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5">
              From inbound customer intent to automatic CRM sync and intelligent fulfillment — in under 2 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative reveal-on-scroll">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-2xs relative group hover:border-[#005AEB] transition-all">
              <div className="w-9 h-9 rounded-lg bg-[#005AEB] text-white flex items-center justify-center font-mono font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Inbound Trigger</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Customer scans packaging QR code, clicks an Instagram/FB ad, or messages your verified number.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-mono">
                Event: Meta Webhook
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-2xs relative group hover:border-emerald-500 transition-all">
              <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">AI Intent Recognition</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Neural models classify customer intent, extract entities, and look up customer CRM history.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-emerald-700 font-mono">
                Engine: GPT-4o RAG
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-2xs relative group hover:border-amber-500 transition-all">
              <div className="w-9 h-9 rounded-lg bg-amber-500 text-white flex items-center justify-center font-mono font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Dynamic Fulfillment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fetches live inventory prices, checks order status, creates UPI payment links, or answers FAQs.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-amber-700 font-mono">
                Action: REST API Sync
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-2xs relative group hover:border-indigo-500 transition-all">
              <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-sm mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">CRM Sync & Handoff</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tags and deals sync with your database. High-priority cases route seamlessly to available team agents.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-indigo-700 font-mono">
                Status: Complete & Logged
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. USE CASES BY INDUSTRY                                                  */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#005AEB] text-xs font-semibold mb-3">
            <span>Vertical Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for Real-World Business Workflows
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            Discover how retail, healthcare, real estate, and finance leaders deploy Gradix WhatsApp AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-on-scroll">
          {/* Industry 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">E-Commerce & D2C Brands</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Recover abandoned carts, send automated dispatch notifications with tracking links, and enable 1-tap UPI
              checkout.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Shopify & WooCommerce catalog sync</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>COD verification to lower RTO</span>
              </div>
            </div>
          </div>

          {/* Industry 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#005AEB] flex items-center justify-center mb-4">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">Healthcare & Clinics</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Allow patients to book doctor visits, receive appointment reminders, and download diagnostic lab test reports
              securely.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>HIPAA & privacy compliant chat flows</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Automated PDF prescription delivery</span>
              </div>
            </div>
          </div>

          {/* Industry 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">Education & EdTech</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Capture student admission inquiries, answer curriculum questions, send fee payment reminders, and dispatch
              webinar links.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>3.5x higher course registration conversion</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant brochure & syllabus downloads</span>
              </div>
            </div>
          </div>

          {/* Industry 4 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">Real Estate & Developers</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Share property brochures, floor plans, and virtual walkthroughs. Allow prospective buyers to schedule site
              visits in 1 tap.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Buyer budget & location qualification</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Automated calendar site visit booking</span>
              </div>
            </div>
          </div>

          {/* Industry 5 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">Financial Services & Fintech</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Check loan eligibility, collect KYC documents, dispatch account balance alerts, and resolve routine queries
              securely.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>End-to-end 256-bit AES encryption</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Automated EMI reminder notifications</span>
              </div>
            </div>
          </div>

          {/* Industry 6 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">Hospitality & Travel</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Provide instant room reservations, check-in instructions, WiFi access credentials, and local recommendations
              24/7.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>24/7 digital concierge in 50+ languages</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Contactless mobile check-in passes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. INTERACTIVE CHATBOT PLAYGROUND (SIMULATION)                            */}
      {/* ========================================================================= */}
      <section id="interactive-demo" className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-3">
              <Bot className="w-3.5 h-3.5" />
              <span>Live Interactive Simulation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Experience the AI Assistant Firsthand
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Click any quick prompt below or type your own question to see how Gradix AI understands and responds in real
              time.
            </p>
          </div>

          {/* Interactive Chat Container */}
          <div className="max-w-2xl mx-auto rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col h-[540px] reveal-on-scroll">
            {/* Header */}
            <div className="bg-[#005AEB] text-white px-5 py-3 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#005AEB]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm">Gradix AI Assistant</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                  </div>
                  <span className="text-[11px] text-blue-100">Sub-1.5s Response • Active Now</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setDemoMessages([
                    {
                      sender: "bot",
                      text: "👋 Hi! Welcome to GRADIX Store. How can our AI assistant help you today?",
                      time: "10:30 AM",
                      options: [
                        "Check pricing plans",
                        "Track my order #8492",
                        "Connect with human agent",
                        "Book a live demo"
                      ]
                    }
                  ]);
                }}
                className="px-2.5 py-1 rounded-md bg-white/15 hover:bg-white/25 text-white text-[11px] font-medium transition-colors"
              >
                Reset Chat
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#F8FAFC]">
              {demoMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#005AEB] text-white rounded-tr-xs shadow-xs"
                        : "bg-white text-slate-800 rounded-tl-xs border border-slate-200/90 shadow-2xs"
                    }`}
                  >
                    {msg.sender === "bot" && (
                      <div className="flex items-center gap-1 text-[#005AEB] text-[10.5px] font-semibold mb-1">
                        <Sparkles className="w-3 h-3 text-[#005AEB]" />
                        <span>Gradix AI</span>
                      </div>
                    )}
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    <div
                      className={`flex items-center gap-1 mt-1 text-[10px] ${
                        msg.sender === "user" ? "justify-end text-blue-100" : "justify-end text-slate-400"
                      }`}
                    >
                      <span>{msg.time}</span>
                      {msg.sender === "user" && <CheckCheck className="w-3 h-3 text-white" />}
                    </div>

                    {/* Interactive Options */}
                    {msg.options && msg.options.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {msg.options.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => handleSendOption(opt)}
                            className="text-left px-2.5 py-1 rounded-md bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-[#005AEB] text-[11px] font-medium transition-all"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 rounded-xl rounded-tl-xs px-3.5 py-2.5 flex items-center gap-1.5 text-xs text-slate-500 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005AEB] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005AEB] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005AEB] animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[11px] ml-1.5">Gradix AI is typing...</span>
                  </div>
                </div>
              )}
              <div ref={demoChatEndRef} />
            </div>

            {/* Input Bar */}
            <form onSubmit={handleManualSend} className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                value={demoInput}
                onChange={(e) => setDemoInput(e.target.value)}
                placeholder="Ask pricing, order status, or request live agent..."
                className="flex-1 bg-slate-50 border border-slate-200 focus:border-[#005AEB] rounded-lg px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden transition-colors"
              />
              <button
                type="submit"
                className="btn-primary text-xs py-2 px-3.5 flex items-center gap-1.5"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. INTEGRATIONS ECOSYSTEM                                                 */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#005AEB] text-xs font-semibold mb-3">
            <span>Seamless Connectivity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connects Natively with Your Tech Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            Sync customer contacts, orders, catalogs, and webhooks in 1 click across your existing tools.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 reveal-on-scroll">
          {[
            { name: "Shopify", desc: "Catalog & Orders" },
            { name: "WooCommerce", desc: "Store Sync" },
            { name: "HubSpot", desc: "CRM & Deals" },
            { name: "Salesforce", desc: "Enterprise Sync" },
            { name: "Zoho CRM", desc: "Contact Sync" },
            { name: "Zapier", desc: "5,000+ Apps" },
            { name: "Google Sheets", desc: "Real-Time Rows" },
            { name: "Razorpay", desc: "In-Chat Payments" },
            { name: "Stripe", desc: "Global Checkout" },
            { name: "REST Webhooks", desc: "Custom Backend" },
            { name: "Slack", desc: "Agent Alerts" },
            { name: "Meta Cloud API", desc: "Official Tier" }
          ].map((tool, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all text-center group"
            >
              <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#005AEB] transition-colors">
                {tool.name}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">{tool.desc}</div>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 11. FOOTER IS RENDERED BY ROOT LAYOUT                                     */}
      {/* ========================================================================= */}
    </div>
  );
}
