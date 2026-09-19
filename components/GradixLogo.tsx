"use client";

import React from "react";
import Link from "next/link";
import { assetPath } from "@/lib/assets";

interface GradixLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  inverted?: boolean;
  className?: string;
  href?: string;
}

export default function GradixLogo({
  size = "md",
  inverted = false,
  className = "",
  href = "/",
}: GradixLogoProps) {
  const pixelHeightMap: Record<string, number> = {
    sm: 32,
    md: 40,
    lg: 52,
    xl: 68,
  };

  const targetHeight = pixelHeightMap[size] || 40;
  const rawLogo = inverted ? "/gradix-logo-white.png" : "/gradix-logo-exact.png";
  const logoSrc = assetPath(rawLogo);

  const content = (
    <div className={`inline-flex items-center select-none ${className}`} style={{ height: `${targetHeight}px`, maxHeight: `${targetHeight}px` }}>
      <img
        src={logoSrc}
        alt="Gradix Connect — AI WhatsApp CRM"
        style={{
          height: `${targetHeight}px`,
          maxHeight: `${targetHeight}px`,
          width: "auto",
          maxWidth: "260px",
          objectFit: "contain",
          display: "inline-block"
        }}
        className="w-auto object-contain shrink-0 drop-shadow-2xs transition-transform duration-150 group-hover:scale-[1.02]"
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} prefetch={true} className="inline-flex items-center group transition-opacity hover:opacity-95">
        {content}
      </Link>
    );
  }

  return content;
}
