import React, { ReactElement, ReactNode } from 'react';

import { motion } from 'framer-motion';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { GoDot, GoDotFill } from 'react-icons/go';
import styles from './aboutCarousel.module.scss';
// export default function CardControls({ children }: { children: ReactNode }) {
//   return <div>{children}</div>;
// }

type TCardControls = {
  handleIndexChange: (incrementValue: number) => void;
};

export default function CardControls({ handleIndexChange }: TCardControls) {
  return (
    <>
      <motion.div
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className={`${styles.arrowLeftContainer}`}
        onClick={() => handleIndexChange(-1)}
      >
        <motion.div
          variants={{
            initial: {
              opacity: 0.4,
            },

            hover: { opacity: 1, scale: 1.2, transition: { ease: 'easeIn' } },
            tap: { scale: 0.9, color: 'var(--clr-accent-1)' },
          }}
          className={`${styles.arrowWrapper} ${styles.left}`}
        >
          <BsFillCaretLeftFill
          //   className={`${styles.imageArrows} ${styles.left}`}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className={`${styles.arrowRightContainer}`}
        onClick={() => handleIndexChange(1)}
      >
        <motion.div
          variants={{
            initial: {
              opacity: 0.4,
            },

            hover: { opacity: 1, scale: 1.2, transition: { ease: 'easeIn' } },
            tap: { scale: 0.9, color: 'var(--clr-accent-1)' },
          }}
          className={`${styles.arrowWrapper} ${styles.right}`}
        >
          <BsFillCaretRightFill
          //   className={`${styles.imageArrows} ${styles.right}`}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
