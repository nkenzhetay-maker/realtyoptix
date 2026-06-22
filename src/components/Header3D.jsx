import { Home } from 'lucide-react'

export default function Header3D() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-[6vw] md:px-[8vw] py-5 flex items-center justify-between pointer-events-none">
      <a href="#hero" className="pointer-events-auto flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-emerald flex items-center justify-center">
          <Home size={16} className="text-white" />
        </div>
        <span className="text-lg font-bold text-white">
          Realty <span className="text-gradient-ro">Optix</span>
        </span>
      </a>

      <nav className="pointer-events-auto hidden md:flex items-center gap-10 text-sm text-white/70">
        <a href="#agents" className="hover:text-white transition-colors">AI Agents</a>
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        <a href="#cta" className="cta-ro !py-2.5 !px-5 !text-sm">Start Free Trial</a>
      </nav>

      <button type="button" aria-label="Open menu"
        className="pointer-events-auto md:hidden flex flex-col gap-1.5 p-2">
        <span className="block h-[2px] w-6 bg-white" />
        <span className="block h-[2px] w-6 bg-white" />
      </button>
    </header>
  )
}
