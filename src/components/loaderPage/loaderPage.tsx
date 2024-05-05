import React, { Dispatch } from 'react';
import styles from './loaderPage.module.scss';
import { motion } from 'framer-motion';

const container = {
  hidden: {
    // initial
    y: 0,
    opacity: 1,
  },
  show: {
    // animate
    opacity: 0,
    y: '100vh',
    transition: {
      duration: 1.6,
      ease: [0.83, 0, 0.17, 1],
      delay: 2,
    },
  },

  exit: {
    // exit
    opacity: 0,
    y: '100vh',
  },
};

type TloaderPageProps = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function loaderPage({ setLoading }: TloaderPageProps) {
  return (
    <motion.div
      className={styles.loaderPage}
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
    >
      loaderPage
    </motion.div>
  );
}
