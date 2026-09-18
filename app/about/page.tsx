import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  Lock, 
  Server, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function AboutPage() {
  const pillars = [
    {
      title: "Direct Meta Cloud API Architecture",
      desc: "Built directly upon Meta's official WhatsApp Business Cloud API infrastructure. Zero third-party intermediary servers, zero message throttling, and 99.99% uptime SLA.",
      icon: Server,
      color: "bg-blue-50 text-[#0066FF] border-blue-200"
    },
    {
      title: "Product-First Collaboration",
      desc: "Engineered specifically for teams managing high-volume WhatsApp conversations. Features multi-agent routing, collision detection, and private whisper notes.",
      icon: Users,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      title: "Enterprise Grade Security",
      desc: "End-to-end payload encryption with role-based access control (RBAC), audit logging, and strict data governance compliant with global privacy standards.",
      icon: Lock,
      color: "bg-purple-50 text-purple-700 border-purple-200"
    }
  ];

  return (
    <div className="w-full bg-[#FBFBFD] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4 pt-4 pb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold uppercase tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            ABOUT GRADIX CONNECT
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            We build the operating system for <span className="text-emerald-600">WhatsApp Commerce</span> & <span className="text-[#0066FF]">Support</span>.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Gradix Connect turns chaotic messaging threads into structured CRM pipelines, automated workflows, and measurable business growth.
          </p>
        </section>

        {/* Core Pillars Grid */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${p.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </section>

        {/* Technical Principles & Mission */}
        <section className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">ENGINEERING VALUES</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why we engineered Gradix Connect from the ground up
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              For modern businesses, WhatsApp is no longer just a casual chat application—it is the primary frontline for customer acquisition, order management, consultation, and ongoing retention.
            </p>
            <p>
              Traditional generic CRMs treat messaging as an afterthought. We designed Gradix Connect as a <strong>conversation-first CRM platform</strong> where contact profiles, lead statuses, agent ownership, and automated triggers live directly inside the conversation stream.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Official Meta Tech Provider Verified</span>
            </div>
            <Link href="/contact" prefetch={true} className="btn-primary text-xs py-2 px-4 rounded-xl inline-flex items-center gap-2">
              Get in Touch <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

