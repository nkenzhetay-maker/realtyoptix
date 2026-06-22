import { useInView } from '../hooks/useInView'
import { Check, Star, Zap, Crown } from 'lucide-react'

const plans = [
  {
    name: 'Free Trial', price: '$0', period: '3 months',
    desc: 'Full PRO access for 3 months. No credit card required.',
    icon: Zap, color: '#10b981',
    features: ['All PRO features unlocked', '10 AI reports / month', '10 listings', '10 video tours / month', '8 AI agents access', 'Property Reels'],
    cta: 'Start Free Trial', popular: false,
  },
  {
    name: 'PRO', price: '$4.99', period: '/month',
    desc: 'Essential tools for active agents.',
    icon: Star, color: '#3b82f6',
    features: ['10 AI reports / month', '10 active listings', '10 video tours / month', 'All 8 AI agents', 'CRM & lead management', 'Multi-language support'],
    cta: 'Get PRO', popular: false,
  },
  {
    name: 'PRO Annual', price: '$39.99', period: '/year',
    desc: 'Save 33% — best value for growing teams.',
    icon: Star, color: '#8b5cf6',
    features: ['25 AI reports / month', '25 active listings', '25 video tours / month', 'All 8 AI agents', 'Priority support', 'Advanced analytics'],
    cta: 'Get PRO Annual', popular: true, badge: 'SAVE 33%',
  },
  {
    name: 'PRO+', price: '$119', period: '/year',
    desc: 'Unlimited power for top producers.',
    icon: Crown, color: '#f59e0b',
    features: ['Unlimited AI reports', '50 active listings', '50 video tours / month', 'All 8 AI agents', 'Dedicated support', 'White-label reports'],
    cta: 'Get PRO+', popular: false,
  },
]

function PlanCard({ plan, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`relative rounded-2xl p-6 ${plan.popular ? 'glass-strong border-purple/30' : 'glass'} transition-all duration-700 hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-purple to-electric text-[10px] font-bold text-white tracking-wider">
          {plan.badge}
        </div>
      )}

      <div className="mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
          style={{ background: `${plan.color}15`, border: `1px solid ${plan.color}30` }}
        >
          <plan.icon size={20} style={{ color: plan.color }} />
        </div>
        <h3 className="text-white font-semibold text-lg">{plan.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{plan.desc}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{plan.price}</span>
        <span className="text-gray-500 text-sm ml-1">{plan.period}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map(f => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
            <Check size={14} className="mt-0.5 shrink-0" style={{ color: plan.color }} />
            {f}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-xl text-sm font-medium transition-all ${
          plan.popular
            ? 'bg-gradient-to-r from-purple to-electric text-white glow-purple hover:opacity-90'
            : 'glass text-gray-300 hover:text-white'
        }`}
      >
        {plan.cta}
      </button>
    </div>
  )
}

export default function Pricing() {
  const [titleRef, titleInView] = useInView()

  return (
    <section id="pricing" className="relative py-32">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs font-mono text-purple uppercase tracking-[0.2em] mb-4 block">Pricing</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Start free.<br />
            <span className="gradient-text">Scale as you grow.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            3 months free trial with full PRO access. No credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
