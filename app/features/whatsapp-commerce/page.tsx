"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { assetPath } from "@/lib/assets";
import "./commerce.css";
import Commerce3D from "./Commerce3D";

const scenes = [
  ["01", "Product Discovery"],
  ["02", "Interactive Catalogue"],
  ["03", "Commerce Conversations"],
  ["04", "Quick Payments"],
  ["05", "Order & Delivery"],
  ["06", "Retargeting"],
  ["07", "Integrations"],
  ["08", "Grow with WhatsApp"],
];

export default function WhatsAppCommercePage() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      router.prefetch("/features");
    } catch {}
    setMounted(true);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(p);
      setActive(max ? Math.min(7, Math.floor(p * 8)) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [router]);

  const jump = (i: number) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: max * (i / 7), behavior: "smooth" });
  };

  return (
    <div className="page" aria-label="GRADIX WhatsApp Commerce">
      {/* Floating Back Navigation Pill to Features Hub */}
      <Link 
        href="/features" 
        prefetch={true} 
        onPointerDown={() => router.push("/features")}
        className="commerce-back-pill" 
        title="Return to features hub"
      >
        <ArrowLeft size={15} />
        <span>Features</span>
      </Link>

      <section className="pixel-stage">
        <picture>
          <source srcSet={assetPath("/assets/commerce/reference-2x.webp")} type="image/webp" />
          <source srcSet={assetPath("/assets/commerce/reference.webp")} type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath("/assets/commerce/reference.png")}
            className="reference"
            alt="GRADIX WhatsApp Commerce cinematic design"
            draggable="false"
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        {mounted && <Commerce3D progress={progress} />}

        <div className="cinematic-layer" aria-hidden="true">
          <div className="beam b1" />
          <div className="beam b2" />
          <div className="particle p1" />
          <div className="particle p2" />
        </div>

        {/* 8 Interactive Floating Scene Navigator Hotspots */}
        <div className="hotspots" role="tablist" aria-label="Commerce interactive scenes">
          {scenes.map(([num, label], index) => {
            const topPercent = 8 + (index * 84) / 7;
            return (
              <button
                key={num}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-label={`Jump to scene ${num}: ${label}`}
                className={active === index ? "active" : ""}
                style={{ top: `${topPercent}%` }}
                onClick={() => jump(index)}
              >
                <span>{num}</span>
              </button>
            );
          })}
        </div>

        <div className="motion-hint" aria-hidden="true">
          SCROLL TO EXPLORE <span>{scenes[active][1]}</span>
        </div>

        {/* Coded Interactive CTA Hotspots */}
        <Link
          href="/contact"
          prefetch={true}
          className="commerce-get-started-btn"
          style={{ left: "6.8%", top: "94.2%", width: "17.4%", height: "3.2%" }}
          title="Get started with WhatsApp Commerce"
        >
          <span>Get Started</span>
        </Link>
      </section>
    </div>
  );
}
