'use client';

import React, { useEffect, useState } from 'react';

import styles from '../about.module.scss';
import SingleCardForGrid, { SINGLE_CARD_DATA } from './singleCardForGrid';
import CardSelector from '../about-carousel/cardSelector';
import { AnimatePresence, motion } from 'framer-motion';

type TaboutCarousel = {
  selectedCardIndex: number | null;
  handleSelectorChange: (selectedIndex: number) => void;
};

export default function CardGrid({
  selectedCardIndex,
  handleSelectorChange,
}: TaboutCarousel) {
  // const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(0);

  // function handleSelectorChange(selectedIndex: number) {
  //   setSelectedCardIndex(selectedIndex);
  // }

  useEffect(() => {
    if (selectedCardIndex) {
      console.log('selectedCardIndex', selectedCardIndex);
      console.log(
        'CARD_DATA[selectedCardIndex]',
        SINGLE_CARD_DATA[selectedCardIndex]
      );
    }
  }, [selectedCardIndex]);
  return (
    <AnimatePresence>
      <motion.div
      initial={{y: -30, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      exit={{y: -30, opacity: 0}}
        className={styles.cardGrid}
        // style={{backgroundColor: 'red'}}
      >
        {/* <CardSelector selectedCardIndex={selectedCardIndex} 
      handleSelectorChange={handleSelectorChange}/> */}
        {selectedCardIndex !== null &&
          Array.from({
            length: SINGLE_CARD_DATA[selectedCardIndex]?.length,
          }).map((activeIndex, i) => {
            return (
              <SingleCardForGrid
                key={i}
                item={SINGLE_CARD_DATA[selectedCardIndex]}
                activeIndex={i}
                cardIndex={0}
              />
            );
          })}
      </motion.div>
    </AnimatePresence>

    //     <>
    //     <SingleCardForGrid key={1} item={CARD_DATA[0]} activeIndex={1} cardIndex={0} />
    //   <SingleCardForGrid key={1} item={CARD_DATA[0]} activeIndex={5} cardIndex={0} />

    //     </>
  );
}
