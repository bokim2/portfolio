'use client';
import Image from 'next/image';
import styles from './biotechPage.module.scss';
import { useEffect, useState } from 'react';
import BiotechSoftware from './biotechSoftware';



export default function BiotechPage() {
  const [loading, setLoading] = useState(true);


  return (
    <main className={styles.main}>
      <BiotechSoftware />
    </main>
  );
}
