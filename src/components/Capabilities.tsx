export function Capabilities() {
  return (
    <section className="w-full py-24 border-t border-white/[0.05]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
        
        {/* Section Header */}
        <div className="md:col-span-1">
          <h2 className="font-sans text-xl text-zinc-100 tracking-tight">
            System Architectures <br />& Tooling.
          </h2>
        </div>

        {/* Stack Manifest */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          <div className="space-y-4">
            <h3 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Core & Runtimes</h3>
            <ul className="font-mono text-xs text-zinc-400 space-y-2">
              <li>C / C++ (Systems)</li>
              <li>Python / FastAPI</li>
              <li>C# / Unity</li>
              <li>Dart / Flutter</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Data & Infra</h3>
            <ul className="font-mono text-xs text-zinc-400 space-y-2">
              <li>MongoDB / SQL</li>
              <li>Hive NoSQL</li>
              <li>AWS Cloud Concepts</li>
              <li>REST API Architecture</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">AI & Specialization</h3>
            <ul className="font-mono text-xs text-zinc-400 space-y-2">
              <li>Gemini REST APIs</li>
              <li>Deterministic Guardrails</li>
              <li>Data Analytics Pipelines</li>
              <li>Security Auditing Engines</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}