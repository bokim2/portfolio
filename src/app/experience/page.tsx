'use client';
import Image from 'next/image';
import styles from './experiencePage.module.scss';
import { useEffect, useState } from 'react';
import BiotechSoftware from './biotechSoftware';
import Resume from './resume/resume';

export default function ExperiencePage() {
  const [loading, setLoading] = useState(true);

  return (
    <main className={styles.main}>
      <Resume />
      <BiotechSoftware />
    </main>
  );
}
