"use client";

import React, { useState } from "react";
import { 
  Users, 
  ShieldAlert, 
  Lock, 
  MessageSquare, 
  CheckCheck, 
  Sparkles, 
  UserCheck,
  Eye,
  AlertCircle
} from "lucide-react";

export default function TeamInboxShowcase() {
  const [activeAgentId, setActiveAgentId] = useState("arjun");

  const agents = [
    {
      id: "arjun",
      name: "Arjun Mehta",
      role: "Senior Sales Lead",
      avatarBg: "bg-blue-100 text-blue-800",
      activeChats: 8,
      resolvedToday: 24,
      avgReply: "38s",
      currentTask: "Closing Pro Suite deal with Apex Healthcare"
    },
    {
      id: "neha",
      name: "Neha Verma",
      role: "Customer Support Lead",
      avatarBg: "bg-emerald-100 text-emerald-800",
      activeChats: 5,
      resolvedToday: 36,
      avgReply: "24s",
      currentTask: "Assisting Kaveri Hospital with Google Sheets Sync"
    },
    {
      id: "vikram",
      name: "Vikram Rao",
      role: "Customer Success Lead",
      avatarBg: "bg-purple-100 text-purple-800",
      activeChats: 4,
      resolvedToday: 19,
      avgReply: "45s",
      currentTask: "Onboarding NexGen Motors Enterprise Fleet"
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">
            COLLABORATION & TEAMS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everyone stays in sync.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Collision protection, internal whisper notes, and round-robin assignment from a single WhatsApp number.
          </p>
        </div>

        {/* Multi-Agent Interface Layout */}
        <div className="max-w-5xl mx-auto bg-[#F8FAFC] rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Agent Selector Bar */}
          <div className="p-4 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {agents.map((ag) => {
                const isSelected = ag.id === activeAgentId;
                return (
                  <button
                    key={ag.id}
                    onClick={() => setActiveAgentId(ag.id)}
                    className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                      isSelected
                        ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full ${isSelected ? "bg-white/20 text-white" : ag.avatarBg} text-[10px] font-bold flex items-center justify-center`}>
                      {ag.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span>{ag.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? "bg-emerald-500 text-white" : "bg-emerald-100 text-emerald-800"}`}>
                      ● Online
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Collision Lock: <strong className="text-slate-900">Active</strong></span>
            </div>
          </div>

          {/* Collaborative Workspace Body */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: Real-Time Collision Protection Banner & Chat */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 space-y-4 shadow-xs">
              
              {/* Collision Alert Banner */}
              <div className="p-3 bg-amber-50 border border-amber-200/80 rounded-lg flex items-center gap-3 text-xs text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <div className="flex-1">
                  <strong>Agent Collision Shield:</strong> Neha is viewing this thread. Typing locked to prevent duplicate customer replies.
                </div>
                <span className="text-[10px] font-mono bg-amber-200/60 px-2 py-0.5 rounded font-bold">LOCKED</span>
              </div>

              {/* Chat Snapshot with Whisper Note */}
              <div className="space-y-3 bg-slate-50/70 p-4 rounded-xl border border-slate-100 text-xs">
                <div className="flex justify-start">
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 max-w-[85%] text-slate-800">
                    "Hi, we need to add 5 more doctors to our WhatsApp appointment routing."
                  </div>
                </div>

                {/* Yellow Whisper Note */}
                <div className="bg-amber-100/70 border border-amber-300 rounded-lg p-3 text-amber-950 text-xs space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-bold text-amber-900">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-amber-700" /> Internal Whisper Note (Private to Team)
                    </span>
                    <span>10:48 AM</span>
                  </div>
                  <p className="text-amber-900">
                    @Neha: I've checked their clinic volume. They are eligible for the Pro Tier upgrade discount.
                  </p>
                </div>

                <div className="flex justify-end">
                  <div className="bg-emerald-100/70 p-2.5 rounded-lg border border-emerald-200 max-w-[85%] text-slate-900">
                    "Sure Dr. Kaveri! I've provisioned the 5 additional doctor logins in your dashboard."
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Team Activity & Queue Distribution */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 shadow-xs">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Live Agent Telemetry</h4>
                
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <span className="text-slate-600">Active Conversations</span>
                    <strong className="text-slate-900">{agents.find(a => a.id === activeAgentId)?.activeChats} chats</strong>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <span className="text-slate-600">Resolved Today</span>
                    <strong className="text-emerald-700">{agents.find(a => a.id === activeAgentId)?.resolvedToday} closed</strong>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <span className="text-slate-600">Average First Response</span>
                    <strong className="text-blue-700">{agents.find(a => a.id === activeAgentId)?.avgReply}</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Current Assignment:</span>
                  <p className="mt-0.5 text-slate-600">{agents.find(a => a.id === activeAgentId)?.currentTask}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
