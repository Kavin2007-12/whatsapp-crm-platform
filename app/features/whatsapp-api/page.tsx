"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { assetPath } from "@/lib/assets";
import "./whatsapp-api.css";

export default function WhatsAppAPIPage() {
  return (
    <div className="exact-container">
      {/* Floating Back Navigation Pill positioned below navbar & logo */}
      <Link
        href="/features"
        prefetch={true}
        className="api-back-pill"
        title="Back to Features Hub"
      >
        <ArrowLeft size={16} />
        <span>Features</span>
      </Link>

      <main className="exact-page" aria-label="GRADIX WhatsApp Business API">
        <img
          src={assetPath("/assets/whatsapp-api/whatsapp-api-reference.png")}
          alt="GRADIX WhatsApp Business API page"
          className="exact-artwork"
          draggable={false}
        />
      </main>
    </div>
  );
}
