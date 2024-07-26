'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import WebGL from 'three/addons/capabilities/WebGL.js';
import styles from './experience.module.scss';
import BiotechSoftware from '../../about/biotechSoftware';
import Resume from './resume/resume';
// import ExperienceAnimation from './experience-animation';
import { PerspectiveCamera } from '@react-three/drei';
import Wrapper from '@/components/wrapper/wrapper';
import dynamic from 'next/dynamic';

const ExperienceAnimation = dynamic(
  () => import('./experience-animation/index'),
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

  // need to put placeholder image if webgl is not available

  return (
    // <main className={styles.main}>
    <Wrapper>
      <div className={styles.columnsContainer}>
        {isClient &&
        typeof window !== 'undefined' &&
        WebGL.isWebGLAvailable() ? (
          // <div
          //   className={`${styles.column} ${styles.bioreactorOuterContainer}`}
          // >
          <div className={`${styles.column} ${styles.bioreactorColumn}`}>
            <ExperienceAnimation />
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
