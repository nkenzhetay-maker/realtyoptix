import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { ArrowRight, Play } from 'lucide-react'
import FloatingPhone from '../components/FloatingPhone'
import ParticleField from '../components/ParticleField'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    const timer = setTimeout(() => setShow(true), 100)
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050510]">
      {/* 3D Background - right side */}
      <div className="absolute top-0 right-0 w-full h-full z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <FloatingPhone scrollY={scrollY} />
            <ParticleField count={1500} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.3}
              maxPolarAngle={Math.PI / 1.8}
              minPolarAngle={Math.PI / 2.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#050510] via-[#050510]/70 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050510] to-transparent z-[2] pointer-events-none" />

      {/* Content */}
      <div className="relative z-[5] max-w-7xl mx-auto px-6 pt-32 pb-20 w-full pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-xs text-electric-glow transition-all duration-1000 delay-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            Now in Beta — 8 AI Agents Active
          </div>

          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6 transition-all duration-1000 delay-500 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="text-white">Realty</span>
            <br />
            <span className="gradient-text">Optix</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed transition-all duration-1000 delay-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            AI-Powered Real Estate Intelligence. 8 AI agents analyze properties,
            predict markets, and generate investment reports — instantly.
          </p>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-[900ms] ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-electric to-purple text-white font-medium text-sm hover:opacity-90 transition-all glow-blue"
            >
              Start Free Trial
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#product"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-gray-300 hover:text-white transition-colors text-sm"
            >
              <Play size={16} />
              Watch AI Demo
            </a>
          </div>

          <div
            className={`flex items-center gap-8 mt-14 text-xs text-gray-500 transition-all duration-1000 delay-[1300ms] ${show ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="flex items-center gap-2">
              <span className="text-electric font-mono text-sm">8</span> AI Agents
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple font-mono text-sm">8</span> Languages
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald font-mono text-sm">iOS</span> & Android
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-1000 delay-[2000ms] ${show ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-electric animate-bounce" />
        </div>
      </div>
    </section>
  )
}
