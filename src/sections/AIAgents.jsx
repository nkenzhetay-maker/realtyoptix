import { useInView } from '../hooks/useInView'

const agents = [
  { name: 'ValuaAgent', desc: 'AI property valuation with confidence scoring and comp analysis.', color: '#2DD4A0', gradient: 'from-[#2DD4A0]/20 to-[#2DD4A0]/5' },
  { name: 'MarketIQ', desc: 'Real-time market trends, price predictions, and neighborhood analytics.', color: '#D4A843', gradient: 'from-[#D4A843]/20 to-[#D4A843]/5' },
  { name: 'RentIQ', desc: 'Rental yield analysis, vacancy rates, and tenant demand forecasting.', color: '#5EEAD4', gradient: 'from-[#5EEAD4]/20 to-[#5EEAD4]/5' },
  { name: 'InvestIQ', desc: 'ROI calculations, cash flow projections, and investment scoring.', color: '#2DD4A0', gradient: 'from-[#2DD4A0]/20 to-[#2DD4A0]/5' },
  { name: 'MortgageIQ', desc: 'Rate comparison, affordability analysis, and payment optimization.', color: '#D4A843', gradient: 'from-[#D4A843]/20 to-[#D4A843]/5' },
  { name: 'RiskIQ', desc: 'Risk assessment including flood zones, crime rates, and market volatility.', color: '#ef4444', gradient: 'from-[#ef4444]/20 to-[#ef4444]/5' },
  { name: 'DocIQ', desc: 'Document analysis, contract review, and compliance checking.', color: '#5EEAD4', gradient: 'from-[#5EEAD4]/20 to-[#5EEAD4]/5' },
  { name: 'PortIQ', desc: 'Portfolio management, diversification analysis, and performance tracking.', color: '#D4A843', gradient: 'from-[#D4A843]/20 to-[#D4A843]/5' },
]

function AgentCard({ agent, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`group relative p-6 rounded-2xl glass hover:glass-strong transition-all duration-700 hover:-translate-y-1 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
              style={{ background: `${agent.color}18`, color: agent.color, border: `1px solid ${agent.color}30` }}
            >
              AI
            </div>
            <h3 className="text-white font-semibold">{agent.name}</h3>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full" style={{ color: agent.color, background: `${agent.color}12`, border: `1px solid ${agent.color}20` }}>
            Active
          </span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{agent.desc}</p>
      </div>
    </div>
  )
}

export default function AIAgents() {
  const [titleRef, titleInView] = useInView()

  return (
    <section id="agents" className="relative py-32">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald/3 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs font-mono text-emerald uppercase tracking-[0.2em] mb-4 block">AI Technology</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            8 AI agents working<br />
            <span className="gradient-text">for you, 24/7.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Powered by AI. Each agent specializes in a different aspect of real estate intelligence.
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
