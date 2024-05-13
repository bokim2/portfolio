import dynamic from 'next/dynamic';


const Scene = dynamic(() => import('./scene'), {
  loading: () => <h1>Loading...</h1>,
  ssr: false,
});
// 'use client';
import React from 'react';

import styles from './animationHome.module.scss';

export default function AnimationHome() {
  // if (!WebGL.isWebGLAvailable()) {
  //   return <h1>WebGL not available</h1>;
  // }
  return (
    <div className={`${styles.animationHomeContainer}`}>
      <Scene />
    </div>
  );
}
