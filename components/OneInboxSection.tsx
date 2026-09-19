"use client";

import React from "react";
import Image from "next/image";
import { assetPath } from "@/lib/assets";

interface ClientBrand {
  name: string;
  logo: string;
  aspect?: string;
  width?: number;
  height?: number;
}

const CLIENT_BRANDS: ClientBrand[] = [
  {
    name: "Shree Anandhaas",
    logo: "/images/clients/anandhaas.png",
    width: 140,
    height: 48,
  },
  {
    name: "Annai Bharath Housing",
    logo: "/images/clients/annai-bharath.png",
    width: 130,
    height: 52,
  },
  {
    name: "Apollo Computer Education",
    logo: "/images/clients/apollo.png",
    width: 135,
    height: 50,
  },
  {
    name: "Aswins Sweets & Snacks",
    logo: "/images/clients/aswins.png",
    width: 130,
    height: 46,
  },
  {
    name: "Beauty Wares",
    logo: "/images/clients/beauty-wares.png",
    width: 145,
    height: 44,
  },
  {
    name: "Best Money Gold",
    logo: "/images/clients/best-money-gold.png",
    width: 135,
    height: 46,
  },
];

export default function OneInboxSection() {
  // Repeat array twice to guarantee continuous seamless marquee loop
  const marqueeList = [...CLIENT_BRANDS, ...CLIENT_BRANDS, ...CLIENT_BRANDS, ...CLIENT_BRANDS];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#eaf6f0]/70 via-[#f4faf7]/50 to-white border-y border-slate-200/60 overflow-hidden relative">
      
      {/* Background Subtle Highlights */}
      <div className="absolute inset-0 bg-[radial-gradient(#25D366_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title matching user photo 2 */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-slate-700 tracking-tight">
            Trusted by over <span className="font-extrabold text-slate-900">4000+</span> clients across the world
          </h2>
        </div>

        {/* Marquee Wrapper with soft edge gradient fades */}
        <div className="relative w-full overflow-hidden mask-fade-edges py-2">
          
          {/* Left and Right Fade Gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#eef7f2] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#f5fbf8] to-transparent z-10" />

          {/* Continuous scrolling track from right to left */}
          <div className="flex items-center gap-5 sm:gap-6 animate-marquee-left">
            {marqueeList.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="flex-shrink-0 w-[200px] sm:w-[220px] h-[90px] sm:h-[98px] px-6 py-4 bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex items-center justify-center group cursor-pointer"
              >
                <div className="relative w-full h-full flex items-center justify-center filter grayscale contrast-[1.05] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src={assetPath(brand.logo)}
                    alt={brand.name}
                    width={brand.width || 130}
                    height={brand.height || 48}
                    className="max-h-[58px] w-auto object-contain select-none pointer-events-none"
                    priority={idx < 6}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
