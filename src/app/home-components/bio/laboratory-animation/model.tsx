import {
  OrbitControls,
  useGLTF,
  Text,
  MeshTransmissionMaterial,
  PerspectiveCamera,
  useAnimations,
} from '@react-three/drei';
import { MeshProps, useFrame, useThree } from '@react-three/fiber';
import { Group, MeshPhysicalMaterial } from 'three';

import React, { useEffect, useRef } from 'react';

// useGLTF.preload('/images/3d/laboratory.glb')
useGLTF.preload('/images/3d/bioreactor.glb');

export default function Model() {
  const group = useRef<Group>(null);
  const { animations: laboratoryAnimations, scene: laboratoryScene } = useGLTF('/images/3d/laboratory.glb') as any;
  const {
    nodes,
    materials,
    animations: bioreactorAnimations,
    scene: bioreactorScene,
  } = useGLTF('/images/3d/bioreactor.glb') as any;

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

  // useFrame(()=> if (actions?.['Experiment']) {(actions['Experiment'].time += 0.01)})
  return (
    <group>
      {/* for laboratory */}
      {/* <PerspectiveCamera makeDefault position={[1, 0, 2]} zoom={1.9} fov={75} near={0.1} far={50000}/> */}

      {/* for bioreactor */}
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 50]}
        fov={75}
        near={0.1}
        far={50000}
      />
      <primitive
        object={bioreactorScene}
        position={[1, 5, 20]}
        rotation-x={-Math.PI / 2}
        scale={[0.1, 0.1, 0.1]}
      />
      <primitive object={laboratoryScene} position={[1, 5, 5]}   scale={[30, 30, 30]} />
    </group>
  );
}

// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { MeshProps } from '@react-three/fiber';

// import React from 'react';

// export default function model() {
//     const {nodes} = useGLTF('/images/3d/test.glb') as any;

//     const beakerMesh = nodes
// // console.log('beakerMesh', beakerMesh)

//   return (
//     <group>
//       <ambientLight intensity={0.3} />
//       <directionalLight position={[0, 0, 5]} intensity={0.5} />
//       {/* {beakerMesh && (
//                 <mesh
//                     geometry={beakerMesh.geometry}
//                     material={beakerMesh.material}
//                 />
//             )} */}

//             <mesh {...nodes.Text}></mesh>
//       {/* <Sphere position={[1, 0, 0]} color="lightblue" size={[1,1,1]}> */}

//       <mesh position={[1, 0, 0]}>
//         <sphereGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={'red'} />
//       </mesh>

//       <mesh position={[0, 1, 0]}>
//         <sphereGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={'red'} />
//       </mesh>
//       <OrbitControls />
//     </group>
//   );
// }
