import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import PhoneModel from './PhoneModel'
import ProceduralEnvironment from './ProceduralEnvironment'

export default function Scene3D() {
  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(max-width: 1023px)').matches
  }, [])

  return (
    <Canvas
      dpr={isMobile ? [0.85, 1.1] : [1, 2]}
      gl={{
        antialias: !isMobile,
        alpha: true,
        powerPreference: isMobile ? 'low-power' : 'high-performance',
      }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.toneMappingExposure = isMobile ? 1.15 : 1.25
        gl.outputColorSpace = THREE.SRGBColorSpace
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={32} />

      <ambientLight intensity={0.3} />
      <directionalLight position={[-6, 3, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[5, 2, 4]} intensity={0.7} color="#ffffff" />
      {!isMobile && (
        <directionalLight position={[3, 3, -6]} intensity={1.2} color="#d4f0ff" />
      )}

      <Suspense fallback={null}>
        {isMobile ? (
          <ProceduralEnvironment intensity={1.0} />
        ) : (
          <Environment preset="studio" environmentIntensity={1.3} />
        )}
        <PhoneModel />
      </Suspense>
    </Canvas>
  )
}
