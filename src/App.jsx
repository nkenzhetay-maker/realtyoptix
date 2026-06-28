import { lazy, Suspense } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Header3D from './components/Header3D'
import ScrollSections from './components/ScrollSections'
import AppGallery from './sections/AppGallery'
import IBuyingPromo from './sections/IBuyingPromo'

const Scene3D = lazy(() => import('./components/Scene3D'))

export default function App() {
  return (
    <>
      <main className="relative">
        <LoadingScreen />
        <Header3D />
        <div className="scene-fixed">
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </div>
        <div className="section-stack">
          <ScrollSections />
        </div>
        <IBuyingPromo />
        <AppGallery />
      </main>
      <footer className="relative z-10 py-12 px-[8vw] text-xs text-white/30 flex justify-between border-t border-white/5">
        <span>© 2026 Realty Optix. All rights reserved.</span>
        <span>iOS · Android · 8 Languages</span>
      </footer>
    </>
  )
}
