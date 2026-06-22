import { ArrowRight, Home } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export default function CTA() {
  const [ref, inView] = useInView()

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-amber/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-xs text-emerald-glow">
            <Home size={12} />
            Available on iOS & Android
          </div>

          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Real Estate<br />
            With <span className="gradient-text">Artificial Intelligence</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Join thousands of forward-thinking agents using AI to analyze properties,
            connect with clients, and close deals faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 px-10 py-5 rounded-full bg-emerald text-white font-medium hover:bg-emerald-glow transition-all glow-emerald text-lg"
            >
              Join Realty Optix
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full glass text-gray-300 hover:text-white transition-colors"
            >
              View Pricing
            </a>
          </div>

          <p className="text-gray-600 text-sm mt-8">
            3 months free trial · No credit card · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
