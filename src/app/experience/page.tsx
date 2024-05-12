'use client';
import Image from 'next/image';
import styles from './experiencePage.module.scss';
import { useEffect, useState } from 'react';
import WorkSoftware from './biotechSoftware';
import Resume from './resume';

export default function ExperiencePage() {
  const [loading, setLoading] = useState(true);

  return (
    <main className={styles.main}>
      <Resume />
      <WorkSoftware />
    </main>
  );
}
