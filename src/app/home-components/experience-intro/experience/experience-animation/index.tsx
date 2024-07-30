import dynamic from 'next/dynamic';
import React from 'react';
import styles from '../experience.module.scss';
import { MotionValue } from 'framer-motion';
import TextOverlay from './textOverlay';

const Scene = dynamic(() => import('./scene'), {
  loading: () => <div className={`${styles.animationHomeLoaderContainer}`} >Loading...</div>,
  ssr: false,
});
// 'use client';


export default function ExperienceAnimation({scrollYProgress}: {scrollYProgress: MotionValue<number>}) {
  // if (!WebGL.isWebGLAvailable()) {
  //   return <h1>WebGL not available</h1>;
  // }
  return (
    <div className={`${styles.experienceAnimationContainer}`}>
      <TextOverlay experienceScrollYProgress={scrollYProgress}/>
      
      <Scene experienceScrollYProgress={scrollYProgress}/>
    </div>
  );
}
