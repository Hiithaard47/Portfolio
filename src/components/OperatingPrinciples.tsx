export function OperatingPrinciples() {
  const principles = [
    {
      id: "01",
      code: "DETERMINISTIC_CORRECTNESS",
      rule: "Correctness before performance.",
      details: "Keep data accurate and behavior predictable before optimizing for speed. Once the core logic is proven, optimize for throughput and latency without altering the deterministic result."
    },
    {
      id: "02",
      code: "USER_INDEPENDENCY",
      rule: "Keep critical systems local.",
      details: "Keep important data and computation available without relying on the network. Connectivity should augment capability, not become a strict requirement for the core runtime. User independency above all."
    },
    {
      id: "03",
      code: "RESILIENCE // DEGRADATION",
      rule: "Degrade before failing.",
      details: "When subsystems fault, keep the critical paths running where possible. Make failures and limits transparent to the user instead of masking them behind a catastrophic crash."
    }
  ];

  return (
    <section className="w-full py-24 border-t border-white/[0.05]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-12 border-b border-white/[0.05] gap-6">
        <div>
          <h2 className="font-sans text-xl text-zinc-100 tracking-tight">
            Operating Principles.
          </h2>
        </div>
        <p className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest max-w-sm md:text-right leading-relaxed">
          [ DIRECTIVES GUIDING SYSTEM DESIGN AND ENGINEERING DECISIONS ]
        </p>
      </div>

      {/* Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {principles.map((p, index) => (
          <div key={p.id} className="flex flex-col border-l border-white/[0.1] pl-5 space-y-4 group hover:border-white/30 transition-colors duration-500">
            <div className="flex items-center gap-3">
              <span className="inline-block w-1.5 h-1.5 bg-zinc-700 group-hover:bg-zinc-400 transition-colors rounded-full" />
              <span className="font-mono text-[10px] text-zinc-600 tracking-widest group-hover:text-zinc-400 transition-colors">
                [ PRINCIPLE_{p.id}/03: {p.code} ]
              </span>
            </div>
            
            <h3 className="font-sans text-lg text-zinc-200 tracking-tight group-hover:text-white transition-colors">
              {p.rule}
            </h3>
            
            <p className="font-mono text-xs text-zinc-400 leading-relaxed">
              {p.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}