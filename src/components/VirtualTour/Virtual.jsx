import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Model';
import './../../styles/class.css'
import Header from '../Navbar/Header';
import Footer from '../Footer/Footer';

export default function Virtual() {
  return (
    <>
    <Header/>
    <div className='class'>
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls />
      <Model />
    </Canvas>
    </div>
    <Footer/>
    </>
  )
}


