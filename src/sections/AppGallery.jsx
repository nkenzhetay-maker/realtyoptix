import { useEffect, useRef } from 'react'

const screens = [
  { src: '/screens/00_login.png', label: 'Login' },
  { src: '/screens/14_create_account.png', label: 'Create Account' },
  { src: '/screens/15_user_type.png', label: 'User Type' },
  { src: '/screens/01_home_explore.png', label: 'Home / Explore' },
  { src: '/screens/03_dashboard.png', label: 'Dashboard' },
  { src: '/screens/05_reports.png', label: 'Reports' },
  { src: '/screens/13_referrals.png', label: 'Referrals' },
  { src: '/screens/09_profile.png', label: 'Profile' },
  { src: '/screens/10_profile_full.png', label: 'Full Profile' },
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
