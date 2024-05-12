import { OrbitControls, useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei';
import { MeshProps, useThree } from '@react-three/fiber';
import { MeshPhysicalMaterial } from 'three';


import React from 'react';
import { useControls } from 'leva';

  // Create glass material
  const glassMaterial = new MeshPhysicalMaterial({
    color: 0xffffff,
    transmission: 0.7, // Optics transmission; 0 = opaque, 1 = fully transparent
    roughness: 0, // Smooth surfaces for a clear glass look
    metalness: 0,
    reflectivity: 0.9, // High reflectivity for a glossy surface
    clearcoat: 1.0  // Simulate a glass-like coating
  });



export default function Model() {
  const { nodes } = useGLTF('/images/3d/flask.glb') as any;

  const { viewport } = useThree();
  // const {nodes} = useGLTF('/images/3d/test.glb') as any;

//   const materialControlProps = useControls({
//     thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
//     roughness: { value: 0, min: 0, max: 1, step: 0.1 },
//     transmission: { value: 1, min: 0, max: 1, step: 0.1 },
//     ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
//     chromaticAberration: { value: 0.02, min: 0, max: 1 },
//     backside: true,
//   });

  const materialControlProps = {
    thickness:  0.2,
    roughness: 0,
    transmission: 1, 
    ior:1.2,
    chromaticAberration: 0.02,
    backside: true,
  };

const materialProps = {
    thickness: materialControlProps.thickness,
    roughness: materialControlProps.roughness,
    transmission: materialControlProps.transmission,
    ior: materialControlProps.ior,
    chromaticAberration: materialControlProps.chromaticAberration,
    backside: materialControlProps.backside,
  };

const materialPropsWithUseControls = process.env.NODE_ENV === "development" 
? materialProps 
: materialProps;

  // const beakerMesh = nodes.Beaker
  // console.log('beakerMesh', beakerMesh)

  return (
    <group scale={viewport.width * .002}>
      {/* <group > */}
      <Text scale={viewport.width * .2}>Bo Kim</Text>

      {/* <mesh {...nodes.Beaker.children[0]}></mesh>
      <mesh {...nodes.Beaker.children[1]}></mesh> */}
      {/* <mesh geometry={nodes.Beaker.children[0].geometry} material={nodes.Beaker.children[0].material} />
<mesh geometry={nodes.Beaker.children[1].geometry} material={nodes.Beaker.children[1].material} /> */}

{/* <mesh geometry={nodes.Beaker.children[0].geometry} scale={viewport.width * .002} ><meshBasicMaterial color='light'/></mesh> */}
<mesh scale={viewport.height * .0065 } geometry={nodes.Beaker.children[1].geometry}>
 <MeshTransmissionMaterial {...materialProps} />
    </mesh> 
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
