"use client";

import { useState, useEffect } from "react";

const SYSTEM_DOMAINS = [
  { term: "SYSTEMS.", code: "SYS_01" },
  { term: "SOLUTIONS.", code: "ENG_02" },
  { term: "RUNTIMES.", code: "RT_03" },
  { term: "PIPELINES.", code: "PIP_04" },
  { term: "EXPERIENCES.", code: "EXP_05" },
];

export function CyclingHeading() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      // Step 1: Rapid vertical launch + directional shutter blur
      setPhase("exit");

      setTimeout(() => {
        // Step 2: Swap term while off-canvas below
        setIndex((prev) => (prev + 1) % SYSTEM_DOMAINS.length);
        setPhase("enter");

        // Step 3: Snap into resting lock
        setTimeout(() => {
          setPhase("idle");
        }, 50);
      }, 350);
    }, 3800);

    return () => clearInterval(cycleInterval);
  }, []);

  const active = SYSTEM_DOMAINS[index];

  return (
    <div className="flex flex-col select-none">
      {/* Mechanical Sub-label */}
      <div className="flex items-center gap-3 mb-2 font-mono text-[10px] md:text-xs text-zinc-500 tracking-widest uppercase">
        <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
        <span>CORE ARCHITECTURE // {active.code}</span>
        <span className="text-zinc-700">[{String(index + 1).padStart(2, "0")}/05]</span>
      </div>

      {/* Main Display Matrix - Locked to prevent horizontal wrap jumping */}
      <h1 className="text-[42px] sm:text-[68px] md:text-[84px] lg:text-8xl font-sans tracking-tighter text-zinc-100 leading-[0.95] flex flex-col items-start">
        <span className="text-zinc-400">BUILDING</span>
        
        {/* Bounded Kinetic Window */}
        <span className="relative overflow-hidden h-[1.12em] w-full block mt-1">
          <span
            className={`block whitespace-nowrap will-change-transform transform transition-all duration-300 ${
              phase === "exit"
                ? "-translate-y-full opacity-0 blur-md scale-y-110"
                : phase === "enter"
                ? "translate-y-full opacity-0 blur-md scale-y-110 transition-none"
                : "translate-y-0 opacity-100 blur-0 scale-y-100 ease-[cubic-bezier(0.16,1,0.3,1)]"
            }`}
          >
            {active.term}
          </span>
        </span>
      </h1>
    </div>
  );
}