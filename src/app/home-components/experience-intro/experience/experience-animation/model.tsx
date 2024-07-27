'use client';
import {
  OrbitControls,
  useGLTF,
  Text,
  MeshTransmissionMaterial,
  PerspectiveCamera,
  useAnimations,
  Float,
  SoftShadows,
  OrthographicCamera,
} from '@react-three/drei';
import { MeshProps, useFrame, useThree } from '@react-three/fiber';
import {
  CameraHelper,
  Group,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  DirectionalLight,
  PlaneGeometry,
  Mesh,
} from 'three';

import React, { useEffect, useRef, useState } from 'react';
import { MotionValue, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';

useGLTF.preload('/images/3d/bioreactor.glb');

type Tmouse = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};

export default function Model({ mouse }: { mouse: Tmouse }) {
  const { size } = useThree();
  const meshRef = useRef<Mesh>(null);
  const group = useRef<Group>(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      const scale = size.width / 5000; // Adjust scale factor as needed
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  const { scene: bioreactorScene } = useGLTF('/images/3d/bioreactor.glb') as any;

  useEffect(() => {
    bioreactorScene.traverse((node: any) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });
  }, [bioreactorScene]);

  const directionalLightRef = useRef<DirectionalLight>(null);

  const rotationX = useTransform(mouse.y, [0, 1], [-1, 1]);
  const rotationY = useTransform(mouse.x, [0, 1], [-1, 1]);
  const positionX = useTransform(mouse.x, [0, 1], [-5, 5]);
  const positionY = useTransform(mouse.y, [0, 1], [10, -10]);

  return (
    <>
      <group ref={group}>
        <PerspectiveCamera
          makeDefault
          position={[0, 7, 15]}
          fov={75}
          near={0.1}
          far={50000}
        />

        <directionalLight
          ref={directionalLightRef}
          castShadow
          position={[2, 20, -5]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-camera-near={1}
          shadow-camera-far={50}
          shadow-bias={-0.001}
        />

        <primitive
        ref={meshRef}
          castShadow
          receiveShadow
          object={bioreactorScene}
          // left/right, up/down, forward/back
          position={[0.5, -5, 0]}
          rotation-x={-Math.PI / 2}
          scale={[0.1, 0.1, 0.1]}
        />

        <motion.mesh
          castShadow
          receiveShadow
          position={[1, -5, 5]}
          rotation-x={rotationX}
          rotation-y={rotationY}
          position-x={positionX}
          position-y={positionY}
        >
          <sphereGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'red'} />
        </motion.mesh>
      </group>
    </>
  );
}

export function ShadowPlane() {
  return (
    <group>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]}>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial attach="material" opacity={0.15} />
        <SoftShadows size={50} focus={0.2} samples={20} />
      </mesh>
    </group>
  );
}
