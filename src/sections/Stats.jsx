import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'

function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className="font-mono">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { value: 1.2, suffix: 'T', prefix: '$', label: 'Market Opportunity', color: '#2DD4A0' },
  { value: 1500000, suffix: '+', prefix: '', label: 'Active US Agents', color: '#D4A843' },
  { value: 8, suffix: '', prefix: '', label: 'AI Agents', color: '#2DD4A0' },
  { value: 8, suffix: '', prefix: '', label: 'Languages', color: '#D4A843' },
]

export default function Stats() {
  const [titleRef, titleInView] = useInView()
  const [gridRef, gridInView] = useInView()
  const [tamRef, tamInView] = useInView()

  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-light/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs font-mono text-amber uppercase tracking-[0.2em] mb-4 block">Market Opportunity</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The numbers speak<br />
            <span className="gradient-text">for themselves.</span>
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center p-8 rounded-2xl glass transition-all duration-700 ${gridInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-3" style={{ color: stat.color }}>
                {stat.prefix === '$' ? (
                  <span className="font-mono">${stat.value}T</span>
                ) : (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div ref={tamRef} className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-1000 delay-300 ${tamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { label: 'TAM', value: '$1.2T', desc: 'Total US residential real estate market', color: '#2DD4A0' },
            { label: 'SAM', value: '$3.6B', desc: 'Real estate SaaS tools market', color: '#D4A843' },
            { label: 'SOM', value: '$180M', desc: 'AI-powered agent tools (Year 3)', color: '#5EEAD4' },
          ].map((item) => (
            <div key={item.label} className="p-6 rounded-2xl glass text-center">
              <span className="text-xs font-mono tracking-wider" style={{ color: item.color }}>{item.label}</span>
              <div className="text-3xl font-bold text-white mt-2 mb-1">{item.value}</div>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
