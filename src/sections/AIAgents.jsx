import { useInView } from '../hooks/useInView'
import {
  TrendingUp, BarChart3, Home, DollarSign,
  Calculator, ShieldCheck, FileText, Briefcase
} from 'lucide-react'

const agents = [
  { name: 'ValuaAgent', desc: 'AI property valuation with comparable analysis and market adjustments', icon: TrendingUp, color: '#3b82f6', glow: 'from-blue-500/20 to-blue-600/5' },
  { name: 'MarketIQ', desc: 'Real-time market intelligence, trends, and neighborhood analytics', icon: BarChart3, color: '#8b5cf6', glow: 'from-purple-500/20 to-purple-600/5' },
  { name: 'RentIQ', desc: 'Rental yield analysis, vacancy rates, and tenant market insights', icon: Home, color: '#10b981', glow: 'from-emerald-500/20 to-emerald-600/5' },
  { name: 'InvestIQ', desc: 'ROI scoring, cap rate analysis, and investment grade assessment', icon: DollarSign, color: '#f59e0b', glow: 'from-amber-500/20 to-amber-600/5' },
  { name: 'MortgageIQ', desc: 'Mortgage optimization, rate comparison, and affordability modeling', icon: Calculator, color: '#ef4444', glow: 'from-red-500/20 to-red-600/5' },
  { name: 'RiskIQ', desc: 'Risk assessment including flood zones, crime data, and market volatility', icon: ShieldCheck, color: '#06b6d4', glow: 'from-cyan-500/20 to-cyan-600/5' },
  { name: 'DocIQ', desc: 'Document intelligence — contracts, disclosures, and legal analysis', icon: FileText, color: '#ec4899', glow: 'from-pink-500/20 to-pink-600/5' },
  { name: 'PortIQ', desc: 'Portfolio management, diversification analysis, and performance tracking', icon: Briefcase, color: '#f97316', glow: 'from-orange-500/20 to-orange-600/5' },
]

function AgentCard({ agent, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative p-6 rounded-2xl glass hover:glass-strong transition-all duration-500 h-full">
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${agent.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="relative">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${agent.color}15`, border: `1px solid ${agent.color}30` }}
          >
            <agent.icon size={22} style={{ color: agent.color }} />
          </div>
          <h3 className="text-white font-semibold text-lg mb-2 font-mono">{agent.name}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{agent.desc}</p>
          <div className="mt-4 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: agent.color }} />
            <span className="text-xs" style={{ color: agent.color }}>Active</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AIAgents() {
  const [titleRef, titleInView] = useInView()

  return (
    <section id="agents" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs font-mono text-purple uppercase tracking-[0.2em] mb-4 block">Powered by GPT-4o</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            8 AI Agents.<br />
            <span className="gradient-text">One Platform.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Each agent is specialized in a different aspect of real estate intelligence,
            working together to give you comprehensive property analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((agent, i) => (
            <AgentCard key={agent.name} agent={agent} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
