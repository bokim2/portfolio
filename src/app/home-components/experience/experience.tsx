'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import WebGL from 'three/addons/capabilities/WebGL.js';
import styles from './experience.module.scss';
import BiotechSoftware from '../about/biotechSoftware';
import Resume from './experience/resume/resume';
// import ExperienceAnimation from './experience-animation';
import { PerspectiveCamera } from '@react-three/drei';
import Wrapper from '@/components/wrapper/wrapper';
import dynamic from 'next/dynamic';
import { useScroll, useSpring } from 'framer-motion';

const ExperienceAnimation = dynamic(
  () => import('./experience/experience-animation/index'),
  {
    ssr: false,
    loading: () => (
      <div
        className={`${styles.experienceAnimationContainer} ${styles.bioreactorColumn}`}
        style={{
          paddingTop: '14vh',
          transform: 'scale(1.2) translateX(10%)',
        }}
      >
        <img
          src="/images/experience/bioreactorPlaceholder.jpg"
          alt="bioreactor"
          style={{
            // marginTop: '30vh',
            objectFit: 'cover',
            // border: '10px solid red',
            // background: 'yellow',
            // width: '100%',
          }}
        ></img>
      </div>
    ),
  }
);

export default function Experience() {
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const experienceContainer = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: experienceContainer,
    offset: ['start end', 'end start'],
  });
  const smoothScrollYProgress = useSpring(scrollYProgress, { damping: 20 });

  // need to put placeholder image if webgl is not available

  return (
    // <main className={styles.main}>
    <Wrapper>
      <div className={styles.columnsContainer} ref={experienceContainer}>
        {isClient &&
        typeof window !== 'undefined' &&
        WebGL.isWebGLAvailable() ? (
          // <div
          //   className={`${styles.column} ${styles.bioreactorOuterContainer}`}
          // >
          <div className={`${styles.column} ${styles.bioreactorColumn}`}>
            <ExperienceAnimation scrollYProgress={smoothScrollYProgress} />
          </div>
        ) : (
          // </div>
          <div className={styles.column}>
            put placeholder image for when webGL is not working
          </div>
        )}

        <div className={styles.column}>
          <Wrapper additionalClasses="inner">
            <Resume />
          </Wrapper>
        </div>
      </div>
    </Wrapper>
  );
}