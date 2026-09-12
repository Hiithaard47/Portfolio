"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { CyclingHeading } from "@/components/CyclingHeading";
import { ProjectRail } from "@/components/ProjectRail";
import { Capabilities } from "@/components/Capabilities";
import { OperatingPrinciples } from "@/components/OperatingPrinciples";
import { Footer } from "@/components/Footer";

export default function Home() {
  // 0: Cold Start | 1: Spinning | 2: Success | 3: Render App
  const [bootPhase, setBootPhase] = useState(0);
  const [spinnerFrame, setSpinnerFrame] = useState(0);
  const spinnerChars = ["|", "/", "-", "\\"];

  // Sequence Timer
  useEffect(() => {
    // Check if the system has already booted in this session
    const hasBooted = sessionStorage.getItem("systemBooted");
    
    if (hasBooted) {
      setBootPhase(3); // Skip straight to the canvas
      return;
    }

    const t1 = setTimeout(() => setBootPhase(1), 400); // Cold start
    const t2 = setTimeout(() => setBootPhase(2), 3200); // Spinner
    const t3 = setTimeout(() => {
      setBootPhase(3);
      sessionStorage.setItem("systemBooted", "true"); // Lock it in for the session
    }, 5000); // Success

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // High-frequency interval for the ASCII spinner
  useEffect(() => {
    if (bootPhase === 1) {
      const interval = setInterval(() => {
        setSpinnerFrame((prev) => (prev + 1) % 4);
      }, 100); // 100ms per frame
      return () => clearInterval(interval);
    }
  }, [bootPhase]);

  // --- STATE 0, 1, 2: THE BOOT SEQUENCE ---
  if (bootPhase < 3) {
    return (
      // Changed to fixed, inset-0 (full screen), and z-[60] to bury the header
      <main className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0a0a0b]">
        <div className="font-mono text-[11px] md:text-xs text-zinc-500 tracking-widest flex items-center gap-3">
          {bootPhase === 0 && <span>&nbsp;</span>}
          {bootPhase === 1 && (
            <>
              <span className="text-zinc-300">{spinnerChars[spinnerFrame]}</span>
              <span>INITIALIZING SYSTEM_</span>
            </>
          )}
          {bootPhase === 2 && (
            <span className="text-zinc-400">SYSTEM INITIALIZED.</span>
          )}
        </div>
      </main>
    );
  }

  // --- STATE 3: THE CANVAS ---
  return (
    <main className="relative min-h-screen w-full flex flex-col animate-system-boot">
      
      {/* Background Image Layer (Anchored to top of window, behind the fixed nav) */}
      <div className="absolute top-0 left-0 right-0 h-[750px] pointer-events-none -z-10 overflow-hidden">
        <Image
          src="/assets/cover.jpg"
          alt="Atmospheric architectural light slit"
          fill
          priority
          quality={100}
          className="object-cover object-[center_35%] opacity-70"
        />
        {/* Gradients feathering edges into canvas ground */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b]/80 via-transparent to-transparent" />
      </div>

      {/* Hero Section tightly bounded to content height */}
      <section className="relative w-full pt-32 md:pt-40 pb-16 px-6 md:px-12">
        {/* Hero Content */}
        <div className="max-w-4xl relative z-10">
          <CyclingHeading />
          <p className="mt-6 font-mono text-xs md:text-sm text-zinc-400 uppercase tracking-widest max-w-xl leading-relaxed">
            High-throughput pipelines, core application runtimes, and strict visual discipline.
          </p>
        </div>
      </section>

      {/* Main Body Containers */}
      <div className="px-6 md:px-12">
        <ProjectRail />
        <Capabilities />
        <OperatingPrinciples />
        <Footer />
      </div>
    </main>
  );
}