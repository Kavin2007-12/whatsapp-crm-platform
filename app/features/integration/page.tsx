"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { assetPath } from "@/lib/assets";
import "./integration.css";

// 8 Interactive Integrations with 3D Icons, details, and metadata
const INTEGRATION_APPS = [
  {
    id: "shopify",
    name: "Shopify",
    subtitle: "Orders & Customers",
    accent: "#95bf47",
    glowColor: "rgba(149, 191, 71, 0.35)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
        <path
          d="M26.2 10.4L21.8 6C21.5 5.7 21.1 5.6 20.7 5.6H11.3C10.9 5.6 10.5 5.7 10.2 6L5.8 10.4C5.4 10.8 5.2 11.3 5.2 11.8V23.5C5.2 24.9 6.3 26 7.7 26H24.3C25.7 26 26.8 24.9 26.8 23.5V11.8C26.8 11.3 26.6 10.8 26.2 10.4Z"
          fill="#95bf47"
        />
        <path d="M19.5 13.5C19.5 15.4 17.9 17 16 17C14.1 17 12.5 15.4 12.5 13.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M17.2 19.5C16.6 19.1 15.6 18.8 14.8 19.1C13.8 19.5 13.6 20.4 14.2 21C15 21.7 16.8 21.8 17.2 22.8C17.6 23.8 16.8 24.8 15.4 24.8C14.4 24.8 13.5 24.2 13.2 23.8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    centerIcon: (
      <svg width="68" height="68" viewBox="0 0 32 32" fill="none" className="center-tile-svg">
        <defs>
          <filter id="shopifyShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#5b7c25" floodOpacity="0.4" />
          </filter>
        </defs>
        <path
          d="M26.2 10.4L21.8 6C21.5 5.7 21.1 5.6 20.7 5.6H11.3C10.9 5.6 10.5 5.7 10.2 6L5.8 10.4C5.4 10.8 5.2 11.3 5.2 11.8V23.5C5.2 24.9 6.3 26 7.7 26H24.3C25.7 26 26.8 24.9 26.8 23.5V11.8C26.8 11.3 26.6 10.8 26.2 10.4Z"
          fill="#95bf47"
          filter="url(#shopifyShadow)"
        />
        <path d="M19.5 13.5C19.5 15.4 17.9 17 16 17C14.1 17 12.5 15.4 12.5 13.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M17.2 19.5C16.6 19.1 15.6 18.8 14.8 19.1C13.8 19.5 13.6 20.4 14.2 21C15 21.7 16.8 21.8 17.2 22.8C17.6 23.8 16.8 24.8 15.4 24.8C14.4 24.8 13.5 24.2 13.2 23.8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    subtitle: "Orders & Storefront Sync",
    accent: "#96588A",
    glowColor: "rgba(150, 88, 138, 0.35)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#96588A" />
        <path d="M6 12C6 10.3 7.3 9 9 9H23C24.7 9 26 10.3 26 12V18.5C26 20.2 24.7 21.5 23 21.5H10.5L6.5 24.5V12Z" fill="#ffffff" />
        <text x="16" y="17" textAnchor="middle" fill="#96588A" fontSize="8.5" fontWeight="900" fontFamily="sans-serif">Woo</text>
      </svg>
    ),
    centerIcon: (
      <svg width="68" height="68" viewBox="0 0 36 36" fill="none" className="center-tile-svg">
        <defs>
          <filter id="wooShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#5e2b54" floodOpacity="0.45" />
          </filter>
        </defs>
        <g filter="url(#wooShadow)">
          <rect width="36" height="36" rx="9" fill="#96588A" />
          <path d="M7 13.5C7 11.6 8.5 10 10.5 10H25.5C27.5 10 29 11.6 29 13.5V21C29 22.9 27.5 24.5 25.5 24.5H12L7 28V13.5Z" fill="#ffffff" />
          <text x="18" y="19" textAnchor="middle" fill="#96588A" fontSize="10" fontWeight="900" fontFamily="sans-serif">Woo</text>
        </g>
      </svg>
    )
  },
  {
    id: "hubspot",
    name: "HubSpot",
    subtitle: "CRM & Lifecycle Pipeline",
    accent: "#FF7A59",
    glowColor: "rgba(255, 122, 89, 0.35)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="6" fill="#FF7A59" />
        <circle cx="24" cy="9" r="2.8" fill="#FF7A59" />
        <circle cx="8" cy="16" r="2.8" fill="#FF7A59" />
        <circle cx="16" cy="25" r="2.8" fill="#FF7A59" />
        <line x1="16" y1="11" x2="23" y2="10" stroke="#FF7A59" strokeWidth="2.2" />
        <line x1="16" y1="16" x2="9" y2="16" stroke="#FF7A59" strokeWidth="2.2" />
        <line x1="16" y1="16" x2="16" y2="25" stroke="#FF7A59" strokeWidth="2.2" />
        <circle cx="16" cy="16" r="2.2" fill="#ffffff" />
      </svg>
    ),
    centerIcon: (
      <svg width="68" height="68" viewBox="0 0 36 36" fill="none" className="center-tile-svg">
        <defs>
          <filter id="hubShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#b83e20" floodOpacity="0.4" />
          </filter>
        </defs>
        <g filter="url(#hubShadow)">
          <circle cx="18" cy="18" r="6.5" fill="#FF7A59" />
          <circle cx="27" cy="10" r="3.5" fill="#FF7A59" />
          <circle cx="9" cy="18" r="3.5" fill="#FF7A59" />
          <circle cx="18" cy="29" r="3.5" fill="#FF7A59" />
          <line x1="18" y1="11.5" x2="27" y2="10" stroke="#FF7A59" strokeWidth="3" />
          <line x1="18" y1="18" x2="9" y2="18" stroke="#FF7A59" strokeWidth="3" />
          <line x1="18" y1="18" x2="18" y2="29" stroke="#FF7A59" strokeWidth="3" />
          <circle cx="18" cy="18" r="2.8" fill="#ffffff" />
        </g>
      </svg>
    )
  },
  {
    id: "zoho",
    name: "Zoho",
    subtitle: "CRM & Lead Automation",
    accent: "#df2828",
    glowColor: "rgba(223, 40, 40, 0.35)",
    icon: (
      <svg width="44" height="28" viewBox="0 0 44 24" fill="none">
        <rect x="0" y="2" width="9.5" height="20" rx="2.5" fill="#df2828" />
        <text x="4.75" y="16" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="sans-serif">Z</text>
        <rect x="11.5" y="2" width="9.5" height="20" rx="2.5" fill="#226cb5" />
        <text x="16.25" y="16" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="sans-serif">o</text>
        <rect x="23" y="2" width="9.5" height="20" rx="2.5" fill="#27a745" />
        <text x="27.75" y="16" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="sans-serif">h</text>
        <rect x="34.5" y="2" width="9.5" height="20" rx="2.5" fill="#e9a217" />
        <text x="39.25" y="16" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="sans-serif">o</text>
      </svg>
    ),
    centerIcon: (
      <svg width="74" height="42" viewBox="0 0 48 26" fill="none" className="center-tile-svg">
        <defs>
          <filter id="zohoShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#881a1a" floodOpacity="0.35" />
          </filter>
        </defs>
        <g filter="url(#zohoShadow)">
          <rect x="1" y="2" width="10.5" height="22" rx="3" fill="#df2828" />
          <text x="6.25" y="17" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900" fontFamily="sans-serif">Z</text>
          <rect x="13" y="2" width="10.5" height="22" rx="3" fill="#226cb5" />
          <text x="18.25" y="17" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900" fontFamily="sans-serif">o</text>
          <rect x="25" y="2" width="10.5" height="22" rx="3" fill="#27a745" />
          <text x="30.25" y="17" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900" fontFamily="sans-serif">h</text>
          <rect x="37" y="2" width="10.5" height="22" rx="3" fill="#e9a217" />
          <text x="42.25" y="17" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900" fontFamily="sans-serif">o</text>
        </g>
      </svg>
    )
  },
  {
    id: "magento",
    name: "Magento",
    subtitle: "Catalog & Inventory Sync",
    accent: "#EE672F",
    glowColor: "rgba(238, 103, 47, 0.35)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
        <path d="M16 3.5L27 9.8V22.2L23.4 20.1V11.9L16 7.6L8.6 11.9V20.1L5 22.2V9.8L16 3.5Z" fill="#EE672F" />
        <path d="M16 14.2L20.2 16.6V24.8L16 27.2L11.8 24.8V16.6L16 14.2Z" fill="#EE672F" />
      </svg>
    ),
    centerIcon: (
      <svg width="68" height="68" viewBox="0 0 36 36" fill="none" className="center-tile-svg">
        <defs>
          <filter id="magentoShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#a33d12" floodOpacity="0.4" />
          </filter>
        </defs>
        <g filter="url(#magentoShadow)">
          <path d="M18 4L31 11.2V25.8L26.5 23.2V13.8L18 8.8L9.5 13.8V23.2L5 25.8V11.2L18 4Z" fill="#EE672F" />
          <path d="M18 16.5L23 19.3V29L18 31.8L13 29V19.3L18 16.5Z" fill="#EE672F" />
        </g>
      </svg>
    )
  },
  {
    id: "sheets",
    name: "Google Sheets",
    subtitle: "Live Rows & Database Sync",
    accent: "#0F9D58",
    glowColor: "rgba(15, 157, 88, 0.35)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="20" height="24" rx="3.5" fill="#0F9D58" />
        <path d="M11 11H21V21H11V11Z" fill="#ffffff" fillOpacity="0.3" />
        <rect x="11" y="11" width="10" height="10" stroke="#ffffff" strokeWidth="1.6" />
        <line x1="16" y1="11" x2="16" y2="21" stroke="#ffffff" strokeWidth="1.6" />
        <line x1="11" y1="16" x2="21" y2="16" stroke="#ffffff" strokeWidth="1.6" />
      </svg>
    ),
    centerIcon: (
      <svg width="68" height="68" viewBox="0 0 36 36" fill="none" className="center-tile-svg">
        <defs>
          <filter id="sheetsShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#095e34" floodOpacity="0.4" />
          </filter>
        </defs>
        <g filter="url(#sheetsShadow)">
          <rect x="7" y="4" width="22" height="28" rx="4" fill="#0F9D58" />
          <rect x="12" y="12" width="12" height="12" fill="#ffffff" fillOpacity="0.3" stroke="#ffffff" strokeWidth="1.8" />
          <line x1="18" y1="12" x2="18" y2="24" stroke="#ffffff" strokeWidth="1.8" />
          <line x1="12" y1="18" x2="24" y2="18" stroke="#ffffff" strokeWidth="1.8" />
        </g>
      </svg>
    )
  },
  {
    id: "pabbly",
    name: "Pabbly Connect",
    subtitle: "Workflow Automation & Triggers",
    accent: "#00b277",
    glowColor: "rgba(0, 178, 119, 0.35)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#00b277" />
        <path d="M11 10H17.5C19.4 10 21 11.6 21 13.5C21 15.4 19.4 17 17.5 17H14V22H11V10Z" fill="#ffffff" />
        <circle cx="16" cy="13.5" r="2" fill="#00b277" />
      </svg>
    ),
    centerIcon: (
      <svg width="68" height="68" viewBox="0 0 36 36" fill="none" className="center-tile-svg">
        <defs>
          <filter id="pabblyShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#006644" floodOpacity="0.4" />
          </filter>
        </defs>
        <g filter="url(#pabblyShadow)">
          <circle cx="18" cy="18" r="16" fill="#00b277" />
          <path d="M12 11H20C22.2 11 24 12.8 24 15C24 17.2 22.2 19 20 19H16V25H12V11Z" fill="#ffffff" />
          <circle cx="18" cy="15" r="2.5" fill="#00b277" />
        </g>
      </svg>
    )
  },
  {
    id: "zapier",
    name: "Zapier",
    subtitle: "5,000+ App Connectors",
    accent: "#FF4A00",
    glowColor: "rgba(255, 74, 0, 0.35)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
        <path d="M16 4V28M4 16H28M7.5 7.5L24.5 24.5M24.5 7.5L7.5 24.5" stroke="#FF4A00" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="4.5" fill="#FF4A00" />
      </svg>
    ),
    centerIcon: (
      <svg width="68" height="68" viewBox="0 0 36 36" fill="none" className="center-tile-svg">
        <defs>
          <filter id="zapierShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#992c00" floodOpacity="0.4" />
          </filter>
        </defs>
        <g filter="url(#zapierShadow)">
          <path d="M18 5V31M5 18H31M9 9L27 27M27 9L9 27" stroke="#FF4A00" strokeWidth="5.5" strokeLinecap="round" />
          <circle cx="18" cy="18" r="5" fill="#FF4A00" />
        </g>
      </svg>
    )
  }
];

// Motion Canvas Background
function MotionOverlay() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frameId: number;
    let offset = 0;
    const animate = () => {
      offset = (offset + 0.18) % 360;
      if (ref.current) {
        ref.current.style.filter = `hue-rotate(${Math.sin(offset * (Math.PI / 180)) * 4}deg)`;
      }
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);
  return <div ref={ref} className="motion-overlay" aria-hidden="true" />;
}

// Reusable Laser Conduit Gap Divider with Pulse Animation
function LaserGapDivider({ label }: { label?: string }) {
  return (
    <div className="section-laser-gap" aria-hidden="true">
      {/* Top Node */}
      <div className="gap-node top-node">
        <div className="node-core" />
      </div>

      {/* Vertical Glowing Laser Conduit */}
      <div className="laser-conduit">
        <div className="conduit-ambient-glow" />
        <div className="conduit-line" />
        <div className="conduit-pulse pulse-fast" />
        <div className="conduit-pulse pulse-slow" />
      </div>

      {/* Floating Ambient Glass Orb */}
      <div className="gap-floating-orb" />

      {/* Optional Central Stream Badge */}
      {label && <span className="gap-laser-label">{label}</span>}

      {/* Bottom Node */}
      <div className="gap-node bottom-node">
        <div className="node-core" />
      </div>
    </div>
  );
}

export default function IntegrationsPage() {
  const router = useRouter();
  const [activeAppId, setActiveAppId] = useState<string>("shopify");

  useEffect(() => {
    try {
      router.prefetch("/features");
      router.prefetch("/contact");
    } catch {}
  }, [router]);

  const activeApp = INTEGRATION_APPS.find((app) => app.id === activeAppId) || INTEGRATION_APPS[0];
  const activeIndex = INTEGRATION_APPS.findIndex((app) => app.id === activeAppId);

  // Dynamic Laser Wire coordinates based on selected option index (0 to 7)
  const leftDotY = 865 + activeIndex * 42.1875;

  return (
    <main className="page">
      {/* Floating Back Navigation Pill */}
      <Link 
        href="/features" 
        prefetch={true} 
        onPointerDown={() => router.push("/features")}
        className="integrations-back-pill" 
        title="Return to features hub"
      >
        <ArrowLeft size={15} />
        <span>Features</span>
      </Link>

      <div className="integration-sections-container">
        
        {/* ========================================================================= */}
        {/* SECTION 1: HERO ORBITAL ECOSYSTEM                                         */}
        {/* ========================================================================= */}
        <section className="section-card card-hero" aria-label="Integrations Ecosystem">
          <div className="card-inner-stage stage-hero">
            <picture>
              <source srcSet={assetPath("/assets/integrations/reference.webp")} type="image/webp" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="reference-visual"
                src={assetPath("/assets/integrations/reference.png")}
                alt="GRADIX integrations visual"
                draggable="false"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
            <MotionOverlay />

            {/* Section 1 Header Typography */}
            <div className="coded-layer sec1-typography" aria-hidden="true">
              <div className="section-badge">
                <span className="badge-text">INTEGRATIONS</span>
                <span className="badge-accent-bar" />
              </div>
              <h1 className="sec1-title">
                Connect everything.<br />
                <span className="text-emerald-flow">Keep every</span><br />
                <span className="text-emerald-flow">conversation moving.</span>
              </h1>
            </div>
          </div>
        </section>

        {/* GAP 1: DATA LASER STREAM */}
        <LaserGapDivider label="LIVE DATA SYNC STREAM" />

        {/* ========================================================================= */}
        {/* SECTION 2: REAL-TIME SYNC PIPELINE                                        */}
        {/* ========================================================================= */}
        <section className="section-card card-sync" aria-label="Real-Time Synchronization Pipeline">
          <div className="card-inner-stage stage-sync">
            <picture>
              <source srcSet={assetPath("/assets/integrations/reference.webp")} type="image/webp" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="reference-visual"
                src={assetPath("/assets/integrations/reference.png")}
                alt="GRADIX real-time sync flow"
                draggable="false"
                decoding="async"
              />
            </picture>
            <MotionOverlay />

            {/* Section 2 Badge */}
            <div className="coded-layer sec2-typography" aria-hidden="true">
              <div className="section-badge">
                <span className="badge-text">REAL-TIME SYNC</span>
                <span className="badge-accent-bar" />
              </div>
            </div>
          </div>
        </section>

        {/* GAP 2: DATA LASER STREAM */}
        <LaserGapDivider label="INTERACTIVE STACK CONNECTOR" />

        {/* ========================================================================= */}
        {/* SECTION 3: INTERACTIVE INTEGRATION EXPLORER                               */}
        {/* ========================================================================= */}
        <section className="section-card card-explorer" aria-label="Integration Explorer">
          <div className="card-inner-stage stage-explorer">
            <picture>
              <source srcSet={assetPath("/assets/integrations/reference.webp")} type="image/webp" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="reference-visual"
                src={assetPath("/assets/integrations/reference.png")}
                alt="GRADIX integration explorer"
                draggable="false"
                decoding="async"
              />
            </picture>
            <MotionOverlay />

            {/* Section 3 Badge */}
            <div className="coded-layer sec3-typography" aria-hidden="true">
              <div className="section-badge">
                <span className="badge-text">INTEGRATION EXPLORER</span>
                <span className="badge-accent-bar" />
              </div>
            </div>

            {/* Interactive Section 3 Controls */}
            <div className="interactive-explorer-stage" aria-label="Interactive Integration Explorer">
              {/* Dynamic Laser Connection SVG Ribbon */}
              <svg className="explorer-laser-svg" viewBox="0 0 1024 1536" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="laserWireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#34d399" stopOpacity="1" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
                  </linearGradient>
                  <filter id="laserLineGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" />
                  </filter>
                </defs>

                {/* Path from Active Left Pill to Center Tile */}
                <path
                  d={`M 220,${leftDotY} C 320,${leftDotY} 360,980 440,980`}
                  stroke="url(#laserWireGrad)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#laserLineGlow)"
                  opacity="0.6"
                />
                <path
                  d={`M 220,${leftDotY} C 320,${leftDotY} 360,980 440,980`}
                  stroke="#ffffff"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.95"
                />

                {/* Path from Center Tile to Right Card */}
                <path
                  d="M 565,980 C 645,980 700,894 772.5,894"
                  stroke="url(#laserWireGrad)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#laserLineGlow)"
                  opacity="0.6"
                />
                <path
                  d="M 565,980 C 645,980 700,894 772.5,894"
                  stroke="#ffffff"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.95"
                />
              </svg>

              {/* 1. LEFT OPTIONS INTERACTIVE BUTTONS */}
              <div className="explorer-left-list">
                {INTEGRATION_APPS.map((app) => {
                  const isActive = activeAppId === app.id;
                  return (
                    <button
                      key={app.id}
                      data-app-id={app.id}
                      type="button"
                      className={`explorer-option-pill ${isActive ? "active" : ""}`}
                      onPointerDown={() => setActiveAppId(app.id)}
                      onClick={() => setActiveAppId(app.id)}
                      title={`Select ${app.name} integration`}
                    >
                      <div className="option-icon-wrap">{app.icon}</div>
                      <span className="option-label">{app.name}</span>
                      {isActive && <span className="option-active-dot" />}
                    </button>
                  );
                })}
              </div>

              {/* 2. DYNAMIC CENTER 3D TILE */}
              <div className="explorer-center-anchor" title={`${activeApp.name} Active Core`}>
                <div key={activeApp.id} className="center-tile-box">
                  <div className="center-tile-surface">
                    {activeApp.centerIcon}
                    <div className="center-tile-specular" />
                  </div>
                </div>
              </div>

              {/* 3. DYNAMIC RIGHT PREVIEW CARD */}
              <Link
                href="/contact"
                prefetch={true}
                className="explorer-right-anchor"
                title={`Get started with ${activeApp.name}`}
              >
                <div key={activeApp.id} className="right-card-content">
                  <div className="right-icon-box">{activeApp.icon}</div>
                  <div className="right-text-col">
                    <span className="right-app-name">{activeApp.name}</span>
                    <span className="right-app-sub">{activeApp.subtitle}</span>
                  </div>
                  <div className="right-arrow-box">
                    <ArrowRight size={18} strokeWidth={2.4} color="#0f766e" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* GAP 3: DATA LASER STREAM */}
        <LaserGapDivider label="START INTEGRATING" />

        {/* ========================================================================= */}
        {/* SECTION 4: CALL TO ACTION BANNER                                          */}
        {/* ========================================================================= */}
        <section className="section-card card-cta" aria-label="Get Started with Integrations">
          <div className="card-inner-stage stage-cta">
            <picture>
              <source srcSet={assetPath("/assets/integrations/reference.webp")} type="image/webp" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="reference-visual"
                src={assetPath("/assets/integrations/reference.png")}
                alt="GRADIX call to action"
                draggable="false"
                decoding="async"
              />
            </picture>
            <MotionOverlay />

            {/* Section 4 CTA */}
            <div className="coded-layer sec4-typography" aria-hidden="true">
              <h2 className="sec4-title">
                Bring your stack into<br />
                <span className="text-emerald-flow">the conversation.</span>
              </h2>
              <Link 
                href="/contact" 
                prefetch={true} 
                className="coded-get-started-btn" 
                title="Get Started with GRADIX"
              >
                <span>Get Started</span>
                <ArrowRight size={17} strokeWidth={2.4} />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <section className="semantic-content" aria-label="GRADIX integrations">
        <h1>Connect everything. Keep every conversation moving.</h1>
        <p>
          GRADIX connects WhatsApp with Shopify, WooCommerce, HubSpot, Zoho, Magento, Google Sheets, Pabbly and Zapier.
        </p>
      </section>
    </main>
  );
}
