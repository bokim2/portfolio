'use client';
import Image from 'next/image';
import styles from './experiencePage.module.scss';
import { useEffect, useState } from 'react';
import BiotechSoftware from './biotechSoftware';
import Resume from './resume/resume';
import ExperienceAnimation from './experience-animation';

export default function ExperiencePage() {
  const [loading, setLoading] = useState(true);

  return (
    <main className={styles.main}>
       <div className={styles.columnsContainer}>
      <div className={`${styles.column} ${styles.bioreactorOuterContainer}`}>
        <ExperienceAnimation />
      </div>
      <div className={styles.column}>
        <Resume />
      </div>
      </div>
        <BiotechSoftware />
    </main>
  );
}
