'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import WebGL from 'three/addons/capabilities/WebGL.js';
import styles from './experiencePage.module.scss';
import BiotechSoftware from './biotechSoftware';
import Resume from './resume/resume';
import ExperienceAnimation from './experience-animation';

export default function ExperiencePage() {
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.columnsContainer}>
        {isClient &&
          typeof window !== 'undefined' &&
          WebGL.isWebGLAvailable() && (
            <div
              className={`${styles.column} ${styles.bioreactorOuterContainer}`}
            >
              <ExperienceAnimation />
            </div>
          )}
        <div className={styles.column}>
          <Resume />
        </div>
      </div>
      <BiotechSoftware />
    </main>
  );
}
