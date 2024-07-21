// NOT USED, WILL DELETE


import React, { ReactElement, ReactNode } from 'react';

import { motion } from 'framer-motion';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { GoDot, GoDotFill } from 'react-icons/go';
import styles from './aboutCarousel.module.scss';
// export default function CardControls({ children }: { children: ReactNode }) {
//   return <div>{children}</div>;
// }

type TCardControls = {
  key: string;
  activeIndex: number;
  handleIndexChange: (incrementValue: number) => void;
  isHovered: 'left' | 'right' | null;
  isClicked: 'left' | 'right' | null;
};

export default function CardControls({
  key,
  handleIndexChange,
  isHovered,
  isClicked,
}: TCardControls) {
  console.log('isHovered', isHovered);
  return (
    <div className={styles.cardControls}>
      <motion.div
        key={`${key}_left`}
        initial="initial"
        whileHover="hover"
        animate={
          isClicked === 'left'
            ? 'tap'
            : isHovered === 'left'
            ? 'hover'
            : 'initial'
        }
        whileTap="tap"
        className={`${styles.arrowLeftContainer}`}
        onClick={() => handleIndexChange(-1)}
      >
        <motion.div
          key="left"
          variants={{
            initial: {
              opacity: 0.4,
              color: 'initial',
            },

            hover: {
              color: 'var(--clr-accent-2)',
              opacity: 1,
              scale: 1.3,
              transition: { ease: 'easeIn' },
            },
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
        key={`${key}_right`}
        initial="initial"
        whileHover="hover"
        animate={
          isClicked === 'right'
            ? 'tap'
            : isHovered === 'right'
            ? 'hover'
            : 'initial'
        }
        whileTap="tap"
        className={`${styles.arrowRightContainer}`}
        onClick={() => handleIndexChange(1)}
      >
        <motion.div
          variants={{
            initial: {
              opacity: 0.4,
            },

            hover: {
              color: 'var(--clr-accent-2)',
              opacity: 1,
              scale: 1.3,
              transition: { ease: 'easeIn' },
            },
            tap: { scale: 0.9, color: 'var(--clr-accent-1)' },
          }}
          className={`${styles.arrowWrapper} ${styles.right}`}
        >
          <BsFillCaretRightFill
          //   className={`${styles.imageArrows} ${styles.right}`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
