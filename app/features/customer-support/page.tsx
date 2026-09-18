"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import "./customer-support.css";

// 6 Support Intelligence Nodes positions (%) matching reference
const SUPPORT_NODES = [
  { id: "support", name: "Support", left: "45.8%", top: "12.8%", width: "11.2%", height: "14.5%" },
  { id: "crm", name: "CRM", left: "68.8%", top: "9.8%", width: "9.8%", height: "13.2%" },
  { id: "automation", name: "Automation", left: "78.2%", top: "25.2%", width: "12.4%", height: "13.8%" },
  { id: "integrations", name: "Integrations", left: "74.1%", top: "52.8%", width: "12.8%", height: "14.2%" },
  { id: "tickets", name: "Tickets", left: "46.2%", top: "50.5%", width: "11.8%", height: "15.0%" },
  { id: "customers", name: "Customers", left: "38.6%", top: "29.2%", width: "11.5%", height: "13.8%" },
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
  { id: "zapier", name: "Zapier", left: "77.1%", top: "80.8%", width: "3.8%", height: "6.8%" },
];

export default function CustomerSupportPage() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <main className="cs-page" aria-label="GRADIX Customer Support">
      {/* Floating Back Navigation Pill to Features Hub */}
      <Link href="/features" className="cs-back-pill" title="Return to features hub">
        <ArrowLeft size={14} />
        <span>Features</span>
      </Link>

      {/* Main Visual Stage */}
      <div className="cs-visual-stage">
        <picture>
          <source srcSet="/customer-support-reference-2x.webp" type="image/webp" />
          <source srcSet="/customer-support-reference.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="cs-reference-image"
            src="/customer-support-reference.png"
            alt="GRADIX customer support visual"
            draggable="false"
            decoding="async"
          />
        </picture>

        {/* Interactive Subtle Hotspots for Support Nodes */}
        <div className="cs-hotspots-layer" aria-hidden="true">
          {SUPPORT_NODES.map((node) => (
            <button
              key={node.id}
              type="button"
              className={`cs-node-hotspot ${activeTooltip === node.id ? "active" : ""}`}
              style={{
                left: node.left,
                top: node.top,
                width: node.width,
                height: node.height,
              }}
              onMouseEnter={() => setActiveTooltip(node.id)}
              onMouseLeave={() => setActiveTooltip(null)}
              onClick={() => setActiveTooltip(activeTooltip === node.id ? null : node.id)}
              aria-label={node.name}
              title={node.name}
            />
          ))}

          {/* Interactive Subtle Hotspots for Bottom Arch Brands */}
          {ARCH_BRANDS.map((brand) => (
            <Link
              key={brand.id}
              href="/features/integration"
              className="cs-brand-hotspot"
              style={{
                left: brand.left,
                top: brand.top,
                width: brand.width,
                height: brand.height,
              }}
              title={`Explore ${brand.name} Integration`}
            />
          ))}
        </div>
      </div>

      {/* Semantic SEO & Accessibility fallback */}
      <section className="cs-semantic-content">
        <h1>Deliver faster. Smarter support on WhatsApp.</h1>
        <p>Turn customer messages into resolved conversations.</p>
        <p>
          Automatically understand customer requests, answer common questions, and route issues to the
          right team. Resolve support faster, all through WhatsApp.
        </p>
      </section>
    </main>
  );
}
