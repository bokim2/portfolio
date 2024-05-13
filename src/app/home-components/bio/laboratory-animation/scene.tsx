import React, { Suspense } from 'react';

import { Canvas, MeshProps } from '@react-three/fiber';

import Model from './model';
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';

export default function Scene() {
  return (
    <Canvas
      // camera={{ position: [0, 0, 50] }}
      style={{ backgroundColor: 'black' }}
    >
      <ambientLight intensity={3} />
      <directionalLight position={[-5, -5, 5]} intensity={1} />
      <Suspense fallback={null}>
      <Environment preset="city" />
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
