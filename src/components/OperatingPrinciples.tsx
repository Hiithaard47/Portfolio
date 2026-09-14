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
      code: "LOCAL_FIRST // INDEPENDENCY",
      rule: "Keep critical systems local.",
      details: "Keep important data and computation available without relying on the network. Connectivity should augment capability, not become a strict requirement for the core runtime."
    },
    {
      id: "03",
      code: "RESOURCE_EFFICIENCY",
      rule: "Make every resource count.",
      details: "Balance compute, memory, bandwidth, and cost against system output. Favor architectures that achieve high throughput with minimal resource overhead."
    }
  ];

  return (
    <section className="w-full py-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-12 border-b border-white/[0.05] gap-6">
        <div>
          {/* Dialed into the exact middle: text-3xl */}
          <h2 className="font-sans text-xl md:text-3xl text-zinc-100 tracking-tight">
            Operating Principles.
          </h2>
        </div>
        <p className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest max-w-sm md:text-right leading-relaxed">
          [ DIRECTIVES GUIDING SYSTEM DESIGN AND ENGINEERING DECISIONS ]
        </p>
      </div>

      {/* Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {principles.map((p) => (
          // Tuned spacing to space-y-5
          <div key={p.id} className="flex flex-col border-l border-white/[0.1] pl-5 space-y-4 md:space-y-5 group hover:border-white/30 transition-colors duration-500">
            <div className="flex items-center gap-3">
              <span className="inline-block w-1.5 h-1.5 bg-emerald-700 group-hover:bg-emerald-400 transition-colors rounded-full" />
              <span className="font-mono text-[10px] md:text-xs text-zinc-600 tracking-widest group-hover:text-zinc-400 transition-colors">
                [ PRINCIPLE_{p.id}/03: {p.code} ]
              </span>
            </div>
            
            {/* Dialed back to text-xl */}
            <h3 className="font-sans text-lg md:text-xl text-zinc-200 tracking-tight group-hover:text-white transition-colors">
              {p.rule}
            </h3>
            
            {/* Custom 15px size to sit perfectly between sm (14px) and base (16px) */}
            <p className="font-mono text-xs md:text-[15px] text-zinc-400 leading-relaxed">
              {p.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}