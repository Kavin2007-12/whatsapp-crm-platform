"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles, ShoppingBag, CreditCard, Send, CheckCircle2 } from "lucide-react";
import "./commerce.css";

interface ChapterData {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  bgName: string;
  alt: string;
}

const CHAPTERS: ChapterData[] = [
  {
    id: "discovery",
    num: "01",
    title: "Product Discovery",
    subtitle: "Discover products. Recommend intelligently.",
    bgName: "01_discovery",
    alt: "GRADIX WhatsApp Commerce - Product Discovery",
  },
  {
    id: "catalogue",
    num: "02",
    title: "Interactive Catalogue",
    subtitle: "Browse, explore, find what you love.",
    bgName: "02_catalogue",
    alt: "GRADIX WhatsApp Commerce - Interactive Catalogue",
  },
  {
    id: "conversations",
    num: "03",
    title: "Commerce Conversations",
    subtitle: "Customized interactions for every customer.",
    bgName: "03_conversations",
    alt: "GRADIX WhatsApp Commerce - Commerce Conversations",
  },
  {
    id: "payments",
    num: "04",
    title: "Quick Payments",
    subtitle: "Seamless checkout. No apps switch.",
    bgName: "04_payments",
    alt: "GRADIX WhatsApp Commerce - Quick Payments",
  },
  {
    id: "order-delivery",
    num: "05",
    title: "Order & Delivery",
    subtitle: "From digital to physical. Real products, real delivery.",
    bgName: "05_order_delivery",
    alt: "GRADIX WhatsApp Commerce - Order & Delivery",
  },
  {
    id: "retargeting",
    num: "06",
    title: "Retargeting",
    subtitle: "Turn every interaction into another opportunity.",
    bgName: "06_retargeting",
    alt: "GRADIX WhatsApp Commerce - Smart Retargeting",
  },
  {
    id: "integrations",
    num: "07",
    title: "Integrations",
    subtitle: "Your commerce ecosystem. Connected.",
    bgName: "07_integrations",
    alt: "GRADIX WhatsApp Commerce - Integrations",
  },
  {
    id: "grow",
    num: "08",
    title: "Grow with WhatsApp",
    subtitle: "Bring your commerce into the conversation.",
    bgName: "08_grow",
    alt: "GRADIX WhatsApp Commerce - Grow with WhatsApp",
  },
];

export default function WhatsAppCommercePage() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [paymentPaid, setPaymentPaid] = useState<boolean>(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            const secId = entry.target.getAttribute("data-section-id");
            if (secId) setActiveSection(secId);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="commerce-coded-root">
      {/* Floating Back Navigation Pill */}
      <Link href="/features" className="commerce-back-pill" title="Return to features overview">
        <ArrowLeft size={15} />
        <span>Features</span>
      </Link>

      {/* Floating Chapter Navigation Dots */}
      <nav className="commerce-quick-nav" aria-label="Commerce chapters">
        <button
          type="button"
          className={`nav-dot ${activeSection === "hero" ? "active" : ""}`}
          onClick={() => scrollToSection("hero")}
          title="Hero: WhatsApp Commerce"
        >
          <span>Top</span>
        </button>
        {CHAPTERS.map((sec) => (
          <button
            key={sec.id}
            type="button"
            className={`nav-dot ${activeSection === sec.id ? "active" : ""}`}
            onClick={() => scrollToSection(sec.id)}
            title={`${sec.num} ${sec.title}`}
          >
            <span>{sec.num}</span>
          </button>
        ))}
      </nav>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (100% CODED TYPOGRAPHY + 4K 3D VISUAL CANVAS)              */}
      {/* ========================================================================= */}
      <section
        id="hero"
        data-section-id="hero"
        className="commerce-stage-section is-visible"
        ref={(el) => { sectionRefs.current[0] = el; }}
      >
        {/* 4K Visual Canvas */}
        <div className="canvas-background-layer">
          <picture>
            <source srcSet="/assets/commerce/clean/00_hero.webp" type="image/webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/commerce/clean/00_hero.png"
              alt="GRADIX WhatsApp Commerce Canvas"
              className="canvas-stage-img"
              draggable="false"
              decoding="async"
            />
          </picture>
        </div>

        {/* Coded Typography & Action Layer */}
        <div className="coded-overlay-container">
          <div className="hero-text-block">
            {/* Section Tag */}
            <div className="hero-tag-wrap">
              <span className="hero-tag-text">WHATSAPP COMMERCE</span>
              <span className="hero-tag-bar" />
            </div>

            {/* Main Headline */}
            <h1 className="hero-main-title">
              Turn WhatsApp<br />
              conversations into<br />
              <span className="hero-highlight-text">high-converting sales.</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-sub-text">Chat. Discover. Shop. Pay. Grow.</p>

            {/* Interactive Primary CTA Button */}
            <div className="hero-cta-wrapper">
              <Link href="/contact" className="coded-cta-btn">
                <span>Get Started</span>
                <ArrowRight size={17} className="cta-arrow-icon" />
              </Link>
            </div>
          </div>

          {/* Coded Floating Glass Avatar Badges */}
          <div className="hero-floating-badges" aria-hidden="true">
            <div className="glass-bubble bubble-takeit">
              <span>Nice! I&apos;ll take it!</span>
            </div>
            <div className="glass-bubble bubble-paid">
              <span>Payment successful!</span>
            </div>
          </div>
        </div>

        {/* Floating Scroll Prompt */}
        <div className="scroll-invitation" onClick={() => scrollToSection("discovery")}>
          <span>SCROLL TO EXPLORE THE COMMERCE JOURNEY</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SEQUENTIAL 8 CHAPTERS (100% CODED NATIVE TYPOGRAPHY & INTERACTIVE UI)   */}
      {/* ========================================================================= */}
      <main className="commerce-flow-container">
        {CHAPTERS.map((chap, idx) => (
          <section
            key={chap.id}
            id={chap.id}
            data-section-id={chap.id}
            className="commerce-stage-section"
            ref={(el) => { sectionRefs.current[idx + 1] = el; }}
          >
            {/* 4K Clean Visual Canvas */}
            <div className="canvas-background-layer">
              <picture>
                <source srcSet={`/assets/commerce/clean/${chap.bgName}.webp`} type="image/webp" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/commerce/clean/${chap.bgName}.png`}
                  alt={chap.alt}
                  className="canvas-stage-img"
                  draggable="false"
                  decoding="async"
                />
              </picture>
            </div>

            {/* Coded Native Typography & Interactive Layer */}
            <div className="coded-overlay-container">
              <div className="chapter-text-block">
                {/* Coded Chapter Number Badge */}
                <div className="chapter-num-badge">{chap.num}</div>

                {/* Coded Heading */}
                <h2 className="chapter-title">{chap.title}</h2>

                {/* Coded Subtitle */}
                <p className="chapter-subtitle">{chap.subtitle}</p>

                {/* Chapter-Specific Coded Interactive Elements */}
                {chap.id === "grow" && (
                  <div className="chapter-cta-wrap">
                    <Link href="/contact" className="coded-cta-btn">
                      <span>Get Started</span>
                      <ArrowRight size={16} className="cta-arrow-icon" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Interactive Chapter Hotspots & Live Coded Widgets */}
              {chap.id === "catalogue" && (
                <div className="catalogue-coded-hotspot">
                  <Link href="/contact" className="catalogue-action-btn">
                    <span>View Details</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              )}

              {chap.id === "payments" && (
                <div className="payments-coded-widget">
                  <button
                    type="button"
                    className={`pay-now-pill ${paymentPaid ? "is-paid" : ""}`}
                    onClick={() => setPaymentPaid(!paymentPaid)}
                    title="Simulate WhatsApp Payment"
                  >
                    {paymentPaid ? "✓ Paid Successfully" : "Pay Now"}
                  </button>
                </div>
              )}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
