import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const { y = 60, opacity = 0, duration = 1, delay = 0, start = 'top 85%' } = options

    gsap.fromTo(el,
      { y, opacity },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return ref
}

export function useParallax(speed = 0.5) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return ref
}
