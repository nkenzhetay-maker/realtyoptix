import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
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

const SCREEN_IMAGES = [
  '/screens/00_login.png',
  '/screens/01_home_explore.png',
  '/screens/03_dashboard.png',
  '/screens/11_listing_detail.png',
  '/screens/10_profile_full.png',
  '/screens/07_ai_report_content.png',
  '/screens/12_drone_view.png',
]

const GLASS_NAME_HINTS = [
  'glass', 'lens', 'camera_lens',
]

function isGlassMaterial(matName, meshName) {
  const n = ((matName || '') + ' ' + (meshName || '')).toLowerCase()
  return GLASS_NAME_HINTS.some(h => n.includes(h))
}

function isScreenMaterial(matName) {
  const n = (matName || '').toLowerCase()
  return n === 'screen_bg'
}

export default function PhoneModel() {
  const groupRef = useRef(null)
  const screenMatRef = useRef(null)
  const currentSectionRef = useRef(0)
  const texturesRef = useRef(null)
  const gltf = useGLTF('/models/iphone.glb')
  const scene = gltf.scene

  const screenTextures = useTexture(SCREEN_IMAGES)

  useMemo(() => {
    screenTextures.forEach(tex => {
      tex.flipY = true
      tex.colorSpace = THREE.SRGBColorSpace
      tex.minFilter = THREE.LinearFilter
      tex.magFilter = THREE.LinearFilter
      tex.needsUpdate = true
    })
    texturesRef.current = screenTextures
  }, [screenTextures])

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

        if (isScreenMaterial(mat.name)) {
          const uv = child.geometry?.attributes?.uv
          if (uv && !uv.__remapped) {
            for (let i = 0; i < uv.count; i++) {
              const oldU = (uv.getX(i) - 0.1849) / 0.3391
              const oldV = (uv.getY(i) - 0.4389) / 0.1624
              uv.setXY(i, 1 - oldV, oldU)
            }
            uv.needsUpdate = true
            uv.__remapped = true
          }
          next.map = screenTextures[0]
          next.emissiveMap = screenTextures[0]
          next.emissive = new THREE.Color(0xffffff)
          next.emissiveIntensity = 0.4
          next.transparent = false
          next.opacity = 1
          next.depthWrite = true
          next.side = THREE.FrontSide
          if ('roughness' in next) next.roughness = 0.3
          if ('metalness' in next) next.metalness = 0.0
          screenMatRef.current = next
        } else if (isGlassMaterial(mat.name, child.name)) {
          next.transparent = true
          next.opacity = 0.4
          next.depthWrite = false
          next.depthTest = true
          next.side = THREE.FrontSide
          if ('roughness' in next) next.roughness = 0.05
          if ('metalness' in next) next.metalness = 0.1
        } else {
          next.color = new THREE.Color(0x10B981)
          next.transparent = false
          next.opacity = 1
          next.depthWrite = true
          next.depthTest = true
          next.side = THREE.FrontSide
          if ('roughness' in next) next.roughness = 0.35
          if ('metalness' in next) next.metalness = 0.6
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
  }, [scene, screenTextures])

  useEffect(() => {
    markTexturesReady()
  }, [normalized])

  useEffect(() => {
    const handleScroll = () => {
      const mat = screenMatRef.current
      const textures = texturesRef.current
      if (!mat || !textures) return
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const progress = scrollY / docHeight
      const totalSections = textures.length
      const idx = Math.min(Math.floor(progress * totalSections), totalSections - 1)
      if (idx !== currentSectionRef.current) {
        currentSectionRef.current = idx
        mat.map = textures[idx]
        mat.emissiveMap = textures[idx]
        mat.needsUpdate = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          defaults: { duration: 1, ease: 'power1.inOut' },
          scrollTrigger: {
            trigger: 'main',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.8,
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

        document.querySelectorAll('.scroll-section').forEach((sec) => {
          const inner = sec.querySelector('.section-content')
          if (!inner) return
          gsap.fromTo(inner,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 1, ease: 'power2.out',
              scrollTrigger: {
                trigger: sec,
                start: 'top 80%',
                end: 'top 30%',
                scrub: false,
                toggleActions: 'play none none reverse',
              },
            }
          )
        })

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
