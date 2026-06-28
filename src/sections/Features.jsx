import { useInView } from '../hooks/useInView'
import {
  Map, Video, Film, BarChart3, Users, Calculator,
  Globe, FileText, Brain
} from 'lucide-react'

const features = [
  { icon: Map, title: 'Property Search & Map', desc: 'Interactive map with AI-scored properties, filters, and real-time listings across the US.', tag: 'Search' },
  { icon: Brain, title: 'AI Reports (PDF)', desc: 'Generate comprehensive investment analysis reports powered by AI. Share as PDF instantly.', tag: 'AI' },
  { icon: Video, title: 'AI Video Tours', desc: 'Cinematic drone-style property walkthroughs generated automatically from property data.', tag: 'Video' },
  { icon: Film, title: 'Property Reels', desc: 'TikTok-style short video feed. Record, upload, and discover properties from top agents.', tag: 'Social' },
  { icon: Users, title: 'CRM & Leads', desc: 'Built-in customer relationship management with lead tracking, follow-ups, and pipeline view.', tag: 'CRM' },
  { icon: Calculator, title: 'Smart Calculators', desc: 'Mortgage calculator, ROI calculator, and cash flow analysis — all powered by real data.', tag: 'Tools' },
  { icon: Globe, title: '8 Languages', desc: 'English, Spanish, Portuguese, Russian, Arabic, Turkish, Azerbaijani, and Kazakh support.', tag: 'i18n' },
  { icon: FileText, title: 'Legal Compliance', desc: 'Fair Housing Act, EULA, CCPA, GDPR, and DMCA compliant. AI disclaimers on every report.', tag: 'Legal' },
]

function FeatureCard({ feature, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`group relative p-6 rounded-2xl glass hover:glass-strong transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-emerald/10 transition-colors">
          <feature.icon size={20} className="text-emerald" />
        </div>
        <span className="text-[10px] font-mono text-emerald/60 uppercase tracking-wider px-2 py-0.5 rounded-full border border-emerald/20">
          {feature.tag}
        </span>
      </div>
      <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
    </div>
  )
}

export default function Features() {
  const [titleRef, titleInView] = useInView()

  return (
    <section id="features" className="relative py-32">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald/3 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs font-mono text-amber uppercase tracking-[0.2em] mb-4 block">Product Experience</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Everything an agent<br />
            <span className="gradient-text">needs in one app.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From AI-powered analysis to social networking — built for the modern real estate professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>

        <AppShowcase />
      </div>
    </section>
  )
}

function AppShowcase() {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`mt-24 relative transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
      <div className="relative mx-auto max-w-4xl">
        <div className="aspect-[16/9] rounded-2xl glass-strong overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy-mid flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 p-8 w-full">
              {[
                { label: 'Explore', emoji: '🗺️', color: 'from-emerald/20 to-emerald/5' },
                { label: 'Dashboard', emoji: '📊', color: 'from-amber/20 to-amber/5' },
                { label: 'AI Report', emoji: '🤖', color: 'from-emerald/20 to-emerald-deep/10' },
              ].map((screen) => (
                <div key={screen.label} className={`aspect-[9/16] rounded-xl bg-gradient-to-br ${screen.color} border border-white/10 flex flex-col items-center justify-center gap-3`}>
                  <span className="text-4xl">{screen.emoji}</span>
                  <span className="text-sm text-gray-400">{screen.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute -inset-4 bg-gradient-to-r from-emerald/10 via-amber/10 to-emerald/10 rounded-3xl blur-xl -z-10" />
      </div>
    </div>
  )
}
