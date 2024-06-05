/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: AirStudios (https://sketchfab.com/sebbe613)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/moon-75c46b8b71ce4b23bb2acb7982fa652c
Title: Moon
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import moonScene from '../assets/3d/moon.glb'

const Moon = (props) => {
  const { nodes, materials } = useGLTF(moonScene)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere1_lambert2_0.geometry}
        material={materials.lambert2}
        scale={7.337}
      />
    </group>
  )
}

export default Moon