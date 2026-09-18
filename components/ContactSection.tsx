"use client";

import React, { useState } from "react";
import { 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  Mail, 
  ShieldCheck 
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section className="py-14 bg-white border-t border-slate-200" id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-lg mx-auto space-y-1.5 mb-8">
          <span className="text-[10.5px] font-semibold text-emerald-700 uppercase tracking-wider">
            Contact & Support
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Let's start the conversation.
          </h2>
          <p className="text-slate-600 text-xs leading-relaxed">
            Chat directly with our engineering team on WhatsApp or request a live demo.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Left Column: Instant WhatsApp QR */}
          <div className="lg:col-span-5 bg-[#F8FAFC] rounded-xl border border-slate-200 p-4 sm:p-5 space-y-3.5 text-center">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[9.5px] font-semibold">
                <MessageSquare className="w-2.5 h-2.5 text-emerald-700" /> WhatsApp QR
              </div>
              <h3 className="text-xs sm:text-[13px] font-semibold text-slate-900">
                Scan or Click to Chat
              </h3>
              <p className="text-[10.5px] text-slate-500">
                Instant engineer response in under 15 minutes.
              </p>

              {/* QR Image */}
              <div className="w-36 h-36 mx-auto bg-white p-2 rounded-lg shadow-2xs flex items-center justify-center border border-slate-200">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://api.whatsapp.com/send?phone=919751811110%26text=Hello%20Gradix%20Connect"
                  alt="WhatsApp QR Code"
                  className="w-full h-full object-contain"
                />
              </div>

              <a
                href="https://api.whatsapp.com/send?phone=919751811110&text=Hello%20Gradix%20Connect%20Team,%20I%20want%20to%20get%20started%20with%20WhatsApp%20CRM"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full py-2 text-xs inline-flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                Chat (+91 97518 11110)
              </a>
            </div>

            <div className="pt-3 border-t border-slate-200 space-y-2 text-[11px] text-slate-600 text-left">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Response Time: <strong>Under 15 mins</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>support@gradixconnect.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
            {submitted ? (
              <div className="text-center py-8 space-y-2.5">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Thank you, {formData.name}!</h3>
                <p className="text-slate-600 text-xs max-w-xs mx-auto leading-relaxed">
                  We will contact you on <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary text-xs py-1.5 px-3 mt-1 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Request Walkthrough & Demo</h3>
                  <p className="text-slate-500 text-[11px] mt-0.5">Tell us about your team size and requirements.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Business Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Hospital / Luxe Store"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white text-xs"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Message / Requirements</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. 5 agents, Google Sheets sync, broadcasting..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white text-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-2 text-xs font-semibold cursor-pointer disabled:opacity-50 inline-flex items-center justify-center gap-1.5"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-3 h-3 fill-white" />
                      <span>Start Conversation</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
