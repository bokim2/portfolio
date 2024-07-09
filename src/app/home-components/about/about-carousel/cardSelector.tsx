import React from 'react';

import { motion } from 'framer-motion';
import styles from './aboutCarousel.module.scss';

type TCardSelector = {
  selectedCardIndex: number | null;
  handleSelectorChange: (selectedIndex: number) => void;
};

// const SELECTOR_OPTIONS = ['past', 'present', 'future'];
const SELECTOR_OPTIONS = ['origins', 'current', 'next'];

export default function CardSelector({
  selectedCardIndex,
  handleSelectorChange,
}: TCardSelector) {
  function scrollToSection(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  return (
    <motion.div
      className={`${styles.cardSelector}`}
      // variants={{
      //   animate: {transition: { staggerChildren: 0.2} },
      // }}
      // initial='initial'
      // animate='animate'
    >
      {/* <div className={`${styles.innerCardSelector}`}> */}

      {SELECTOR_OPTIONS.map((option, i) => (
        <motion.div
          // variants={{
          //   initial: { opacity: 0.5, y: -5 },
          //   animate: { opacity: 1, y: 0, transition: {
          //     // ease: 'easeIn', duration: .2
          //   }},
          // }}

          key={i}
          className={`${styles.cardSelectorOptions} `}
          // layoutId="cardSelection"
          whileHover={{ scale: 1.1 }}
          onClick={(e) => {
            // e.preventDefault();
            // e.stopPropagation();
            // console.log('before scrolling to about')
            scrollToSection('beforeAbout');
            // console.log('after scrolling to about')

            handleSelectorChange(i);
            // if (i !== selectedCardIndex) {
            //   handleSelectorChange(i);
            // }
          }}

          // setTimeout(()=>{
          //   console.log('i', i)
          //   handleSelectorChange(i)}, 2000)}}
        >
          <p className={`large`}>{SELECTOR_OPTIONS[i]}</p>
        </motion.div>
      ))}
      {/* </div> */}
    </motion.div>
  );
}
