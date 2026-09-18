"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  CircleUserRound,
  MessageCircle,
  MessageSquare,
  Search,
  Send,
  Sparkles,
  Tag,
  Users,
  Zap,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Activity
} from "lucide-react";
import "./whatsapp-crm.css";

export default function WhatsAppCRMPage() {
  const [activeTab, setActiveTab] = useState<"Sales" | "Support" | "Marketing" | "Operations">("Sales");
  const [isJourneyInView, setIsJourneyInView] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const el = document.getElementById("journey");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsJourneyInView(true);
          setAnimKey((prev) => prev + 1);
        } else {
          setIsJourneyInView(false);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const tabData = {
    Sales: {
      total: "248",
      qualified: "68",
      won: "24",
      action: "Site visit",
      actionDate: "Sat, 16 Nov · 11:30 AM"
    },
    Support: {
      total: "580",
      qualified: "124",
      won: "96",
      action: "Resolve ticket",
      actionDate: "Today · 3:00 PM"
    },
    Marketing: {
      total: "1,248",
      qualified: "342",
      won: "88",
      action: "Send broadcast",
      actionDate: "Tomorrow · 10:00 AM"
    },
    Operations: {
      total: "96",
      qualified: "42",
      won: "31",
      action: "Review workflow",
      actionDate: "Mon, 18 Nov · 2:30 PM"
    }
  };

  const currentTabInfo = tabData[activeTab];

  return (
    <div className="whatsapp-crm-page">
      {/* Subtle floating back button to features */}
      <Link href="/features" className="nav-back-pill" title="Back to Features">
        <ArrowLeft size={14} />
        <span>Features</span>
      </Link>

      {/* ===================================================================== */}
      {/* 01 HERO SECTION                                                       */}
      {/* ===================================================================== */}
      <section className="hero-wrap">
        <div className="hero-grid-pattern" />
        <div className="hero-glow-blob" />

        {/* Botanical corner plant in bottom right */}
        <div className="hero-corner-plant">
          <svg viewBox="0 0 260 260" fill="none" className="plant-svg">
            <path
              d="M240,240 C180,180 160,110 190,30 C220,110 250,170 240,240 Z"
              fill="url(#plantG1)"
              opacity="0.85"
            />
            <path
              d="M240,240 C160,210 100,160 70,80 C130,120 180,180 240,240 Z"
              fill="url(#plantG2)"
              opacity="0.75"
            />
            <path
              d="M240,240 C200,220 140,220 50,190 C120,180 180,210 240,240 Z"
              fill="url(#plantG1)"
              opacity="0.7"
            />
            <defs>
              <linearGradient id="plantG1" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#0a3f29" />
                <stop offset="60%" stopColor="#187a4a" />
                <stop offset="100%" stopColor="#2ec276" />
              </linearGradient>
              <linearGradient id="plantG2" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#083321" />
                <stop offset="60%" stopColor="#146d42" />
                <stop offset="100%" stopColor="#25a864" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="hero-layout">
          {/* Left Hero Copy */}
          <div className="hero-text-col">
            <div className="section-tag">
              <span className="tag-green">WHATSAPP CRM</span>
              <span className="tag-rule" />
              <span className="tag-num">01</span>
            </div>

            <h1 className="section-title text-[38px] sm:text-[48px] lg:text-[54px] leading-[1.12]">
              Your conversations
              <br />
              are already
              <br />
              your <span className="text-[#16AD55]">customer data.</span>
            </h1>

            <p className="section-desc">
              GRADIX WhatsApp CRM helps you <strong>capture</strong> leads, manage customers, track conversations and
              automate <strong>follow-ups</strong> — all in one place.
            </p>

            <Link href="/contact" className="hero-cta-btn">
              <span>See how it works</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right Product Graphic */}
          <div className="hero-product-stage">
            {/* Background Orbits */}
            <div className="hero-orbit-ring hero-orbit-1" />
            <div className="hero-orbit-ring hero-orbit-2" />

            {/* Floating WhatsApp Logo Badge (Top Left of window) */}
            <div className="wa-floating-badge" title="WhatsApp Cloud API">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"
                  fill="#25D366"
                />
                <path
                  d="M17.5 14.33C17.2 14.18 15.73 13.45 15.45 13.35C15.18 13.25 14.98 13.2 14.78 13.5C14.58 13.8 14.01 14.47 13.84 14.67C13.66 14.87 13.49 14.89 13.19 14.74C12.89 14.59 11.93 14.28 10.79 13.26C9.9 12.47 9.3 11.49 9.13 11.19C8.95 10.89 9.11 10.73 9.26 10.58C9.4 10.45 9.56 10.23 9.71 10.06C9.86 9.89 9.91 9.76 10.01 9.56C10.11 9.36 10.06 9.19 9.98 9.04C9.91 8.89 9.31 7.42 9.06 6.82C8.82 6.24 8.57 6.32 8.39 6.31C8.22 6.3 8.02 6.3 7.82 6.3C7.62 6.3 7.3 6.37 7.03 6.67C6.75 6.97 5.98 7.69 5.98 9.17C5.98 10.64 7.05 12.06 7.2 12.26C7.35 12.46 9.31 15.48 12.32 16.78C13.04 17.09 13.6 17.28 14.04 17.42C14.76 17.65 15.42 17.62 15.93 17.54C16.51 17.45 17.72 16.8 17.97 16.09C18.22 15.39 18.22 14.79 18.15 14.67C18.07 14.54 17.8 14.48 17.5 14.33Z"
                  fill="#ffffff"
                />
              </svg>
            </div>

            {/* Swooping green dashed arrow to Lead Details */}
            <svg className="hero-dashed-arrow" viewBox="0 0 180 80" fill="none">
              <path
                d="M10,65 C50,20 120,15 165,48"
                stroke="#16ad55"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M165,48 L155,42 M165,48 L160,36"
                stroke="#16ad55"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Handwritten scribble top right */}
            <div className="scribble-text scribble-hero">
              From chat
              <br />
              to customer ↗
            </div>

            {/* 3-Panel Hero Window */}
            <div className="hero-crm-window">
              {/* 1. Left Dark Sidebar */}
              <aside className="crm-side-nav">
                <div className="logo-row">
                  <div className="wa-icon-mini">
                    <MessageSquare size={12} fill="#25D366" stroke="none" />
                  </div>
                  <span>WhatsApp</span>
                </div>
                <div className="nav-item active">
                  <MessageCircle size={12} />
                  <span>Chats</span>
                  <span className="badge">19</span>
                </div>
                <div className="nav-item">
                  <Users size={12} />
                  <div>
                    <div>Leads</div>
                    <div style={{ fontSize: "6.5px", opacity: 0.6 }}>Customers</div>
                  </div>
                </div>
                <div className="nav-item">
                  <Zap size={12} />
                  <span>Automation</span>
                </div>
                <div className="nav-item">
                  <Bell size={12} />
                  <span>Reports</span>
                </div>
                <div className="nav-item">
                  <Tag size={12} />
                  <span>Settings</span>
                </div>
              </aside>

              {/* 2. Middle Chat List */}
              <div className="crm-chat-list">
                <div className="crm-search-bar">
                  <Search size={11} />
                  <span>Search...</span>
                </div>

                {[
                  { name: "Arun Kumar", msg: "Hi, I'm looking for a 3BHK...", time: "10:24 AM", img: "/crm/arun.jpg", active: true, unread: true },
                  { name: "Priya Sharma", msg: "Can you share the brochure?", time: "09:48 AM", img: "/crm/priya.jpg", active: false },
                  { name: "Rahul Mehta", msg: "Is this property available?", time: "Yesterday", img: "/crm/rahul.jpg", active: false },
                  { name: "Sneha Reddy", msg: "Thank you!", time: "Yesterday", img: "/crm/sneha.jpg", active: false },
                  { name: "Vikram Singh", msg: "Do you have any offers?", time: "Yesterday", img: "/crm/vikram.jpg", active: false },
                  { name: "Anjali Kapoor", msg: "I'm interested...", time: "Yesterday", img: "/crm/anjali.jpg", active: false }
                ].map((item) => (
                  <div key={item.name} className={`chat-preview-item ${item.active ? "active" : ""}`}>
                    <img src={item.img} alt={item.name} className="contact-photo-avatar" />
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div className="name">{item.name}</div>
                      <div className="snippet">{item.msg}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span className="time">{item.time}</span>
                      {item.unread && <div className="unread-dot" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* 3. Right Active Chat Pane */}
              <div className="crm-chat-main">
                <div className="chat-main-header">
                  <img src="/crm/arun.jpg" alt="Arun Kumar" className="contact-photo-avatar avatar-header" />
                  <div>
                    <div className="title">Arun Kumar</div>
                    <span className="status">Online</span>
                  </div>
                  <div className="actions">
                    <Search size={13} />
                    <Phone size={13} />
                    <Video size={13} />
                    <MoreVertical size={13} />
                  </div>
                </div>

                <div className="chat-main-body">
                  <div className="chat-date-chip">TODAY</div>

                  <div className="chat-msg-bubble customer">
                    <div>
                      Hi, I&apos;m looking for a 3BHK in Chennai.
                      <br />
                      Budget around ₹80L.
                    </div>
                    <span className="timestamp">10:24 AM ✓✓</span>
                  </div>

                  {/* Floating AI Card */}
                  <div className="ai-understanding-card">
                    <div className="ai-card-header">
                      <div className="sparkle-circle">
                        <Sparkles size={11} />
                      </div>
                      <span>GRADIX AI is understanding...</span>
                      <span className="close-x">✕</span>
                    </div>
                    <div className="ai-scan-bar" />
                    <div className="ai-data-grid">
                      <span>Intent:</span>
                      <strong>Property enquiry</strong>
                      <span>Location:</span>
                      <strong>Chennai</strong>
                      <span>Requirement:</span>
                      <strong>3 BHK</strong>
                      <span>Budget:</span>
                      <strong>₹80L</strong>
                    </div>
                    <div className="ai-created-pill">
                      <Check size={11} strokeWidth={3} />
                      <span>Lead created successfully!</span>
                      <ChevronDown size={11} />
                    </div>
                  </div>
                </div>

                <div className="chat-compose-bar">
                  <Smile size={14} className="icon-subtle" />
                  <Paperclip size={14} className="icon-subtle" />
                  <span className="compose-placeholder">Type a message...</span>
                  <div className="send-circle">
                    <Send size={11} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Lead Details Card (Far Right) */}
            <div className="floating-lead-card">
              <div className="lead-card-header">
                <span>Lead Details</span>
                <span className="pill-badge-green">
                  <Check size={9} strokeWidth={3} />
                  Qualified
                </span>
              </div>
              <div className="lead-profile-row">
                <img src="/crm/arun.jpg" alt="Arun Kumar" className="contact-photo-avatar avatar-profile" />
                <div>
                  <b>Arun Kumar</b>
                  <small>+91 98765 43210</small>
                </div>
              </div>
              <div className="lead-facts-grid">
                <div>
                  <span>Property Interest</span>
                  <b>3 BHK</b>
                </div>
                <div>
                  <span>Location</span>
                  <b>Chennai</b>
                </div>
                <div>
                  <span>Budget</span>
                  <b>₹80L</b>
                </div>
              </div>
              <Link href="/contact" className="view-profile-link">
                View Full Profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 02 FROM CHAT TO CUSTOMER (WORKSPACE - 3 DISTINCT CARDS)              */}
      {/* ===================================================================== */}
      <section className="workspace-section-wrap" id="workspace">
        <div className="workspace-grid-layout">
          {/* Left Text */}
          <div className="workspace-text-col">
            <div className="section-tag">
              <span className="tag-num">02</span>
              <span className="tag-rule" />
              <span className="tag-green">FROM CHAT TO CUSTOMER</span>
            </div>

            <h2 className="section-title text-[34px] sm:text-[44px]">
              One conversation.
              <br />
              Complete <span className="blue-text">context.</span>
            </h2>

            <p className="section-desc">
              Get the full picture with customer details, chat history, preferences, and intent — all in one place.
            </p>

            <Link href="/contact" className="text-link-blue">
              <span>See how it works</span>
              <ArrowRight size={14} />
            </Link>

            {/* Dotted path SVG ending with glowing dot */}
            <svg
              width="200"
              height="90"
              viewBox="0 0 200 90"
              fill="none"
              className="workspace-traj-svg"
            >
              <path
                d="M10,20 C70,25 120,75 185,65"
                stroke="#16ad55"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <circle cx="185" cy="65" r="7" fill="rgba(22, 173, 85, 0.2)" />
              <circle cx="185" cy="65" r="4" fill="#16ad55" />
            </svg>
          </div>

          {/* Right 3 SEPARATE FLOATING CARDS */}
          <div className="workspace-cards-stage">
            {/* Handwritten scribble */}
            <div className="scribble-text scribble-workspace">
              Everything
              <br />
              in one place ↘
            </div>

            <div className="workspace-3cards-flex">
              {/* CARD 1: Conversations List */}
              <div className="sec2-card sec2-card-inbox">
                <div className="inbox-head">Conversations</div>
                <div className="inbox-subtabs">
                  <span className="active">All 12</span>
                  <span>New 3</span>
                  <span>Qualified 6</span>
                </div>
                {[
                  { name: "Arun Kumar", tag: "Property enquiry", time: "10:24 AM", img: "/crm/arun.jpg", active: true },
                  { name: "Priya Sharma", tag: "Follow-up", time: "09:45 AM", img: "/crm/priya.jpg" },
                  { name: "Rahul Mehta", tag: "Support", time: "Yesterday", img: "/crm/rahul.jpg" },
                  { name: "Sneha Reddy", tag: "Follow-up", time: "Yesterday", img: "/crm/sneha.jpg" },
                  { name: "Vikram Singh", tag: "New lead", time: "Yesterday", img: "/crm/vikram.jpg" },
                  { name: "Anjali Kapoor", tag: "Support", time: "Yesterday", img: "/crm/anjali.jpg" }
                ].map((item) => (
                  <div key={item.name} className={`inbox-contact-row ${item.active ? "active" : ""}`}>
                    <img src={item.img} alt={item.name} className="contact-photo-avatar avatar-sm" />
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <b>{item.name}</b>
                      <small>{item.tag}</small>
                    </div>
                    <time>{item.time}</time>
                  </div>
                ))}
              </div>

              {/* CARD 2: Active Chat */}
              <div className="sec2-card sec2-card-chat">
                <div className="chat-header">
                  <img src="/crm/arun.jpg" alt="Arun Kumar" className="contact-photo-avatar avatar-sm" />
                  <div>
                    <b>Arun Kumar</b>
                    <small>Online</small>
                  </div>
                  <div style={{ marginLeft: "auto", display: "flex", gap: "8px", color: "#879ba2" }}>
                    <Search size={12} />
                    <Phone size={12} />
                    <Video size={12} />
                    <MoreVertical size={12} />
                  </div>
                </div>

                <div className="chat-body">
                  <div className="chat-msg-bubble customer">
                    <div>
                      Hi, I&apos;m looking for a 3BHK in Chennai.
                      <br />
                      Budget around ₹80L.
                    </div>
                    <span className="timestamp">10:24 AM ✓✓</span>
                  </div>

                  <div className="chat-msg-bubble bubble-agent">
                    <div>Sure! Let me share some options for you.</div>
                    <span className="timestamp" style={{ color: "#5d8a74" }}>
                      10:25 AM
                    </span>
                  </div>

                  {/* In-chat property card with real image */}
                  <div className="in-chat-property-card">
                    <img src="/crm/apartment.jpg" alt="Apartment" className="property-img-thumb" />
                    <div>
                      <b>3 BHK Apartments</b>
                      <small>Chennai · ₹70L – ₹85L</small>
                      <Link href="/contact">View Properties →</Link>
                    </div>
                  </div>
                </div>

                <div className="chat-compose-bar">
                  <Smile size={13} className="icon-subtle" />
                  <span className="compose-placeholder">Type a message...</span>
                  <Paperclip size={13} className="icon-subtle" />
                  <div className="send-circle" style={{ width: "22px", height: "22px" }}>
                    <Send size={10} />
                  </div>
                </div>
              </div>

              {/* CARD 3: Customer 360 */}
              <div className="sec2-card sec2-card-customer">
                <div className="customer-tabs-row">
                  <span className="active">Customer</span>
                  <span>Activity</span>
                  <span>Notes</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <img src="/crm/arun.jpg" alt="Arun Kumar" className="contact-photo-avatar avatar-md" />
                  <div>
                    <b style={{ fontSize: "10.5px", color: "#14374a", display: "block" }}>Arun Kumar</b>
                    <small style={{ fontSize: "7.5px", color: "#85979f" }}>+91 98765 43210</small>
                  </div>
                </div>

                <div className="customer-detail-block">
                  <span className="lbl">Lead Stage</span>
                  <span className="pill-badge-green" style={{ marginTop: "3px" }}>
                    <Check size={8} strokeWidth={3} />
                    Qualified
                  </span>
                </div>

                <div className="customer-detail-block">
                  <span className="lbl">Assigned To</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "3px" }}>
                    <img src="/crm/priya.jpg" alt="Priya" className="contact-photo-avatar avatar-xs" />
                    <div>
                      <b style={{ fontSize: "8px", color: "#19394b", display: "block" }}>Priya Sharma</b>
                      <small style={{ fontSize: "6.5px", color: "#8699a0" }}>Sales Executive</small>
                    </div>
                  </div>
                </div>

                <div className="customer-detail-block">
                  <span className="lbl">Tags</span>
                  <div className="tag-pill-row">
                    <span className="tag-orange">Hot Lead</span>
                    <span className="tag-blue">Chennai</span>
                    <span style={{ background: "#edf3f0", color: "#697e87" }}>+</span>
                  </div>
                </div>

                <div>
                  <span className="lbl" style={{ marginBottom: "6px", display: "block" }}>
                    Recent Activity
                  </span>
                  <div style={{ fontSize: "7.5px", color: "#486675", lineHeight: "1.8" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Check size={9} className="text-[#16ad55]" />
                      <span>Lead created</span>
                      <span style={{ marginLeft: "auto", color: "#9cb1b8", fontSize: "6.5px" }}>10:24 AM</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Check size={9} className="text-[#16ad55]" />
                      <span>Assigned to Priya</span>
                      <span style={{ marginLeft: "auto", color: "#9cb1b8", fontSize: "6.5px" }}>10:26 AM</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Check size={9} className="text-[#16ad55]" />
                      <span>Follow-up scheduled</span>
                      <span style={{ marginLeft: "auto", color: "#9cb1b8", fontSize: "6.5px" }}>Tomorrow 10:30 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 03 CONTEXT-DRIVEN DECISIONS (JOURNEY)                                 */}
      {/* ===================================================================== */}
      <section className={`journey-section-wrap ${isJourneyInView ? "pipeline-anim-active" : ""}`} id="journey">
        <div className="journey-grid-layout">
          {/* Left Text */}
          <div className="journey-text-col">
            <div className="section-tag">
              <span className="tag-num">03</span>
              <span className="tag-rule" />
              <span className="tag-green">CONTEXT-DRIVEN DECISIONS</span>
            </div>

            <h2 className="section-title text-[34px] sm:text-[44px]">
              More than chat.
              <br />
              It’s a complete <span className="text-[#16AD55]">journey.</span>
            </h2>

            <p className="section-desc">
              From lead creation to reminders, everything runs automatically — so you can focus on closing more deals.
            </p>

            <Link href="/contact" className="text-link-blue">
              <span>See automation flow</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Timeline & Floating Upcoming Task */}
          <div key={animKey} className="journey-timeline-stage">
            {/* 4 Nodes on a line */}
            <div className="journey-track-row">
              {/* Connector line behind with moving pipeline laser beam */}
              <div className="journey-connector-line">
                <div className="pipeline-laser-beam">
                  <div className="pipeline-beam-head" />
                </div>
              </div>

              <div className="step-item">
                <div className="journey-step-circle halo-green">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"
                      fill="#25D366"
                    />
                    <path
                      d="M17.5 14.33C17.2 14.18 15.73 13.45 15.45 13.35C15.18 13.25 14.98 13.2 14.78 13.5C14.58 13.8 14.01 14.47 13.84 14.67C13.66 14.87 13.49 14.89 13.19 14.74C12.89 14.59 11.93 14.28 10.79 13.26C9.9 12.47 9.3 11.49 9.13 11.19C8.95 10.89 9.11 10.73 9.26 10.58C9.4 10.45 9.56 10.23 9.71 10.06C9.86 9.89 9.91 9.76 10.01 9.56C10.11 9.36 10.06 9.19 9.98 9.04C9.91 8.89 9.31 7.42 9.06 6.82C8.82 6.24 8.57 6.32 8.39 6.31C8.22 6.3 8.02 6.3 7.82 6.3C7.62 6.3 7.3 6.37 7.03 6.67C6.75 6.97 5.98 7.69 5.98 9.17C5.98 10.64 7.05 12.06 7.2 12.26C7.35 12.46 9.31 15.48 12.32 16.78C13.04 17.09 13.6 17.28 14.04 17.42C14.76 17.65 15.42 17.62 15.93 17.54C16.51 17.45 17.72 16.8 17.97 16.09C18.22 15.39 18.22 14.79 18.15 14.67C18.07 14.54 17.8 14.48 17.5 14.33Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <b>Message Received</b>
                <small>10:24 AM</small>
              </div>

              <div className="step-item">
                <div className="journey-step-circle node-blue">
                  <Activity size={20} className="text-[#1677E8]" />
                </div>
                <b>Intent Detected</b>
                <small>10:24 AM</small>
              </div>

              <div className="step-item">
                <div className="journey-step-circle node-sky">
                  <CircleUserRound size={20} className="text-[#0284C7]" />
                </div>
                <b>Lead Created</b>
                <small>10:25 AM</small>
              </div>

              <div className="step-item">
                <div className="journey-step-circle node-purple">
                  <Users size={20} className="text-[#7C3AED]" />
                </div>
                <b>Assigned to Scheduled</b>
                <small>Tomorrow 10:30 AM</small>
              </div>

              {/* Upcoming Task Card on right connected to track */}
              <div className="upcoming-task-card">
                {/* Glowing border & overlay layers */}
                <div className="task-card-glow-overlay" />
                <div className="task-card-shimmer" />

                <div className="task-head">
                  <div className="task-bell-box">
                    <Bell size={13} className="task-bell-icon" />
                  </div>
                  <span>Upcoming Task</span>
                  <div className="task-sync-status-dot" title="Task Synced" />
                </div>
                <b>Follow up with Arun Kumar</b>
                <span className="task-time">Tomorrow, 10:30 AM</span>
                <Link href="/contact">
                  <span>View All Tasks</span>
                  <ArrowRight size={10} />
                </Link>
              </div>
            </div>

            {/* Smooth swooping green curved arc arrow pointing to task card */}
            <svg
              width="500"
              height="60"
              viewBox="0 0 500 60"
              fill="none"
              className="journey-arc-svg"
            >
              <path
                d="M40,20 C140,55 300,55 460,10"
                stroke="#16ad55"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M460,10 L448,12 M460,10 L455,22"
                stroke="#16ad55"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Handwritten scribble bottom right */}
            <div className="scribble-text scribble-journey">
              Automate
              <br />
              your workflow ↙
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 04 BUILT FOR EVERY BUSINESS (DARK EMERALD DASHBOARD)                  */}
      {/* ===================================================================== */}
      <section className="functions-dark-wrap" id="functions">
        {/* Subtle luminous digital waves in background */}
        <div className="functions-glow-mesh" />

        <div className="functions-grid-layout">
          {/* Left Text */}
          <div className="functions-text-col">
            <div className="section-tag tag-white">
              <span className="tag-num">04</span>
              <span className="tag-rule" />
              <span className="tag-green">BUILT FOR EVERY BUSINESS</span>
            </div>

            <h2 className="section-title text-[34px] sm:text-[44px]">One CRM. Different missions.</h2>

            <p className="section-desc">Sales, support, marketing or operations — GRADIX adapts to your business needs.</p>

            <div className="role-pills-row">
              {(["Sales", "Support", "Marketing", "Operations"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`role-pill-btn ${activeTab === tab ? "active" : ""}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right Dashboard Container */}
          <div className="dashboard-stage-wrap">
            {/* Top frosted tabs */}
            <div className="dash-top-tabs">
              {(["Sales", "Support", "Marketing", "Operations"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`dash-tab-chip ${activeTab === tab ? "active" : ""}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Handwritten scribble */}
            <div className="scribble-text scribble-functions">
              Same CRM.
              <br />
              Different goals. ↗
            </div>

            {/* Dashboard Container: White board + Floating action card */}
            <div className="dash-cards-container">
              {/* White 2-col Board */}
              <div className="dash-white-board">
                {/* Col 1: Pipeline metrics */}
                <div className="dash-col-metrics">
                  <div>
                    <b className="metrics-title">{activeTab} Pipeline</b>
                    <div className="metric-num-block">
                      <small>Total Leads</small>
                      <strong className="text-dark">{currentTabInfo.total}</strong>
                    </div>
                    <div className="metric-num-block">
                      <small>Qualified</small>
                      <strong className="text-blue">{currentTabInfo.qualified}</strong>
                    </div>
                    <div className="metric-num-block">
                      <small>Won</small>
                      <strong className="text-purple">{currentTabInfo.won}</strong>
                    </div>
                  </div>
                  <Link href="/contact" className="metrics-link">
                    View All →
                  </Link>
                </div>

                {/* Col 2: Leads Table */}
                <div className="dash-col-table">
                  <div className="dash-table-head">Leads</div>
                  <table className="leads-tbl">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Stage</th>
                        <th>Value</th>
                        <th style={{ textAlign: "right" }}>Contact</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Arun Kumar", stage: "Qualified", stageClass: "stage-green", val: "₹80L" },
                        { name: "Priya Sharma", stage: "Contacted", stageClass: "stage-blue", val: "₹60L" },
                        { name: "Rahul Mehta", stage: "Proposal", stageClass: "stage-purple", val: "₹1.2Cr" },
                        { name: "Sneha Reddy", stage: "Negotiation", stageClass: "stage-orange", val: "₹95L" },
                        { name: "Vikram Singh", stage: "New Lead", stageClass: "stage-gray", val: "₹70L" }
                      ].map((row) => (
                        <tr key={row.name}>
                          <td>
                            <b>{row.name}</b>
                          </td>
                          <td>
                            <span className={`tbl-stage-tag ${row.stageClass}`}>{row.stage}</span>
                          </td>
                          <td className="val-cell">{row.val}</td>
                          <td style={{ textAlign: "right" }}>
                            <div className="wa-table-icon">
                              <MessageSquare size={13} fill="#16AD55" stroke="none" />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Floating Action Card on Right */}
              <div className="dash-floating-action-card">
                <img src="/crm/apartment.jpg" alt="Apartment" className="apartment-thumb-img" />
                <div className="action-card-content">
                  <b>3 BHK Apartment</b>
                  <small>Chennai</small>
                  <Link href="/contact" className="view-details-pill">
                    View Details →
                  </Link>

                  <div className="action-divider" />
                  <span className="next-action-lbl">Next Action</span>
                  <div className="action-event-row">
                    <CalendarDays size={11} className="text-[#16ad55]" />
                    <span>{currentTabInfo.action}</span>
                  </div>
                  <div className="action-date-str">{currentTabInfo.actionDate}</div>

                  <div className="assigned-person-row">
                    <img src="/crm/priya.jpg" alt="Priya" className="contact-photo-avatar avatar-xs" />
                    <span>Priya Sharma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 05 YOUR NEXT CUSTOMER (FOOTER CTA)                                    */}
      {/* ===================================================================== */}
      <section className="footer-cta-wrap">
        {/* Botanical leaf decoration in bottom left corner */}
        <div className="footer-corner-plant">
          <svg viewBox="0 0 240 240" fill="none" className="plant-svg">
            <path
              d="M10,240 C60,170 120,130 200,80 C150,150 110,200 10,240 Z"
              fill="url(#footPlant1)"
              opacity="0.8"
            />
            <path
              d="M10,240 C90,200 160,180 230,160 C160,200 100,230 10,240 Z"
              fill="url(#footPlant2)"
              opacity="0.7"
            />
            <defs>
              <linearGradient id="footPlant1" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0a4628" />
                <stop offset="60%" stopColor="#18844f" />
                <stop offset="100%" stopColor="#2ec276" />
              </linearGradient>
              <linearGradient id="footPlant2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#083720" />
                <stop offset="60%" stopColor="#126e3f" />
                <stop offset="100%" stopColor="#22b565" />
              </linearGradient>
            </defs>
          </svg>
        </div>

                {/* Potted Plant with GRADIX logo in bottom right */}
        <div className="footer-potted-plant" title="GRADIX CRM">
          <div className="plant-foliage">
            <svg viewBox="0 0 200 220" fill="none" className="foliage-svg">
              {/* Back stems */}
              <path d="M100,200 Q95,140 70,80" stroke="#105735" strokeWidth="4" strokeLinecap="round" />
              <path d="M100,200 Q105,130 145,90" stroke="#105735" strokeWidth="4" strokeLinecap="round" />
              <path d="M100,200 Q100,120 100,50" stroke="#13693f" strokeWidth="4.5" strokeLinecap="round" />

              {/* Back leaves */}
              {/* Leaf 1 - Far Left */}
              <g transform="translate(10, 40) rotate(-18 60 40)">
                <path
                  d="M60,90 C30,70 10,40 20,10 C45,5 75,25 80,60 C75,75 68,85 60,90 Z"
                  fill="url(#leafDarkGrad)"
                  opacity="0.9"
                />
                <path d="M20,10 Q50,45 60,90" stroke="#25a864" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              </g>

              {/* Leaf 2 - Far Right */}
              <g transform="translate(90, 45) rotate(15 50 45)">
                <path
                  d="M40,95 C70,75 90,45 80,15 C55,10 25,30 20,65 C25,80 32,90 40,95 Z"
                  fill="url(#leafDarkGrad)"
                  opacity="0.9"
                />
                <path d="M80,15 Q50,50 40,95" stroke="#25a864" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              </g>

              {/* Leaf 3 - Tall Center Leaf */}
              <g transform="translate(55, 10)">
                <path
                  d="M45,120 C15,85 10,40 45,5 C80,40 75,85 45,120 Z"
                  fill="url(#leafBrightGrad)"
                />
                <path d="M45,5 L45,120" stroke="#48e597" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                <path d="M45,35 Q30,25 20,30 M45,55 Q25,45 18,52 M45,75 Q30,68 22,76" stroke="#48e597" strokeWidth="1.2" opacity="0.5" />
                <path d="M45,35 Q60,25 70,30 M45,55 Q65,45 72,52 M45,75 Q60,68 68,76" stroke="#48e597" strokeWidth="1.2" opacity="0.5" />
              </g>

              {/* Leaf 4 - Mid Left Overhanging */}
              <g transform="translate(25, 60) rotate(-10 50 50)">
                <path
                  d="M55,105 C20,90 5,60 25,25 C55,25 80,55 75,90 Z"
                  fill="url(#leafMidGrad)"
                />
                <path d="M25,25 Q50,60 55,105" stroke="#38d682" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
                <path d="M38,45 Q26,40 20,46 M46,65 Q30,60 22,68" stroke="#38d682" strokeWidth="1.2" opacity="0.5" />
              </g>

              {/* Leaf 5 - Mid Right Overhanging */}
              <g transform="translate(85, 65) rotate(12 50 50)">
                <path
                  d="M45,105 C80,90 95,60 75,25 C45,25 20,55 25,90 Z"
                  fill="url(#leafMidGrad)"
                />
                <path d="M75,25 Q50,60 45,105" stroke="#38d682" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
                <path d="M62,45 Q74,40 80,46 M54,65 Q70,60 78,68" stroke="#38d682" strokeWidth="1.2" opacity="0.5" />
              </g>

              <defs>
                <linearGradient id="leafDarkGrad" x1="0%" y1="100%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="#083822" />
                  <stop offset="60%" stopColor="#0e5c36" />
                  <stop offset="100%" stopColor="#1bb366" />
                </linearGradient>
                <linearGradient id="leafMidGrad" x1="0%" y1="100%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="#0b482b" />
                  <stop offset="50%" stopColor="#15824c" />
                  <stop offset="100%" stopColor="#25c974" />
                </linearGradient>
                <linearGradient id="leafBrightGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#0d5231" />
                  <stop offset="50%" stopColor="#199959" />
                  <stop offset="100%" stopColor="#30e386" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Ceramic Planter Pot */}
          <div className="ceramic-pot-container">
            {/* Dark organic soil top */}
            <div className="pot-soil-top" />
            
            {/* Rim collar */}
            <div className="pot-rim-lip" />

            {/* Pot main body */}
            <div className="pot-body-shell">
              <div className="pot-highlight-sheen" />
              
              {/* GRADIX Logo on the pot */}
              <div className="pot-gradix-badge">
                <img
                  src="/gradix-logo-exact.png"
                  alt="GRADIX"
                  className="pot-gradix-img"
                />
              </div>
            </div>

            {/* Ambient floor shadow underneath pot */}
            <div className="pot-floor-shadow" />
          </div>
        </div>

        <div className="footer-cta-layout">
          {/* Left CTA Text */}
          <div className="footer-text-col">
            <div className="section-tag">
              <span className="tag-num">05</span>
              <span className="tag-rule" />
              <span className="tag-green">YOUR NEXT CUSTOMER</span>
            </div>

            <h2 className="section-title text-[36px] sm:text-[46px] leading-[1.14]">
              Turn your WhatsApp
              <br />
              conversations into your <span className="text-[#16AD55]">biggest asset.</span>
            </h2>

            <p className="section-desc">GRADIX makes sure the conversation doesn’t get lost.</p>

            <Link href="/contact" className="dark-start-btn">
              <span>Start with GRADIX</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right Floating Card & Scribble */}
          <div className="footer-card-stage">
            {/* Dotted green trajectory line arching to card */}
            <svg className="footer-traj-svg" viewBox="0 0 160 80" fill="none">
              <path
                d="M10,70 C50,65 80,45 140,25"
                stroke="#16ad55"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <circle cx="140" cy="25" r="3.5" fill="#16ad55" />
            </svg>

            <div className="team-online-pill">
              <div className="wa-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"
                    fill="#25D366"
                  />
                  <path
                    d="M17.5 14.33C17.2 14.18 15.73 13.45 15.45 13.35C15.18 13.25 14.98 13.2 14.78 13.5C14.58 13.8 14.01 14.47 13.84 14.67C13.66 14.87 13.49 14.89 13.19 14.74C12.89 14.59 11.93 14.28 10.79 13.26C9.9 12.47 9.3 11.49 9.13 11.19C8.95 10.89 9.11 10.73 9.26 10.58C9.4 10.45 9.56 10.23 9.71 10.06C9.86 9.89 9.91 9.76 10.01 9.56C10.11 9.36 10.06 9.19 9.98 9.04C9.91 8.89 9.31 7.42 9.06 6.82C8.82 6.24 8.57 6.32 8.39 6.31C8.22 6.3 8.02 6.3 7.82 6.3C7.62 6.3 7.3 6.37 7.03 6.67C6.75 6.97 5.98 7.69 5.98 9.17C5.98 10.64 7.05 12.06 7.2 12.26C7.35 12.46 9.31 15.48 12.32 16.78C13.04 17.09 13.6 17.28 14.04 17.42C14.76 17.65 15.42 17.62 15.93 17.54C16.51 17.45 17.72 16.8 17.97 16.09C18.22 15.39 18.22 14.79 18.15 14.67C18.07 14.54 17.8 14.48 17.5 14.33Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <b className="team-online-text">Your team is online</b>
              <div className="team-avatar-stack">
                <img src="/crm/priya.jpg" alt="Priya" className="team-avatar-img" />
                <img src="/crm/rahul.jpg" alt="Rahul" className="team-avatar-img" />
                <img src="/crm/sneha.jpg" alt="Sneha" className="team-avatar-img" />
                <span className="av-plus">+3</span>
              </div>
            </div>

            {/* Handwritten scribble on right */}
            <div className="scribble-text scribble-footer">
              Real people.
              <br />
              Real conversations.
              <br />
              Real growth. ↙
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
