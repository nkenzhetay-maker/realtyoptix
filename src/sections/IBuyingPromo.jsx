import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '1',
    title: 'Property Details',
    desc: 'Type, bedrooms, sqft, condition — takes 2 minutes.',
    icon: '🏠',
  },
  {
    num: '2',
    title: 'Photos & Location',
    desc: 'Upload photos, share GPS or enter address.',
    icon: '📸',
  },
  {
    num: '3',
    title: 'Verify by SMS',
    desc: 'One-tap phone verification. No account needed.',
    icon: '📱',
  },
  {
    num: '4',
    title: 'Cash Offer + Visit',
    desc: 'Up to 85% of market value. Book a free office appointment.',
    icon: '💰',
  },
]

export default function IBuyingPromo() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('ibuying-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="ibuying-section">
      <div className="ibuying-inner">
        <div className="ibuying-header">
          <span className="ibuying-badge">SELLFAST!</span>
          <h2 className="headline-md-ro ibuying-title">
            Sell Your Home.<br />
            <span className="text-gradient-amber">Get Cash. Fast.</span>
          </h2>
          <p className="ibuying-subtitle">
            Homeowners get an instant cash offer in under 5 minutes —
            up to 85% of market value, based on how fast your home can sell.
            No commissions, no waiting.
          </p>
        </div>

        <div className="ibuying-steps">
          {steps.map((step, i) => (
            <div key={step.num} className="ibuying-step" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="ibuying-step-icon">{step.icon}</div>
              <div className="ibuying-step-num">{step.num}</div>
              <h3 className="ibuying-step-title">{step.title}</h3>
              <p className="ibuying-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="ibuying-highlights">
          <div className="ibuying-highlight">
            <span className="ibuying-highlight-value">80–85%</span>
            <span className="ibuying-highlight-label">of Market Value</span>
          </div>
          <div className="ibuying-divider" />
          <div className="ibuying-highlight">
            <span className="ibuying-highlight-value">7 Days</span>
            <span className="ibuying-highlight-label">Cash in Hand</span>
          </div>
          <div className="ibuying-divider" />
          <div className="ibuying-highlight">
            <span className="ibuying-highlight-value">$0</span>
            <span className="ibuying-highlight-label">Commission</span>
          </div>
          <div className="ibuying-divider" />
          <div className="ibuying-highlight">
            <span className="ibuying-highlight-value">24h</span>
            <span className="ibuying-highlight-label">Offer Validity</span>
          </div>
        </div>

        <div className="ibuying-cta-row">
          <a href="#" className="cta-ro-amber">Get Your Cash Offer →</a>
          <span className="ibuying-cta-note">
            No obligation · Under 5 minutes · Final price confirmed at a free in-office evaluation
          </span>
        </div>
      </div>
    </section>
  )
}
