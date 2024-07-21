'use client';

import React, { useEffect, useState } from 'react';

import styles from '../about.module.scss';
import SingleCardForGrid, { SINGLE_CARD_DATA } from './singleCardForGrid';
import CardSelector from '../about-carousel/cardSelector';
import { AnimatePresence, motion } from 'framer-motion';
import CardDeck from './cardDeck';

type TaboutCarousel = {
  selectedCardIndex: number | null;
  handleSelectorChange: (selectedIndex: number) => void;
  selectedCardReady: Boolean;
};

export default function CardGrid({
  selectedCardReady,
  selectedCardIndex,
  handleSelectorChange,
}: TaboutCarousel) {
  // const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(0);

  // function handleSelectorChange(selectedIndex: number) {
  //   setSelectedCardIndex(selectedIndex);
  // }

  function scrollToSection(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

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
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        className={styles.cardGrid}
        // style={{backgroundColor: 'red'}}
      >
        {/* <CardSelector selectedCardIndex={selectedCardIndex} 
      handleSelectorChange={handleSelectorChange}/> */}
        {/* entire decks of cards */}
        {SINGLE_CARD_DATA.map((deck, i) => {
          return (
            <>
              <motion.header
                initial={false}
                onClick={() => {
                  handleSelectorChange(i);
                  // scrollToSection('beforeAbout');
                }}
                animate={{
                  backgroundColor: selectedCardIndex === i ? 'red' : 'blue',
                }}
                // onClick
              >
                {SINGLE_CARD_DATA[i][0]?.section}
                {SINGLE_CARD_DATA[i][0]?.intro}
              </motion.header>

              <AnimatePresence>
                {selectedCardIndex === i && selectedCardReady && (
                  <CardDeck selectedCardIndex={selectedCardIndex} />
                )}
              </AnimatePresence>
            </>
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
