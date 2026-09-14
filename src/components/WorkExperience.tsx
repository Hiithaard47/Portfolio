import Image from "next/image";
import Link from "next/link";

interface ExperienceItem {
  id: string;
  timeframe: string;
  role: string;
  company: string;
  logo: string;
  location: string;
  summary: string;
  stack: string[];
  deliverables: string[];
  link?: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "01",
    timeframe: "OCT 2025 – MAY 2026",
    role: "Software Developer [Contract]",
    company: "Poole Process Engineering Services",
    logo: "/assets/Company Logos/poole-es.png",
    location: "Abu Dhabi, UAE",
    summary:
      "Engineered corporate production web systems end-to-end from zero baseline footprint, owning architecture, client-side caching pipelines, and deployment pipelines.",
    stack: ["JavaScript", "Web Tooling", "Production Deploy", "SEO"],
    deliverables: [
      "Built and launched production client infrastructure end-to-end with high-throughput delivery constraints.",
      "Managed full lifecycle from technical requirements parsing to automated deployment rollout.",
      "Optimized asset pipelines and core web vitals for search-indexed ranking visibility."
    ],
    link: "https://poole-es.com/"
  },
  {
    id: "02",
    timeframe: "JAN 2024 – JUL 2024",
    role: "IT Support & Data Management Intern",
    company: "Sophos Technologies Pvt. Ltd.",
    logo: "/assets/Company Logos/sophos.png",
    location: "Ahmedabad, India",
    summary:
      "Administered enterprise access tiers, operational asset datastores, and continuous data reconciliation pipelines across internal corporate infrastructure.",
    stack: ["Enterprise Data", "Asset Reconciliation", "Incident Triage", "Access Control"],
    deliverables: [
      "Maintained internal directory records and asset databases enforcing strict schema consistency.",
      "Orchestrated cross-system user provisioning, access tier validation, and incident lifecycles.",
      "Audited data discrepancy logs across distributed enterprise operational stores."
    ]
  },
  {
    id: "03",
    timeframe: "MAY 2023 – JUN 2023",
    role: "Cyber Security Intern",
    company: "Tech Mahindra Ltd.",
    logo: "/assets/Company Logos/tech_mahindra.png",
    location: "Pune, India",
    summary:
      "Constructed automated security verification tooling and audited network edge threat perimeters across enterprise environments.",
    stack: ["Python", "SSL Automation", "Security Audit", "Threat Intel"],
    deliverables: [
      "Authored custom Python automation to programmatically validate SSL/TLS certificate chains.",
      "Audited firewall filter boundaries, attack vector models, and red/blue team mitigation flows."
    ]
  },
  {
    id: "04",
    timeframe: "JUL 2021 – AUG 2021",
    role: "IT Operations Intern",
    company: "Al Nasser Industrial Enterprises",
    logo: "/assets/Company Logos/anie.png",
    location: "Abu Dhabi, UAE",
    summary:
      "Assisted on-premise infrastructure support runtimes and observed multi-facility corporate IT logistics.",
    stack: ["IT Ops", "System Diagnostics", "Infrastructure"],
    deliverables: [
      "Assisted operational IT staff in diagnosing workstation hardware and networking bottlenecks.",
      "Monitored multi-facility IT workflow pipelines and enterprise software provisioning."
    ]
  }
];

export function WorkExperience() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full py-24">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-8 mb-16 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <h2 className="font-sans text-xl md:text-3xl text-zinc-100 tracking-tight">
            Work Experience.
          </h2>
        </div>
        <span className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest max-w-sm md:text-right leading-relaxed">
          INDEX 2021–{currentYear}
        </span>
      </div>

      {/* Experience Ledger Entries */}
      <div className="space-y-20">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-b border-white/[0.08] pb-16 group"
          >
            {/* Left 1/3 Column: Logo + Company Name, Timeline, Stack */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="relative w-8 h-8 rounded-sm bg-[#111113] border border-white/[0.08] p-1.5 shrink-0 flex items-center justify-center overflow-hidden">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} emblem`}
                      fill
                      className="object-contain p-1 grayscale-0 opacity-100 md:grayscale md:opacity-80 md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-sans tracking-tight text-zinc-100 leading-snug">
                    {exp.company}
                  </h3>
                </div>

                <p className="font-mono text-xs md:text-[13px] text-zinc-500 tracking-wider">
                  {exp.timeframe}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-3">
                  [ Discipline Core ]
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs md:text-[13px] text-zinc-300 bg-[#111113] border border-white/[0.07] px-2.5 py-1 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {exp.link && (
                <div>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-zinc-100 transition-colors uppercase tracking-wider"
                  >
                    <span>Live Website</span>
                    <span>↗</span>
                  </a>
                </div>
              )}
            </div>

            {/* Right 2/3 Column: Role, Location, Deliverables */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-sans tracking-tight text-zinc-100 mb-1">
                  {exp.role}
                </h2>
                <p className="font-mono text-xs md:text-sm text-zinc-500">
                  // {exp.location}
                </p>
              </div>

              <div className="border-l border-white/[0.1] pl-4">
                <h4 className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-2">
                  [ Operational Scope ]
                </h4>
                <p className="font-mono text-xs md:text-[15px] text-zinc-400 leading-relaxed">
                  {exp.summary}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-4">
                  [ Verified Outputs ]
                </h4>
                <ul className="space-y-3">
                  {exp.deliverables.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-mono text-xs md:text-[15px] text-zinc-400 leading-relaxed"
                    >
                      <span className="text-zinc-600 mt-0.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}