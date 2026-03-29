"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  variant?: "full" | "minimal";
}

export default function Navbar({ variant = "full" }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Performance", href: "#performance" },
    { label: "Intelligence", href: "#intelligence" },
    { label: "Elite", href: "#elite" },
    { label: "Community", href: "#community" },
  ];

  if (variant === "minimal") {
    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl">
        <div className="flex justify-between items-center w-full px-6 py-5 max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-2xl font-black tracking-[0.1em] text-black font-[var(--font-headline)] uppercase"
          >
            FITTY
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-[var(--font-headline)] font-bold tracking-widest text-primary-container uppercase">
              System Status: Nominal
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-8 h-16 bg-[#f9f9f9]/80 backdrop-blur-xl">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-black uppercase font-[var(--font-headline)]"
        >
          FITTY
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-[var(--font-headline)] uppercase tracking-widest text-sm font-bold transition-opacity duration-200 ${
                i === 0
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-on-surface-variant hover:text-black"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/auth"
            className="bg-primary text-on-primary px-6 py-2 font-[var(--font-headline)] font-bold text-xs tracking-widest hover:opacity-70 transition-opacity duration-200 active:scale-95 uppercase hidden sm:inline-block"
          >
            GET STARTED
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-black origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-black"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-black origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Separator */}
      <div className="fixed top-16 left-0 w-full z-40 bg-surface-container h-px" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-16 left-0 w-full z-40 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-[var(--font-headline)] uppercase tracking-widest text-sm font-bold text-on-surface-variant hover:text-black transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/auth"
                className="bg-primary text-on-primary px-6 py-3 font-[var(--font-headline)] font-bold text-xs tracking-widest text-center uppercase mt-2"
              >
                GET STARTED
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
