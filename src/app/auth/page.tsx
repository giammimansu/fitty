"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <>
      <Navbar variant="minimal" />

      <main className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 bg-grid-pattern">
        {/* Watermark */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-[0.03]">
          <span className="font-[var(--font-headline)] font-black text-[20vw] md:text-[30vw] leading-none select-none tracking-tighter">
            KINETIC
          </span>
        </div>

        <div className="w-full max-w-[440px] relative z-10">
          <AnimatedSection>
            {/* Auth Container */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 md:p-10 shadow-[0px_20px_40px_rgba(0,0,0,0.04)] rounded-lg">
              {/* Header */}
              <div className="mb-10 text-center">
                <h1 className="font-[var(--font-headline)] text-3xl font-bold tracking-tight text-primary mb-2">
                  ACCESS ENGINE
                </h1>
                <p className="text-on-surface-variant text-sm tracking-tight">
                  Sincronizza i tuoi dati biometrici con la rete di precisione
                  Fitty.
                </p>
              </div>

              {/* Toggle Tabs */}
              <div className="flex w-full bg-surface-container-low p-1 rounded-md mb-8">
                {(["login", "signup"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative flex-1 py-2.5 text-xs font-[var(--font-headline)] font-bold tracking-widest uppercase rounded-sm transition-all cursor-pointer ${
                      activeTab === tab
                        ? "text-primary"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute inset-0 bg-surface-container-lowest shadow-sm rounded-sm"
                        transition={{
                          type: "spring",
                          damping: 25,
                          stiffness: 200,
                        }}
                      />
                    )}
                    <span className="relative z-10">
                      {tab === "login" ? "Login" : "Crea Account"}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 200,
                  }}
                >
                  {/* Social Auth */}
                  <div className="space-y-3 mb-8">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.location.href = "http://localhost:8000/login"}
                      className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-highest text-primary border border-outline-variant/20 rounded-md font-[var(--font-headline)] text-sm font-bold tracking-tight hover:bg-surface-container transition-colors cursor-pointer"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      {activeTab === "login"
                        ? "CONTINUA CON GOOGLE"
                        : "REGISTRATI CON GOOGLE"}
                    </motion.button>
                  </div>

                  {/* Divider */}
                  <div className="relative flex items-center mb-8">
                    <div className="flex-grow border-t border-outline-variant/30" />
                    <span className="flex-shrink mx-4 text-[10px] font-[var(--font-headline)] font-bold tracking-widest text-on-surface-variant uppercase">
                      oppure via email
                    </span>
                    <div className="flex-grow border-t border-outline-variant/30" />
                  </div>

                  {/* Form */}
                  <form
                    className="space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    {/* Name (only for signup) */}
                    <AnimatePresence>
                      {activeTab === "signup" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 200,
                          }}
                        >
                          <label className="block text-[10px] font-[var(--font-headline)] font-bold tracking-widest text-on-surface-variant uppercase mb-2 ml-1">
                            Nome Completo
                          </label>
                          <input
                            type="text"
                            placeholder="Mario Rossi"
                            className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:ring-0 focus:border-primary px-4 py-3 rounded-md font-[var(--font-body)] text-sm placeholder:text-outline transition-all outline-none"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] font-[var(--font-headline)] font-bold tracking-widest text-on-surface-variant uppercase mb-2 ml-1">
                        Vettore Identità (Email)
                      </label>
                      <input
                        type="email"
                        placeholder="user@fitty.sys"
                        className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:ring-0 focus:border-primary px-4 py-3 rounded-md font-[var(--font-body)] text-sm placeholder:text-outline transition-all outline-none"
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <div className="flex justify-between items-center mb-2 ml-1">
                        <label className="block text-[10px] font-[var(--font-headline)] font-bold tracking-widest text-on-surface-variant uppercase">
                          Chiave d&apos;Accesso (Password)
                        </label>
                        {activeTab === "login" && (
                          <a
                            href="#"
                            className="text-[10px] font-[var(--font-headline)] font-bold tracking-widest text-primary hover:underline uppercase"
                          >
                            Forgot?
                          </a>
                        )}
                      </div>
                      <input
                        type="password"
                        placeholder="••••••••••••"
                        className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:ring-0 focus:border-primary px-4 py-3 rounded-md font-[var(--font-body)] text-sm placeholder:text-outline transition-all outline-none"
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      whileHover={{ scale: 1.01 }}
                      type="submit"
                      className="kinetic-gradient w-full py-4 text-on-primary font-[var(--font-headline)] font-bold tracking-[0.2em] uppercase text-sm rounded-md shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      {activeTab === "login"
                        ? "ENTRA NEL MOTORE"
                        : "CREA IL TUO PROFILO"}
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                        chevron_right
                      </span>
                    </motion.button>
                  </form>

                  {/* Footer Hint */}
                  <div className="mt-8 pt-6 border-t border-outline-variant/10 text-center">
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px] text-on-surface-variant">
                          fingerprint
                        </span>
                        <span className="text-[9px] font-[var(--font-headline)] font-medium tracking-widest text-on-surface-variant uppercase">
                          Biometric Ready
                        </span>
                      </div>
                      <div className="w-px h-3 bg-outline-variant/30" />
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px] text-on-surface-variant">
                          encrypted
                        </span>
                        <span className="text-[9px] font-[var(--font-headline)] font-medium tracking-widest text-on-surface-variant uppercase">
                          256-Bit Encrypted
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </AnimatedSection>

          {/* Bento Stats */}
          <AnimatedSection delay={0.3}>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white/40 backdrop-blur-md p-4 rounded-lg border border-white/50">
                <div className="font-[var(--font-headline)] text-[10px] font-bold tracking-widest text-on-surface-variant uppercase mb-1">
                  Global Users
                </div>
                <div className="font-[var(--font-headline)] text-xl font-bold text-primary">
                  128.4K
                </div>
                <div className="h-1 w-full bg-surface-container mt-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>

              <div className="bg-white/40 backdrop-blur-md p-4 rounded-lg border border-white/50">
                <div className="font-[var(--font-headline)] text-[10px] font-bold tracking-widest text-on-surface-variant uppercase mb-1">
                  Network Latency
                </div>
                <div className="font-[var(--font-headline)] text-xl font-bold text-primary">
                  14ms
                </div>
                <div className="flex items-end gap-1 mt-2">
                  {[1, 2, 3, 2, 1].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h * 4}px` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className={`w-1 ${
                        i < 4 ? "bg-primary" : "bg-outline-variant"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Background Decoration */}
        <div className="fixed bottom-0 right-0 w-1/3 h-1/2 opacity-[0.05] pointer-events-none -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-contain object-bottom"
            alt="Abstract precision technology pattern"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnrQBttbOO0wGp5QiGYYVG017KTir0--4TLl0xoivqbq52ftSaJPwVCNDjvCnEw8E0LnUJHe0RqBA9ld_gz2W3bSm5rwVwqAhkMxlu1MoB0DZ3Jy1oSTn9Zy-j10eQzOZM4OiIxToQ04STvfBlqL6WqHObyPvhwnvRjsr_t6HyQyCBzzEWEWzHSWy9U-vBTRu4feUiiIOiu5wFwXKSKWOsd3mOnBkX3bhklsMKMtEdjuXee_uIZEKnpYmc5akDlZ0O-s5uJwQ1-O8"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
