"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  brandLogo: string;
  avatar: string;
  rating: number;
  highlight: string;
  review: string;
  statNumber: string;
  statLabel: string;
  tag: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "anandhaas",
    name: "Karthik Sundaram",
    role: "Head of Digital Operations",
    company: "Shree Anandhaas",
    brandLogo: "/images/clients/anandhaas.png",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    highlight: "3.4x surge in daily order fulfillment",
    review: "Gradix Connect transformed our customer desk. We route over 2,500 daily WhatsApp sweet & dining orders across branches with zero team collision and instant automated UPI confirmations.",
    statNumber: "3.4x",
    statLabel: "Faster Order Closures",
    tag: "Multi-Outlet Food & Retail"
  },
  {
    id: "annai",
    name: "R. Bharathi",
    role: "Managing Director",
    company: "Annai Bharath Housing",
    brandLogo: "/images/clients/annai-bharath.png",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    highlight: "Zero missed property inquiries",
    review: "Property buyers need instant site-visit brochures and trust. With Gradix, our 12 sales consultants manage incoming leads on 1 official WhatsApp number with auto Google Sheets sync and verified badges.",
    statNumber: "94%",
    statLabel: "Qualified Lead Rate",
    tag: "Real Estate & Construction"
  },
  {
    id: "apollo",
    name: "Dr. Arvind Raman",
    role: "Director of Admissions",
    company: "Apollo Computer Education",
    brandLogo: "/images/clients/apollo.png",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    highlight: "Automated student counseling in 10 seconds",
    review: "During admission season, thousands of students message asking for syllabus PDFs and course fees. Gradix auto-dispatches interactive course guides and locks admissions counselors seamlessly.",
    statNumber: "< 15s",
    statLabel: "Average First Response",
    tag: "Higher Education & Tech"
  },
  {
    id: "aswins",
    name: "Meera Krishnan",
    role: "Retail Customer Success Lead",
    company: "Aswins Sweets & Snacks",
    brandLogo: "/images/clients/aswins.png",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    highlight: "1-Tap UPI in WhatsApp skyrocketed festival sales",
    review: "The in-chat payment link and instant receipt generation eliminated checkout drop-offs completely. Festival gift orders doubled without hiring extra support staff.",
    statNumber: "2.1x",
    statLabel: "Festival Revenue Growth",
    tag: "E-Commerce & Food Brands"
  },
  {
    id: "beauty-wares",
    name: "Sanjay Mehta",
    role: "Chief Commercial Officer",
    company: "Beauty Wares",
    brandLogo: "/images/clients/beauty-wares.png",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    highlight: "Enterprise multi-agent routing done right",
    review: "Replacing disjointed business phones with a single verified Meta Cloud API CRM gave our leadership full transparency. Team collision went from daily headache to absolute zero.",
    statNumber: "100%",
    statLabel: "Collision-Free Support",
    tag: "Luxury Sanitaryware & Tiles"
  },
  {
    id: "best-money",
    name: "P. Vignesh",
    role: "Head of Customer Relations",
    company: "Best Money Gold",
    brandLogo: "/images/clients/best-money-gold.png",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    highlight: "Bank-grade encryption with Meta verified seal",
    review: "Security and instant verification are vital in gold valuation inquiries. The official green tick and encrypted cloud architecture built immediate trust with our 40,000+ branch patrons.",
    statNumber: "99.9%",
    statLabel: "Verified Trust Score",
    tag: "Gold Loans & Financial Services"
  }
];

export default function AutomationBuilder() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/70 to-white border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Background Soft Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Customer Stories & Feedback</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 tracking-tight">
            Loved by 4,000+ scaling businesses.
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
            Discover how leading enterprises, retail chains, and educational institutions scale WhatsApp revenue with Gradix Connect.
          </p>
        </div>

        {/* Featured Spotlight Feedback Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Quote & Story */}
            <div className="lg:col-span-8 space-y-5">
              
              {/* Top Meta Pill & Rating */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
                  {current.tag}
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug tracking-tight">
                “{current.highlight}”
              </h3>

              {/* Body Quote */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {current.review}
              </p>

              {/* Author & Verified Brand */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-emerald-500/20 shadow-xs relative bg-slate-100">
                    <img 
                      src={current.avatar} 
                      alt={current.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-slate-900">{current.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <div className="text-[11.5px] text-slate-500 font-medium">
                      {current.role} • <span className="font-semibold text-slate-700">{current.company}</span>
                    </div>
                  </div>
                </div>

                {/* Verified Brand Logo Card */}
                <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-200/80 flex items-center justify-center shrink-0">
                  <Image
                    src={current.brandLogo}
                    alt={current.company}
                    width={110}
                    height={38}
                    className="max-h-[32px] w-auto object-contain"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Key Result Metric Callout */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#eaf6f0] via-[#f2faf5] to-white rounded-2xl p-6 sm:p-7 border border-emerald-200/80 text-center flex flex-col justify-center items-center relative shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20 mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {current.statNumber}
              </div>

              <div className="text-xs sm:text-[13px] font-bold text-emerald-800 mt-1">
                {current.statLabel}
              </div>

              <p className="text-[11px] text-slate-500 mt-2 leading-tight">
                Verified performance milestone achieved via Gradix Meta Cloud API.
              </p>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 mt-5">
                <button
                  onClick={prevTestimonial}
                  className="w-8 h-8 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-2xs transition-colors cursor-pointer"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono text-slate-500 px-2 font-medium">
                  {activeIdx + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="w-8 h-8 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-2xs transition-colors cursor-pointer"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* 3 Quick Feedback Grid Cards Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {TESTIMONIALS.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer bg-white ${
                activeIdx === idx
                  ? "border-emerald-500 shadow-md shadow-emerald-500/5 ring-1 ring-emerald-400"
                  : "border-slate-200/80 hover:border-slate-300 hover:shadow-xs"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {item.statNumber}
                </span>
              </div>
              <p className="text-[11.5px] text-slate-600 line-clamp-3 leading-relaxed mb-3">
                "{item.review}"
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-slate-900 truncate">{item.name}</div>
                  <div className="text-[10px] text-slate-500 truncate">{item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
