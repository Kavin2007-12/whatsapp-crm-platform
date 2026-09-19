"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { assetPath } from "@/lib/assets";
import "./integration.css";

interface IntegrationApp {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  color: string;
  iconBg: string;
  tileImg: string;
  badge: string;
}

const INTEGRATION_APPS: IntegrationApp[] = [
  {
    id: "shopify",
    name: "Shopify",
    category: "E-Commerce",
    subtitle: "Orders & Customers",
    color: "#96bf48",
    iconBg: "rgba(150, 191, 72, 0.12)",
    tileImg: assetPath("/assets/integrations/tiles/shopify.png"),
    badge: "E-Commerce",
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    category: "E-Commerce",
    subtitle: "Orders & Storefront Sync",
    color: "#96588a",
    iconBg: "rgba(150, 88, 138, 0.12)",
    tileImg: assetPath("/assets/integrations/tiles/woocommerce.png"),
    badge: "Storefront",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "CRM & Marketing",
    subtitle: "Deals & Contacts Sync",
    color: "#ff7a59",
    iconBg: "rgba(255, 122, 89, 0.12)",
    tileImg: assetPath("/assets/integrations/tiles/hubspot.png"),
    badge: "CRM",
  },
  {
    id: "zoho",
    name: "Zoho",
    category: "CRM & Leads",
    subtitle: "Multi-Module Sync",
    color: "#e42528",
    iconBg: "rgba(228, 37, 40, 0.12)",
    tileImg: assetPath("/assets/integrations/tiles/zoho.png"),
    badge: "CRM",
  },
  {
    id: "magento",
    name: "Magento",
    category: "Enterprise E-Comm",
    subtitle: "Catalog & Checkout Sync",
    color: "#f26322",
    iconBg: "rgba(242, 99, 34, 0.12)",
    tileImg: assetPath("/assets/integrations/tiles/magento.png"),
    badge: "Enterprise",
  },
  {
    id: "google-sheets",
    name: "Google Sheets",
    category: "Spreadsheets",
    subtitle: "Live Row & Order Logger",
    color: "#0f9d58",
    iconBg: "rgba(15, 157, 88, 0.12)",
    tileImg: assetPath("/assets/integrations/tiles/google-sheets.png"),
    badge: "Automation",
  },
  {
    id: "pabbly",
    name: "Pabbly",
    category: "Workflow Automation",
    subtitle: "Multi-Trigger Webhooks",
    color: "#28a745",
    iconBg: "rgba(40, 167, 69, 0.12)",
    tileImg: assetPath("/assets/integrations/tiles/pabbly.png"),
    badge: "Webhooks",
  },
  {
    id: "zapier",
    name: "Zapier",
    category: "No-Code Automation",
    subtitle: "5,000+ App Connections",
    color: "#ff4a00",
    iconBg: "rgba(255, 74, 0, 0.12)",
    tileImg: assetPath("/assets/integrations/tiles/zapier.png"),
    badge: "Integration",
  },
];

function LaserGap({ id }: { id: string }) {
  return (
    <div className={`section-laser-gap ${id}`} aria-hidden="true">
      <div className="laser-vertical-stream">
        <div className="laser-line-glow" />
        <div className="laser-line-core" />
        <div className="laser-packet-traveler p1" />
        <div className="laser-packet-traveler p2" />
        <div className="laser-node-dot top" />
        <div className="laser-node-dot bottom" />
      </div>
      <div className="laser-stream-label">
        <span>DATA STREAM</span>
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

  // Dynamic Laser Wire coordinates inside Section 3 (viewBox 0 0 1024 512)
  const leftDotY = 131 + activeIndex * 42.1875;

  return (
    <main className="page">
      {/* Floating Back Navigation Pill positioned below navbar & logo */}
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

      <div className="integrations-stage-wrapper">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO ORBITAL HUB                                               */}
        {/* ========================================================================= */}
        <section className="section-card sec1-card" aria-label="Integrations Overview">
          <picture>
            <source srcSet={assetPath("/assets/integrations/sec1_hero.png")} type="image/png" />
            <img
              className="section-bg-visual"
              src={assetPath("/assets/integrations/sec1_hero.png")}
              alt="GRADIX Integrations Overview"
              draggable="false"
              decoding="async"
              fetchPriority="high"
            />
          </picture>

          {/* Section 1 Crisp Vector Typography Overlay */}
          <div className="sec1-typography" aria-hidden="true">
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
        </section>

        {/* ========================================================================= */}
        {/* LASER GAP 1 -> 2: SCROLL-DRIVEN STREAMING DATA FLOW                       */}
        {/* ========================================================================= */}
        <LaserGap id="gap-1-2" />

        {/* ========================================================================= */}
        {/* SECTION 2: REAL-TIME SYNC PIPELINE                                        */}
        {/* ========================================================================= */}
        <section className="section-card sec2-card" aria-label="Real-Time Sync Pipeline">
          <picture>
            <source srcSet={assetPath("/assets/integrations/sec2_sync.png")} type="image/png" />
            <img
              className="section-bg-visual"
              src={assetPath("/assets/integrations/sec2_sync.png")}
              alt="Real-Time Sync Pipeline"
              draggable="false"
              decoding="async"
            />
          </picture>

          {/* Section 2 Badge Overlay */}
          <div className="sec2-typography" aria-hidden="true">
            <div className="section-badge">
              <span className="badge-text">REAL-TIME SYNC</span>
              <span className="badge-accent-bar" />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* LASER GAP 2 -> 3: SCROLL-DRIVEN STREAMING DATA FLOW                       */}
        {/* ========================================================================= */}
        <LaserGap id="gap-2-3" />

        {/* ========================================================================= */}
        {/* SECTION 3: INTERACTIVE INTEGRATION EXPLORER                               */}
        {/* ========================================================================= */}
        <section className="section-card sec3-card" aria-label="Integration Explorer">
          <picture>
            <source srcSet={assetPath("/assets/integrations/sec3_explorer.png")} type="image/png" />
            <img
              className="section-bg-visual"
              src={assetPath("/assets/integrations/sec3_explorer.png")}
              alt="Integration Explorer Stage"
              draggable="false"
              decoding="async"
            />
          </picture>

          {/* Section 3 Badge Overlay */}
          <div className="sec3-typography" aria-hidden="true">
            <div className="section-badge">
              <span className="badge-text">INTEGRATION EXPLORER</span>
              <span className="badge-accent-bar" />
            </div>
          </div>

          {/* Interactive Section 3 Layer (Left List + Dynamic Laser Wire + Center Tile + Right Card) */}
          <div className="interactive-explorer-stage">
            {/* Dynamic Laser Wire SVG */}
            <svg className="explorer-laser-svg" viewBox="0 0 1024 512" preserveAspectRatio="none">
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
                d={`M 220,${leftDotY} C 320,${leftDotY} 360,245 440,245`}
                stroke="url(#laserWireGrad)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                filter="url(#laserLineGlow)"
                opacity="0.6"
              />
              <path
                d={`M 220,${leftDotY} C 320,${leftDotY} 360,245 440,245`}
                stroke="#ffffff"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.95"
              />

              {/* Path from Center Tile to Right Card */}
              <path
                d="M 565,245 C 645,245 700,159 772.5,159"
                stroke="url(#laserWireGrad)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                filter="url(#laserLineGlow)"
                opacity="0.6"
              />
              <path
                d="M 565,245 C 645,245 700,159 772.5,159"
                stroke="#ffffff"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.95"
              />

              {/* Dynamic Energy Pulses along the wire */}
              <circle r="4" fill="#ffffff" filter="url(#laserLineGlow)">
                <animateMotion
                  path={`M 220,${leftDotY} C 320,${leftDotY} 360,245 440,245`}
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="4" fill="#ffffff" filter="url(#laserLineGlow)">
                <animateMotion
                  path="M 565,245 C 645,245 700,159 772.5,159"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>

            {/* 1. Left Interactive App List */}
            <div className="explorer-left-list" role="tablist" aria-label="Available Integrations">
              {INTEGRATION_APPS.map((app) => {
                const isActive = app.id === activeAppId;
                return (
                  <button
                    key={app.id}
                    role="tab"
                    aria-selected={isActive}
                    className={`explorer-option-pill ${isActive ? "active" : ""}`}
                    onClick={() => setActiveAppId(app.id)}
                  >
                    <div className="option-icon-wrap" style={{ backgroundColor: app.iconBg }}>
                      <img src={app.tileImg} alt="" className="option-icon-img" />
                    </div>
                    <span className="option-label">{app.name}</span>
                    <span className="option-glow-indicator" />
                  </button>
                );
              })}
            </div>

            {/* 2. Center Glowing Tile Display */}
            <div className="explorer-center-stage" aria-live="polite">
              <div className="center-tile-shadow-glow" style={{ "--app-color": activeApp.color } as React.CSSProperties} />
              <div className="center-tile-card">
                <img
                  key={activeApp.id}
                  src={activeApp.tileImg}
                  alt={activeApp.name}
                  className="center-tile-logo-animate"
                />
              </div>
            </div>

            {/* 3. Right Active Card */}
            <div className="explorer-right-stage" aria-live="polite">
              <div className="right-card-container">
                <div className="right-card-icon" style={{ backgroundColor: activeApp.iconBg }}>
                  <img src={activeApp.tileImg} alt="" />
                </div>
                <div className="right-card-content">
                  <h3 className="right-card-title">{activeApp.name}</h3>
                  <p className="right-card-subtitle">{activeApp.subtitle}</p>
                </div>
                <Link
                  href="/contact"
                  prefetch={true}
                  className="right-card-action-btn"
                  title={`Connect ${activeApp.name}`}
                  aria-label={`Connect ${activeApp.name}`}
                >
                  <ArrowRight size={17} strokeWidth={2.4} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: CALL TO ACTION BANNER                                          */}
        {/* ========================================================================= */}
        <section className="section-card sec4-card" aria-label="Get Started Banner">
          <picture>
            <source srcSet={assetPath("/assets/integrations/sec4_cta.png")} type="image/png" />
            <img
              className="section-bg-visual"
              src={assetPath("/assets/integrations/sec4_cta.png")}
              alt="Bring your stack into conversation"
              draggable="false"
              decoding="async"
            />
          </picture>

          {/* Section 4 Typography & CTA Button Overlay */}
          <div className="sec4-typography" aria-hidden="true">
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
        </section>
      </div>
    </main>
  );
}
