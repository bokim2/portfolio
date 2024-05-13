import React from 'react';

import { Canvas, MeshProps } from '@react-three/fiber';

import Model from './model';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';

export default function Scene() {
  return (
    <Canvas style={{backgroundColor: 'black'}}>
        <PerspectiveCamera makeDefault position={[0, 0, 50]} fov={75} near={0.1} far={100}/>
      <ambientLight intensity={3} />
      <directionalLight position={[0, 3, 2]} intensity={3} />
      <Environment preset="city" />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}
