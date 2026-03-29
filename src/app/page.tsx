"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <>
      <Navbar variant="full" />

      <main className="pt-16">
        {/* ═══════════════════════════════════════════
            HERO SECTION
            ═══════════════════════════════════════════ */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 bg-surface-container-lowest overflow-hidden">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* Left — Copy */}
              <div className="w-full md:w-3/5">
                <AnimatedSection delay={0.1}>
                  <span className="inline-block bg-primary text-on-primary text-[10px] font-bold tracking-[0.2em] px-3 py-1 mb-8 font-[var(--font-headline)] uppercase">
                    Protocollo AI V.4.0
                  </span>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <h1 className="text-5xl sm:text-6xl md:text-8xl font-black font-[var(--font-headline)] text-primary leading-[0.9] tracking-tighter mb-8">
                    L&apos;ULTIMA SCHEDA CHE DOVRAI MAI SCARICARE.
                  </h1>
                </AnimatedSection>

                <AnimatedSection delay={0.35}>
                  <p className="text-lg md:text-2xl text-on-surface-variant font-[var(--font-body)] max-w-xl mb-12 leading-relaxed">
                    L&apos;AI che si allena con te. Dimentica i PDF statici. Entra nel
                    futuro della programmazione cinetica.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-primary text-on-primary px-8 md:px-10 py-4 md:py-5 font-[var(--font-headline)] font-black text-sm tracking-widest hover:opacity-90 transition-all rounded-md cursor-pointer"
                    >
                      INIZIA LA TUA TRASFORMAZIONE
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-surface-container-highest text-primary px-8 md:px-10 py-4 md:py-5 font-[var(--font-headline)] font-bold text-sm tracking-widest hover:bg-surface-container-high transition-all rounded-md cursor-pointer"
                    >
                      SCOPRI LA SCIENZA
                    </motion.button>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right — Athlete Image + HUD */}
              <AnimatedSection
                className="w-full md:w-2/5"
                delay={0.3}
                direction="right"
              >
                <div className="aspect-[3/4] bg-surface-container rounded-lg overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Athlete in motion"
                    className="w-full h-full object-cover grayscale contrast-125"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7rcWZ8pAnZec1G_XsG77XEmG0yHB7XKGwhXrJA6b1oJ9JV5UxcAUfQrNfE2ZxIhEYEFfdrat2OHeqkfYv6cSR8xSIERoaFQK8pyPQYvUT6cT58v5omqsVMAlRKO6X-NNnO-wPAGsNqz8JiZrgpnJ7ZHoCsdABPPsFI5dIExBJBzZiB7HwzLnxcBqA2n6Cy5I3cyQhZfBel1UcFzDH4jWnlomhoOctlg9PrO45x7OgzNjQdILwpgU4DbjeBY6UYLXxzBQvgNr_u4E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />

                  {/* HUD: Heart Rate */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      damping: 15,
                      stiffness: 120,
                      delay: 0.8,
                    }}
                    className="absolute top-6 left-6 glass-hud p-4 rounded-lg shadow-xl animate-float-pulse"
                  >
                    <p className="text-[10px] font-[var(--font-headline)] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      Heart Rate
                    </p>
                    <p className="text-2xl font-[var(--font-headline)] font-black text-primary animate-data-flicker">
                      145 BPM
                    </p>
                  </motion.div>

                  {/* HUD: Effort Load */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      damping: 15,
                      stiffness: 120,
                      delay: 1.0,
                    }}
                    className="absolute bottom-6 right-6 glass-hud p-4 rounded-lg shadow-xl text-right animate-float-pulse"
                    style={{ animationDelay: "2s" }}
                  >
                    <p className="text-[10px] font-[var(--font-headline)] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      Effort Load
                    </p>
                    <p className="text-2xl font-[var(--font-headline)] font-black text-primary animate-data-flicker">
                      89.4%
                    </p>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            BENTO COMPARISON SECTION
            ═══════════════════════════════════════════ */}
        <section className="py-24 md:py-32 px-6 md:px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-20 md:mb-24">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-[var(--font-headline)] text-primary mb-4 tracking-tight uppercase">
                Sincronizzazione Totale
              </h2>
              <div className="h-1 w-24 bg-primary mx-auto mb-6" />
              <p className="text-on-surface-variant font-[var(--font-body)] max-w-2xl mx-auto">
                Smetti di seguire un piano morto. Inizia a interagire con un
                ecosistema vivo che impara da ogni tua ripetizione.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Old Method */}
              <AnimatedSection direction="left" delay={0.1}>
                <div className="bg-surface-container p-8 md:p-12 rounded-xl flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] font-[var(--font-headline)] font-bold text-on-surface-variant tracking-[0.3em] uppercase mb-8 block">
                      Il Vecchio Metodo
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black font-[var(--font-headline)] text-primary mb-6">
                      APP STATICHE
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "PDF non interattivi e noiosi",
                        "Carichi fissi che non scalano",
                        "Nessuna analisi del recupero",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-on-surface-variant"
                        >
                          <span className="material-symbols-outlined text-sm">
                            close
                          </span>
                          <span className="font-[var(--font-body)] text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-12 h-28 md:h-32 bg-surface-container-high rounded-lg flex items-center justify-center">
                    <span className="text-[10px] font-[var(--font-headline)] font-bold text-outline uppercase tracking-widest">
                      SISTEMA OBSOLETO
                    </span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Fitty Kinetic */}
              <AnimatedSection direction="right" delay={0.2}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", damping: 20 }}
                  className="bg-primary p-8 md:p-12 rounded-xl flex flex-col justify-between text-on-primary shadow-2xl h-full"
                >
                  <div>
                    <span className="text-[10px] font-[var(--font-headline)] font-bold text-on-primary/60 tracking-[0.3em] uppercase mb-8 block">
                      Nuovo Standard
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black font-[var(--font-headline)] mb-6 text-white">
                      FITTY KINETIC
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Recalcolo AI in tempo reale",
                        "Progressione basata sulla RPE",
                        "Analisi biometrica predittiva",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-sm text-on-primary">
                            check_circle
                          </span>
                          <span className="font-[var(--font-body)] text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-12 h-28 md:h-32 bg-primary-container rounded-lg relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent)]" />
                    </div>
                    <span className="text-[10px] font-[var(--font-headline)] font-bold text-on-primary uppercase tracking-[0.4em] z-10">
                      MOTORE KINETICO ATTIVO
                    </span>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ADAPTIVE OVERLOAD SECTION
            ═══════════════════════════════════════════ */}
        <section className="py-24 md:py-32 px-6 md:px-8 bg-surface-container-lowest overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Left — Features */}
            <AnimatedSection className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black font-[var(--font-headline)] text-primary mb-8 tracking-tighter uppercase leading-none">
                RECALCOLO
                <br />
                COSTANTE.
              </h2>
              <p className="text-base md:text-lg text-on-surface-variant font-[var(--font-body)] mb-8 leading-relaxed">
                L&apos;algoritmo Fitty analizza la tua velocità di esecuzione e il
                tempo di recupero. Se la serie è troppo leggera, il sistema
                adatta il carico immediatamente.
              </p>
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    icon: "bolt",
                    title: "Overload Progressivo",
                    desc: "Ottimizzato per prevenire il plateau.",
                  },
                  {
                    icon: "query_stats",
                    title: "Velocità del Bilanciere",
                    desc: "Dati precisi per ogni singola rep.",
                  },
                ].map((feature) => (
                  <motion.div
                    key={feature.title}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-6 p-4 bg-surface rounded-lg border border-outline-variant/20 cursor-default"
                  >
                    <div className="w-12 h-12 bg-primary flex items-center justify-center rounded shrink-0">
                      <span className="material-symbols-outlined text-white">
                        {feature.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-[var(--font-headline)] font-bold text-sm uppercase">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-on-surface-variant font-[var(--font-body)]">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right — HUD Simulation */}
            <AnimatedSection
              className="w-full md:w-1/2 relative"
              direction="right"
              delay={0.2}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-white border border-outline-variant/20 p-6 md:p-8 rounded-xl shadow-2xl font-[var(--font-headline)]"
              >
                <div className="flex justify-between items-center mb-8 md:mb-10">
                  <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                    Session Analysis
                  </span>
                  <span className="text-[10px] font-bold text-error uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-error rounded-full animate-pulse" />
                    Live Syncing
                  </span>
                </div>

                <div className="flex items-end justify-between gap-4 mb-8 md:mb-12">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-on-surface-variant mb-1 uppercase">
                      Old Load
                    </span>
                    <div className="text-4xl md:text-5xl font-black text-outline tracking-tighter">
                      100.0
                      <span className="text-sm font-bold ml-1 uppercase">
                        kg
                      </span>
                    </div>
                  </div>
                  <div className="pb-2">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-primary">
                      trending_flat
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-xs font-bold text-primary mb-1 uppercase">
                      AI Recommended
                    </span>
                    <div className="text-5xl md:text-6xl font-black text-primary tracking-tighter">
                      102.5
                      <span className="text-sm font-bold ml-1 uppercase">
                        kg
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-1 bg-surface-container w-full rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                      className="h-full bg-primary"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span>Intensità Attuale</span>
                    <span>85% Max</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative technical lines */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-primary/10 pointer-events-none hidden md:block" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-primary/10 pointer-events-none hidden md:block" />
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            STATS SECTION
            ═══════════════════════════════════════════ */}
        <section className="py-24 md:py-32 px-6 md:px-8 bg-primary text-on-primary">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
              <AnimatedCounter
                end={1.2}
                suffix="M"
                decimals={1}
                label="Utenti Attivi"
              />
              <AnimatedCounter
                end={22}
                prefix="+"
                suffix="%"
                label="Forza Media"
              />
              <AnimatedCounter end={6} label="Settimane Plateau" />
              <AnimatedCounter
                end={98}
                suffix="%"
                label="Satisfaction"
              />
            </div>

            {/* Avatars */}
            <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAWU4ijW17i1mxaWMJkvABa16-TBcP2G7h89w-BgG2nxFcrgNamC178Ygzm4UB2suGTvh8grHTrW-whuv3oAhbSyW9sJ7mGoXT0huqwPt8ij5MYgvQmWdUJ8fnnv4joo9szvT5Q4IJSystNoI0hgEzm9stZOqlllxxOfxHwS2ImrVrIvtwgm0cqrRABBZM8elrR-Hzpevw2e81EwyQ7qiQYH4tVjIlIB1AxjJwPLRqqW7KQu16EKs3SYcKC0VK-soWSOUSijUtDn88",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBQd_MmMknMSeKYN7Jh66aWPjnY7d0fzwkLr8UE4yfNQEwsCT6oZiUNkzJ2yo4sxtEOQFBC_4L0MyKRTFKeOxN4viMH92irsGqYgI4oYMqqR6WFyth7EgbMsTq6LDA-zbnZhBboboH2qE6ivHZCXkII9TYUTSSXdyssb066dTrepre03OiBFnvN0CWueulU02o791xOlWfM-yL5EPfwwHXugdYnlzaxjw4cB4vX5F0Hv-zh1IrKButQ2og_n0vuvoapeOoHAygOSAs",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDpRTZP0c_jQG4Adutx8NKE6h8b6MUmw0FCgzJw-X1N9MAQRENQu4xgoRzSUtN-jWBr7pKAoyqtskKcoiyQg0pt530K3FlOaLky1rBw8K_pPerqmRQlNHylVizWWRFdWslNTT9jaMMO2FEILT9HbFRdXznO-RQo0KoGoEutPvhx9ehIIMJ6XoNd9n8ZPfJpmge7SbyTv7Iz3bf3kgGsF0-1ks5sAIoxZTuweneQtyskAgU_GiLaT_bKrZ6rl6MaucKFy8C87vHL5M0",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBOJct_2BsA8FwmyBb_lRs_2SIWmZclhw8uIc_PHPMv4QKnqpnqHKN6Ip4x8TkKCRiaEmki54RzvRSy2wWvbsPzqgF7SoPNiCBK_72VKM44in2wNOmRBPWxYKAhnEtdGHn0esk5bRzv0WPBlRITlhKo3Q-qlTI_BLXmHFMBbXTVgRHCO72LKuFX1q79wVyAgTe0EVYeMl9Mt6MrsLhZxFj1iH-xrrU67X_O-vv-Ig2KmXNvpCKQLiiDAneKST4ToYCLesQ72aMiZEk",
              ].map((src, i) => (
                <motion.img
                  key={i}
                  alt={`Utente ${i + 1}`}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white/20 grayscale object-cover"
                  src={src}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    damping: 15,
                    stiffness: 120,
                    delay: 0.1 * i,
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FINAL CTA SECTION
            ═══════════════════════════════════════════ */}
        <section className="py-32 md:py-48 px-6 md:px-8 bg-surface-container-lowest text-center overflow-hidden relative">
          {/* Background Watermark */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden select-none">
            <span className="text-[15rem] md:text-[20rem] font-black font-[var(--font-headline)] uppercase leading-none text-primary absolute -bottom-20 -left-20">
              FIT
            </span>
            <span className="text-[15rem] md:text-[20rem] font-black font-[var(--font-headline)] uppercase leading-none text-primary absolute -top-20 -right-20">
              TY
            </span>
          </div>

          <AnimatedSection className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black font-[var(--font-headline)] text-primary mb-12 tracking-tighter uppercase leading-[0.9]">
              NON ESSERE
              <br />
              SOLO UN ALTRO PDF.
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-on-primary px-10 md:px-16 py-6 md:py-8 font-[var(--font-headline)] font-black text-lg md:text-xl tracking-widest transition-transform rounded-md shadow-2xl cursor-pointer"
            >
              INIZIA LA TUA TRASFORMAZIONE
            </motion.button>
            <p className="mt-8 text-on-surface-variant font-[var(--font-headline)] font-bold text-xs tracking-widest uppercase">
              Piani a partire da €19/mese. Cancella quando vuoi.
            </p>
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </>
  );
}
