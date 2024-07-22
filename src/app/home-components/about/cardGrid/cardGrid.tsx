'use client';

import React, { useEffect, useState } from 'react';

import styles from '../about.module.scss';
import SingleCardForGrid, { SINGLE_CARD_DATA } from './singleCardForGrid';
import CardSelector from '../about-carousel/cardSelector';
import { AnimatePresence, motion } from 'framer-motion';
import CardDeck from './cardDeck';

type TaboutCarousel = {};

export default function CardGrid({}: TaboutCarousel) {


  function scrollToSection(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <AnimatePresence>
      <motion.div layout
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        className={styles.cardGrid}
      >
        {SINGLE_CARD_DATA.map((deck, deckIndex) => {
          return (
            <>
              <AnimatePresence>
                <CardDeck deckIndex={deckIndex} />
              </AnimatePresence>
            </>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
