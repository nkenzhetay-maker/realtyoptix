import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

export default function ProceduralEnvironment({ intensity = 1.0 }) {
  const { gl, scene } = useThree()

  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl)
    const envScene = new RoomEnvironment()
    const envMap = pmrem.fromScene(envScene, 0.04).texture
    scene.environment = envMap
    scene.environmentIntensity = intensity

    return () => {
      envMap.dispose()
      pmrem.dispose()
      scene.environment = null
    }
  }, [gl, scene, intensity])

  return null
}
