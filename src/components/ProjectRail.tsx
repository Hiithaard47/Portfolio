import Link from "next/link";
import { PROJECTS, Project } from "@/lib/projects";

export function ProjectRail() {
  return (
    <section className="w-full py-24 mt-24 border-t border-white/[0.05]">
      <div className="flex items-center justify-between pb-8 mb-8">
        <span className="font-mono text-[10px] md:text-xs tracking-widest text-zinc-500 uppercase">
          [ 04 Selected Systems ]
        </span>
        <span className="font-mono text-[10px] md:text-xs text-zinc-600">
          INDEX 2024–2026
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROJECTS.map((proj) => (
          <ProjectCard key={proj.index} project={proj} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group flex flex-col cursor-pointer">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-[#111113] border border-white/[0.07] transition-colors duration-500 group-hover:border-white/20">
        <div className="absolute top-0 inset-x-0 p-4 flex justify-between pointer-events-none">
          <span className="font-mono text-[9px] tracking-wider text-zinc-400 border border-white/[0.08] px-1.5 py-0.5 bg-black/50">
            {project.index} // {project.category}
          </span>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center p-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
          <span className="font-mono text-[10px] text-zinc-600 group-hover:text-zinc-400">
            $ ref --arch={project.stack.join(",")}
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-1.5">
        <h3 className="text-lg md:text-xl font-sans tracking-tight text-zinc-200 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="font-mono text-[10px] text-zinc-500 leading-snug">
          {project.discipline}
        </p>
        <p className="font-mono text-[10px] text-zinc-600 mt-2">
          {project.metrics}
        </p>
      </div>
    </Link>
  );
}