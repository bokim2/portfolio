import React from 'react';

import { motion } from 'framer-motion';
import styles from './aboutCarousel.module.scss';

type TCardSelector = {
  selectedCardIndex: number | null;
  handleSelectorChange: (selectedIndex: number) => void;
};

const SELECTOR_OPTIONS = ['past', 'present', 'future'];

export default function CardSelector({
  selectedCardIndex,
  handleSelectorChange,
}: TCardSelector) {
  return (
    <motion.div
      className={`${styles.cardSelector}`}
      // variants={{
      //   animate: {transition: { staggerChildren: 0.2} },
      // }}
      // initial='initial'
      // animate='animate'
    >
      {SELECTOR_OPTIONS.map((option, i) => (
        <motion.div
          // variants={{
          //   initial: { opacity: 0.5, y: -5 },
          //   animate: { opacity: 1, y: 0, transition: {
          //     // ease: 'easeIn', duration: .2 
          //   }},
          // }}
     
          key={i}
          className={`${styles.cardSelectorOptions} imgBorderRadius`}
          // layoutId="cardSelection"
          onClick={() => handleSelectorChange(i)}
        >
          <p className={`large`}>{SELECTOR_OPTIONS[i]}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
