'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { createRef, useEffect, useRef, useState } from 'react';

import Gallery from '../components/gallery/gallery';

import LoaderPage from '@/components/loaderPage/loaderPage';
import { useMotionValue, useSpring } from 'framer-motion';
import Bio from './home-components/bio/bio';
import WorkIntro from './home-components/experience-intro';

import Contact from './home-components/contact/contact';
import About from './home-components/about/about';
import ParallaxGallery from './home-components/parallax-gallery/parallaxGallery';
import Skills from './home-components/skills/skills';

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

export type TimagesAndBackgrounds = typeof imagesAndBackgrounds;

export default function Home() {
  const [loading, setLoading] = useState(true);
  // const [mousePosition, setMousePosition] =useState({ x: 0, y: 0 });
  const springValues = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  return (
    <main className={`${styles.main}`} id="homePage">
      {/* <Bio /> */}
      {/* <Skills/> */}
      {/* <WorkIntro /> */}
      <About />
      
      {/* <ParallaxGallery /> */}
      {/* <ProjectsIntro /> */}
      {/* <Contact /> */}


      {/* <div className={styles.container}>
        hello
      </div> */}
      {/* {loading && <LoaderPage setLoading={setLoading} />} */}
      {/* <Intro /> */}
      {/* <Bio /> */}
      {/* <WorkIntro /> */}
      {/* <ParallaxGallery /> */}
      {/* <About /> */}
      {/* <ProjectsIntro /> */}
      {/* <Contact /> */}
      {/* <div className={styles.description} onMouseMove={mouseMove}>
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
      </div> */}
    </main>
  );
}
