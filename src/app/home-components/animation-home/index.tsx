import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./scene'), {
  loading: () => <h1>Loading...</h1>,
  ssr: false,
});
// 'use client';
import React from 'react';

import styles from './animationHome.module.scss';

export default function AnimationHome() {
  return (
    <div className={`${styles.animationHomeContainer}`}>
      <Scene />
    </div>
  );
}
