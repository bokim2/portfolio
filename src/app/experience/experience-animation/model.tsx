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
} from 'three';

import React, { useEffect, useRef } from 'react';
import { MotionValue, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';

// useGLTF.preload('/images/3d/laboratory.glb')
useGLTF.preload('/images/3d/bioreactor.glb');

type Tmouse = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};

export default function Model({ mouse }: { mouse: Tmouse }) {
  const group = useRef<Group>(null);
  const { animations: laboratoryAnimations, scene: laboratoryScene } = useGLTF(
    '/images/3d/laboratory.glb'
  ) as any;
  const {
    nodes,
    materials,
    animations: bioreactorAnimations,
    scene: bioreactorScene,
  } = useGLTF('/images/3d/bioreactor-gltf/scene.gltf') as any;

  // const materialRef = useRef(new MeshStandardMaterial({ color: 'red' })); // Create a new material

  const { actions, clips } = useAnimations(
    laboratoryAnimations,
    laboratoryScene
  );

  useEffect(() => {
    console.log('actions', actions, 'clips', clips);
    if (actions?.['Armature|Walk']) {
      actions['Armature|Walk'].play().paused = true;
    }
  }, []);

  // Create a new material
  // const materialRef = useRef(new MeshStandardMaterial({ color: 'red' }));

  // Use useEffect to change materials once the model is loaded
  useEffect(() => {
    // Traverse the scene and change materials
    // bioreactorScene.traverse((child:any) => {
    //     if (child.isMesh) {
    //         child.material = materialRef.current;
    //     }
    // });

    bioreactorScene.traverse(function (node: any) {
      if (node.isMesh) {
        (node.castShadow = true), (node.receiveShadow = true);
      }
    });
  }, [bioreactorScene]); // Depend on 'scene' to ensure it updates if the model changes

  const directionalLightRef = useRef<DirectionalLight>(null);
  // useEffect(() => {
  //   if (directionalLightRef?.current?.shadow) {
  //     const shadowCameraHelper = new CameraHelper(
  //       directionalLightRef?.current?.shadow?.camera
  //     );
  //     bioreactorScene.add(shadowCameraHelper);

  //     return () => {
  //       bioreactorScene.remove(shadowCameraHelper);
  //     };
  //   }
  // }, [bioreactorScene]);

  // useFrame(()=> if (actions?.['Experiment']) {(actions['Experiment'].time += 0.01)})
  const bioreactorRotationMultiplier = 0.1;
  const bioreactorpositionMultiplier = 2.1;
  const rotationX = useTransform(mouse.y, [0, 1], [-1, 1]);
  const rotationY = useTransform(mouse.x, [0, 1], [-1, 1]);
  // const positionX = useTransform(
  //   mouse.x,
  //   [0, 1],
  //   [
  //     bioreactorScene.position.x - bioreactorpositionMultiplier - Math.PI / 2,
  //     bioreactorScene.position.x + bioreactorpositionMultiplier - Math.PI / 2,
  //   ]
  // );
  // const positionY = useTransform(
  //   mouse.y,
  //   [0, 1],
  //   [
  //     bioreactorScene.position.y - bioreactorpositionMultiplier -5,
  //     bioreactorScene.position.y + bioreactorpositionMultiplier-5,
  //   ]
  // );

  const positionX = useTransform(mouse.x, [0, 1], [-5, 5]);
  const positionY = useTransform(mouse.y, [0, 1], [10, -10]);
  return (
    <>
      <group>
        {/* for laboratory */}
        {/* <PerspectiveCamera makeDefault position={[1, 0, 2]} zoom={1.9} fov={75} near={0.1} far={50000}/> */}

        {/* for bioreactor */}
        <PerspectiveCamera
          makeDefault
          position={[0, 7, 15]}
          fov={75}
          near={0.1}
          far={50000}
        />

        {/* <OrthographicCamera position={[0, 7, 155]} /> */}

        <directionalLight
          ref={directionalLightRef}
          castShadow
          position={[2, 20, -5]} // Changed position for better shadow casting
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
        {/* <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        > */}
          {/* <motion.primitive */}
          <primitive
            castShadow
            receiveShadow
            object={bioreactorScene}
            //  position={[1, -7, 0]}
            position={[1, -5, 0]}
            rotation-x={-Math.PI / 2}
            // rotation-x={rotationX}
            // rotation-y={rotationY}
            // position-x={positionX}
            // position-y={positionY}
            scale={[0.1, 0.1, 0.1]}
          >
            {/* <meshStandardMaterial color={'red'} /> */}
          </primitive>

          {/* <mesh  castShadow receiveShadow position={[1, 5, 0]}>
          <sphereGeometry args={[4, 4, 4]} />
          <meshStandardMaterial color={'red'} />
        </mesh> */}

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
        {/* </Float> */}
        {/* <primitive object={laboratoryScene} position={[1, 5, 5]}   scale={[30, 30, 30]} /> */}
      </group>
      {/* <ShadowPlane /> */}
    </>
  );
}

export function ShadowPlane() {
  return (
    <group>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]}>
        {/* Attach the geometry directly with JSX */}
        <planeGeometry args={[100, 100]} />
        <shadowMaterial attach="material" opacity={0.15} />
        <SoftShadows size={50} focus={0.2} samples={20} />
        {/* <meshBasicMaterial color='lightblue' /> */}
        {/* <meshStandardMaterial /> */}
      </mesh>
    </group>
  );
}
