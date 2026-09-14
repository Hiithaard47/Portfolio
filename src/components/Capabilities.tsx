interface CapabilityCategory {
  title: string;
  skills: string[];
}

const CAPABILITIES: CapabilityCategory[] = [
  {
    title: "Core & Runtimes",
    skills: [
      "C / C++ (Systems)",
      "Python",
      "FastAPI",
      "JavaScript (ES6+)",
      "C# / Unity",
      "Dart / Flutter",
    ],
  },
  {
    title: "Data & Architecture",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Hive NoSQL",
      "REST APIs",
      "AWS Cloud Concepts",
    ],
  },
  {
    title: "Intelligence & Security",
    skills: [
      "Gemini REST APIs",
      "Deterministic Guardrails",
      "Data Scraping & ETL",
      "Security Auditing",
      "Telemetry Pipelines",
    ],
  },
];

export function Capabilities() {
  return (
    <section className="w-full py-24 border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-8 mb-16 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <h2 className="font-sans text-xl md:text-3xl text-zinc-100 tracking-tight">
            System Architectures & Tooling.
          </h2>
        </div>
        <span className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest hidden sm:inline">
          [ STACK_MATRIX ]
        </span>
      </div>

      {/* Clean 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {CAPABILITIES.map((cat, i) => (
          <div key={i} className="space-y-4">
            <h3 className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest">
              [ {cat.title} ]
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs md:text-[13px] text-zinc-300 bg-[#111113] border border-white/[0.07] px-3 py-1 rounded-sm hover:border-white/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}