"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, X, Sparkles, CheckCircle2 } from "lucide-react";

interface FeatureCardHotspot {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  left: string;
  top: string;
  tag: string;
  description: string;
  benefits: string[];
}

const FEATURE_HOTSPOTS: FeatureCardHotspot[] = [
  {
    id: "integration",
    title: "Integration",
    subtitle: "Connect your stack",
    icon: "/assets/features/icon-integration.png",
    left: "49.41%",
    top: "32.23%",
    tag: "Native Connectivity",
    description: "Seamlessly integrate your WhatsApp CRM with Shopify, WooCommerce, Zapier, HubSpot, Zoho, and enterprise REST APIs.",
    benefits: [
      "1-Click storefront & eCommerce catalog sync",
      "Instant webhooks for order status, tracking & alerts",
      "Bi-directional CRM contact & deal pipeline sync",
      "Automated event triggers with custom payload mapping"
    ]
  },
  {
    id: "chatbot",
    title: "WhatsApp Chatbot",
    subtitle: "Automate conversations",
    icon: "/assets/features/icon-chatbot.png",
    left: "23.83%",
    top: "44.34%",
    tag: "AI Conversation Engine",
    description: "Build visual multi-step conversational flows, trigger automated replies, and handle customer questions 24/7 with zero code.",
    benefits: [
      "Visual drag-and-drop conversational canvas",
      "Smart keyword triggers & interactive list messages",
      "Automated FAQ resolution with AI intent recognition",
      "Smooth fallback routing to available live human agents"
    ]
  },
  {
    id: "inbox",
    title: "AI Customer Inbox",
    subtitle: "Manage every conversation",
    icon: "/assets/features/icon-api-bubble.png",
    left: "19.63%",
    top: "61.72%",
    tag: "Unified Team Workspace",
    description: "Empower your entire team with a high-speed shared team inbox, collision detection, and automated conversational assignment.",
    benefits: [
      "Multi-agent team inbox with real-time collision alerts",
      "Canned responses, internal notes & private tags",
      "Contact 360 view with purchase history in side panel",
      "Omnichannel chat synchronization with SLA timers"
    ]
  },
  {
    id: "commerce",
    title: "WhatsApp Commerce",
    subtitle: "Sell directly in chats",
    icon: "/assets/features/icon-ecommerce.png",
    left: "28.52%",
    top: "84.18%",
    tag: "In-Chat Storefront",
    description: "Enable customers to browse native WhatsApp product catalogs, assemble carts, and complete 1-tap UPI payments right inside chats.",
    benefits: [
      "Interactive multi-item catalog showcase",
      "Automated abandoned cart recovery nudges",
      "Native in-chat UPI, Cards & NetBanking payments",
      "Instant invoice generation and shipping tracking links"
    ]
  },
  {
    id: "api",
    title: "WhatsApp API",
    subtitle: "Build powerful automation",
    icon: "/assets/features/icon-api-code.png",
    left: "75.98%",
    top: "44.34%",
    tag: "Official Meta Cloud API",
    description: "Enterprise tier-4 Cloud API infrastructure delivering high-throughput broadcast campaigns with 99.99% deliverability.",
    benefits: [
      "Direct official Meta WhatsApp Cloud API tier-4 pipeline",
      "Verified Green Tick verification assistance",
      "Rich media broadcast campaigns with custom variables",
      "Comprehensive webhook logging for delivery & read receipts"
    ]
  },
  {
    id: "crm",
    title: "WhatsApp CRM",
    subtitle: "Manage customer journeys",
    icon: "/assets/features/icon-crm.png",
    left: "80.47%",
    top: "61.91%",
    tag: "Customer Lifecycle",
    description: "Track every lead, customer journey stage, and deal progression in an integrated visual pipeline designed for WhatsApp commerce.",
    benefits: [
      "Visual Kanban pipeline stages for sales and support",
      "Automated lead scoring and lifecycle stage progression",
      "Custom attributes, tags, and audience segmentation",
      "Exportable customer data and detailed conversion analytics"
    ]
  },
  {
    id: "support",
    title: "Customer Support",
    subtitle: "Resolve conversations faster",
    icon: "/assets/features/icon-support.png",
    left: "72.07%",
    top: "84.18%",
    tag: "24/7 Enterprise Helpdesk",
    description: "Deliver rapid, consistent customer support with intelligent routing, SLA alerts, and post-chat customer satisfaction (CSAT) scoring.",
    benefits: [
      "Automated round-robin and skill-based ticket routing",
      "SLA monitoring with breach notifications",
      "Automated post-resolution CSAT surveys & reports",
      "Agent productivity metrics and response speed benchmarks"
    ]
  },
];

export default function FeaturesPage() {
  const sceneRef = useRef<HTMLElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [activeModal, setActiveModal] = useState<FeatureCardHotspot | null>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const stars = starsRef.current;
    const glow = glowRef.current;
    if (!scene || !stars) return;

    // Create 90 twinkling stars matching original spec
    stars.innerHTML = "";
    for (let i = 0; i < 90; i++) {
      const s = document.createElement("i");
      s.className = "star";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.setProperty("--d", 1.5 + Math.random() * 4.5 + "s");
      s.style.animationDelay = -Math.random() * 5 + "s";
      stars.appendChild(s);
    }

    // Cache scene rect to avoid forced synchronous layouts on mousemove
    let sceneRect = scene.getBoundingClientRect();
    const handleResize = () => {
      sceneRect = scene.getBoundingClientRect();
    };
    window.addEventListener("resize", handleResize, { passive: true });

    const handlePointerMove = (e: PointerEvent) => {
      const mouseX = e.clientX - sceneRect.left;
      const mouseY = e.clientY - sceneRect.top;

      // GPU accelerated cursor glow transform (0 layout reflow)
      if (glow) {
        glow.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handlePointerLeave = () => {
      if (glow) {
        glow.style.transform = `translate3d(${sceneRect.width * 0.5}px, ${sceneRect.height * 0.5}px, 0) translate(-50%, -50%)`;
      }
    };

    scene.addEventListener("pointermove", handlePointerMove, { passive: true });
    scene.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      scene.removeEventListener("pointermove", handlePointerMove);
      scene.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="w-full h-[calc(100vh-58px)] min-h-[540px] bg-[#020b18] overflow-hidden selection:bg-blue-600 selection:text-white">
      {/* ========================================================================= */}
      {/* FULL SCREEN CINEMATIC CANVAS (FITS WHOLE SCREEN)                          */}
      {/* ========================================================================= */}
      <main className="features-stage" id="scene" ref={sceneRef}>
        {/* Exact Artwork Base Layer (2560x1280 lossless WebP with single pristine globe) */}
        <div className="base-art" aria-hidden="true"></div>

        {/* ========================================================================= */}
        {/* CRISP VECTOR HEADER OVERLAY (100% RAZOR SHARP TYPOGRAPHY)                */}
        {/* ========================================================================= */}
        <div className="absolute top-[2.5%] sm:top-[3%] left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none w-full max-w-4xl px-4 select-none">
          {/* Glowing GRADIX Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#29b6f6] via-[#00e5ff] to-[#7c4dff] drop-shadow-[0_0_24px_rgba(0,195,255,0.7)] font-sans leading-none">
            GRADIX
          </h1>
          {/* Main Headline */}
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-[26px] font-bold text-white tracking-tight mt-1.5 sm:mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            Everything your business needs{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#00f5a0]">
              on WhatsApp.
            </span>
          </h2>
          {/* Subtitle */}
          <p className="text-[11px] sm:text-xs md:text-[13px] text-blue-100/90 font-normal tracking-wide mt-1 sm:mt-1.5 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Automate, Engage, Convert. — All from one powerful WhatsApp CRM platform.
            <br className="hidden sm:inline" />
            {" "}Build stronger customer relationships and grow your business, effortlessly.
          </p>
        </div>

        {/* 7 Interactive Feature Cards with 100% Crisp Vector Typography */}
        {FEATURE_HOTSPOTS.map((hotspot) => {
          const cardContent = (
            <>
              {/* 3D Circular Feature Icon Badge */}
              <img
                src={hotspot.icon}
                alt={hotspot.title}
                className="feature-pill-icon pointer-events-none"
              />

              {/* Crisp Vector Text */}
              <div className="flex flex-col text-left pr-2 pointer-events-none select-none">
                <span className="text-white font-bold text-[13.5px] sm:text-[14px] md:text-[14.5px] leading-tight tracking-[-0.01em] drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] whitespace-nowrap">
                  {hotspot.title}
                </span>
                <span className="text-[#9ec5f7] font-normal text-[10.5px] sm:text-[11px] md:text-[11.5px] leading-tight tracking-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap mt-[3px]">
                  {hotspot.subtitle}
                </span>
              </div>

              {/* Glowing Arrow Button */}
              <div className="feature-pill-btn pointer-events-none">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300" />
              </div>
            </>
          );

          if (hotspot.id === "chatbot") {
            return (
              <Link
                key={hotspot.id}
                href="/features/whatsapp-chatbot"
                className="feature-pill-card group focus:outline-hidden"
                style={{
                  left: hotspot.left,
                  top: hotspot.top,
                }}
                aria-label={`Explore ${hotspot.title}`}
              >
                {cardContent}
              </Link>
            );
          }

          if (hotspot.id === "crm") {
            return (
              <Link
                key={hotspot.id}
                href="/features/whatsapp-crm"
                className="feature-pill-card group focus:outline-hidden"
                style={{
                  left: hotspot.left,
                  top: hotspot.top,
                }}
                aria-label={`Explore ${hotspot.title}`}
              >
                {cardContent}
              </Link>
            );
          }

          if (hotspot.id === "integration") {
            return (
              <Link
                key={hotspot.id}
                href="/features/integration"
                className="feature-pill-card group focus:outline-hidden"
                style={{
                  left: hotspot.left,
                  top: hotspot.top,
                }}
                aria-label={`Explore ${hotspot.title}`}
              >
                {cardContent}
              </Link>
            );
          }

          if (hotspot.id === "support") {
            return (
              <Link
                key={hotspot.id}
                href="/features/customer-support"
                className="feature-pill-card group focus:outline-hidden"
                style={{
                  left: hotspot.left,
                  top: hotspot.top,
                }}
                aria-label={`Explore ${hotspot.title}`}
              >
                {cardContent}
              </Link>
            );
          }

          if (hotspot.id === "commerce") {
            return (
              <Link
                key={hotspot.id}
                href="/features/whatsapp-commerce"
                className="feature-pill-card group focus:outline-hidden"
                style={{
                  left: hotspot.left,
                  top: hotspot.top,
                }}
                aria-label={`Explore ${hotspot.title}`}
              >
                {cardContent}
              </Link>
            );
          }


          return (
            <button
              key={hotspot.id}
              onClick={() => setActiveModal(hotspot)}
              className="feature-pill-card group focus:outline-hidden"
              style={{
                left: hotspot.left,
                top: hotspot.top,
              }}
              aria-label={`Explore ${hotspot.title}`}
            >
              {cardContent}
            </button>
          );
        })}

        {/* Twinkling ambient celestial stars */}
        <div className="stars" ref={starsRef}></div>
        <div className="ambient ambient-a"></div>
        <div className="ambient ambient-b"></div>
        <div className="cursor-glow" ref={glowRef}></div>
      </main>

      {/* ========================================================================= */}
      {/* INTERACTIVE FEATURE DETAIL MODAL                                         */}
      {/* ========================================================================= */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl text-slate-900 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(244, 249, 255, 0.95) 100%)",
              boxShadow: "0 25px 60px -15px rgba(0, 20, 60, 0.5), 0 0 35px rgba(0, 160, 255, 0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Background Accent */}
            <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl pointer-events-none bg-blue-500/20" />

            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header: Title + Tag */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" /> {activeModal.tag}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                {activeModal.title}
              </h3>
              <p className="text-sm font-medium text-blue-600 mt-0.5">
                {activeModal.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              {activeModal.description}
            </p>

            {/* Feature Capabilities Checklist */}
            <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/60 mb-6 space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Key Capabilities
              </div>
              {activeModal.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get Started with {activeModal.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


