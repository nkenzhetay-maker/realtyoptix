import { useEffect, useRef } from 'react'

const screens = [
  { src: '/screens/s01_privacy.png', label: 'Privacy & Consent' },
  { src: '/screens/00_login.png', label: 'Sign In' },
  { src: '/screens/01_home_explore.png', label: 'Explore' },
  { src: '/screens/03_dashboard.png', label: 'Dashboard' },
  { src: '/screens/05_reports.png', label: 'AI Reports' },
  { src: '/screens/07_ai_report_content.png', label: 'AI Report Detail' },
  { src: '/screens/s03_property.png', label: 'Cash Offer — Property' },
  { src: '/screens/s04_contact.png', label: 'Cash Offer — Contact' },
  { src: '/screens/s05_photos.png', label: 'Cash Offer — Photos' },
]

function PhoneMockup({ src, label, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('gallery-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="gallery-item"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="phone-frame">
        <div className="phone-notch" />
        <img
          src={src}
          alt={label}
          loading="lazy"
          draggable={false}
          className="phone-screen-img"
        />
      </div>
      <span className="phone-label">{label}</span>
    </div>
  )
}

export default function AppGallery() {
  return (
    <section className="app-gallery-section">
      <div className="app-gallery-header">
        <p className="eyebrow-ro mb-4">App Preview</p>
        <h2 className="headline-md-ro app-gallery-title">
          Every Screen,<br />
          <span className="text-gradient-ro">Designed for Agents.</span>
        </h2>
        <p className="app-gallery-subtitle">
          From onboarding to AI reports — a seamless experience built for
          real estate professionals.
        </p>
      </div>

      <div className="app-gallery-track">
        {screens.map((s, i) => (
          <PhoneMockup key={s.label} src={s.src} label={s.label} index={i} />
        ))}
      </div>
    </section>
  )
}
