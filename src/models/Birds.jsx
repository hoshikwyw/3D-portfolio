import React from 'react'
import birdScene from '../assets/3d/birds.glb'
import { useGLTF } from '@react-three/drei'

const Birds = () => {
    const {scene, animations} = useGLTF(birdScene)
  return (
    <mesh position={[-6,2,0]}  scale={[0.6,0.6,0.6]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Birds
