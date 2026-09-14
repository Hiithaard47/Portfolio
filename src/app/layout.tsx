import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LiveTelemetry } from "@/components/LiveTelemetry";
import "./globals.css";

// 1. Initialize our font variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hitarth Vyas | Engineering Systems",
  description: "Portfolio and system architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 2. Your Sticky Overhead Anchor */}
        <header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-5 bg-[#0a0a0b]/80 backdrop-blur-sm border-b border-white/[0.05]">
          <nav className="flex justify-between md:grid md:grid-cols-3 items-center font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest">
            {/* Left Column */}
            <div className="justify-self-start">
              <span className="text-zinc-300">HIT_VYAS</span>
              <span className="hidden sm:inline"> — ADMIN (READ-ONLY)</span>
            </div>
            
            {/* Center Column (True Center, hidden on mobile) */}
            <LiveTelemetry />
            
            {/* Right Column */}
            <div className="justify-self-end flex gap-4">
              <span className="hover:text-zinc-300 transition-colors cursor-pointer">INDEX</span>
              <span className="hover:text-zinc-300 transition-colors cursor-pointer">CONTACT</span>
            </div>
          </nav>
        </header>

        {/* 3. The Canvas (page.tsx gets injected here) */}
        {children}
      </body>
    </html>
  );
}