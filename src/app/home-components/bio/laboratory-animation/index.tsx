import dynamic from 'next/dynamic';
import React from 'react';
import styles from './laboratoryAnimation.module.scss';

const Scene = dynamic(() => import('./scene'), {
  loading: () => <div className={`${styles.LoaderContainer}`} >Loading...</div>,
  ssr: false,
});
// 'use client';


export default function LaboratoryAnimation() {
  // if (!WebGL.isWebGLAvailable()) {
  //   return <h1>WebGL not available</h1>;
  // }
  return (
    <div className={`${styles.laboratoryAnimationContainer}`}>
      <Scene />
    </div>
  );
}
