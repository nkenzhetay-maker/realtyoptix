export default function Header3D() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-[6vw] md:px-[8vw] py-5 flex items-center justify-between pointer-events-none">
      <a href="#hero" className="pointer-events-auto flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-emerald flex items-center justify-center shadow-lg shadow-emerald/20">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V10.5Z" fill="white"/>
            <path d="M8 10.5L13 6.5L18 10.5V17H13V13H8V10.5Z" fill="#10B981" opacity="0.6"/>
          </svg>
        </div>
        <span className="text-lg font-bold text-white">
          Realty <span className="text-gradient-ro">Optix</span>
        </span>
      </a>

      <nav className="pointer-events-auto hidden md:flex items-center gap-10 text-sm text-white/70">
        <a href="#agents" className="hover:text-white transition-colors">AI Agents</a>
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        <a href="#investors" className="hover:text-white transition-colors">Investors</a>
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
