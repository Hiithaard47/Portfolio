import { PROJECTS } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full px-6 md:px-12 py-24 max-w-4xl mx-auto animate-system-boot">
      
      {/* Back Navigation */}
      <div className="mb-12">
        <Link 
          href="/" 
          className="font-mono text-xs text-zinc-500 hover:text-zinc-200 transition-colors uppercase tracking-widest"
        >
          ← [ Return to Index ]
        </Link>
      </div>

      {/* Header Metadata */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[10px] tracking-wider text-zinc-400 border border-white/[0.08] px-2 py-0.5 bg-[#111113]">
            {project.index} // {project.category}
          </span>
          <span className="font-mono text-[10px] text-zinc-500">
            {project.metrics}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-sans tracking-tighter text-zinc-100">
          {project.title}
        </h1>
        <p className="font-mono text-xs md:text-sm text-zinc-400 max-w-2xl leading-relaxed">
          {project.overview}
        </p>
      </div>

      {/* Cover Image */}
      <div className="relative w-full aspect-video bg-[#111113] border border-white/[0.08] mb-12 overflow-hidden rounded-sm">
        {project.cover ? (
          <Image 
            src={project.cover} 
            alt={`${project.title} Architecture`} 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            priority
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-zinc-700">
            [ ASSET MISSING ]
          </div>
        )}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/[0.08] pb-16 mb-12">
        
        {/* Left Column: Stack & Problem */}
        <div className="md:col-span-1 space-y-12">
          <div>
            <h2 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4">
              [ Stack ]
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span key={i} className="font-mono text-xs text-zinc-300 bg-[#111113] border border-white/[0.07] px-3 py-1 rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4">
              [ Problem Statement ]
            </h2>
            <p className="font-mono text-xs text-zinc-400 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
        </div>

        {/* Right Column: Architecture & Outcomes */}
        <div className="md:col-span-2 space-y-12">
          <div>
            <h2 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-6">
              [ System Architecture ]
            </h2>
            <div className="space-y-6">
              {project.architecture.map((item, i) => (
                <div key={i} className="border-l border-white/[0.1] pl-4">
                  <h3 className="font-sans text-lg text-zinc-200 tracking-tight mb-2">
                    {item.heading}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-6">
              [ Outcomes ]
            </h2>
            <ul className="space-y-3">
              {project.outcomes.map((point, i) => (
                <li key={i} className="flex items-start gap-3 font-mono text-xs text-zinc-400 leading-relaxed">
                  <span className="text-zinc-600 mt-0.5">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* External Link */}
      {project.link && (
        <div className="pb-16">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-zinc-200 bg-zinc-900 border border-white/[0.1] px-5 py-2.5 rounded-sm hover:bg-zinc-800 transition-colors"
          >
            <span>Access Deployment / Source Artifact</span>
            <span>↗</span>
          </a>
        </div>
      )}
    </main>
  );
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}