"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import "./inbox.css";

// 6 AI Customer Inbox Intelligence Nodes positions (%) matching /assets/ai-customer-inbox/reference.png
// placement: "bottom" for top orbs to never clip at top screen, "top" for lower orbs, "left"/"right" for side streams
const INBOX_NODES = [
  {
    id: "ai-copilot",
    name: "AI Co-Pilot",
    desc: "Context-aware smart reply drafts generated in 1 click from live CRM & order metadata.",
    left: "44.5%",
    top: "11.5%",
    width: "10.5%",
    height: "15.0%",
    placement: "bottom" as const
  },
  {
    id: "team-inbox",
    name: "Multi-Agent Team Inbox",
    desc: "Single WhatsApp business number shared across 100+ agents with automated round-robin routing.",
    left: "68.5%",
    top: "9.5%",
    width: "14.0%",
    height: "14.5%",
    placement: "bottom" as const
  },
  {
    id: "collision-left",
    name: "Collision Prevention",
    desc: "Real-time typing beacons show when teammates are actively formulating a reply in the thread.",
    left: "38.2%",
    top: "29.5%",
    width: "12.0%",
    height: "14.5%",
    placement: "top" as const
  },
  {
    id: "collision-bottom",
    name: "Dynamic Thread Locking",
    desc: "Auto-locks active chat threads to eliminate duplicate or contradictory customer responses.",
    left: "46.0%",
    top: "49.5%",
    width: "12.5%",
    height: "16.0%",
    placement: "bottom" as const
  },
  {
    id: "sla-countdown",
    name: "SLA Countdown",
    desc: "Visual color-coded timers keep response speed under 90s with supervisor breach escalation alerts.",
    left: "78.2%",
    top: "25.0%",
    width: "12.5%",
    height: "14.5%",
    placement: "left" as const
  },
  {
    id: "customer-360",
    name: "Customer 360° Profile",
    desc: "Instant side-panel access to lifetime spend, order history, sentiment, and private yellow agent notes.",
    left: "74.0%",
    top: "53.0%",
    width: "13.0%",
    height: "15.0%",
    placement: "top" as const
  }
];

// 8 Bottom Runway Brand Lenses positions (%) matching curved arch
const ARCH_BRANDS = [
  { id: "shopify", name: "Shopify", left: "24.6%", top: "78.5%", width: "3.8%", height: "6.8%" },
  { id: "woocommerce", name: "WooCommerce", left: "31.8%", top: "76.5%", width: "3.8%", height: "6.8%" },
  { id: "hubspot", name: "HubSpot", left: "39.1%", top: "75.0%", width: "3.8%", height: "6.8%" },
  { id: "zoho", name: "Zoho", left: "46.4%", top: "74.2%", width: "4.8%", height: "6.8%" },
  { id: "magento", name: "Magento", left: "55.2%", top: "75.0%", width: "3.8%", height: "6.8%" },
  { id: "sheets", name: "Google Sheets", left: "62.4%", top: "76.5%", width: "3.8%", height: "6.8%" },
  { id: "pabbly", name: "Pabbly", left: "69.8%", top: "78.5%", width: "3.8%", height: "6.8%" },
  { id: "zapier", name: "Zapier", left: "77.1%", top: "80.8%", width: "3.8%", height: "6.8%" }
];

export default function AiCustomerInboxPage() {
  const router = useRouter();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Instant 0ms prefetch of features hub and integrations on page mount
  useEffect(() => {
    try {
      router.prefetch("/features");
      router.prefetch("/features/integration");
      router.prefetch("/features/customer-support");
    } catch {}
  }, [router]);

  const activeNode = INBOX_NODES.find((n) => n.id === activeTooltip);

  const handleBackPointerDown = () => {
    router.push("/features");
  };

  return (
    <main className="inbox-visual-page" aria-label="GRADIX AI Customer Inbox">
      {/* Floating Back Navigation Pill to Features Hub with Instant 0ms response */}
      <Link 
        href="/features" 
        prefetch={true} 
        onPointerDown={handleBackPointerDown}
        className="inbox-back-pill" 
        title="Return to features hub"
      >
        <ArrowLeft size={14} />
        <span>Features</span>
      </Link>

      {/* Main Visual Stage */}
      <div className="inbox-stage-wrapper">
        <picture>
          <source srcSet="/assets/ai-customer-inbox/reference-2x.webp" type="image/webp" />
          <source srcSet="/assets/ai-customer-inbox/reference.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="inbox-stage-image"
            src="/assets/ai-customer-inbox/reference.png"
            alt="GRADIX AI Customer Inbox Visual"
            draggable="false"
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        {/* Vector Coded Typography Overlay */}
        <div className="inbox-typography-overlay">
          <div className="inbox-badge-row">
            <span className="inbox-badge-bar" />
            <span className="inbox-badge-text">AI CUSTOMER INBOX</span>
          </div>

          <h1 className="inbox-hero-headline">
            One WhatsApp number. <br />
            Zero collisions. <br />
            <span className="inbox-green-text">10x team speed.</span>
          </h1>

          <p className="inbox-hero-lead">
            Turn high-volume customer messages into real-time collaborative resolutions.
          </p>

          <p className="inbox-hero-desc">
            Empower support and sales agents with real-time collision detection, autonomous AI Co-Pilot drafting, 360° customer context, and sub-90s SLA countdowns in one unified console.
          </p>
        </div>

        {/* Interactive Subtle Hotspots for Inbox Intelligence Nodes */}
        <div className="inbox-hotspots-layer" aria-hidden="true">
          {INBOX_NODES.map((node) => (
            <button
              key={node.id}
              type="button"
              className={`inbox-node-hotspot ${activeTooltip === node.id ? "active" : ""}`}
              style={{
                left: node.left,
                top: node.top,
                width: node.width,
                height: node.height,
              }}
              onMouseEnter={() => setActiveTooltip(node.id)}
              onMouseLeave={() => setActiveTooltip(null)}
              onPointerDown={() => setActiveTooltip(activeTooltip === node.id ? null : node.id)}
              onClick={() => setActiveTooltip(activeTooltip === node.id ? null : node.id)}
              aria-label={node.name}
              title={node.name}
            />
          ))}

          {/* Incoming Stream WhatsApp Orb Hotspot */}
          <button
            type="button"
            className={`inbox-stream-hotspot ${activeTooltip === "whatsapp-stream" ? "active" : ""}`}
            style={{ left: "26.5%", top: "38.0%", width: "6.0%", height: "10.5%" }}
            onMouseEnter={() => setActiveTooltip("whatsapp-stream")}
            onMouseLeave={() => setActiveTooltip(null)}
            onPointerDown={() => setActiveTooltip(activeTooltip === "whatsapp-stream" ? null : "whatsapp-stream")}
            onClick={() => setActiveTooltip(activeTooltip === "whatsapp-stream" ? null : "whatsapp-stream")}
            aria-label="WhatsApp Cloud API Stream"
            title="WhatsApp Cloud API Stream"
          />

          {/* Outgoing Stream Verified Resolution Orb Hotspot */}
          <button
            type="button"
            className={`inbox-stream-hotspot ${activeTooltip === "verified-stream" ? "active" : ""}`}
            style={{ left: "90.5%", top: "35.5%", width: "6.5%", height: "11.5%" }}
            onMouseEnter={() => setActiveTooltip("verified-stream")}
            onMouseLeave={() => setActiveTooltip(null)}
            onPointerDown={() => setActiveTooltip(activeTooltip === "verified-stream" ? null : "verified-stream")}
            onClick={() => setActiveTooltip(activeTooltip === "verified-stream" ? null : "verified-stream")}
            aria-label="Verified Instant Resolution"
            title="Verified Instant Resolution"
          />

          {/* Interactive Subtle Hotspots for Bottom Arch Brands */}
          {ARCH_BRANDS.map((brand) => (
            <Link
              key={brand.id}
              href="/features/integration"
              prefetch={true}
              onPointerDown={() => router.push("/features/integration")}
              className="inbox-brand-hotspot"
              style={{
                left: brand.left,
                top: brand.top,
                width: brand.width,
                height: brand.height,
              }}
              title={`Explore ${brand.name} Integration`}
            />
          ))}

          {/* Floating Tooltip Popover with Smart Boundary Placements */}
          {activeNode && (
            <div
              className={`inbox-floating-popover placement-${activeNode.placement}`}
              style={{
                left: activeNode.left,
                top: activeNode.top,
              }}
            >
              <div className="popover-box">
                <div className="popover-header">
                  <span className="popover-indicator-dot" />
                  <span className="popover-heading">{activeNode.name}</span>
                </div>
                <p className="popover-text">{activeNode.desc}</p>
              </div>
            </div>
          )}

          {activeTooltip === "whatsapp-stream" && (
            <div className="inbox-floating-popover placement-right" style={{ left: "26.5%", top: "38.0%" }}>
              <div className="popover-box">
                <div className="popover-header">
                  <span className="popover-indicator-dot" />
                  <span className="popover-heading">Meta Cloud API Feed</span>
                </div>
                <p className="popover-text">Direct tier-4 enterprise pipeline delivering high-concurrency customer messages without delay.</p>
              </div>
            </div>
          )}

          {activeTooltip === "verified-stream" && (
            <div className="inbox-floating-popover placement-left" style={{ left: "90.5%", top: "35.5%" }}>
              <div className="popover-box">
                <div className="popover-header">
                  <span className="popover-indicator-dot" />
                  <span className="popover-heading">Verified Resolution</span>
                </div>
                <p className="popover-text">100% delivered, read-receipt verified resolutions with instant post-chat CSAT tracking.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Semantic SEO & Accessibility Fallback */}
      <section className="inbox-semantic-seo">
        <h1>One WhatsApp number. Zero collisions. 10x team speed.</h1>
        <p>Turn high-volume customer messages into real-time collaborative resolutions.</p>
        <p>
          Empower support and sales agents with real-time collision detection, autonomous AI Co-Pilot drafting, 360° customer context, and sub-90s SLA countdowns in one unified console.
        </p>
        <ul>
          <li>AI Co-Pilot 1-click context-aware reply drafting</li>
          <li>Multi-agent shared WhatsApp team inbox</li>
          <li>Real-time collision detection and typing beacons</li>
          <li>Dynamic thread auto-locking</li>
          <li>Sub-90-second SLA countdown and escalation</li>
          <li>Customer 360 profile with lifetime value and private notes</li>
        </ul>
      </section>
    </main>
  );
}
