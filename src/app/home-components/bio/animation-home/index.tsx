import dynamic from 'next/dynamic';
import React from 'react';
import styles from './animationHome.module.scss';

const Scene = dynamic(() => import('./scene'), {
  loading: () => <div className={`${styles.animationHomeLoaderContainer}`} >Loading...</div>,
  ssr: false,
});
// 'use client';


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
