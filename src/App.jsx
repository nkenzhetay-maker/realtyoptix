import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import AIAgents from './sections/AIAgents'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import Stats from './sections/Stats'
import CTA from './sections/CTA'

export default function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <AIAgents />
      <Stats />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
