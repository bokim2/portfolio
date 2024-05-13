import dynamic from 'next/dynamic';
import React from 'react';
import styles from './experienceAnimation.module.scss';

const Scene = dynamic(() => import('./scene'), {
  loading: () => <div className={`${styles.animationHomeLoaderContainer}`} >Loading...</div>,
  ssr: false,
});
// 'use client';


export default function ExperienceAnimation() {
  // if (!WebGL.isWebGLAvailable()) {
  //   return <h1>WebGL not available</h1>;
  // }
  return (
    <div className={`${styles.experienceAnimationContainer}`}>
      <Scene />
    </div>
  );
}
