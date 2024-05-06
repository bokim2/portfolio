import React from 'react';
import { motion } from 'framer-motion';
import headshotImg from '../../../../public/images/intro/headshot.png';

// inside src/app/page.tsx - home component

import styles from './bio.module.scss';
import Wrapper from '@/components/wrapper/wrapper';
import Image from 'next/image';

const imageVariants = {
  initial: { filter: 'sepia(100%)' },
  animate: { filter: 'sepia(0%)', transition: { delay: 1, duration: 1.5 } },
};

export default function Bio() {
  return (
    <Wrapper backgroundColor="">
      <section className={styles.bio} id='bio'>
        <div className={styles.headshotImgOuterContainer}>
          <motion.div
            className={styles.headshotImgContainer}
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
            <h2 className={styles.bioRole}>Software Engineer & Scientist</h2>

            <p>
              As a software engineer with a passion for digital innovation and
              problem-solving, I transitioned from a decade-long career in
              biotech, where I worked in scientific research and process
              automation.
              <br />
              <br />
              While my current focus is in the JavaScript ecosystem, including
              tools like React and Node.js, I am also looking to expand my
              technical skills by learning new technologies and programming
              languages.
              <br />
              <br />
              My goal is to continually improve my capabilities to craft
              innovative software solutions.
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
