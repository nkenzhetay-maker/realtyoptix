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
        <div className="max-w-[640px] md:max-w-[48%] text-center lg:text-left mx-auto lg:mx-0">
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
          <div className="flex items-center gap-8 mt-12" data-hero-text>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-emerald">8</span>
              <span className="text-[10px] uppercase tracking-wider text-white/40">AI Agents</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-amber">8</span>
              <span className="text-[10px] uppercase tracking-wider text-white/40">Languages</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">iOS & Android</span>
              <span className="text-[10px] uppercase tracking-wider text-white/40">Platforms</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 text-xs tracking-wider">
          <span>Scroll to explore</span>
          <div className="scroll-cue" />
        </div>
      </section>

      {/* 2. AI AGENTS */}
      <section id="agents" data-section="agents" className="scroll-section relative">
        <div className="section-content max-w-[460px] md:max-w-[42%] lg:mt-[4vh]">
          <p className="eyebrow-ro mb-4">Powered by AI</p>
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
            {['ValuaAgent', 'MarketIQ', 'RentIQ', 'InvestIQ', 'MortgageIQ', 'RiskIQ', 'DocIQ', 'PortIQ'].map(tag => (
              <span key={tag} className="px-3 py-1.5 text-xs font-medium rounded-full bg-emerald/10 text-emerald border border-emerald/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURES + STATS */}
      <section id="features" data-section="features" className="scroll-section relative">
        <div className="section-content max-w-[420px] md:max-w-[42%]">
          <p className="eyebrow-ro mb-3">Key Features</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
            Everything you need<br />
            <span className="text-gradient-ro">in one app.</span>
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { icon: '🏠', label: 'Property Search' },
              { icon: '📊', label: 'AI Reports' },
              { icon: '🎬', label: 'Video Tours' },
              { icon: '📱', label: 'Property Reels' },
            ].map(f => (
              <div key={f.label} className="flex items-center gap-2 text-sm text-white/70">
                <span className="text-lg">{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-row gap-5 items-start">
            <StatBlock label="AI Reports" value="∞" />
            <StatBlock label="Languages" value="8" />
            <StatBlock label="Video Tours" value="AI" unit="gen" />
            <StatBlock label="Calculators" value="3" unit="+" />
          </div>
        </div>
      </section>

      {/* 4. MARKET STATS */}
      <section id="market" data-section="stats" className="scroll-section relative">
        <div className="section-content max-w-[480px] md:max-w-[42%]">
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
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-amber">$8.4B</div>
              <div className="text-xs text-white/40 mt-1">SAM</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">$420M</div>
              <div className="text-xs text-white/40 mt-1">SOM</div>
            </div>
          </div>
          <p className="mt-6 text-xs text-white/30">
            Target: 1.5M+ active US real estate agents · Go-to-market: Florida first, then nationwide
          </p>
        </div>
      </section>

      {/* 5. PRICING */}
      <section id="pricing" data-section="pricing" className="scroll-section relative">
        <div className="section-content max-w-[440px] md:max-w-[40%]">
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
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <span className="text-white font-medium">Free Trial</span>
                <span className="block text-[11px] text-white/40 mt-0.5">3 months · All PRO features</span>
              </div>
              <span className="text-emerald font-bold text-lg">$0</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <span className="text-white font-medium">PRO Monthly</span>
                <span className="block text-[11px] text-white/40 mt-0.5">10 listings · 10 AI reports/mo</span>
              </div>
              <span className="text-emerald font-bold text-lg">$4.99<span className="text-white/40 text-sm">/mo</span></span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-emerald/10 border border-emerald/25 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-2 py-0.5 text-[9px] font-bold bg-amber text-navy rounded-bl-lg">SAVE 33%</div>
              <div>
                <span className="text-white font-medium">PRO Annual</span>
                <span className="block text-[11px] text-white/40 mt-0.5">25 listings · 25 AI reports/mo</span>
              </div>
              <span className="text-emerald font-bold text-lg">$39.99<span className="text-white/40 text-sm">/yr</span></span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <span className="text-white font-medium">PRO+</span>
                <span className="block text-[11px] text-white/40 mt-0.5">50 listings · Unlimited reports</span>
              </div>
              <span className="text-amber font-bold text-lg">$119<span className="text-white/40 text-sm">/yr</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INVESTORS */}
      <section id="investors" data-section="investors" className="scroll-section relative">
        <div className="section-content max-w-[520px] md:max-w-[44%]">
          <p className="eyebrow-ro mb-4">For Investors</p>
          <h2 className="headline-md-ro">
            Investor<br />
            <span className="text-gradient-ro">Pitch Deck.</span>
          </h2>
          <p className="mt-6 text-white/60 leading-relaxed">
            14-slide deck covering our AI technology, $1.2T market opportunity,
            revenue model, go-to-market strategy, and growth projections.
          </p>
          <div className="flex flex-col gap-3 mt-8">
            <a
              href="/RealtyOptix_Investor_Pitch.pptx"
              download
              className="cta-ro inline-flex items-center gap-3 w-fit"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Pitch Deck
            </a>
            <span className="text-[11px] text-white/30">PPTX · 14 slides · 22 MB</span>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-6">
            {[
              { icon: '🎯', title: 'TAM $48B', desc: 'Total addressable market' },
              { icon: '🤖', title: '8 AI Agents', desc: 'AI-powered analysis' },
              { icon: '📈', title: '3-Year Plan', desc: 'Aggressive growth strategy' },
              { icon: '🌎', title: 'Florida First', desc: 'Then nationwide expansion' },
            ].map(item => (
              <div key={item.title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xl">{item.icon}</span>
                <div className="mt-2 text-sm font-medium text-white">{item.title}</div>
                <div className="text-[11px] text-white/40 mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section id="cta" data-section="cta" className="scroll-section relative">
        <div className="section-content w-full flex items-center justify-center lg:justify-start">
          <div className="text-center lg:text-left max-w-[85%] lg:max-w-[min(520px,46vw)] w-full">
            <p className="eyebrow-ro mb-4">Get Started Today</p>
            <h2 className="final-title-ro">
              Your AI<br />
              <span className="text-gradient-ro">Real Estate</span><br />
              <span className="relative inline-block">
                <span className="relative z-10 text-navy px-6 font-bold">Partner</span>
                <span className="absolute inset-0 bg-emerald rounded-full -z-0 translate-y-[6%]" />
              </span>
            </h2>
            <p className="mt-6 text-white/50 text-sm max-w-sm">
              Join thousands of agents using AI to close more deals, faster.
            </p>
            <div className="mt-8 flex flex-col items-center lg:items-start gap-3">
              <a href="#" className="cta-ro text-lg !px-10 !py-4">Start Free Trial →</a>
              <span className="text-[11px] text-white/30">No credit card required · 3 months free</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
