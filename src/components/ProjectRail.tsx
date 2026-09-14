"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS, Project } from "@/lib/projects";

export function ProjectRail() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollBounds = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    // Tolerance buffer of 2px for subpixel rendering variations
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
  };

  useEffect(() => {
    checkScrollBounds();
    window.addEventListener("resize", checkScrollBounds);
    return () => window.removeEventListener("resize", checkScrollBounds);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 320;
    const gap = 24; // 1.5rem gap
    const offset = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-24 mt-24  border-t border-white/[0.05]">
      {/* Header */}
      <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/[0.05]">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] md:text-xs tracking-widest text-zinc-500 uppercase">
            [ {PROJECTS.length.toString().padStart(2, "0")} Selected Systems ]
          </span>
          <span className="font-mono text-[10px] md:text-xs text-zinc-600 hidden sm:inline">
            INDEX 2024–2026
          </span>
        </div>
      </div>

      {/* The Horizontal Rail */}
      <div
        ref={scrollRef}
        onScroll={checkScrollBounds}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {PROJECTS.map((proj) => (
          <div
            key={proj.index}
            className="snap-start shrink-0 w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[calc((100%-4.5rem)/4)]"
          >
            <ProjectCard project={proj} />
          </div>
        ))}
      </div>

      {/* Bottom Left Navigation Triggers */}
      <div className="flex items-center gap-2 mt-8">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll Rail Left"
          className="w-9 h-9 flex items-center justify-center font-mono text-xs border transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:border-white/[0.05] disabled:text-zinc-600 border-white/[0.08] bg-[#111113] text-zinc-300 hover:enabled:border-white/20 hover:enabled:text-white"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll Rail Right"
          className="w-9 h-9 flex items-center justify-center font-mono text-xs border transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:border-white/[0.05] disabled:text-zinc-600 border-white/[0.08] bg-[#111113] text-zinc-300 hover:enabled:border-white/20 hover:enabled:text-white"
        >
          →
        </button>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group flex flex-col cursor-pointer">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-[#111113] border border-white/[0.07] transition-colors duration-500 group-hover:border-white/20">
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover opacity-100 grayscale-0 md:opacity-50 md:grayscale md:group-hover:opacity-100 md:group-hover:grayscale-0 transition-all duration-700"
          />
        )}

        <div className="absolute top-0 inset-x-0 p-4 flex justify-between pointer-events-none z-10">
          <span className="font-mono text-[9px] tracking-wider text-zinc-400 border border-white/[0.08] px-1.5 py-0.5 bg-black/80 backdrop-blur-sm">
            {project.index} // {project.category}
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-1.5">
        <h3 className="text-lg md:text-xl font-sans tracking-tight text-zinc-200 group-hover:text-white transition-colors truncate">
          {project.title}
        </h3>
        <p className="font-mono text-[10px] text-zinc-500 leading-snug line-clamp-2">
          {project.discipline}
        </p>
      </div>
    </Link>
  );
}