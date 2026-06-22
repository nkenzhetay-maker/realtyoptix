import { Home, Brain, TrendingUp, BarChart3, Zap, Globe, Video, Users } from 'lucide-react'

function StatBlock({ label, value, unit }) {
  return (
    <div className="flex flex-col items-end text-right">
      <span className="text-[11px] uppercase tracking-[0.18em] text-white/50 leading-tight">{label}</span>
      <span className="mt-1 text-3xl md:text-4xl font-semibold tracking-tight text-white leading-none">
        {value}
        {unit && <span className="text-base md:text-lg text-emerald ml-1 align-top">{unit}</span>}
      </span>
    </div>
  )
}

export default function ScrollSections() {
  return (
    <>
      {/* 1. HERO */}
      <section id="hero" data-section="hero" className="scroll-section relative">
        <div className="max-w-[640px] md:max-w-[52%] text-center lg:text-left mx-auto lg:mx-0">
          <p className="eyebrow-ro mb-6" data-hero-text>AI-Powered Real Estate Intelligence</p>
          <h1 className="headline-ro" data-hero-text>
            <span className="text-white">Realty</span>{' '}
            <span className="text-gradient-ro">Optix</span>
          </h1>
          <p className="mt-8 max-w-md mx-auto lg:mx-0 text-base md:text-lg text-white/60 leading-relaxed" data-hero-text>
            8 AI agents analyze properties, predict markets, and generate
            investment reports — instantly. Your unfair advantage in real estate.
          </p>
          <div className="flex gap-4 mt-10 justify-center lg:justify-start" data-hero-text>
            <a href="#pricing" className="cta-ro">Start Free Trial →</a>
            <a href="#features" className="cta-ro-outline">Watch Demo</a>
          </div>
        </div>
        <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 text-xs tracking-wider">
          <span>Scroll to explore</span>
          <span className="block w-px h-8 bg-white/20" />
        </div>
      </section>

      {/* 2. AI AGENTS */}
      <section id="agents" data-section="agents" className="scroll-section relative">
        <div className="max-w-[460px] md:max-w-[45%] lg:mt-[6vh]">
          <p className="eyebrow-ro mb-4">Powered by GPT-4o</p>
          <h2 className="headline-md-ro">
            8 AI<br />
            <span className="text-gradient-ro">Agents.</span>
          </h2>
          <p className="mt-6 text-white/60 leading-relaxed">
            ValuaAgent, MarketIQ, RentIQ, InvestIQ, MortgageIQ, RiskIQ, DocIQ,
            and PortIQ — each specialized to analyze a different dimension of
            every property.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['Valuation', 'Market', 'Rent', 'Investment', 'Risk'].map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-emerald/10 text-emerald border border-emerald/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURES + STATS */}
      <section id="features" data-section="features" className="scroll-section relative">
        <div className="lg:absolute lg:bottom-[18vh] lg:left-[10vw] max-w-[420px]">
          <p className="eyebrow-ro mb-3">Key Features</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
            Everything you need<br />
            <span className="text-gradient-ro">in one app.</span>
          </h2>
        </div>
        <div className="mt-6 lg:mt-0 lg:absolute lg:top-[22vh] lg:right-[10vw] flex flex-row lg:flex-col gap-5 lg:gap-7 items-start lg:items-end">
          <StatBlock label="AI Reports" value="∞" />
          <StatBlock label="Languages" value="8" />
          <StatBlock label="Video Tours" value="AI" unit="gen" />
        </div>
      </section>

      {/* 4. MARKET STATS */}
      <section id="market" data-section="stats" className="scroll-section relative">
        <div className="max-w-[480px] md:max-w-[40%]">
          <p className="eyebrow-ro mb-4">Market Opportunity</p>
          <h2 className="headline-md-ro">
            <span className="text-gradient-ro">$1.2T</span><br />
            Market.
          </h2>
          <p className="mt-6 text-white/60 leading-relaxed">
            1.5 million active US agents compete in a $1.2 trillion residential
            market — yet 92% still rely on gut feeling. Realty Optix brings
            AI-driven intelligence to every deal.
          </p>
          <div className="flex gap-8 mt-8">
            <div>
              <div className="text-2xl font-bold text-emerald">$48B</div>
              <div className="text-xs text-white/40 mt-1">TAM</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber">$8.4B</div>
              <div className="text-xs text-white/40 mt-1">SAM</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">$420M</div>
              <div className="text-xs text-white/40 mt-1">SOM</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING */}
      <section id="pricing" data-section="pricing" className="scroll-section relative">
        <div className="max-w-[440px] md:max-w-[40%]">
          <p className="eyebrow-ro mb-4">Simple Pricing</p>
          <h2 className="headline-md-ro">
            Start<br />
            <span className="text-gradient-ro">free.</span>
          </h2>
          <p className="mt-6 text-white/60 leading-relaxed">
            3-month free trial with full PRO features. Then from just $4.99/mo.
            No credit card required to start.
          </p>
          <div className="mt-8 space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-white font-medium">PRO Monthly</span>
              <span className="text-emerald font-bold">$4.99<span className="text-white/40 text-sm">/mo</span></span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald/10 border border-emerald/20">
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">PRO Annual</span>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber text-navy">SAVE 33%</span>
              </div>
              <span className="text-emerald font-bold">$39.99<span className="text-white/40 text-sm">/yr</span></span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-white font-medium">PRO+</span>
              <span className="text-amber font-bold">$119<span className="text-white/40 text-sm">/yr</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section id="cta" data-section="cta" className="scroll-section relative">
        <div className="w-full flex items-center justify-center lg:justify-end">
          <div className="text-center lg:text-right max-w-[85%] lg:max-w-[min(520px,46vw)] w-full">
            <p className="eyebrow-ro mb-4">Get Started Today</p>
            <h2 className="final-title-ro">
              Your AI<br />
              <span className="text-gradient-ro">Real Estate</span><br />
              <span className="relative inline-block">
                <span className="relative z-10 text-navy px-6 font-bold">Partner</span>
                <span className="absolute inset-0 bg-emerald rounded-full -z-0 translate-y-[6%]" />
              </span>
            </h2>
            <div className="mt-8 flex justify-center lg:justify-end">
              <a href="#" className="cta-ro">Start Free Trial →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
