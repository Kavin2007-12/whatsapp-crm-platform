"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Sparkles,
  Zap,
  FileText,
  Lock,
  Send,
  CheckCheck,
  CheckCircle2,
  Flame,
  CreditCard,
  Smile,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  LucideIcon
} from "lucide-react";

interface PipelineStep {
  num: string;
  title: string;
  subtitle: string;
  tag: string;
  metric: string;
  icon: LucideIcon;
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    num: "01",
    title: "Customer Message Ingested",
    subtitle: "Official Meta Cloud API webhook captures customer inquiry with 0 latency.",
    tag: "Webhook Latency: 180ms",
    metric: "0.2s Ingest",
    icon: Zap
  },
  {
    num: "02",
    title: "AI Intent & Lead Scoring",
    subtitle: "Natural language engine instantly scores commercial intent at 94%.",
    tag: "Buying Intent: 94%",
    metric: "Hot Lead (94%)",
    icon: Flame
  },
  {
    num: "03",
    title: "Smart Routing & Collision Lock",
    subtitle: "Auto-assigned to sales rep with live collision lock and instant catalog reply.",
    tag: "Collision Risk: 0%",
    metric: "Locked to Arun",
    icon: Lock
  },
  {
    num: "04",
    title: "1-Tap UPI Settlement & Sync",
    subtitle: "Customer confirms, completes in-chat UPI payment, and data syncs immediately.",
    tag: "Revenue Reconciled",
    metric: "Instant Revenue",
    icon: CreditCard
  }
];

export default function WorkflowVisualizer() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isManualPause, setIsManualPause] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const STEP_DURATION = 2000; // 2000ms (2s) per pipeline step
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  // Bi-directional viewport detection: triggers every time user scrolls to this section
  // from above (scrolling down) or from below (scrolling up)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          // Restart loop fresh from Step 0 whenever entering viewport
          setActiveStep(0);
          setProgress(0);
          elapsedRef.current = 0;
          lastTimeRef.current = null;
          setIsManualPause(false);
        } else {
          lastTimeRef.current = null;
        }
      },
      {
        threshold: 0.15, // Triggers when 15% of section enters viewport
        rootMargin: "0px 0px -40px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // High-performance requestAnimationFrame loop:
  // ONLY runs when this section is in the user's viewport (both scrolling down or up)
  useEffect(() => {
    if (!isInView || isManualPause) {
      lastTimeRef.current = null;
      return;
    }

    let animationFrameId: number;

    const loop = (currentTime: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = currentTime;
      }
      const delta = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      elapsedRef.current = (elapsedRef.current + delta) % (STEP_DURATION * PIPELINE_STEPS.length);

      const currentStep = Math.floor(elapsedRef.current / STEP_DURATION);
      const stepProgress = ((elapsedRef.current % STEP_DURATION) / STEP_DURATION) * 100;

      setActiveStep(currentStep);
      setProgress(stepProgress);

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, isManualPause]);

  // Only stops/pauses when user explicitly clicks/selects a step.
  // Clicking the already selected step resumes immediately!
  const handleSelectStep = (idx: number) => {
    if (isManualPause && activeStep === idx) {
      // Toggle resume immediately
      setIsManualPause(false);
    } else {
      setIsManualPause(true);
      setActiveStep(idx);
      setProgress(100);
      elapsedRef.current = idx * STEP_DURATION;
    }
  };

  // Continuous laser position down the pipeline (0% to 100%)
  const totalPipelineProgress = ((activeStep + progress / 100) / (PIPELINE_STEPS.length - 1)) * 100;

  return (
    <section 
      ref={sectionRef}
      className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 border-t border-slate-200/80 relative overflow-hidden"
    >
      
      {/* Soft Ambient Brand Background Aura */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Compact Spacing */}
        <div className="text-center max-w-xl mx-auto space-y-1.5 mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>End-to-End Customer Journey</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-slate-900 tracking-tight">
            From message to revenue in 4 steps.
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-[12.5px] leading-snug">
            Experience how every incoming customer inquiry transforms into an organized lead, automated follow-up, and paid transaction with zero latency.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* UNIFIED PIPELINE & MOBILE STUDIO CANVAS                                   */}
        {/* ========================================================================= */}
        <div 
          className="bg-white/95 border border-slate-200/90 rounded-3xl p-4 sm:p-6 shadow-xl shadow-slate-200/50 backdrop-blur-sm relative overflow-hidden"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* ===================================================================== */}
            {/* LEFT COLUMN: THE FLOWING PIPELINE CONDUIT                             */}
            {/* ===================================================================== */}
            <div className="lg:col-span-7 relative pl-1 sm:pl-2">
              
              {/* Continuous Pipeline Base Rail Track */}
              <div className="absolute left-[23px] sm:left-[27px] top-6 bottom-6 w-[3px] bg-slate-100 rounded-full" />

              {/* Glowing Flowing Laser Beam Traveling Down the Pipeline */}
              <div 
                className="absolute left-[23px] sm:left-[27px] top-6 w-[3px] bg-gradient-to-b from-emerald-500 via-teal-400 to-emerald-500 rounded-full shadow-xs shadow-emerald-400 pointer-events-none"
                style={{
                  height: `${Math.min(totalPipelineProgress, 100) * 0.86}%`,
                  maxHeight: "calc(100% - 48px)"
                }}
              />

              {/* Flowing Pulse Head Particle */}
              <div 
                className="absolute left-[21.5px] sm:left-[25.5px] w-1.5 h-1.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/30 z-20 pointer-events-none"
                style={{
                  top: `calc(24px + ${Math.min(totalPipelineProgress, 100) * 0.86}% * (calc(100% - 48px) / 100))`
                }}
              />

              {/* 4 Connected Pipeline Stations */}
              <div className="space-y-3 relative z-10">
                {PIPELINE_STEPS.map((step, idx) => {
                  const isActive = activeStep === idx;
                  const isPassed = activeStep > idx;
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.num}
                      onClick={() => handleSelectStep(idx)}
                      className={`group flex items-start gap-3 sm:gap-3.5 cursor-pointer p-2.5 sm:p-3 rounded-2xl transition-all duration-200 border relative ${
                        isActive 
                          ? "bg-emerald-50/60 border-emerald-300 shadow-md shadow-emerald-500/10 translate-x-1 ring-2 ring-emerald-500/15" 
                          : isPassed
                          ? "bg-white/90 border-slate-200/80 hover:bg-slate-50/70"
                          : "bg-white/60 border-slate-200/60 hover:bg-white hover:border-slate-300 opacity-75 hover:opacity-100"
                      }`}
                    >
                      
                      {/* Pipeline Node Station */}
                      <div className="relative shrink-0 flex items-center justify-center mt-0.5">
                        <div className={`w-8.5 h-8.5 rounded-xl flex items-center justify-center transition-all duration-200 ${
                          isActive 
                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-105" 
                            : isPassed 
                            ? "bg-emerald-100 text-emerald-700" 
                            : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                        }`}>
                          {isPassed ? (
                            <CheckCheck className="w-4 h-4 text-emerald-700" />
                          ) : (
                            <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-500"}`} />
                          )}
                        </div>
                      </div>

                      {/* Station Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono font-bold text-slate-400">Step {step.num}</span>
                            <span className={`text-xs sm:text-[12.5px] font-bold transition-colors ${
                              isActive ? "text-slate-900 font-extrabold" : "text-slate-700 group-hover:text-slate-900"
                            }`}>
                              {step.title}
                            </span>
                          </div>
                          
                          <span className={`text-[9px] font-semibold px-2 py-0.2 rounded-full border shrink-0 ${
                            isActive 
                              ? "bg-emerald-100 text-emerald-800 border-emerald-300" 
                              : "bg-slate-50 text-slate-500 border-slate-200"
                          }`}>
                            {step.metric}
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-500 leading-snug">
                          {step.subtitle}
                        </p>

                        {/* Traveling Progress Indicator for Active Card */}
                        {isActive && (
                          <div className="mt-1.5 w-full bg-emerald-200/60 rounded-full h-1 overflow-hidden">
                            <div 
                              className="bg-emerald-600 h-full rounded-full"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        )}
                      </div>

                      {/* Laser Pointer connecting Station to Phone */}
                      {isActive && (
                        <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-gradient-to-r from-emerald-400 to-emerald-500 z-30 shadow-xs shadow-emerald-400" />
                      )}

                    </div>
                  );
                })}
              </div>

            </div>


            {/* ===================================================================== */}
            {/* RIGHT COLUMN: AUTHENTIC LIGHT THEME WHATSAPP SMARTPHONE               */}
            {/* ===================================================================== */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center">
              
              {/* iPhone Frame */}
              <div className="relative w-[255px] sm:w-[265px] bg-[#22272b] p-[3.5px] rounded-[42px] shadow-2xl shadow-slate-900/25 ring-1 ring-slate-400/30 border border-slate-600">

                {/* Inner Light Screen with Authentic WhatsApp Light Palette */}
                <div className="bg-[#efeae2] rounded-[38px] overflow-hidden border border-slate-400/40 h-[445px] flex flex-col relative text-slate-800 shadow-inner">
                  
                  {/* WhatsApp Native Top Bar (WhatsApp Green #008069) */}
                  <div className="bg-[#008069] pt-2 px-4 pb-2.5 z-30 shadow-md">
                    
                    {/* iOS Status Bar in WhatsApp Green */}
                    <div className="flex items-center justify-between text-[9.5px] text-white/95 font-medium select-none pb-2">
                      <span className="font-semibold text-[9.5px] tracking-tight">9:41</span>
                      
                      {/* Dynamic Island Pill */}
                      <div className="w-16 h-3 bg-black/80 rounded-full flex items-center justify-between px-1.5">
                        <div className="w-1 h-1 rounded-full bg-[#0a0d10]" />
                        <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                      </div>

                      <div className="flex items-center gap-1 text-[8.5px]">
                        <span>5G</span>
                        <div className="w-3.5 h-1.5 border border-white/80 rounded-[2px] p-[0.5px] flex items-center">
                          <div className="w-2 h-full bg-white rounded-[0.5px]" />
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Contact Header */}
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="relative shrink-0">
                          <div className="w-7 h-7 rounded-full bg-white text-[#008069] font-bold text-[10px] flex items-center justify-center shadow-xs border border-white/40">
                            GC
                          </div>
                          <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-1 ring-[#008069]" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="text-[11px] font-bold text-white truncate leading-tight">Gradix Enterprise</span>
                            <CheckCircle2 className="w-3 h-3 text-emerald-300 fill-white shrink-0" />
                          </div>
                          <div className="text-[8px] text-emerald-100 font-medium leading-none">
                            Verified Business Account
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 text-white/90">
                        <Video className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
                        <Phone className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
                        <MoreVertical className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
                      </div>
                    </div>

                  </div>

                  {/* =================================================================== */}
                  {/* AUTHENTIC WHATSAPP LIGHT WALLPAPER BACKGROUND (#EFEAE2 DOODLE TINT) */}
                  {/* =================================================================== */}
                  <div 
                    className="flex-1 p-2.5 overflow-y-auto space-y-2 relative flex flex-col justify-end"
                    style={{
                      backgroundColor: "#efeae2",
                      backgroundImage: `
                        radial-gradient(circle at 20px 20px, rgba(0, 0, 0, 0.04) 2%, transparent 0%),
                        radial-gradient(circle at 70px 70px, rgba(0, 0, 0, 0.04) 2%, transparent 0%)
                      `,
                      backgroundSize: "90px 90px"
                    }}
                  >
                    
                    {/* Security Notice Pill */}
                    <div className="bg-[#fff9c4]/90 border border-amber-300/70 rounded-lg p-1 text-center text-[7.5px] text-amber-900 leading-tight shadow-2xs mx-2">
                      🔒 Messages are end-to-end encrypted with Meta Cloud API.
                    </div>

                    {/* Step 1: Customer Incoming Message (White Bubble on Light Background) */}
                    <div className={`flex justify-start transition-transform duration-150 ${
                      activeStep === 0 ? "scale-[1.02] ring-2 ring-emerald-500/40 rounded-2xl rounded-tl-none" : ""
                    }`}>
                      <div className="max-w-[88%] bg-white text-slate-800 rounded-2xl rounded-tl-none p-2 text-[9.5px] shadow-sm border border-slate-200/80 space-y-0.5">
                        <p className="leading-relaxed font-normal">
                          Hi Gradix team! Can you share custom pricing for our 15-member sales team?
                        </p>
                        <div className="flex items-center justify-end gap-1 text-[7.5px] text-slate-400 pt-0.5">
                          <span>10:42 AM</span>
                        </div>
                      </div>
                    </div>

                    {/* Step 2+: AI Intent & Lead Scoring Badge */}
                    {activeStep >= 1 && (
                      <div className={`flex justify-center transition-transform duration-150 ${
                        activeStep === 1 ? "scale-105" : ""
                      }`}>
                        <div className="bg-amber-100/90 border border-amber-300 text-amber-900 px-2.5 py-0.5 rounded-full text-[8.5px] font-semibold flex items-center gap-1 shadow-2xs">
                          <Flame className="w-2.5 h-2.5 text-amber-600 fill-amber-500 animate-pulse" />
                          <span>AI Intent: <b>Hot Lead (94%)</b></span>
                        </div>
                      </div>
                    )}

                    {/* Step 3+: Rep Arun Assigned Lock & Fast Proposal Response */}
                    {activeStep >= 2 && (
                      <>
                        <div className={`flex justify-center transition-transform duration-150 ${
                          activeStep === 2 ? "scale-105" : ""
                        }`}>
                          <div className="bg-blue-50 border border-blue-200 text-blue-800 px-2 py-0.5 rounded-full text-[8px] font-semibold flex items-center gap-1 shadow-2xs">
                            <Lock className="w-2.5 h-2.5 text-blue-600" />
                            <span>Assigned to <b>Arun Patel</b> • Thread Locked</span>
                          </div>
                        </div>

                        {/* Team Outgoing WhatsApp Reply (Official WhatsApp Light Green Bubble #d9fdd3) */}
                        <div className={`flex justify-end transition-transform duration-150 ${
                          activeStep === 2 ? "scale-[1.02] ring-2 ring-emerald-500/50 rounded-2xl rounded-tr-none" : ""
                        }`}>
                          <div className="max-w-[88%] bg-[#d9fdd3] text-slate-900 rounded-2xl rounded-tr-none p-2 text-[9.5px] shadow-sm border border-[#c3f7bc] space-y-1.5">
                            
                            {/* Attached Catalog / Proposal Card */}
                            <div className="bg-white/90 rounded-lg p-1.5 flex items-center gap-1.5 border border-emerald-200/90 shadow-2xs">
                              <div className="w-6 h-6 rounded bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
                                <FileText className="w-3.5 h-3.5 text-rose-600" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="font-bold text-[8.5px] truncate text-slate-800">Gradix_Enterprise_Plan.pdf</div>
                                <div className="text-[7px] text-slate-500 font-medium">4.2 MB • Custom 15-Seat Tier</div>
                              </div>
                            </div>

                            <p className="leading-relaxed font-normal text-slate-800">
                              Hello! Here is our proposal. Complete team plan is ₹12,500/mo.
                            </p>
                            <div className="flex items-center justify-end gap-1 text-[7.5px] text-slate-500">
                              <span>10:42 AM</span>
                              <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Step 4: Customer Response & 1-Tap UPI In-Chat Settlement */}
                    {activeStep >= 3 && (
                      <>
                        {/* Customer Confirmation Bubble */}
                        <div className="flex justify-start">
                          <div className="max-w-[85%] bg-white text-slate-800 rounded-2xl rounded-tl-none p-1.5 text-[9px] shadow-sm border border-slate-200/80">
                            <p className="font-normal">Looks great! Completing UPI payment now.</p>
                            <div className="text-right text-[7px] text-slate-400 mt-0.5">10:42 AM</div>
                          </div>
                        </div>

                        {/* 1-Tap Instant UPI Settlement Card (WhatsApp Light Green Bubble) */}
                        <div className={`flex justify-end transition-transform duration-150 ${
                          activeStep === 3 ? "scale-[1.02] ring-2 ring-emerald-500 rounded-2xl rounded-tr-none" : ""
                        }`}>
                          <div className="max-w-[90%] bg-gradient-to-br from-[#d9fdd3] to-[#c7f8c0] text-slate-900 rounded-2xl rounded-tr-none p-2 text-[9.5px] shadow-md border border-emerald-300 space-y-1">
                            
                            <div className="flex items-center justify-between border-b border-emerald-300/80 pb-0.5">
                              <div className="flex items-center gap-1 font-bold text-[8.5px] text-emerald-800">
                                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 fill-emerald-100" />
                                <span>1-Tap UPI Settlement</span>
                              </div>
                              <span className="text-[7px] bg-emerald-600 text-white font-mono px-1.5 py-0.2 rounded font-bold">
                                SETTLED
                              </span>
                            </div>

                            <div className="flex items-center justify-between pt-0.5">
                              <span className="text-[8px] text-slate-600 font-medium">Total Paid:</span>
                              <span className="text-[11px] font-extrabold text-emerald-950">₹12,500.00</span>
                            </div>

                            <div className="text-[7px] text-slate-600 font-mono bg-white/80 p-1 rounded border border-emerald-200 flex items-center justify-between">
                              <span>Txn: #UPI-984210</span>
                              <span className="font-bold text-emerald-700">Google Pay</span>
                            </div>

                            <div className="flex items-center justify-end gap-1 text-[7px] text-slate-500 pt-0.5">
                              <span>10:43 AM</span>
                              <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                  </div>

                  {/* WhatsApp Light Theme Chat Input Bar */}
                  <div className="bg-[#f0f2f5] p-1.5 flex items-center gap-1.5 border-t border-slate-300/70">
                    <Smile className="w-4 h-4 text-slate-500 cursor-pointer" />
                    <Paperclip className="w-3.5 h-3.5 text-slate-500 cursor-pointer" />
                    
                    <div className="flex-1 bg-white rounded-full px-2.5 py-1 text-[8.5px] text-slate-400 flex items-center justify-between border border-slate-200">
                      <span>Message Arun...</span>
                      <Zap className="w-2.5 h-2.5 text-emerald-500" />
                    </div>

                    <div className="w-6 h-6 rounded-full bg-[#008069] flex items-center justify-center text-white shrink-0 shadow-2xs">
                      <Send className="w-2.5 h-2.5" />
                    </div>
                  </div>

                  {/* iPhone Bottom Home Bar */}
                  <div className="bg-[#f0f2f5] pb-1 pt-0.5 flex justify-center">
                    <div className="w-20 h-1 bg-slate-400 rounded-full" />
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
