"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  Menu, 
  X, 
  ArrowRight
} from "lucide-react";
import GradixLogo from "@/components/GradixLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Main Glass Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-2"
            : "bg-white border-b border-slate-200/60 py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center">
            <GradixLogo size="md" href="/" />
          </div>

          {/* 5 Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1 rounded-full border border-slate-200/80 shadow-2xs">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  onPointerDown={() => router.push(link.href)}
                  className={`text-[12.5px] font-medium px-3.5 py-1 rounded-full transition-all ${
                    isActive
                      ? "bg-white text-slate-900 font-semibold shadow-xs border border-slate-200/80"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-200/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>



          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2.5 px-3.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-slate-100 text-slate-900 font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
}
