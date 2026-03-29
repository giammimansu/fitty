"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   Types
   ───────────────────────────────────────────── */
type TrainingFocus = "strength" | "hypertrophy" | "endurance";
type Environment = "full_gym" | "home_gym" | "bodyweight";

interface OnboardingData {
  // Step 1 — Biometric
  age: string;
  weight: string;
  height: string;
  bodyFat: number;
  // Step 2 — Goals & Equipment
  focus: TrainingFocus | null;
  days: boolean[];
  environment: Environment | null;
  // Step 3 — Level & History
  experience: string;
  benchPress: string;
  squat: string;
  deadlift: string;
}

const DAYS = ["LUN", "MAR", "MER", "GIO", "VEN", "SAB", "DOM"];

const focusOptions: {
  key: TrainingFocus;
  title: string;
  desc: string;
  icon: string;
}[] = [
  {
    key: "strength",
    title: "FORZA",
    desc: "Massimizza la potenza ed efficienza del sistema nervoso.",
    icon: "fitness_center",
  },
  {
    key: "hypertrophy",
    title: "IPERTROFIA",
    desc: "Focus su volume muscolare e tensione meccanica.",
    icon: "target",
  },
  {
    key: "endurance",
    title: "RESISTENZA",
    desc: "Ottimizza la capacità aerobica e il recupero.",
    icon: "speed",
  },
];

const envOptions: {
  key: Environment;
  title: string;
  icon: string;
}[] = [
  { key: "full_gym", title: "Palestra", icon: "apartment" },
  { key: "home_gym", title: "Home Gym", icon: "home" },
  { key: "bodyweight", title: "Corpo Libero", icon: "person_check" },
];

/* ─────────────────────────────────────────────
   Page transition variants
   ───────────────────────────────────────────── */
const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const springTransition = {
  type: "spring" as const,
  damping: 25,
  stiffness: 200,
};

/* ═══════════════════════════════════════════════
   ONBOARDING PAGE
   ═══════════════════════════════════════════════ */
export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    age: "",
    weight: "",
    height: "",
    bodyFat: 15,
    focus: null,
    days: [true, false, true, false, true, false, false],
    environment: null,
    experience: "",
    benchPress: "",
    squat: "",
    deadlift: "",
  });

  const goNext = () => {
    if (step < 3) {
      setDirection(1);
      setStep(step + 1);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const toggleDay = (index: number) => {
    const newDays = [...data.days];
    newDays[index] = !newDays[index];
    setData({ ...data, days: newDays });
  };

  const progressWidth = `${(step / 3) * 100}%`;

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col">
      {/* ── Header ── */}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md">
        <div className="flex justify-between items-center px-6 h-16 max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter text-black font-[var(--font-headline)]"
          >
            FITTY
          </Link>
          <div className="flex items-center gap-3">
            <span className="font-[var(--font-headline)] uppercase tracking-widest text-sm font-bold text-on-surface-variant">
              STEP {String(step).padStart(2, "0")}/03
            </span>
            <span className="material-symbols-outlined text-black">
              account_circle
            </span>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-1 bg-surface-container">
          <motion.div
            className="h-full bg-primary"
            animate={{ width: progressWidth }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </header>

      {/* ── Background Patterns ── */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #c6c6c6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <div className="fixed top-0 right-0 w-1/2 h-full pointer-events-none z-0 bg-gradient-to-l from-surface-container-low/30 to-transparent" />

      {/* ── Main Content ── */}
      <main className="relative z-10 flex-grow pt-24 pb-32 px-4 sm:px-6">
        <AnimatePresence mode="wait" custom={direction}>
          {step === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={springTransition}
            >
              <Step1Biometric data={data} setData={setData} />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={springTransition}
            >
              <Step2Goals
                data={data}
                setData={setData}
                toggleDay={toggleDay}
              />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div
              key="step3"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={springTransition}
            >
              <Step3Level data={data} setData={setData} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* ── Navigation Footer ── */}
      <footer className="fixed bottom-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-t border-outline-variant/10">
        <div className="max-w-2xl mx-auto flex justify-between items-center h-20 px-6">
          {step > 1 ? (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={goBack}
              className="flex items-center gap-2 font-[var(--font-headline)] text-xs font-bold tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors group cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">
                arrow_back
              </span>
              Indietro
            </motion.button>
          ) : (
            <Link
              href="/auth"
              className="flex items-center gap-2 font-[var(--font-headline)] text-xs font-bold tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors group"
            >
              <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">
                arrow_back
              </span>
              Auth
            </Link>
          )}

          {step < 3 ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={goNext}
              className="flex items-center gap-3 kinetic-gradient px-8 py-3.5 rounded-sm text-on-primary font-[var(--font-headline)] text-sm font-bold tracking-widest uppercase shadow-xl transition-all cursor-pointer"
            >
              Continua
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 kinetic-gradient px-8 py-3.5 rounded-sm text-on-primary font-[var(--font-headline)] text-sm font-bold tracking-widest uppercase shadow-xl transition-all cursor-pointer"
            >
              Genera il Mio Cervello
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </motion.button>
          )}
        </div>
      </footer>

      {/* ── HUD Footer Decorations ── */}
      <div className="fixed bottom-24 left-6 hidden lg:flex items-center gap-4 opacity-20 pointer-events-none z-40">
        <div className="w-px h-12 bg-outline-variant" />
        <div className="font-[var(--font-headline)] text-[9px] font-bold tracking-tighter">
          <p>LATENCY: 14MS</p>
          <p>SYNC_ID: FT_992_X</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP 1: BIOMETRIC PROFILE
   ═══════════════════════════════════════════════ */
function Step1Biometric({
  data,
  setData,
}: {
  data: OnboardingData;
  setData: (d: OnboardingData) => void;
}) {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left — Hero Text + Visual */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="inline-block py-1 px-3 bg-primary-container text-on-primary text-[10px] font-[var(--font-headline)] tracking-widest uppercase mb-4">
              Calibrazione Iniziale
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-[var(--font-headline)] font-bold text-black leading-none tracking-tighter mb-6 uppercase">
              Profilo
              <br />
              Biometrico
            </h1>
            <p className="text-on-surface-variant max-w-md leading-relaxed">
              Per ingegnerizzare il tuo protocollo di performance personalizzato,
              servono i tuoi dati fisiologici di base. La precisione genera
              progresso.
            </p>
          </div>

          {/* Visual Asset */}
          <div className="relative group aspect-square w-full max-w-sm overflow-hidden bg-surface-container-low rounded-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="object-cover w-full h-full opacity-60 grayscale group-hover:scale-105 transition-transform duration-700"
              alt="Abstract architectural precision"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsXLi1OTKTIs69s7aJI4d4di5JRKTDFFrQgVBDG5fkJ5JVoLhaMlTcuHhlKUV5DtM2yc62iJ0lHT-IBglmkQ9gmZrGO2WjsYyZPxNeOEBMAXkYiV3rZi3f_iz9ePsehCEpjHuBp2cUNO3MEKy_mLacbKKxRGGLUaTzMohHSXlcbA2rJZD3qb-GYi0rm-2v0OFNFaus7MARNInDEkhyTYA8J5KnQxlA4hFqiYRDzLSMXEH15tqFn6OycuDgB3xJ5_1wWT93RhUCcUQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-end gap-2 font-[var(--font-headline)] text-black">
                <span className="text-4xl font-bold">0.00</span>
                <span className="text-sm font-medium pb-1 uppercase tracking-widest">
                  Baseline
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 md:p-12 shadow-[0px_20px_40px_rgba(0,0,0,0.04)] rounded-xl relative overflow-hidden">
          {/* HUD Glass Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-surface-container-low/80 backdrop-blur-xl rotate-45 translate-x-16 -translate-y-16 pointer-events-none" />

          <div className="space-y-8 md:space-y-10 relative z-10">
            {/* Age & Weight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-3">
                <label className="block font-[var(--font-headline)] text-xs font-bold tracking-widest uppercase text-on-surface-variant">
                  Età
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="24"
                    value={data.age}
                    onChange={(e) => setData({ ...data, age: e.target.value })}
                    className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-md p-4 font-[var(--font-headline)] text-2xl font-bold transition-all placeholder:text-outline-variant outline-none"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-[var(--font-headline)] text-xs text-outline font-bold">
                    ANNI
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <label className="block font-[var(--font-headline)] text-xs font-bold tracking-widest uppercase text-on-surface-variant">
                  Peso
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="75.0"
                    value={data.weight}
                    onChange={(e) =>
                      setData({ ...data, weight: e.target.value })
                    }
                    className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-md p-4 font-[var(--font-headline)] text-2xl font-bold transition-all placeholder:text-outline-variant outline-none"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-[var(--font-headline)] text-xs text-outline font-bold">
                    KG
                  </span>
                </div>
              </div>
            </div>

            {/* Height */}
            <div className="space-y-3">
              <label className="block font-[var(--font-headline)] text-xs font-bold tracking-widest uppercase text-on-surface-variant">
                Altezza
              </label>
              <div className="relative">
                <input
                  type="number"
                  placeholder="180"
                  value={data.height}
                  onChange={(e) =>
                    setData({ ...data, height: e.target.value })
                  }
                  className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-md p-4 font-[var(--font-headline)] text-2xl font-bold transition-all placeholder:text-outline-variant outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-[var(--font-headline)] text-xs text-outline font-bold">
                  CM
                </span>
              </div>
            </div>

            {/* Body Fat Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block font-[var(--font-headline)] text-xs font-bold tracking-widest uppercase text-on-surface-variant">
                  Grasso Corporeo %
                </label>
                <span className="font-[var(--font-headline)] text-3xl font-bold text-black">
                  {data.bodyFat}
                  <span className="text-sm ml-1">%</span>
                </span>
              </div>
              <div className="relative">
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    animate={{
                      width: `${((data.bodyFat - 5) / 35) * 100}%`,
                    }}
                    transition={{ duration: 0.15 }}
                  />
                </div>
                <input
                  type="range"
                  min={5}
                  max={40}
                  value={data.bodyFat}
                  onChange={(e) =>
                    setData({ ...data, bodyFat: Number(e.target.value) })
                  }
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <div className="flex justify-between font-[var(--font-headline)] text-[10px] text-outline font-bold uppercase tracking-tighter">
                <span>Lean (5%)</span>
                <span>Athletic</span>
                <span>Average</span>
                <span>High (40%)</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex-1 kinetic-gradient text-on-primary font-[var(--font-headline)] font-bold uppercase tracking-widest py-4 rounded-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                Fase Successiva
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-8 bg-surface-container-highest text-on-surface font-[var(--font-headline)] font-bold uppercase tracking-widest py-4 rounded-md cursor-pointer"
              >
                Salta
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP 2: GOALS & EQUIPMENT
   ═══════════════════════════════════════════════ */
function Step2Goals({
  data,
  setData,
  toggleDay,
}: {
  data: OnboardingData;
  setData: (d: OnboardingData) => void;
  toggleDay: (i: number) => void;
}) {
  return (
    <div className="max-w-2xl mx-auto w-full">
      {/* Training Focus */}
      <section className="mb-10 md:mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-1 w-8 bg-primary" />
          <h2 className="font-[var(--font-headline)] text-xl md:text-2xl font-bold uppercase tracking-tight text-primary">
            Focus Allenamento
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {focusOptions.map((opt) => {
            const active = data.focus === opt.key;
            return (
              <motion.button
                key={opt.key}
                whileTap={{ scale: 0.98 }}
                onClick={() => setData({ ...data, focus: opt.key })}
                className={`group flex items-center justify-between p-5 md:p-6 text-left transition-all duration-200 cursor-pointer ${
                  active
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-lowest border border-outline-variant/15 hover:border-primary"
                }`}
              >
                <div>
                  <h3 className="font-[var(--font-headline)] text-base md:text-lg font-bold">
                    {opt.title}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      active ? "opacity-80" : "text-on-surface-variant"
                    }`}
                  >
                    {opt.desc}
                  </p>
                </div>
                <span
                  className={`material-symbols-outlined text-2xl shrink-0 ml-4 ${
                    active
                      ? ""
                      : "text-on-surface-variant group-hover:text-primary"
                  }`}
                  style={
                    active
                      ? { fontVariationSettings: "'FILL' 1" }
                      : undefined
                  }
                >
                  {opt.icon}
                </span>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Weekly Commit */}
      <section className="mb-10 md:mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-1 w-8 bg-primary" />
          <h2 className="font-[var(--font-headline)] text-xl md:text-2xl font-bold uppercase tracking-tight text-primary">
            Impegno Settimanale
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {DAYS.map((day, i) => (
            <motion.button
              key={day}
              whileTap={{ scale: 0.9 }}
              onClick={() => toggleDay(i)}
              className={`flex-1 min-w-[55px] h-12 flex items-center justify-center font-[var(--font-headline)] text-xs font-bold transition-colors cursor-pointer ${
                data.days[i]
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-highest"
              }`}
            >
              {day}
            </motion.button>
          ))}
        </div>
        <p className="mt-3 text-[10px] font-[var(--font-headline)] uppercase tracking-widest text-on-surface-variant/60">
          Seleziona i giorni disponibili per l&apos;allenamento
        </p>
      </section>

      {/* Environment */}
      <section className="mb-10 md:mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-1 w-8 bg-primary" />
          <h2 className="font-[var(--font-headline)] text-xl md:text-2xl font-bold uppercase tracking-tight text-primary">
            Ambiente
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {envOptions.map((opt) => {
            const active = data.environment === opt.key;
            return (
              <motion.button
                key={opt.key}
                whileTap={{ scale: 0.95 }}
                onClick={() => setData({ ...data, environment: opt.key })}
                className={`aspect-square flex flex-col items-center justify-center gap-3 p-4 transition-all cursor-pointer ${
                  active
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-lowest border border-outline-variant/15 hover:border-primary group"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-3xl ${
                    active
                      ? ""
                      : "text-on-surface-variant group-hover:text-primary"
                  }`}
                >
                  {opt.icon}
                </span>
                <span className="font-[var(--font-headline)] text-[10px] font-bold tracking-widest uppercase">
                  {opt.title}
                </span>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Contextual Image */}
      <div className="relative w-full aspect-video bg-surface-container overflow-hidden rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="High performance gym equipment"
          className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgDhU4qsiqDk_ummNTpmYvtACnQ-hbaYEOG3h4csCYcvJ8kJ8LKGEbJBgHkbIxwbf18vaOXBtFti7OvjwsBhQ6isPfG_YWL9nTrtHh0VTCOg34UsZwTOMasmKXHtQO0BxDRK6jn4J5XvMfzFSP_Uf9AiVHSlezh3PyuZWI1DGhD0ed9fUTreZNlU6K3CD71P1BUMxS_gOyZnUYnR0f-TRe0Ye0ntlcaCnSv4-AiIlsDv4Xr8TruWsBsl7-hvF2ol8m8cts4UES4Mo"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6">
          <span className="bg-primary px-3 py-1 font-[var(--font-headline)] text-[10px] font-bold text-on-primary tracking-widest uppercase">
            Sistema Pronto
          </span>
          <p className="text-xs text-on-surface-variant mt-2 max-w-[220px]">
            Gli algoritmi si calibreranno sulle tue selezioni per massima
            efficienza biometrica.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP 3: LEVEL & HISTORY
   ═══════════════════════════════════════════════ */
function Step3Level({
  data,
  setData,
}: {
  data: OnboardingData;
  setData: (d: OnboardingData) => void;
}) {
  const liftCards: {
    label: string;
    icon: string;
    tag: string;
    field: "benchPress" | "squat" | "deadlift";
  }[] = [
    {
      label: "Panca Piana",
      icon: "fitness_center",
      tag: "DATA_PT_01",
      field: "benchPress",
    },
    {
      label: "Back Squat",
      icon: "weight",
      tag: "DATA_PT_02",
      field: "squat",
    },
    {
      label: "Stacco da Terra",
      icon: "bolt",
      tag: "DATA_PT_03",
      field: "deadlift",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto w-full">
      {/* Header */}
      <section className="mb-10 md:mb-12">
        <h1 className="font-[var(--font-headline)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-2">
          PERFORMANCE INGEGNERIZZATA
        </h1>
        <p className="text-on-surface-variant text-sm max-w-md">
          Inserisci le tue metriche storiche per calibrare la Rete Neurale Fitty
          per il tuo profilo di forza specifico.
        </p>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Cumulative Experience */}
        <div className="md:col-span-2 bg-surface-container-lowest p-6 md:p-8 rounded-lg border border-outline-variant/15">
          <label className="block font-[var(--font-headline)] text-xs font-bold tracking-widest text-on-surface-variant mb-6 uppercase">
            Esperienza Cumulativa
          </label>
          <div className="flex items-end gap-4">
            <input
              type="number"
              placeholder="0"
              value={data.experience}
              onChange={(e) =>
                setData({ ...data, experience: e.target.value })
              }
              className="w-24 bg-surface-container-low border-0 border-b-2 border-primary focus:ring-0 text-4xl md:text-5xl font-[var(--font-headline)] font-bold p-0 pb-1 text-primary outline-none"
            />
            <span className="font-[var(--font-headline)] text-lg md:text-xl font-bold text-on-surface-variant mb-2">
              ANNI
            </span>
          </div>
        </div>

        {/* 1RM Section Title */}
        <div className="md:col-span-2 mt-2">
          <h3 className="font-[var(--font-headline)] text-xs font-bold tracking-widest text-on-surface-variant uppercase">
            1RM Stimato (Opzionale)
          </h3>
        </div>

        {/* Lift Cards */}
        {liftCards.map((card) => (
          <div
            key={card.field}
            className="bg-surface-container-lowest p-5 md:p-6 rounded-lg flex flex-col justify-between transition-all"
          >
            <div className="flex justify-between items-start mb-6 md:mb-8">
              <span className="material-symbols-outlined text-primary">
                {card.icon}
              </span>
              <span className="bg-primary-container text-on-primary-container font-[var(--font-headline)] text-[10px] px-2 py-0.5 tracking-tighter">
                {card.tag}
              </span>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-on-surface-variant mb-1 uppercase">
                {card.label}
              </label>
              <div className="flex items-baseline gap-2">
                <input
                  type="number"
                  placeholder="---"
                  value={data[card.field]}
                  onChange={(e) =>
                    setData({ ...data, [card.field]: e.target.value })
                  }
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-2xl md:text-3xl font-[var(--font-headline)] font-bold p-0 pb-1 outline-none"
                />
                <span className="font-[var(--font-headline)] text-sm font-bold text-outline">
                  KG
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Neural Sync Pending */}
        <div className="bg-surface-container p-6 rounded-lg flex flex-col items-center justify-center relative overflow-hidden min-h-[180px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Athletic preparation"
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8e2knbIxrx-8IeAU0KpCRgAboAycrFqK-A04TEWxsbCZUdcYi26hpN_2lN97T8nyHE5k8hVrxmtCkaHpO79cdX3GmRGcnK8hhjY9Y5wLtaMhKlDqmILO8Ui1nwjE6sNBXxhC2Fg2R7-FIYcWRuBJmbHBPjloR-t9j0k4cSdCBz0BiqUTRlvQI2W74cNq3SNoNwQasOFSZd-kLNiv738zfzaT-JgGPR_i1VXk80s9ATNOHU_KSh1fLyMasdRNESPYqRvIhBA1F-7I"
          />
          <div className="relative z-10 text-center">
            <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center mb-4 mx-auto">
              <span className="material-symbols-outlined text-primary animate-pulse">
                hub
              </span>
            </div>
            <span className="font-[var(--font-headline)] text-[10px] font-bold tracking-widest text-primary uppercase">
              Sincronizzazione Neurale in Attesa
            </span>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-10 md:mt-12 flex flex-col items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 kinetic-gradient text-on-primary font-[var(--font-headline)] font-bold tracking-[0.2em] rounded-md flex items-center justify-center gap-3 cursor-pointer"
        >
          GENERA IL MIO CERVELLO
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </motion.button>
        <p className="text-[10px] text-on-surface-variant text-center leading-relaxed">
          SINCRONIZZANDO, ACCETTI I NOSTRI{" "}
          <span className="text-primary font-bold underline cursor-pointer">
            PROTOCOLLI DI PERFORMANCE
          </span>{" "}
          E GLI{" "}
          <span className="text-primary font-bold underline cursor-pointer">
            STANDARD PRIVACY
          </span>
          .
        </p>
      </div>
    </div>
  );
}
