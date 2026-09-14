"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { CyclingHeading } from "@/components/CyclingHeading";
import { ProjectRail } from "@/components/ProjectRail";
import { Capabilities } from "@/components/Capabilities";
import { OperatingPrinciples } from "@/components/OperatingPrinciples";
import { WorkExperience } from "@/components/WorkExperience";
import { Dispatch } from "@/components/Dispatch";
import { Footer } from "@/components/Footer";

export default function Home() {
  // 0: Cold Start | 1: Spinning | 2: Success | 3: Render App
  const [bootPhase, setBootPhase] = useState(0);
  const [spinnerFrame, setSpinnerFrame] = useState(0);
  const spinnerChars = ["|", "/", "-", "\\"];

  // Sequence Timer
  useEffect(() => {
    const hasBooted = sessionStorage.getItem("systemBooted");
    
    if (hasBooted) {
      setBootPhase(3);
      return;
    }

    const t1 = setTimeout(() => setBootPhase(1), 400);
    const t2 = setTimeout(() => setBootPhase(2), 3200);
    const t3 = setTimeout(() => {
      setBootPhase(3);
      sessionStorage.setItem("systemBooted", "true");
    }, 5000);

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
      }, 100);
      return () => clearInterval(interval);
    }
  }, [bootPhase]);

  // --- STATE 0, 1, 2: THE BOOT SEQUENCE ---
  if (bootPhase < 3) {
    return (
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
      
      {/* Background Image Layer */}
      <div className="absolute top-0 left-0 right-0 h-[75vh] pointer-events-none -z-10 overflow-hidden">
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

      {/* Hero Section */}
      <section className="relative w-full min-h-[65vh] flex flex-col justify-center pt-32 md:pt-40 pb-16 px-6 md:px-12">
        {/* Hero Content */}
        <div className="max-w-4xl relative z-10 space-y-6">
          <CyclingHeading />
          
          <div className="space-y-4 max-w-2xl">
            <p className="font-mono text-xs md:text-[15px] text-zinc-300 leading-relaxed">
              I'm <span className="text-zinc-100 font-semibold">Hitarth</span> — a software engineer and enthusiast. Focused on deterministic runtimes, local-first persistence, high-efficiency pipelines and a strict visual discipline.
            </p>

            <div className="inline-flex items-center gap-2.5 font-mono text-[10px] md:text-xs text-zinc-400 border border-white/[0.08] bg-[#111113]/80 backdrop-blur-sm px-3.5 py-2 rounded-sm w-fit">
              <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shrink-0" />
              
              {/* Mobile single line */}
              <span className="md:hidden tracking-wider">
                LOC // UAE ⇄ INDIA (AMD · GGN · HYD · BLR)
              </span>

              {/* Desktop full telemetry */}
              <span className="hidden md:inline tracking-wider">
                LOC // UAE (DXB · AUH) ⇄ INDIA (AMD · GGN · HYD · BLR)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Containers */}
      <div className="px-6 md:px-12">
        <OperatingPrinciples />
        <ProjectRail />
        <Capabilities />        
        <WorkExperience />
        <Dispatch />
        <Footer />
      </div>
    </main>
  );
}