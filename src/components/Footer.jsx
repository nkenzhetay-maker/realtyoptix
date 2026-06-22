import { Home } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald flex items-center justify-center">
                <Home size={16} className="text-white" />
              </div>
              <span className="text-lg font-bold text-white">Realty <span className="gradient-text-amber">Optix</span></span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              AI-Powered Real Estate Intelligence Platform. Transform property analysis with 8 AI agents.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {['AI Agents', 'Property Reels', 'Video Tours', 'AI Reports', 'CRM'].map(item => (
                <li key={item}>
                  <a href="#features" className="text-sm text-gray-500 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Pricing', 'Privacy Policy', 'Terms of Service', 'EULA'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Fair Housing Act', 'AI Disclaimer', 'CCPA / GDPR', 'Data Privacy', 'Accessibility'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; 2026 Realty Optix. All rights reserved. AI-generated estimates are not professional appraisals.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-600">iOS</span>
            <span className="text-xs text-gray-600">Android</span>
            <span className="text-xs text-gray-600">8 Languages</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
