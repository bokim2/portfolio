'use client';
import React, { Suspense, useEffect, useRef } from 'react';

import { Canvas, MeshProps, useThree } from '@react-three/fiber';

import Model, { ShadowPlane } from './model';
import {
  Environment,
  OrbitControls,
  ScrollControls,
  useMotion,
  // PerspectiveCamera,
} from '@react-three/drei';
import { PerspectiveCamera } from 'three';
import { useMotionValue, useSpring } from 'framer-motion';

export default function Scene() {
  function CameraHelper() {
    const camera = new PerspectiveCamera(60, 1, 1, 3);
    return (
      <group position={[0, 3, 10]}>
        <cameraHelper args={[camera]} />
      </group>
    );
  }
  //mouse postition
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, {stiffness: 75, damping: 100, mass: 3}),
    y: useSpring(mouse.y, {stiffness: 75, damping: 100, mass: 3})
  };

  const manageMouseMovement = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMovement);
    return () => window.removeEventListener('mousemove', manageMouseMovement);
  }, []);

  return (
    <Canvas shadows>
      <ambientLight intensity={0.1} />
      <directionalLight position={[-5, -5, 5]} intensity={0.1} />

      <Suspense fallback={null}>
        <Environment preset="sunset" background={false} />
        <ShadowPlane />
        {/* <CameraHelper /> */}
      </Suspense>
      {/* <OrbitControls enableZoom={false}/> */}
      <OrbitControls />
      {/* <ScrollControls pages={3} damping={0.25}> */}
      <Model mouse={smoothMouse}/>
      {/* <Model mouse={mouse}/> */}
      {/* </ScrollControls> */}
    </Canvas>
  );
}
