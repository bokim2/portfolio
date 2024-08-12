'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './cardDeck.module.scss';
import SingleCardForGrid, { SINGLE_CARD_DATA } from './singleCardForGrid';


import CardDeckToggle from './cardDeckToggle';

type TCardDeck = { deckIndex: number };

export default function CardDeck({ deckIndex }: TCardDeck) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AnimatePresence initial={false}>
      <motion.section layout>
        <CardDeckToggle
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          deckIndex={deckIndex}
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
            className={styles.cardsSingleDeck}
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: {
                  opacity: 1,
                  height: 'auto',
                  transition: { opacity: { duration: 1 } },
                },
                collapsed: {
                  opacity: 0,
                  height: 0,
                  transition: { opacity: { duration: 0.1 } },
                },
              }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {Array.from({
                length: SINGLE_CARD_DATA[deckIndex]?.length,
              }).map((activeIndex, i) => {
                return (
                  <>
                    <SingleCardForGrid
                      key={i}
                      item={SINGLE_CARD_DATA[deckIndex]}
                      activeIndex={i}
                      cardIndex={0}
                    />
                  </>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </AnimatePresence>
  );
}
