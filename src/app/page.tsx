'use client'
import Image from 'next/image';
import styles from './page.module.css';
import Lenis from '@studio-freight/lenis';
import { useEffect, useState } from 'react';

import Gallery from '../components/gallery';
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
];

export default function Home() {
  // const [mousePosition, setMousePosition] =useState({ x: 0, y: 0 });
  const springValues = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  // const [xPosition, setXPosition] = useState(0);
  // const [yPosition, setYPosition] = useState(0);
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //   setXPosition(window.innerWidth / 2 - (window.innerWidth * 0.25) / 2);
  //   setYPosition(window.innerHeight / 2 - (window.innerHeight * 0.25) / 2);
  //   console.log('xposition', window.innerWidth / 2 - (window.innerWidth * 0.25) / 2)
  //   }
  // }, []);

  

  const mousePosition = {
    x: useSpring(0, springValues),
    y: useSpring(0, springValues),
  };

  useEffect(() => {
    if(typeof window !== undefined){
      mousePosition.x.set(window.innerWidth / 2 - (window.innerWidth * 0.25) / 2)
    mousePosition.y.set(window.innerHeight / 2 - (window.innerHeight * 0.25) / 2)
    }
  }, [window.innerWidth, window.innerHeight])

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
    const centeredX = clientX - (window.innerWidth / 2) * 0.25;
    const centeredY = clientY - (window.innerWidth / 2) * 0.3;

    mousePosition.x.set(centeredX);
    mousePosition.y.set(centeredY);
  };

  return (
    <main className={styles.main}>
      {/* <div className={styles.container}>
        hello
      </div> */}

      <div className={styles.description} onMouseMove={mouseMove}>
        {imagesAndBackgrounds.map(({ handle, name }, i) => {
          return (
            <Gallery
              handle={handle}
              name={name}
              mousePosition={mousePosition}
              key={i}
            />
          );
        })}
      </div>
    </main>
  );
}
