"use client";

import { useState, useEffect } from "react";

export default function Home() {
  // 0: Cold Start | 1: Spinning | 2: Success | 3: Render App
  const [bootPhase, setBootPhase] = useState(0);
  const [spinnerFrame, setSpinnerFrame] = useState(0);
  const spinnerChars = ["|", "/", "-", "\\"];

  // Sequence Timer
  useEffect(() => {
    const t1 = setTimeout(() => setBootPhase(1), 1000); // Cold start duration
    const t2 = setTimeout(() => setBootPhase(2), 4200); // Spinner duration
    const t3 = setTimeout(() => setBootPhase(3), 6000); // Success message duration

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
    <main className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 animate-system-boot">
      <div className="max-w-4xl mt-[-10vh]">
        <h1>BUILDING SYSTEMS.</h1>
        <p>High-throughput pipelines, core application runtimes, and strict visual discipline.</p>
      </div>
    </main>
  );
}