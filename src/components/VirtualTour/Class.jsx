import React from 'react'
import './../../styles/class.css'
import { Canvas } from '@react-three/fiber';
import { Virtual } from './Virtual';

export default function Class() {
  return (
    <>
    <Canvas classname="class"
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
    >
      <Virtual />
    </Canvas>
    </>
  )
}

