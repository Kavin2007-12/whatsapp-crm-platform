"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
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
  ArrowLeft,
} from "lucide-react";
import { assetPath } from "@/lib/assets";
import "./whatsapp-api.css";

const industries = [
  [
    "Real Estate",
    "Property enquiries, site visits, agent assignment, follow-ups.",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
  ],
  [
    "Education & EdTech",
    "Course enquiries, admissions, counselling, fee collection.",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80",
  ],
  [
    "Healthcare & Clinics",
    "Appointments, reminders, patient communication.",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
  ],
  [
    "E-commerce & D2C",
    "Order updates, payments, abandoned leads.",
    "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=700&q=80",
  ],
  [
    "Travel & Tourism",
    "Quotations, bookings, itinerary communication.",
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=700&q=80",
  ],
];

const integrations = [
  "Salesforce",
  "HubSpot",
  "Shopify",
  "WooCommerce",
  "Zoho",
  "Razorpay",
  "Stripe",
];

export default function WhatsAppAPIPage() {
  const [showRef, setShowRef] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (showRef) {
    return (
      <div className="api-reference-mode">
        <img src={assetPath("/assets/whatsapp-api/reference.png")} alt="WhatsApp API Reference Mockup" />
        <button onClick={() => setShowRef(false)}>CLOSE PREVIEW</button>
      </div>
    );
  }

  return (
    <main className="api-page-wrapper">
      {/* Floating Back Navigation Pill */}
      <Link href="/features" prefetch={true} className="api-back-pill" title="Back to Features Hub">
        <ArrowLeft size={16} />
        <span>Features</span>
      </Link>

      <div className="api-site">
        {/* Hero Section */}
        <section className="api-hero">
          <div className="api-hero-copy">
            <span className="api-eyebrow">
              WHATSAPP BUSINESS API <i />
            </span>
            <h1>
              Real Conversations.<br />
              Real Customers.<br />
              <em>Real Growth.</em>
            </h1>
            <p>
              Connect your business with customers through the Official WhatsApp API. Automate conversations, engage in real time and turn every message into an opportunity.
            </p>
            <div className="api-proof">
              <span>
                <MessageCircle size={20} />Official<br />
                <small>WhatsApp API</small>
              </span>
              <span>
                <ShieldCheck size={20} />Secure &amp;<br />
                <small>Reliable</small>
              </span>
              <span>
                <Globe2 size={20} />Global<br />
                <small>Coverage</small>
              </span>
            </div>
            <Link href="/contact" prefetch={true} className="api-primary">
              Get Started <ArrowRight size={16} />
            </Link>
          </div>

          <div className="api-hero-visual">
            <div className="api-orb">
              <MessageCircle size={72} />
            </div>
            <div className="api-phone">
              <div className="api-phone-head">
                ● Your Business <small>Online</small>
              </div>
              <div className="api-chat in">
                Hi 👋<br />
                I&apos;m interested in the Premium Plan.
              </div>
              <div className="api-chat out">
                Sure! Here are the details<br />
                of our Premium Plan.
              </div>
              <div className="api-product">
                <div className="api-house" />
                <b>Premium Plan</b>
                <small>
                  ✓ Advanced features<br />
                  ✓ Priority support<br />
                  ✓ 1 year access
                </small>
                <span>View Plan</span>
              </div>
              <div className="api-input">
                Type a message… <MessageCircle size={14} />
              </div>
            </div>
            <div className="api-float left">
              💬 <b>Got it!</b>
              <small>10:25 AM</small>
            </div>
            {[
              "New Lead +1",
              "Order Placed #ORD-4587",
              "Appointment Tomorrow 10:00 AM",
              "Payment Received ₹2,499",
            ].map((text, i) => (
              <div className="api-float right" key={i}>
                <span>▣</span> {text}
              </div>
            ))}
          </div>
        </section>

        {/* 01 / The Journey Section */}
        <section className="api-journey api-section">
          <div className="api-section-copy">
            <span className="api-eyebrow">
              01 / THE JOURNEY <i />
            </span>
            <h2>
              From a simple message<br />
              to <em>meaningful action.</em>
            </h2>
            <p>
              A customer&apos;s message is just the beginning. GRADIX WhatsApp API transforms it into structured data, automated workflows and real business results.
            </p>
            <Link href="/features" prefetch={true} className="api-ghost">
              Explore the Journey <ArrowRight size={15} />
            </Link>
          </div>

          <div className="api-journey-flow">
            {[
              ["01", "Customer Message", "Hi, I’d like to know about your services…"],
              ["02", "GRADIX API", "WhatsApp API"],
              ["03", "Automation Rules", "If message contains “plan” → Send info + CTA"],
              ["04", "Business Action", "New Lead · Appointment · Deal Closed"],
            ].map((s, i) => (
              <React.Fragment key={s[0]}>
                <div className={`api-flow-node n${i}`}>
                  <small>{s[0]}</small>
                  <div className="api-flow-card">
                    {i === 1 ? (
                      <strong>
                        G<br />
                        <small style={{ fontSize: 10, display: "block", color: "#6b817a" }}>GRADIX API</small>
                      </strong>
                    ) : i === 2 ? (
                      <>
                        <Code2 size={24} />
                        <b>{s[2]}</b>
                      </>
                    ) : i === 3 ? (
                      <>
                        <CheckCircle2 size={24} />
                        <b>{s[2]}</b>
                      </>
                    ) : (
                      <MessageCircle size={24} />
                    )}
                  </div>
                  <label>{s[1]}</label>
                </div>
                {i < 3 && <div className="api-connector">→</div>}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* 02 / More Than Messages Section */}
        <section className="api-events api-dark api-section">
          <div className="api-section-copy">
            <span className="api-eyebrow">
              02 / MORE THAN MESSAGES <i />
            </span>
            <h2>
              Messages →<br />
              <em>Business Events.</em>
            </h2>
            <p>
              Every message can trigger an action. Convert chats into leads, orders, appointments and more with powerful automation.
            </p>
            <Link href="/contact" prefetch={true} className="api-outline">
              Explore Features <ArrowRight size={15} />
            </Link>
          </div>

          <div className="api-event-demo">
            <div className="api-demo-chat">
              Hi! I’d like to book an appointment<br />
              <span>for a dental checkup.</span>
            </div>
            <div className="api-demo-action">
              Sure! Here are our available slots.
              <div className="api-slots">
                <b>Mon<br />23</b>
                <b>Tue<br />24</b>
                <b>Wed<br />25</b>
              </div>
              <button>Book Now →</button>
            </div>
          </div>

          <div className="api-event-list">
            {[
              ["Lead Generation", "Capture and qualify leads automatically.", Users],
              ["Order & Payments", "Track orders, send invoices, collect payments.", ShoppingCart],
              ["Appointments", "Book and manage appointments seamlessly.", CheckCircle2],
              ["Support Tickets", "Resolve issues faster with smart routing.", MessageCircle],
            ].map(([title, desc, IconComponent]: any, idx) => (
              <div key={idx}>
                <IconComponent />
                <span>
                  <b>{title}</b>
                  <small>{desc}</small>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 03 / Use Cases Section */}
        <section className="api-industries api-section">
          <div className="api-section-copy">
            <span className="api-eyebrow">
              03 / USE CASES <i />
            </span>
            <h2>
              Built for every<br />
              <em>industry.</em>
            </h2>
            <p>
              From real estate to healthcare, GRADIX WhatsApp API helps businesses across industries deliver better customer experiences.
            </p>
            <Link href="/contact" prefetch={true} className="api-ghost">
              Explore Use Cases <ArrowRight size={15} />
            </Link>
          </div>

          <div className="api-industry-row">
            {industries.map(([name, desc, img], idx) => (
              <article key={idx}>
                <img src={img} alt={name} loading="lazy" />
                <b>{name}</b>
                <p>{desc}</p>
              </article>
            ))}
            <button className="api-next" title="Next Industries" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </section>

        {/* 04 / How It Works Section */}
        <section className="api-how api-section">
          <div className="api-section-copy">
            <span className="api-eyebrow">
              04 / HOW IT WORKS <i />
            </span>
            <h2>
              Simple. Automated.<br />
              <em>Powerful.</em>
            </h2>
            <p>Integrate, configure and let your WhatsApp conversations work for you.</p>
            <Link href="/contact" prefetch={true} className="api-ghost">
              See How It Works <ArrowRight size={15} />
            </Link>
          </div>

          <div className="api-steps">
            {[
              ["1", "Connect", MessageCircle, "Integrate with the official WhatsApp API using simple documentation."],
              ["2", "Configure", Workflow, "Set up workflows, templates and automation rules."],
              ["3", "Engage", MessageCircle, "Start real-time conversations with your customers."],
              ["4", "Grow", BarChart3, "Track performance and scale your success."],
            ].map(([num, title, IconComponent, desc]: any, i) => (
              <React.Fragment key={num}>
                <div className="api-step">
                  <div>
                    <IconComponent size={26} />
                  </div>
                  <b>{num}. {title}</b>
                  <p>{desc}</p>
                </div>
                {i < 3 && <span>→</span>}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* 05 / Integrations Section */}
        <section className="api-integrations api-section">
          <div className="api-section-copy">
            <span className="api-eyebrow">
              05 / INTEGRATIONS <i />
            </span>
            <h2>
              Connect your tools.<br />
              <em>Work smarter.</em>
            </h2>
            <p>
              Integrate with your existing CRM, e-commerce, payment gateways and more—everything you need in one ecosystem.
            </p>
            <Link href="/integrations" prefetch={true} className="api-ghost">
              View All Integrations <ArrowRight size={15} />
            </Link>
          </div>

          <div className="api-integration-visual">
            <div className="api-core">
              <MessageCircle size={36} />
            </div>
            {integrations.map((tool, i) => (
              <div className={`api-logo l${i}`} key={tool}>
                {tool}
              </div>
            ))}
          </div>

          <pre>
            <span>// Example Integration</span>
            {`\nconst whatsapp = new Gradix({\n  apiKey: "your_api_key",\n  phoneNumberId: "123456789"\n});\n\nawait whatsapp.sendMessage({\n  to: "+919876543210",\n  message: "Hello from GRADIX!"\n});`}
          </pre>
        </section>

        {/* 06 / Global Impact Section */}
        <section className="api-global api-dark api-section">
          <div className="api-global-copy">
            <span className="api-eyebrow">
              06 / GLOBAL IMPACT <i />
            </span>
            <h2>
              Trusted by businesses<br />
              <em>worldwide.</em>
            </h2>
            <p>From startups to enterprises, GRADIX helps you stay connected with your customers — everywhere.</p>
          </div>

          <div className="api-stats">
            <div>
              <b>180+</b>
              <small>Countries</small>
            </div>
            <div>
              <b>99.9%</b>
              <small>Uptime</small>
            </div>
            <div>
              <b>60%</b>
              <small>Avg. Response Rate</small>
            </div>
            <div>
              <b>3.5x</b>
              <small>Higher Conversions</small>
            </div>
          </div>

          <div className="api-world">
            ◌<span>◌</span><i>WORLD</i>
          </div>
        </section>

        {/* CTA Section */}
        <section className="api-cta api-section">
          <div>
            <span className="api-eyebrow">
              READY TO GET STARTED <i />
            </span>
            <h2>
              Turn every conversation<br />
              into an <em>opportunity.</em>
            </h2>
            <p>Start your WhatsApp journey with GRADIX today and experience the power of real conversations.</p>
          </div>
          <Link href="/contact" prefetch={true} className="api-primary">
            Start Your Free Trial <ArrowRight size={16} />
          </Link>
          <div className="api-cta-orb">
            <MessageCircle size={64} />
          </div>
        </section>

        {/* Footer */}
        <footer className="api-footer">
          <b>G GRADIX</b>
          <span>© {new Date().getFullYear()} Gradix Technologies. All rights reserved.</span>
          <nav>
            <Link href="/privacy" prefetch={true}>Privacy Policy</Link>
            <Link href="/terms" prefetch={true}>Terms of Service</Link>
            <Link href="/contact" prefetch={true}>Contact</Link>
          </nav>
        </footer>

        {/* Reference Button */}
        <button className="api-reference-btn" onClick={() => setShowRef(true)}>
          REFERENCE
        </button>
      </div>
    </main>
  );
}
