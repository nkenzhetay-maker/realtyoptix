import { useEffect, useState } from 'react'
import { lockScroll, onTexturesReady, markIntroStart } from '../lib/sceneReady'
import { Home } from 'lucide-react'

export default function LoadingScreen() {
  const [texturesReady, setTexturesReady] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    lockScroll()
  }, [])

  useEffect(() => onTexturesReady(() => setTexturesReady(true)), [])

  useEffect(() => {
    if (!texturesReady || hidden) return
    const hold = window.setTimeout(() => {
      setHidden(true)
      window.setTimeout(() => markIntroStart(), 520)
    }, 280)
    return () => window.clearTimeout(hold)
  }, [texturesReady, hidden])

  return (
    <div
      className={`loading-screen${hidden ? ' loading-screen--hidden' : ''}`}
      aria-hidden={hidden}
    >
      <div className="loading-screen__inner">
        <div className="loading-screen__logo-wrap">
          <div className="loading-screen__icon">
            <Home size={20} color="white" />
          </div>
          <span className="loading-screen__brand">
            Realty <span className="loading-screen__brand-accent">Optix</span>
          </span>
        </div>
        <div className="loading-screen__caption">Preparing 3D Experience</div>
        <div className="loading-screen__bar" aria-hidden>
          <div className="loading-screen__bar-fill" />
        </div>
      </div>
    </div>
  )
}
