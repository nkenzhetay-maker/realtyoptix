import { useInView } from '../hooks/useInView'
import { AlertTriangle, Clock, Search, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: Search,
    title: 'No AI in Daily Workflow',
    desc: '92% of agents still rely on gut feeling and outdated comps for pricing decisions.',
    stat: '92%',
    color: '#ef4444',
  },
  {
    icon: TrendingDown,
    title: 'Off-Market Deals Are Hidden',
    desc: 'Pocket listings and pre-market deals are invisible without the right connections.',
    stat: '$1.2T',
    color: '#f59e0b',
  },
  {
    icon: Clock,
    title: 'Hours Wasted on Reports',
    desc: 'Agents spend 5+ hours per week manually compiling property analysis reports.',
    stat: '5hrs',
    color: '#8b5cf6',
  },
  {
    icon: AlertTriangle,
    title: 'Fragmented Tools',
    desc: 'Average agent uses 6+ separate apps for CRM, listings, comps, and marketing.',
    stat: '6+',
    color: '#3b82f6',
  },
]

export default function Problem() {
  const [titleRef, titleInView] = useInView()

  return (
    <section className="relative py-32">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/3 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs font-mono text-red-400 uppercase tracking-[0.2em] mb-4 block">The Problem</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real estate is stuck<br />
            <span className="text-red-400">in the past.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            1.5 million US agents compete in a $1.2 trillion market — yet most lack the data-driven tools to win.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <ProblemCard key={p.title} problem={p} index={i} />
          ))}
        </div>

        {/* Transition arrow */}
        <div className="mt-20 text-center">
          <div className={`inline-flex flex-col items-center gap-3 transition-all duration-1000 ${titleInView ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-gray-500 text-sm">There's a better way</span>
            <div className="w-px h-12 bg-gradient-to-b from-red-400/50 to-emerald/50" />
            <div className="w-3 h-3 rounded-full bg-emerald animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemCard({ problem, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`group relative p-8 rounded-2xl glass hover:glass-strong transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-6">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: `${problem.color}12`, border: `1px solid ${problem.color}25` }}
        >
          <problem.icon size={24} style={{ color: problem.color }} />
        </div>
        <span
          className="text-3xl font-bold font-mono"
          style={{ color: `${problem.color}90` }}
        >
          {problem.stat}
        </span>
      </div>
      <h3 className="text-white font-semibold text-xl mb-3">{problem.title}</h3>
      <p className="text-gray-400 leading-relaxed">{problem.desc}</p>
    </div>
  )
}
