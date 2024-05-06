import React from 'react';
import { motion } from 'framer-motion';
// inside src/app/page.tsx - home component

import styles from './bio.module.scss';
import Image from 'next/image';

const imageVariants = {
  initial: {filter: 'sepia(100%)'},
  animate: {filter: 'sepia(0%)', transition: {delay: 1, duration: 1.5}},
}

export default function Bio() {
  return (
    <section className={styles.bio}>
        <div className={styles.bioAbout}>
      <div className={styles.bioTitleContainer}>
        <h1 className={styles.bioName}>Bo Kim</h1>
        <h2 className={styles.bioRole}>Software Engineer & Scientist</h2>

          <p>
            With ten years of experience in biotech, I have recently
            transitioned into software engineering, motivated by a passion for
            digital innovation and problem-solving.
            <br />
            My background in scientific research and process automation gives me
            a strong foundation for understanding complex systems and data
            analysis. While my current focus is on the JavaScript ecosystem,
            including tools like React and Node.js, I am also looking to expand
            my technical repertoire by learning new technologies and programming
            languages. My goal is to continually enhance my capabilities to
            craft innovative software solutions.
          </p>
        </div>

  <motion.div className={styles.backgroundImgContainer}
        variants={imageVariants}
        initial='initial'
        animate='animate'>
        <Image
            className={`${styles.headshotImg} `}
            src="/images/intro/headshot.png"
            alt="background"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            priority
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

        </motion.div>
      </div>
    </section>
  );
}
