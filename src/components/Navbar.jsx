import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'AI Agents', href: '#agents' },
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    setTimeout(() => setShow(true), 100)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'glass-strong' : ''
      } ${show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric to-purple flex items-center justify-center group-hover:scale-110 transition-transform">
            <Sparkles size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Realty <span className="gradient-text">Optix</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-electric group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors px-4 py-2">
            Sign In
          </a>
          <a href="#pricing" className="text-sm font-medium text-white px-5 py-2.5 rounded-full bg-gradient-to-r from-electric to-purple hover:opacity-90 transition-opacity">
            Start Free Trial
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden glass-strong border-t border-white/5 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#pricing" className="mt-2 text-center font-medium text-white px-5 py-3 rounded-full bg-gradient-to-r from-electric to-purple" onClick={() => setMobileOpen(false)}>
            Start Free Trial
          </a>
        </div>
      </div>
    </nav>
  )
}
