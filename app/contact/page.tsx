import React from "react";
import ContactSection from "@/components/ContactSection";
import { MessageSquare, ShieldCheck, Clock, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Contact Section Component */}
      <ContactSection />

      {/* Global Support Information */}
      <section className="py-12 bg-slate-50 border-t border-slate-200 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Response Time SLA</h4>
            <p className="text-slate-600">
              Inquiries received on WhatsApp (+91 97518 11110) are responded to by a technical engineer in under 15 minutes.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0066FF] flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Direct Email Desk</h4>
            <p className="text-slate-600">
              For security compliance, custom MSA, or enterprise billing: <strong className="text-slate-900">support@gradixconnect.com</strong>
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Meta Partnership Verification</h4>
            <p className="text-slate-600">
              Gradix Connect is an official WhatsApp Business Cloud API Tech Provider. All data payloads are 256-bit encrypted.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


