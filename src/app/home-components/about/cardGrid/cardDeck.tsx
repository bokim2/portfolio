'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SingleCardForGrid, { SINGLE_CARD_DATA } from './singleCardForGrid';

// type TCardDeck = { selectedCardIndex: number | null };
type TCardDeck = { deckIndex: number };

export default function CardDeck({ deckIndex }: TCardDeck) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <AnimatePresence>
    <motion.section>
      <motion.header
        initial={false}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        animate={{
          backgroundColor: !isOpen ? 'red' : 'blue',
        }}
      >
        {SINGLE_CARD_DATA[deckIndex]?.[0]?.section}
        {SINGLE_CARD_DATA[deckIndex]?.[0]?.intro}
      </motion.header>
      {/* <AnimatePresence> */}
      {isOpen &&
        Array.from({
          length: SINGLE_CARD_DATA[deckIndex]?.length,
        }).map((activeIndex, i) => {
          return (
            <>
              <SingleCardForGrid
                key={i}
                item={SINGLE_CARD_DATA[deckIndex]}
                activeIndex={i}
                cardIndex={0}
                isOpen={isOpen}

              />
            </>
          );
        })}
      {/* </AnimatePresence> */}
    </motion.section>
    // </AnimatePresence>
  );
}
