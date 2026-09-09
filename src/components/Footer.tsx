export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 mt-12 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
      <div>
        <span>&copy; {currentYear} Hitarth Vyas. All rights reserved.</span>
      </div>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="https://github.com/Hiithaard47" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/hitarth-vyas-343733243" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
        <a href="mailto:vyas.hitarth@outlook.com" className="hover:text-zinc-300 transition-colors">Comm_Link</a>
      </div>
    </footer>
  );
}