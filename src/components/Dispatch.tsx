"use client";

import { useState } from "react";

function LinkedInIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 fill-[#0A66C2] md:fill-zinc-400 md:group-hover:fill-[#0A66C2] transition-colors duration-200 shrink-0"
      viewBox="0 0 24 24"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 fill-zinc-100 md:fill-zinc-400 md:group-hover:fill-white transition-colors duration-200 shrink-0"
      viewBox="0 0 24 24"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 fill-[#FF0000] md:fill-zinc-400 md:group-hover:fill-[#FF0000] transition-colors duration-200 shrink-0"
      viewBox="0 0 24 24"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Dispatch() {
  const [copied, setCopied] = useState(false);
  const email = "vyas.hitarth@outlook.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
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
              [ Primary Channel ]
            </h3>
            <p className="font-mono text-xs md:text-[14px] text-zinc-400 leading-relaxed">
              Available for select software contracts, full-time engineering roles, and collaborations.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-3">
              [ Response Protocol ]
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
                    className="flex items-center justify-between text-zinc-400 hover:text-zinc-100 transition-colors group py-1"
                  >
                    <span className="flex items-center gap-3">
                      <LinkedInIcon />
                      <span>// LINKEDIN</span>
                    </span>
                    <span className="text-zinc-600 group-hover:text-zinc-300">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Hiithaard47"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-zinc-400 hover:text-zinc-100 transition-colors group py-1"
                  >
                    <span className="flex items-center gap-3">
                      <GitHubIcon />
                      <span>// GITHUB</span>
                    </span>
                    <span className="text-zinc-600 group-hover:text-zinc-300">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@hitarthvyas7860"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-zinc-400 hover:text-zinc-100 transition-colors group py-1"
                  >
                    <span className="flex items-center gap-3">
                      <YouTubeIcon />
                      <span>// YOUTUBE</span>
                    </span>
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