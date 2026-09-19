"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Globe2,
  ShieldCheck,
  MessageCircle,
  Workflow,
  ShoppingCart,
  BarChart3,
  Users,
  Code2,
  CheckCircle2,
  Zap,
  Sparkles,
  Clock,
  Calendar,
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Plane,
  Landmark,
  Check,
  Copy,
  Terminal,
  Send,
  Lock,
  Headphones,
  FileCheck,
  Cpu
} from "lucide-react";
import "./whatsapp-api.css";

const industryList = [
  {
    id: "real-estate",
    title: "Real Estate & Property",
    desc: "Automate property brochures, virtual walkthroughs, site visit scheduling, and agent lead assignment.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
    icon: Building2,
    tag: "High ROI",
    stat: "3.4x site visits"
  },
  {
    id: "education",
    title: "Education & EdTech",
    desc: "Streamline course admissions, fee payment reminders, student onboarding, and parent exam alerts.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=85",
    icon: GraduationCap,
    tag: "98% Open Rate",
    stat: "4.2x faster intake"
  },
  {
    id: "healthcare",
    title: "Healthcare & Clinics",
    desc: "Instant doctor appointments, diagnostic report delivery, medicine dosage alerts, and follow-up care.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
    icon: HeartPulse,
    tag: "HIPAA Ready",
    stat: "65% less no-shows"
  },
  {
    id: "ecommerce",
    title: "E-commerce & D2C",
    desc: "Automate abandoned cart recovery, COD order confirmations, live delivery tracking, and 1-click reorders.",
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=800&q=85",
    icon: ShoppingBag,
    tag: "Revenue Driver",
    stat: "28% cart recovered"
  },
  {
    id: "travel",
    title: "Travel & Hospitality",
    desc: "Instant itinerary delivery, flight updates, hotel booking confirmations, and 24/7 concierge assistance.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=85",
    icon: Plane,
    tag: "Instant Sync",
    stat: "4.8/5 satisfaction"
  },
  {
    id: "fintech",
    title: "Fintech & Banking",
    desc: "Real-time account balance alerts, instant loan status, secure OTPs, and proactive fraud prevention alerts.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=85",
    icon: Landmark,
    tag: "Bank-grade",
    stat: "99.99% deliverability"
  }
];

const codeSnippets = {
  curl: `curl -X POST "https://api.gradix.io/v1/whatsapp/messages" \\
  -H "Authorization: Bearer gradix_live_sec_89f023a1" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+919876543210",
    "template": "order_confirmation_v2",
    "parameters": {
      "customer_name": "Kavin",
      "order_id": "#ORD-84920",
      "amount": "₹4,999",
      "tracking_url": "https://gradix.io/track/84920"
    }
  }'`,
  node: `import { GradixWhatsApp } from "@gradix/sdk";

const gradix = new GradixWhatsApp({
  apiKey: process.env.GRADIX_API_KEY!,
  phoneNumberId: "10982348572194"
});

// Send an automated WhatsApp notification
const result = await gradix.messages.sendTemplate({
  to: "+919876543210",
  template: "order_confirmation_v2",
  language: "en_US",
  components: [
    {
      type: "body",
      parameters: [
        { type: "text", text: "Kavin" },
        { type: "text", text: "#ORD-84920" },
        { type: "text", text: "₹4,999" }
      ]
    }
  ]
});

console.log("Message delivered in 92ms:", result.messageId);`,
  python: `from gradix import GradixClient

client = GradixClient(api_key="gradix_live_sec_89f023a1")

response = client.whatsapp.send_message(
    phone_number_id="10982348572194",
    to="+919876543210",
    template="order_confirmation_v2",
    params={
        "customer_name": "Kavin",
        "order_id": "#ORD-84920",
        "amount": "₹4,999"
    }
)

print(f"Delivered! Status: {response.status}, ID: {response.id}")`,
  php: `<?php
require_once('vendor/autoload.php');

$gradix = new \\Gradix\\WhatsAppClient([
    'api_key' => 'gradix_live_sec_89f023a1'
]);

$response = $gradix->messages->send([
    'to' => '+919876543210',
    'template' => 'order_confirmation_v2',
    'parameters' => [
        'customer_name' => 'Kavin',
        'order_id' => '#ORD-84920',
        'amount' => '₹4,999'
    ]
]);

echo "Message dispatched successfully: " . $response->id;
?>`
};

export default function WhatsAppAPIPage() {
  const [activeCodeLang, setActiveCodeLang] = useState<"curl" | "node" | "python" | "php">("node");
  const [copied, setCopied] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string>("Mon 23 · 10:00 AM");
  const [bookedStatus, setBookedStatus] = useState(false);
  const [activeIndustryTab, setActiveIndustryTab] = useState(0);

  // Scroll Reveal Animations via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="whatsapp-api-master">
      {/* Floating Back Navigation Pill positioned below navbar & logo */}
      <Link
        href="/features"
        prefetch={true}
        className="api-back-pill"
        title="Back to Features Hub"
      >
        <ArrowLeft size={15} />
        <span>Features</span>
      </Link>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION                                                   */}
      {/* ========================================================================= */}
      <section className="api-hero-section">
        <div className="hero-mesh-background" />
        <div className="hero-glow-blob" />

        <div className="api-hero-container">
          <div className="api-hero-left reveal-on-scroll">
            <div className="api-badge-pill">
              <span className="api-pulse-dot" />
              <span>OFFICIAL META WHATSAPP BUSINESS API</span>
              <Sparkles size={14} className="text-emerald-400" />
            </div>

            <h1 className="api-hero-title">
              Real Conversations.<br />
              Real Customers.<br />
              <span className="api-hero-gradient-text">Real Business Growth.</span>
            </h1>

            <p className="api-hero-description">
              Connect your enterprise directly to <strong>2.8+ billion</strong> active users with the Official WhatsApp Cloud API. Supercharge customer support, automate hyper-personalized marketing broadcasts, and close deals at scale with <strong>99.99% guaranteed uptime</strong>.
            </p>

            <div className="api-proof-grid">
              <div className="api-proof-item">
                <div className="api-proof-icon-box">
                  <MessageCircle size={20} />
                </div>
                <div className="api-proof-text">
                  <strong>Official WhatsApp API</strong>
                  <span>Meta Verified Tech Partner</span>
                </div>
              </div>

              <div className="api-proof-item">
                <div className="api-proof-icon-box">
                  <ShieldCheck size={20} />
                </div>
                <div className="api-proof-text">
                  <strong>Enterprise Security</strong>
                  <span>End-to-End Encrypted &amp; SOC2</span>
                </div>
              </div>

              <div className="api-proof-item">
                <div className="api-proof-icon-box">
                  <Globe2 size={20} />
                </div>
                <div className="api-proof-text">
                  <strong>Global Coverage</strong>
                  <span>180+ Countries &amp; &lt; 120ms latency</span>
                </div>
              </div>
            </div>

            <div className="api-hero-actions">
              <Link href="/contact" prefetch={true} className="api-cta-button-primary">
                <span>Get API Keys Now</span>
                <ArrowRight size={18} />
              </Link>
              <a href="#integrations" className="api-cta-button-secondary">
                <Code2 size={16} />
                <span>Explore Developer Docs</span>
              </a>
            </div>
          </div>

          {/* Hero Visual Right Column: Interactive Phone & Notification Simulator */}
          <div className="api-hero-right reveal-on-scroll delay-200">
            <div className="api-mockup-wrapper">
              <div className="api-phone-frame">
                {/* Phone Header */}
                <div className="phone-screen-header">
                  <div className="phone-avatar-box">
                    <MessageCircle size={20} className="text-emerald-400" />
                  </div>
                  <div className="phone-header-info">
                    <div className="phone-business-name">
                      <span>GRADIX Store</span>
                      <CheckCircle2 size={14} className="text-emerald-400 fill-emerald-500/20" />
                    </div>
                    <span className="phone-status-online">● Official Cloud API Verified</span>
                  </div>
                </div>

                {/* Phone Chat Feed */}
                <div className="phone-chat-body">
                  <div className="chat-bubble chat-incoming">
                    <p>Hi 👋 I want to automate lead qualification &amp; WhatsApp broadcasts for our sales team.</p>
                    <span className="chat-time">10:42 AM</span>
                  </div>

                  <div className="chat-bubble chat-outgoing">
                    <p>Welcome to <strong>GRADIX WhatsApp Cloud API</strong>! 🚀 Here is how our high-throughput gateway boosts your conversion by 3.8x:</p>
                    <span className="chat-time">10:42 AM · <Check size={12} className="inline text-emerald-300" /><Check size={12} className="inline -ml-1 text-emerald-300" /></span>
                  </div>

                  {/* WhatsApp Rich Product Card */}
                  <div className="chat-rich-card">
                    <div className="rich-card-header">
                      <div className="rich-badge">ENTERPRISE API</div>
                      <h4>GRADIX Scale Package</h4>
                    </div>
                    <ul className="rich-features">
                      <li><Check size={13} className="text-emerald-500" /> Unlimited Template Messages</li>
                      <li><Check size={13} className="text-emerald-500" /> &lt; 100ms Webhook Latency</li>
                      <li><Check size={13} className="text-emerald-500" /> Multi-Agent Unified Team Inbox</li>
                    </ul>
                    <button className="rich-cta-btn" onClick={() => alert("Connecting to Gradix API Gateway...")}>
                      <span>Explore Live Webhook</span>
                      <ChevronRight size={15} />
                    </button>
                  </div>

                  <div className="phone-input-bar">
                    <span>Type an automated message...</span>
                    <div className="phone-send-circle">
                      <Send size={14} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Real-Time Event Toasts */}
              <div className="api-floating-toast toast-1">
                <div className="toast-icon-green"><CheckCircle2 size={16} /></div>
                <div>
                  <strong>New Lead Captured</strong>
                  <small>Rahul S. · Real Estate Enquiry</small>
                </div>
              </div>

              <div className="api-floating-toast toast-2">
                <div className="toast-icon-purple"><Zap size={16} /></div>
                <div>
                  <strong>Order Placed #ORD-84920</strong>
                  <small>Payment Received ₹4,999 via UPI</small>
                </div>
              </div>

              <div className="api-floating-toast toast-3">
                <div className="toast-icon-blue"><Calendar size={16} /></div>
                <div>
                  <strong>Site Visit Booked</strong>
                  <small>Tomorrow at 11:30 AM</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: 01 / THE JOURNEY (From Message to Action)                      */}
      {/* ========================================================================= */}
      <section className="api-journey-section">
        <div className="section-container">
          <div className="section-header-center reveal-on-scroll">
            <span className="api-section-eyebrow">
              <span className="eyebrow-num">01</span> / THE ARCHITECTURE JOURNEY
            </span>
            <h2 className="api-section-title">
              From a simple incoming message<br />
              <span className="api-accent-text">to automated business revenue.</span>
            </h2>
            <p className="api-section-sub">
              A customer&apos;s message is just the beginning. GRADIX WhatsApp Cloud API ingests raw messages in milliseconds, triggers intelligent NLP categorization, syncs your CRM, and drives revenue.
            </p>
          </div>

          <div className="journey-flow-grid reveal-on-scroll delay-100">
            {/* Step 1 */}
            <div className="journey-card">
              <div className="journey-step-tag">STEP 01</div>
              <div className="journey-card-icon bg-emerald-50 text-emerald-600 border border-emerald-100">
                <MessageCircle size={28} />
              </div>
              <h3>Customer Message</h3>
              <p>User sends query, voice note, media or button click on WhatsApp from any country.</p>
              <div className="journey-pill-snippet">
                &ldquo;Hi, I&apos;d like pricing for 50 users&rdquo;
              </div>
            </div>

            <div className="journey-connector">
              <div className="connector-line" />
              <ArrowRight size={20} className="connector-arrow" />
            </div>

            {/* Step 2 */}
            <div className="journey-card highlight-card">
              <div className="journey-step-tag highlight-tag">STEP 02</div>
              <div className="journey-card-icon bg-emerald-600 text-white shadow-lg shadow-emerald-600/30">
                <Cpu size={28} />
              </div>
              <h3>GRADIX API Gateway</h3>
              <p>Ultra-low latency webhooks parse payload, authenticate tokens &amp; normalize JSON in &lt;80ms.</p>
              <div className="journey-pill-snippet highlight-pill">
                <span>POST /v1/webhook</span> · 200 OK
              </div>
            </div>

            <div className="journey-connector">
              <div className="connector-line" />
              <ArrowRight size={20} className="connector-arrow" />
            </div>

            {/* Step 3 */}
            <div className="journey-card">
              <div className="journey-step-tag">STEP 03</div>
              <div className="journey-card-icon bg-emerald-50 text-emerald-600 border border-emerald-100">
                <Workflow size={28} />
              </div>
              <h3>Automation Rules</h3>
              <p>Smart trigger engine executes conditional logic, NLP intent classification, and CRM enrichment.</p>
              <div className="journey-pill-snippet">
                If intent = &ldquo;pricing&rdquo; → Send Quote
              </div>
            </div>

            <div className="journey-connector">
              <div className="connector-line" />
              <ArrowRight size={20} className="connector-arrow" />
            </div>

            {/* Step 4 */}
            <div className="journey-card">
              <div className="journey-step-tag">STEP 04</div>
              <div className="journey-card-icon bg-emerald-50 text-emerald-600 border border-emerald-100">
                <CheckCircle2 size={28} />
              </div>
              <h3>Business Action</h3>
              <p>Deal created in CRM, invoice dispatched, payment collected, or VIP agent assigned.</p>
              <div className="journey-pill-snippet success-pill">
                Deal Won · ₹49,999 Closed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: 02 / MORE THAN MESSAGES (Business Events)                      */}
      {/* ========================================================================= */}
      <section className="api-events-section">
        <div className="events-glow-circle" />

        <div className="section-container">
          <div className="events-split-layout">
            <div className="events-copy-side reveal-on-scroll">
              <span className="api-section-eyebrow dark-eyebrow">
                <span className="eyebrow-num">02</span> / MORE THAN JUST CHAT
              </span>
              <h2 className="api-section-title text-white">
                Turn Every Conversation<br />
                <span className="api-green-gradient-text">Into High-Value Events.</span>
              </h2>
              <p className="events-sub-text">
                Every incoming message is an event trigger. Seamlessly transform WhatsApp chats into qualified leads, confirmed appointments, instant payment settlements, and priority support tickets.
              </p>

              <div className="events-features-list">
                <div className="event-feature-row">
                  <div className="event-icon-badge">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4>Automated Lead Qualification</h4>
                    <p>Collect buyer intent, budget, and contact info directly in chat with zero friction.</p>
                  </div>
                </div>

                <div className="event-feature-row">
                  <div className="event-icon-badge">
                    <ShoppingCart size={20} />
                  </div>
                  <div>
                    <h4>Conversational Payments &amp; Checkout</h4>
                    <p>Send native UPI and Stripe payment links inside WhatsApp with instant status webhooks.</p>
                  </div>
                </div>

                <div className="event-feature-row">
                  <div className="event-icon-badge">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4>2-Way Real-Time Scheduling</h4>
                    <p>Sync bookings directly with Google Calendar and Outlook with automated reminder alerts.</p>
                  </div>
                </div>

                <div className="event-feature-row">
                  <div className="event-icon-badge">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4>Smart Agent Routing &amp; Handoff</h4>
                    <p>Intelligent routing automatically assigns VIP clients to available department specialists.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Demo Simulation Card on Right */}
            <div className="events-interactive-side reveal-on-scroll delay-200">
              <div className="events-demo-card">
                <div className="demo-card-header">
                  <div className="demo-dot green-dot" />
                  <div className="demo-dot yellow-dot" />
                  <div className="demo-dot red-dot" />
                  <span className="demo-title">Interactive Appointment &amp; Payment Demo</span>
                </div>

                <div className="demo-card-body">
                  <div className="demo-chat-bubble customer-msg">
                    <p>Hi! I want to schedule a product demo &amp; dental consultation.</p>
                    <span>10:14 AM</span>
                  </div>

                  <div className="demo-chat-bubble bot-msg">
                    <p>Awesome! Pick your preferred time slot below for instant calendar reservation:</p>

                    <div className="demo-slot-grid">
                      {["Mon 23 · 10:00 AM", "Tue 24 · 02:30 PM", "Wed 25 · 04:00 PM"].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={`slot-pill ${selectedSlot === slot ? "slot-selected" : ""}`}
                          onClick={() => {
                            setSelectedSlot(slot);
                            setBookedStatus(false);
                          }}
                        >
                          <Clock size={12} />
                          <span>{slot}</span>
                        </button>
                      ))}
                    </div>

                    {!bookedStatus ? (
                      <button
                        type="button"
                        className="demo-confirm-btn"
                        onClick={() => setBookedStatus(true)}
                      >
                        <Check size={16} />
                        <span>Confirm Reservation for {selectedSlot}</span>
                      </button>
                    ) : (
                      <div className="demo-success-banner">
                        <CheckCircle2 size={20} className="text-emerald-400" />
                        <div>
                          <strong>Confirmed &amp; Synced!</strong>
                          <p>Google Calendar invite &amp; WhatsApp reminder sent.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: 03 / USE CASES (Built for Every Industry)                      */}
      {/* ========================================================================= */}
      <section className="api-industries-section">
        <div className="section-container">
          <div className="section-header-center reveal-on-scroll">
            <span className="api-section-eyebrow">
              <span className="eyebrow-num">03</span> / INDUSTRY SOLUTIONS
            </span>
            <h2 className="api-section-title">
              Engineered for High Performance<br />
              <span className="api-accent-text">across every major industry.</span>
            </h2>
            <p className="api-section-sub">
              From fast-scaling startups to global enterprises, GRADIX WhatsApp API empowers teams to deliver exceptional, automated customer journeys with superior conversion rates.
            </p>
          </div>

          <div className="industries-grid reveal-on-scroll delay-100">
            {industryList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={item.id} className="industry-card-item">
                  <div className="industry-image-box">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="industry-img"
                    />
                    <div className="industry-image-overlay" />
                    <span className="industry-badge-tag">{item.tag}</span>
                  </div>

                  <div className="industry-card-content">
                    <div className="industry-header-line">
                      <div className="industry-icon-circle">
                        <IconComp size={18} />
                      </div>
                      <span className="industry-stat-text">{item.stat}</span>
                    </div>

                    <h3 className="industry-item-title">{item.title}</h3>
                    <p className="industry-item-desc">{item.desc}</p>

                    <Link href="/contact" className="industry-learn-more">
                      <span>Explore workflow</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: 04 / HOW IT WORKS (Simple. Automated. Powerful.)               */}
      {/* ========================================================================= */}
      <section className="api-how-section">
        <div className="section-container">
          <div className="section-header-center reveal-on-scroll">
            <span className="api-section-eyebrow">
              <span className="eyebrow-num">04</span> / HOW IT WORKS
            </span>
            <h2 className="api-section-title">
              Simple. Automated.<br />
              <span className="api-accent-text">Enterprise-Grade Architecture.</span>
            </h2>
            <p className="api-section-sub">
              Get up and running in minutes with our guided Meta Embedded Signup, pre-built webhooks, and visual workflow configurator.
            </p>
          </div>

          <div className="how-steps-grid reveal-on-scroll delay-100">
            <div className="how-step-card">
              <div className="step-num-badge">01</div>
              <div className="step-icon-box bg-emerald-50 text-emerald-600">
                <MessageCircle size={26} />
              </div>
              <h4>1. Connect &amp; Verify</h4>
              <p>Onboard your official Meta WhatsApp Business Account with 1-click embedded authorization &amp; green tick assistance.</p>
            </div>

            <div className="how-step-card">
              <div className="step-num-badge">02</div>
              <div className="step-icon-box bg-emerald-50 text-emerald-600">
                <Workflow size={26} />
              </div>
              <h4>2. Configure Automation</h4>
              <p>Set up interactive message templates, carousel cards, button menus, and real-time webhook routing rules.</p>
            </div>

            <div className="how-step-card">
              <div className="step-num-badge">03</div>
              <div className="step-icon-box bg-emerald-50 text-emerald-600">
                <Zap size={26} />
              </div>
              <h4>3. Engage Customers</h4>
              <p>Launch high-converting personalized broadcasts and let intelligent bots handle instant 24/7 resolution.</p>
            </div>

            <div className="how-step-card">
              <div className="step-num-badge">04</div>
              <div className="step-icon-box bg-emerald-50 text-emerald-600">
                <BarChart3 size={26} />
              </div>
              <h4>4. Analyze &amp; Scale</h4>
              <p>Track delivery, read rates, CTR, agent resolution velocity, and revenue attribution on live dashboards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: 05 / DEVELOPER INTEGRATIONS & CODE PLAYGROUND                   */}
      {/* ========================================================================= */}
      <section id="integrations" className="api-integrations-section">
        <div className="section-container">
          <div className="integrations-split-layout">
            <div className="integrations-copy reveal-on-scroll">
              <span className="api-section-eyebrow">
                <span className="eyebrow-num">05</span> / DEVELOPER FIRST
              </span>
              <h2 className="api-section-title">
                Connect your tools.<br />
                <span className="api-accent-text">Integrate in minutes.</span>
              </h2>
              <p className="api-section-sub">
                Designed for high throughput and effortless integration. Seamlessly link with Salesforce, HubSpot, Shopify, WooCommerce, Zoho, Stripe, and custom backends via REST API.
              </p>

              <div className="integrations-logos-grid">
                {["Salesforce", "HubSpot", "Shopify", "WooCommerce", "Zoho CRM", "Razorpay", "Stripe", "Zapier"].map((tool) => (
                  <div key={tool} className="integration-pill-tag">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>

              <div className="api-specs-box">
                <div className="spec-item">
                  <Terminal size={18} className="text-emerald-600" />
                  <div>
                    <strong>REST &amp; Webhooks</strong>
                    <span>JSON payloads with HMAC SHA-256 signature verification</span>
                  </div>
                </div>
                <div className="spec-item">
                  <Lock size={18} className="text-emerald-600" />
                  <div>
                    <strong>Enterprise Security</strong>
                    <span>TLS 1.3 encryption &amp; IP whitelisting support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Code Playground on Right */}
            <div className="integrations-code-side reveal-on-scroll delay-200">
              <div className="code-playground-card">
                <div className="code-card-topbar">
                  <div className="code-lang-tabs">
                    {(["node", "curl", "python", "php"] as const).map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        className={`lang-tab-btn ${activeCodeLang === lang ? "tab-active" : ""}`}
                        onClick={() => setActiveCodeLang(lang)}
                      >
                        {lang === "node" ? "Node.js" : lang === "curl" ? "cURL" : lang === "python" ? "Python" : "PHP"}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="copy-code-btn"
                    onClick={handleCopyCode}
                    title="Copy snippet"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="code-card-body">
                  <pre className="code-pre-block">
                    <code>{codeSnippets[activeCodeLang]}</code>
                  </pre>
                </div>

                <div className="code-card-footer">
                  <div className="response-pill">
                    <span className="response-dot" />
                    <span>Response: 200 OK · 92ms</span>
                  </div>
                  <span className="api-ver-text">API Version: v1.4 (Latest)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: 06 / GLOBAL IMPACT & INFRASTRUCTURE                            */}
      {/* ========================================================================= */}
      <section className="api-global-section">
        <div className="global-bg-glow" />

        <div className="section-container">
          <div className="section-header-center reveal-on-scroll">
            <span className="api-section-eyebrow dark-eyebrow">
              <span className="eyebrow-num">06</span> / GLOBAL INFRASTRUCTURE
            </span>
            <h2 className="api-section-title text-white">
              Trusted by high-growth businesses<br />
              <span className="api-green-gradient-text">across the globe.</span>
            </h2>
            <p className="events-sub-text max-w-2xl mx-auto">
              Engineered on distributed edge architecture with automated failover and multi-region redundancy.
            </p>
          </div>

          <div className="global-stats-grid reveal-on-scroll delay-100">
            <div className="stat-card">
              <div className="stat-number">180+</div>
              <div className="stat-title">Countries Supported</div>
              <p className="stat-desc">Deliver messages globally with localized phone number support.</p>
            </div>

            <div className="stat-card">
              <div className="stat-number">99.99%</div>
              <div className="stat-title">Guaranteed SLA Uptime</div>
              <p className="stat-desc">Zero message loss with automated queuing &amp; auto-retry engine.</p>
            </div>

            <div className="stat-card">
              <div className="stat-number">&lt; 120ms</div>
              <div className="stat-title">Average Webhook Latency</div>
              <p className="stat-desc">Ultra-fast event ingestion powered by edge compute clusters.</p>
            </div>

            <div className="stat-card">
              <div className="stat-number">3.8x</div>
              <div className="stat-title">Higher Conversion</div>
              <p className="stat-desc">Outperforms legacy email and SMS marketing across every metric.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: CALL TO ACTION BANNER                                          */}
      {/* ========================================================================= */}
      <section className="api-cta-section">
        <div className="section-container">
          <div className="cta-banner-card reveal-on-scroll">
            <div className="cta-glow-mesh" />

            <div className="cta-card-content">
              <span className="cta-eyebrow">
                <Sparkles size={16} />
                <span>START YOUR 14-DAY FREE TRIAL</span>
              </span>

              <h2 className="cta-title">
                Ready to transform customer conversations<br />
                into your highest revenue channel?
              </h2>

              <p className="cta-desc">
                Deploy the official GRADIX WhatsApp Business API in minutes. No credit card required. Includes 1,000 free test conversations.
              </p>

              <div className="cta-btn-group">
                <Link href="/contact" prefetch={true} className="cta-btn-primary">
                  <span>Start Free Trial Now</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/pricing" prefetch={true} className="cta-btn-secondary">
                  <span>View Transparent Pricing</span>
                </Link>
              </div>

              <div className="cta-perks-row">
                <span><Check size={14} className="text-emerald-400" /> Instant Meta Onboarding</span>
                <span><Check size={14} className="text-emerald-400" /> 24/7 Dedicated Support</span>
                <span><Check size={14} className="text-emerald-400" /> Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
