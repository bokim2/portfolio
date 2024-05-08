'use client';
import Image from 'next/image';
import styles from './galleryPage.module.css';
import Lenis from '@studio-freight/lenis';
import { useEffect, useState } from 'react';

import Gallery from '../../components/gallery/gallery';
import Intro from '../archive/intro';
import LoaderPage from '@/components/loaderPage/loaderPage';
import { useMotionValue, useSpring } from 'framer-motion';

import moab1BackgroundImg from '../../../public/images/moab_1/background.jpg';
import sf1BackgroundImg from '../../../public/images/sf_1/background.jpg';
import tahoe1BackgroundImg from '../../../public/images/tahoe_1/background.jpg';
import moab1 from '../../../public/images/moab_1/1.jpg';
import sf1 from '../../../public/images/sf_1/1.jpg';
import tahoe1 from '../../../public/images/tahoe_1/1.png';

const imagesAndBackgrounds = [
  {
    name: 'moab1',
    handle: 'moab_1',
    imageImported: moab1,
    backgroundImg: moab1BackgroundImg,
  },
  {
    name: 'sf1',
    handle: 'sf_1',
    imageImported: sf1,
    backgroundImg: sf1BackgroundImg,
  },
  {
    name: 'tahoe1',
    handle: 'tahoe_1',
    imageImported: tahoe1,
    backgroundImg: tahoe1BackgroundImg,
  },
];

export type TimagesAndBackgrounds = typeof imagesAndBackgrounds;

export default function GalleryPage() {
  const [loading, setLoading] = useState(true);
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
    if (typeof window !== undefined) {
      mousePosition.x.set(
        window.innerWidth / 2 - (window.innerWidth * 0.25) / 2
      );
      mousePosition.y.set(
        window.innerHeight / 2 - (window.innerHeight * 0.25) / 2
      );
    }
  }, []);

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

  useEffect(() => {
    const body = document.querySelector('body');
    if (body !== null) {
      loading
        ? body.classList.add('loading')
        : body.classList.remove('loading');
    }
  }, [loading]);

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
      {/* {loading && <LoaderPage setLoading={setLoading} />} */}
      {/* <Intro /> */}
      <div className={styles.description} onMouseMove={mouseMove}>
        {imagesAndBackgrounds.map(
          ({ handle, name, imageImported, backgroundImg }, i) => {
            return (
              <Gallery
                handle={handle}
                name={name}
                mousePosition={mousePosition}
                imageImported={imageImported}
                backgroundImg={backgroundImg}
                key={i}
              />
            );
          }
        )}
      </div>
    </main>
  );
}
