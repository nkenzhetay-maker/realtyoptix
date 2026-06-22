import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

export default function FloatingPhone({ scrollY = 0 }) {
  const group = useRef()

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    group.current.rotation.y = Math.sin(t * 0.3) * 0.15 + scrollY * 0.002
    group.current.position.y = Math.sin(t * 0.5) * 0.15
    group.current.rotation.x = Math.sin(t * 0.2) * 0.05
  })

  return (
    <group ref={group} position={[3, 0, 0]} scale={1.2}>
      <RoundedBox args={[2.2, 4.4, 0.15]} radius={0.2} smoothness={8}>
        <meshPhysicalMaterial
          color="#0F1D32"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </RoundedBox>

      <RoundedBox args={[1.95, 4.1, 0.01]} radius={0.15} smoothness={4} position={[0, 0, 0.08]}>
        <meshBasicMaterial color="#0A1628" />
      </RoundedBox>

      <group position={[0, 0, 0.1]}>
        {/* Amber top banner like the app */}
        <mesh position={[0, 1.7, 0]}>
          <planeGeometry args={[1.6, 0.08]} />
          <meshBasicMaterial color="#D4A843" transparent opacity={0.8} />
        </mesh>
        {/* Property card */}
        <RoundedBox args={[1.6, 1.2, 0.01]} radius={0.05} smoothness={2} position={[0, 0.6, 0]}>
          <meshBasicMaterial color="#152540" />
        </RoundedBox>
        {/* AI Score card */}
        <RoundedBox args={[1.6, 0.6, 0.01]} radius={0.05} smoothness={2} position={[0, -0.5, 0]}>
          <meshBasicMaterial color="#0F1D32" />
        </RoundedBox>
        {/* Score circle - emerald */}
        <mesh position={[0, -0.5, 0.01]}>
          <circleGeometry args={[0.15, 32]} />
          <meshBasicMaterial color="#2DD4A0" />
        </mesh>
        {/* Bottom nav */}
        <RoundedBox args={[1.6, 0.3, 0.01]} radius={0.05} smoothness={2} position={[0, -1.5, 0]}>
          <meshBasicMaterial color="#0A1628" />
        </RoundedBox>
        {/* Nav dots */}
        {[-0.5, -0.25, 0, 0.25, 0.5].map((x, i) => (
          <mesh key={i} position={[x, -1.5, 0.01]}>
            <circleGeometry args={[0.04, 16]} />
            <meshBasicMaterial color={i === 0 ? '#2DD4A0' : '#D4A843'} transparent opacity={i === 0 ? 1 : 0.3} />
          </mesh>
        ))}
      </group>

      {/* Glow rings */}
      <mesh position={[0, 0, -0.2]}>
        <torusGeometry args={[2.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#2DD4A0" transparent opacity={0.3} />
      </mesh>
      <mesh position={[0, 0, -0.3]}>
        <torusGeometry args={[3.2, 0.015, 16, 100]} />
        <meshBasicMaterial color="#D4A843" transparent opacity={0.2} />
      </mesh>

      <pointLight position={[0, 2, 2]} color="#2DD4A0" intensity={2} distance={8} />
      <pointLight position={[-2, -1, 2]} color="#D4A843" intensity={1.5} distance={6} />
      <pointLight position={[2, -1, 1]} color="#2DD4A0" intensity={1} distance={5} />
    </group>
  )
}
