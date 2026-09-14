"use client";

import { useState } from "react";

export function Dispatch() {
  const [copied, setCopied] = useState(false);
  const email = "vyas.hitarth@outlook.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API fails
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-8 mb-16 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <h2 className="font-sans text-xl md:text-3xl text-zinc-100 tracking-tight">
            Contact
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="font-mono text-[10px] md:text-xs text-zinc-400 uppercase tracking-widest">
            CHANNEL_OPEN
          </span>
        </div>
      </div>

      {/* Main Transmission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column: Transmission Protocols */}
        <div className="md:col-span-1 space-y-8">
          <div>
            <h3 className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-3">
              [ Primary Routing ]
            </h3>
            <p className="font-mono text-xs md:text-[14px] text-zinc-400 leading-relaxed">
              Available for select software contracts, full-time engineering roles, and collaborations.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-3">
              [ Response Invariant ]
            </h3>
            <p className="font-mono text-xs md:text-[13px] text-zinc-500 leading-relaxed">
              // Latency: &lt; 24H
              <br />
              // Deterministic Handshake
            </p>
          </div>
        </div>

        {/* Right 2/3 Column: Action Interfaces */}
        <div className="md:col-span-2 space-y-12">
          {/* Clipboard Transmission Bar */}
          <div className="space-y-3">
            <h4 className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest">
              [ Direct Endpoint ]
            </h4>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-4 bg-[#111113] border border-white/[0.08] rounded-sm gap-4">
              <span className="font-mono text-xs md:text-sm text-zinc-200 tracking-tight truncate">
                {email}
              </span>
              <button
                onClick={handleCopy}
                className="font-mono text-[11px] md:text-xs uppercase tracking-wider text-zinc-300 hover:text-white bg-zinc-900 border border-white/[0.1] hover:border-white/20 px-4 py-2 rounded-sm transition-all text-center shrink-0 cursor-pointer"
              >
                {copied ? "[ COPIED_TO_CLIPBOARD ]" : "[ COPY_ADDRESS ]"}
              </button>
            </div>
          </div>

          {/* Network Outlets & System Spec */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-white/[0.08]">
            {/* External Links */}
            <div>
              <h4 className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-4">
                [ Network Interfaces ]
              </h4>
              <ul className="space-y-3 font-mono text-xs md:text-sm">
                <li>
                  <a
                    href="https://www.linkedin.com/in/hitarth-vyas-343733243/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-zinc-400 hover:text-zinc-100 transition-colors group"
                  >
                    <span>// LINKEDIN</span>
                    <span className="text-zinc-600 group-hover:text-zinc-300">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/hitarthvyas"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-zinc-400 hover:text-zinc-100 transition-colors group"
                  >
                    <span>// GITHUB</span>
                    <span className="text-zinc-600 group-hover:text-zinc-300">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@hitarthvyas7860"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-zinc-400 hover:text-zinc-100 transition-colors group"
                  >
                    <span>// YOUTUBE</span>
                    <span className="text-zinc-600 group-hover:text-zinc-300">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Spec Artifact */}
            <div>
              <h4 className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-4">
                [ System Documentation ]
              </h4>
              <a
                href="/HAV Resume (Dev Linked UAE) - Updated.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 bg-[#111113] border border-white/[0.08] hover:border-white/20 transition-all rounded-sm group"
              >
                <div>
                  <div className="font-mono text-xs text-zinc-200 group-hover:text-white">
                    SPEC_RESUME.PDF
                  </div>
                  <div className="font-mono text-[10px] text-zinc-500 mt-0.5">
                    TECHNICAL_SPEC_V2.6
                  </div>
                </div>
                <span className="font-mono text-xs text-zinc-500 group-hover:text-zinc-200">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}