"use client";

import React, { useEffect, useState, useRef } from "react";
import { 
  MessageSquare, 
  Users, 
  Flame, 
  CheckCircle2,
  LucideIcon
} from "lucide-react";

interface CounterItem {
  target: number;
  label: string;
  sub: string;
  icon: LucideIcon;
  color: string;
  prefix?: string;
  suffix?: string;
}

const METRICS_DATA: CounterItem[] = [
  { 
    target: 12842, 
    label: "Messages Handled", 
    sub: "99.9% Delivered", 
    icon: MessageSquare, 
    color: "text-[#0066FF]" 
  },
  { 
    target: 1284, 
    label: "Active Chats", 
    sub: "Zero Chat Drop", 
    icon: Users, 
    color: "text-indigo-600" 
  },
  { 
    target: 342, 
    label: "Hot Leads Qualified", 
    sub: "Auto-Scored", 
    icon: Flame, 
    color: "text-amber-500" 
  },
  { 
    target: 86, 
    label: "Revenue Deals Won", 
    sub: "UPI & Card Payments", 
    icon: CheckCircle2, 
    color: "text-emerald-600" 
  }
];

function RollingNumber({ target, isVisible }: { target: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let animationFrameId: number;
    const duration = 1600; // 1.6s rolling animation
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth ease-out cubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, target]);

  return <span>{count.toLocaleString("en-US")}</span>;
}

export default function AnalyticsMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Re-triggers every single time user scrolls into view (both up and down)
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.2, // Triggers when 20% of the section is visible
        rootMargin: "0px 0px -40px 0px" 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-14 sm:py-16 bg-[#FAFAFA] border-t border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-lg mx-auto space-y-1.5 mb-10">
          <span className="text-[10.5px] font-semibold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 inline-block">
            Results
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-slate-900 tracking-tight">
            See your numbers grow.
          </h2>
          <p className="text-slate-600 text-xs sm:text-[13px]">
            Everything is tracked in real time from first message to final payment.
          </p>
        </div>

        {/* 4 Rolling Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {METRICS_DATA.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-slate-300 transition-all duration-300 space-y-2 group"
              >
                <div className={`w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center ${m.color} group-hover:scale-105 transition-transform`}>
                  <Icon className="w-4 h-4" />
                </div>

                {/* Rolling Number Display */}
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono">
                  <RollingNumber target={m.target} isVisible={isVisible} />
                </div>

                <div className="text-xs sm:text-[12.5px] font-semibold text-slate-700 leading-tight">
                  {m.label}
                </div>

                <div className="text-[10.5px] text-slate-400 font-medium">
                  {m.sub}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
