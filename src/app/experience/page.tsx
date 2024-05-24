'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import WebGL from 'three/addons/capabilities/WebGL.js';
import styles from './experiencePage.module.scss';
import BiotechSoftware from './biotechSoftware';
import Resume from './resume/resume';
import ExperienceAnimation from './experience-animation';
import { PerspectiveCamera } from '@react-three/drei';

export default function ExperiencePage() {
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

// need to put placeholder image if webgl is not available

  return (
    <main className={styles.main}>
      <div className={styles.columnsContainer}>
        {isClient &&
          typeof window !== 'undefined' &&
          WebGL.isWebGLAvailable() ? (
            // <div
            //   className={`${styles.column} ${styles.bioreactorOuterContainer}`}
            // >
              <ExperienceAnimation />
            // </div>
          ) : <div className={`${styles.column}`}>put placeholder image for when webGL is not working</div>}
        <div className={styles.column}>
          <Resume />
        </div>
      </div>
      <BiotechSoftware />
    </main>
  );
}
