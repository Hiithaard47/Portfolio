import { PROJECTS } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function PlatformIcon({ url }: { url: string }) {
  if (url.includes("github.com")) {
    return (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }

  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  }

  if (url.includes("vercel.app")) {
    return (
      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
        <path d="M24 22.525H0l12-21.05 12 21.05z" />
      </svg>
    );
  }

  return <span>↗</span>;
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
          className="font-mono text-xs md:text-sm text-zinc-500 hover:text-zinc-200 transition-colors uppercase tracking-widest"
        >
          ← [ Return to Index ]
        </Link>
      </div>

      {/* Header Metadata */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[10px] md:text-xs tracking-wider text-zinc-400 border border-white/[0.08] px-2 py-0.5 bg-[#111113]">
            {project.index} // {project.category}
          </span>
          <span className="font-mono text-[10px] md:text-xs text-zinc-500">
            {project.metrics}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-sans tracking-tighter text-zinc-100">
          {project.title}
        </h1>
        <p className="font-mono text-xs md:text-[15px] text-zinc-400 max-w-2xl leading-relaxed">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/[0.08] pb-16 mb-16">
        
        {/* Left Column: Stack & Problem */}
        <div className="md:col-span-1 space-y-12">
          <div>
            <h2 className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-4">
              [ Stack ]
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span key={i} className="font-mono text-xs md:text-[14px] text-zinc-300 bg-[#111113] border border-white/[0.07] px-3 py-1 rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-4">
              [ Problem Statement ]
            </h2>
            <p className="font-mono text-xs md:text-[15px] text-zinc-400 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
        </div>

        {/* Right Column: Architecture & Outcomes */}
        <div className="md:col-span-2 space-y-12">
          <div>
            <h2 className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-6">
              [ System Architecture ]
            </h2>
            <div className="space-y-6 md:space-y-8">
              {project.architecture.map((item, i) => (
                <div key={i} className="border-l border-white/[0.1] pl-4">
                  <h3 className="font-sans text-lg md:text-xl text-zinc-200 tracking-tight mb-2">
                    {item.heading}
                  </h3>
                  <p className="font-mono text-xs md:text-[15px] text-zinc-400 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-6">
              [ Outcomes ]
            </h2>
            <ul className="space-y-3 md:space-y-4">
              {project.outcomes.map((point, i) => (
                <li key={i} className="flex items-start gap-3 font-mono text-xs md:text-[15px] text-zinc-400 leading-relaxed">
                  <span className="text-zinc-600 mt-0.5">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Execution Artifacts / Visual Log */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="space-y-6 mb-16 border-b border-white/[0.08] pb-16">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest">
              [ Execution Artifacts & Telemetry ]
            </h2>
            <span className="font-mono text-[10px] md:text-xs text-zinc-600">
              LOG ({project.gallery.length.toString().padStart(2, "0")})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {project.gallery.map((item, i) => (
              <figure key={i} className="space-y-3">
                <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-white/[0.08] bg-[#111113]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    unoptimized={item.src.endsWith(".gif")}
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {item.caption && (
                  <figcaption className="font-mono text-[10px] md:text-xs text-zinc-500 leading-tight">
                    // {item.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* External Link with Contextual Platform Icon */}
      {project.link && (
        <div className="pb-16">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 font-mono text-xs md:text-[14px] text-zinc-200 bg-zinc-900 border border-white/[0.1] px-5 py-2.5 rounded-sm hover:bg-zinc-800 hover:border-white/20 transition-all group"
          >
            <span>Access Deployment / Source Artifact</span>
            <span className="text-zinc-400 group-hover:text-zinc-100 transition-colors">
              <PlatformIcon url={project.link} />
            </span>
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