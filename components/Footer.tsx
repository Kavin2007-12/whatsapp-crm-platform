"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GradixLogo from "@/components/GradixLogo";
import { ShieldCheck, MessageSquare } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  if (
    pathname === "/features/whatsapp-crm" || 
    pathname?.startsWith("/features/integration") ||
    pathname?.startsWith("/features/customer-support") ||
    pathname?.startsWith("/features/support") ||
    pathname?.startsWith("/features/whatsapp-commerce") ||
    pathname?.startsWith("/features/commerce")
  ) {
    return null;
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-[#005AEB] text-blue-100 text-xs border-t border-blue-400/30 relative overflow-hidden">
      {/* Subtle brand ambient glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[250px] bg-white/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-blue-400/30">
          <div className="space-y-3 max-w-sm">
            <div className="brightness-0 invert">
              <GradixLogo size="md" href="/" />
            </div>
            <p className="text-xs text-blue-100 leading-relaxed">
              Official Meta WhatsApp Cloud API suite & CRM workspace for conversations, customers and growth.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/15 text-white text-[11px] font-medium border border-white/25 backdrop-blur-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-white" /> Official Meta Tech Provider
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-blue-100 hover:text-white transition-colors text-xs font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://api.whatsapp.com/send?phone=919751811110&text=Hello%20Gradix%20Connect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#005AEB] hover:bg-blue-50 transition-all text-xs font-bold shadow-md shadow-blue-900/20"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#005AEB]" /> WhatsApp Support
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
          <div>
            (c) {new Date().getFullYear()} Gradix Connect Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">Security Architecture</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Meta API Rate Guide</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Support Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
