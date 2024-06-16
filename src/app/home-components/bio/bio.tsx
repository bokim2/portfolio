// import dynamic from 'next/dynamic';
// const AnimationHome = dynamic(() => import('../animation-home'), {
//   loading: () => <h1>Loading...</h1>,
//   ssr: true,
// });
'use client';
import AnimationHome from './animation-home';

import React, { createRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import WebGL from 'three/addons/capabilities/WebGL.js';

import headshotImg from '../../../../public/images/intro/headshot.png';

// inside src/app/page.tsx - home component

import styles from './bio.module.scss';
import Wrapper from '@/components/wrapper/wrapper';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/app/context/activeSection';
import { useUpdateActiveSection } from '@/app/lib/custom-hooks';
import LaboratoryAnimation from './laboratory-animation';
// import AnimationHome from '../animation-home';

const imageVariants = {
  initial: { filter: 'sepia(100%)' },
  animate: { filter: 'sepia(0%)', transition: { delay: 1, duration: 1.5 } },
};

export default function Bio() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // const bioRef = createRef<HTMLElement>();
  //   const {activeSection, setActiveSection} = useActiveSectionContext();

  //   const {ref, inView} = useInView({
  //     threshold: 0.5,
  //     triggerOnce: false,
  //   })

  // useEffect(() => {
  //   console.log('bio inView', inView)
  //   setActiveSection('bio')
  // },[inView])

  const { activeSection, setActiveSection, ref } =
    useUpdateActiveSection('bio');

  return (
    <>
      <div className={styles.animationHome}>
        {isClient &&
          typeof window !== 'undefined' &&
          WebGL.isWebGLAvailable() && <AnimationHome />}
      </div>
      <Wrapper backgroundColor="">
        <section className={styles.bio} id="bio" ref={ref}>
          <div className={styles.headshotImgOuterContainer}>
            <motion.div
              className={`${styles.headshotImgContainer} imgBorderRadius`}
              variants={imageVariants}
              initial="initial"
              animate="animate"
            >
              <Image
                className={`${styles.headshotImg} `}
                src={headshotImg}
                alt="background"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                priority
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>

          <div className={styles.bioAbout}>
            <div className={styles.bioTitleContainer}>
              <h1 className={styles.bioName}>Bo Kim</h1>
              <h2 className={styles.bioRole}>
                Software Engineer{' '}
                <span className={styles.scientistTitle}>& Scientist</span>
              </h2>
              <div>
                <p className={`${styles.bioParagraph} large`}>
                  {`I'm a full-stack developer and former fermentation scientist (no, not beer, click to find out which molecules!).  
                `}
                </p>
{/* 
                <p className={`${styles.bioParagraph} large`}>
                  {`I'm JavaScript centric currently but am always looking to expand my
                  technical skills. `}
                </p>
                <p className={`${styles.bioParagraph} large`}>
                  From my previous background, I hope to bring a fresh and
                  unique perspective and am looking forward to new and
                  interesting technical challenges.
                </p> */}
              </div>
              <h4 className={styles.bioQuote}>
                <span
                  className={styles.bioQuoteSpan}
                  style={{
                    position: 'relative',
                    transform: 'translateX(-2ch)',
                  }}
                >{`"Great challenges make life interesting; `}</span>
                <span
                  className={styles.bioQuoteSpan}
                  style={{ position: 'relative', transform: 'translateX(1ch)' }}
                >
                  {`overcoming them makes life meaningful."`}
                </span>
              </h4>
            </div>
          </div>
        </section>

        {/* <div className = {styles.animationHome}>
       { isClient &&
        typeof window !== 'undefined' &&
        WebGL.isWebGLAvailable() && <LaboratoryAnimation />}
      </div> */}
      </Wrapper>
    </>
  );
}
