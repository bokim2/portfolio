
'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Lenis from '@studio-freight/lenis';
import { useEffect, useState } from 'react';


import Gallery from '../components/gallery'
import { useMotionValue, useSpring } from 'framer-motion';



const imagesAndBackgrounds = [
  {
  name: 'moab1',
  handle: 'moab_1',
},
{
  name: 'sf1',
  handle: 'sf_1',
},
{
  name: 'tahoe1',
  handle: 'tahoe_1',
},
]


  export default function Home() {

    // const [mousePosition, setMousePosition] =useState({ x: 0, y: 0 });
    const springValues = {
      stiffness: 150,
      damping: 15,
      mass: .1,
    }
    const mousePosition = {
      x: useSpring(window.innerWidth/2 - window.innerWidth * .25/2, springValues),
      y: useSpring(window.innerHeight/2 - window.innerHeight * .25/2, springValues),
    }

    useEffect(() => {
      const lenis = new Lenis();

      // lenis.on('scroll', (e: Event) => {
      //   // console.log(e);
      // });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }, []);


    const mouseMove = (e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      // console.log(clientX, clientY)
      const centeredX = clientX - (window.innerWidth /2 * .25)
      const centeredY = clientY - (window.innerWidth /2 * .30)

      mousePosition.x.set(centeredX)
      mousePosition.y.set(centeredY)
    }
  

  return (
    <main className={styles.main} >
      {/* <div className={styles.container}>
        hello
      </div> */}
    
      <div className={styles.description} onMouseMove={mouseMove}>
       
{
  imagesAndBackgrounds.map(({handle, name}, i)=> {
    return <Gallery handle={handle} name={name} mousePosition={mousePosition} key={i} />
  })
}
      </div>
    </main>
  );
}
