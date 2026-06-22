import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'
import {
  SCROLL_STATES,
  MOBILE_SCALE_FACTOR,
  MOBILE_POSITION_FACTOR,
} from './scrollStates'
import {
  lockScroll,
  unlockScroll,
  markTexturesReady,
  onIntroStart,
} from '../lib/sceneReady'

gsap.registerPlugin(ScrollTrigger)

const GLASS_NAME_HINTS = [
  'glass', 'screen', 'lens', 'camera_lens', 'display',
]

function isGlassMaterial(matName, meshName) {
  const n = ((matName || '') + ' ' + (meshName || '')).toLowerCase()
  return GLASS_NAME_HINTS.some(h => n.includes(h))
}

export default function PhoneModel() {
  const groupRef = useRef(null)
  const gltf = useGLTF('/models/iphone.glb')
  const scene = gltf.scene

  const normalized = useMemo(() => {
    const cloned = scene.clone(true)
    const box = new THREE.Box3().setFromObject(cloned)
    const center = box.getCenter(new THREE.Vector3())
    const sizeVec = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(sizeVec.x, sizeVec.y, sizeVec.z) || 1
    const fit = 1 / maxDim

    cloned.position.sub(center).multiplyScalar(fit)
    cloned.scale.setScalar(fit)

    const clonedMats = new WeakMap()

    cloned.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return

      const replaceOne = (mat) => {
        if (!mat) return mat
        let next = clonedMats.get(mat)
        if (!next) {
          next = mat.clone()
          next.name = mat.name
          clonedMats.set(mat, next)
        }

        const glass = isGlassMaterial(mat.name, child.name)

        if (glass) {
          next.transparent = true
          next.opacity = 0.4
          next.depthWrite = false
          next.depthTest = true
          next.side = THREE.FrontSide
          if ('roughness' in next) next.roughness = 0.05
          if ('metalness' in next) next.metalness = 0.1
        } else {
          next.transparent = false
          next.opacity = 1
          next.depthWrite = true
          next.depthTest = true
          next.side = THREE.FrontSide
          if ('transmission' in next) next.transmission = 0
        }
        next.needsUpdate = true
        return next
      }

      if (Array.isArray(child.material)) {
        child.material = child.material.map(replaceOne)
      } else if (child.material) {
        child.material = replaceOne(child.material)
      }
    })

    return cloned
  }, [scene])

  useEffect(() => {
    markTexturesReady()
  }, [normalized])

  useLayoutEffect(() => {
    const g = groupRef.current
    if (!g) return
    const group = g

    lockScroll()
    let cancelIntroSub = null

    const ctx = gsap.context((self) => {
      const isMobile = window.matchMedia('(max-width: 1023px)').matches
      const ps = isMobile ? MOBILE_POSITION_FACTOR : 1
      const ss = isMobile ? MOBILE_SCALE_FACTOR : 1
      const yOffset = isMobile ? 0.3 : 0
      const hero = SCROLL_STATES[0]

      g.position.set(
        hero.position[0] * ps,
        hero.position[1] * ps + yOffset,
        hero.position[2] * ps
      )
      g.rotation.set(
        hero.rotation[0],
        hero.rotation[1] + 2.5,
        hero.rotation[2]
      )
      g.scale.setScalar(hero.scale * ss)

      gsap.set('[data-hero-text]', { opacity: 0, y: 22 })

      const intro = gsap.timeline({
        paused: true,
        onComplete: () => {
          unlockScroll()
          self.add(() => buildScrollTimeline())
        },
      })

      cancelIntroSub = onIntroStart(() => intro.play())

      intro.to(
        g.rotation,
        { y: hero.rotation[1], duration: 3.6, ease: 'sine.inOut' },
        0
      )

      intro.to(
        '[data-hero-text]',
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.85, ease: 'power2.out' },
        1.8
      )

      function buildScrollTimeline() {
        const tl = gsap.timeline({
          defaults: { duration: 1, ease: 'none' },
          scrollTrigger: {
            trigger: 'main',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        })

        for (let i = 1; i < SCROLL_STATES.length; i++) {
          const next = SCROLL_STATES[i]
          const at = i - 1
          tl.to(group.position, {
            x: next.position[0] * ps,
            y: next.position[1] * ps + yOffset,
            z: next.position[2] * ps,
          }, at)
          .to(group.rotation, {
            x: next.rotation[0], y: next.rotation[1], z: next.rotation[2],
          }, at)
          .to(group.scale, {
            x: next.scale * ss, y: next.scale * ss, z: next.scale * ss,
          }, at)
        }

        ScrollTrigger.refresh()
      }
    })

    return () => {
      cancelIntroSub?.()
      unlockScroll()
      ctx.revert()
    }
  }, [])

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={normalized} />
    </group>
  )
}

useGLTF.preload('/models/iphone.glb')
