"use client";

import React from "react";
import Link from "next/link";
import { assetPath } from "@/lib/assets";

export default function GradixIndustriesSection() {
  return (
    <section className="gradix-industries">
      <div className="bg-grid"></div>
      <div className="glow glow-a"></div>
      <div className="glow glow-b"></div>

      <div className="top">
        <div className="brand-pill">
          <span className="brand-mark">✦</span>
          <b>GRADIX</b>
          <span className="divider"></span>
          <span>AI WHATSAPP CRM</span>
        </div>

        <div className="headline">
          <h2>
            Whatever you sell,<br />
            your customers are already<br />
            <span>on WhatsApp.</span>
          </h2>
          <p>
            Gradix brings your conversations, leads, team and payments<br className="desktop hidden md:inline" />
            together in one powerful WhatsApp CRM.
          </p>
        </div>

        <div className="global-art" aria-hidden="true">
          <div className="world">WORLD</div>
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="wa">⌕</div>
          <span className="flag f1">🇺🇸</span>
          <span className="flag f2">🇬🇧</span>
          <span className="flag f3">🇩🇪</span>
          <span className="flag f4">🇮🇳</span>
          <span className="flag f5">🇦🇪</span>
          <span className="flag f6">🇸🇬</span>
          <span className="flag f7">🇦🇺</span>
        </div>

        <div className="person">
          <img src={assetPath("/images/industries/woman.png")} alt="Gradix Team Lead" />
          <div className="chat">
            <div className="wa-mini">◔</div>
            <div className="bubble">Hi! I&apos;d like to know more<br />about your services.</div>
            <div className="bubble reply">Sure! How can I help you<br />today? 😊</div>
          </div>
          <div className="metric m1">↗ <b>More Leads</b></div>
          <div className="metric m2">ϟ <b>Faster Sales</b></div>
          <div className="metric m3">● <b>Happy Customers</b></div>
        </div>
      </div>

      <div className="industry-row">
        {/* Real Estate */}
        <article className="industry real">
          <img src={assetPath("/images/industries/real-estate.jpg")} alt="Real Estate" />
          <div className="card-body">
            <div className="icon">⌂</div>
            <div>
              <h3 className="industry-card-title">Real Estate</h3>
              <strong>Close deals, not just enquiries.</strong>
              <ul>
                <li>Property leads</li>
                <li>Site visits</li>
                <li>Agent follow-ups</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Education & EdTech */}
        <article className="industry edu">
          <img src={assetPath("/images/industries/education.jpg")} alt="Education & EdTech" />
          <div className="card-body">
            <div className="icon">◆</div>
            <div>
              <h3 className="industry-card-title">Education &amp; EdTech</h3>
              <strong>More students. Brighter futures.</strong>
              <ul>
                <li>Enquiries</li>
                <li>Admissions</li>
                <li>Fee collection</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Healthcare & Clinics */}
        <article className="industry health">
          <img src={assetPath("/images/industries/healthcare.jpg")} alt="Healthcare & Clinics" />
          <div className="card-body">
            <div className="icon">✚</div>
            <div>
              <h3 className="industry-card-title">Healthcare &amp; Clinics</h3>
              <strong>Better care, closer to you.</strong>
              <ul>
                <li>Appointments</li>
                <li>Reminders</li>
                <li>Patient communication</li>
              </ul>
            </div>
          </div>
        </article>

        {/* E-commerce & D2C */}
        <article className="industry shop">
          <img src={assetPath("/images/industries/ecommerce.jpg")} alt="E-commerce & D2C" />
          <div className="card-body">
            <div className="icon">▣</div>
            <div>
              <h3 className="industry-card-title">E-commerce &amp; D2C</h3>
              <strong>From clicks to deliveries.</strong>
              <ul>
                <li>Product enquiries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Travel & Tourism */}
        <article className="industry travel">
          <img src={assetPath("/images/industries/travel.jpg")} alt="Travel & Tourism" />
          <div className="card-body">
            <div className="icon">✈</div>
            <div>
              <h3 className="industry-card-title">Travel &amp; Tourism</h3>
              <strong>More bookings. More journeys.</strong>
              <ul>
                <li>Enquiries</li>
                <li>Quotes</li>
                <li>Bookings</li>
              </ul>
            </div>
          </div>
        </article>
      </div>

      <div className="cta-bar">
        <span className="arrow">↗</span>
        <b>Ready to turn your WhatsApp into a growth engine?</b>
        <Link href="/contact" prefetch={true}>
          Start Free Trial <span>→</span>
        </Link>
      </div>
    </section>
  );
}
