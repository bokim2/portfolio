'use client';
import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './cardDeck.module.scss';
import SingleCardForGrid, { SINGLE_CARD_DATA } from './singleCardForGrid';
import CardDeckToggle from './cardDeckToggle';

type TCardDeck = { deckIndex: number };

export default function CardDeck({ deckIndex }: TCardDeck) {
  const [isOpen, setIsOpen] = useState(false);
  const outsideCardDeckRef = useRef<HTMLDivElement>(null);
  const singleCardDeckRef = useRef<HTMLDivElement>(null);

  // Handle click inside the container, close deck if clicked outside
  const handleClick = (event: React.MouseEvent) => {
    // Check if the clicked target is inside the deck
    if (
      singleCardDeckRef.current &&
      !singleCardDeckRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  return (
    <motion.div
      layout
      ref={outsideCardDeckRef}
      key={'outsideCardDeckRef'}
      className={styles.cardDeckWrapper}
      onClick={handleClick} // Attach the click handler directly to the wrapper
    >
      <AnimatePresence initial={false}>
        <motion.section className={styles.cardDeckInnerWrapper} key={deckIndex}>
          <CardDeckToggle
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            deckIndex={deckIndex}
          />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                // layout
                ref={singleCardDeckRef}
                className={styles.cardsSingleDeck}
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: {
                    opacity: [0, .2, 1],
                    height: 'auto',
                    transition: {
                      height: { duration: 0.1 },
                      opacity: { duration: 0.3, delay: 0.1 },
                    },
                  },
                  collapsed: {
                    opacity: [.05, .01, 0],
                    height: 0,
                    transition: {
                      height: { duration: 0.1 },
                      opacity: { duration: 0.1, delay: 0 },
                    },
                  },
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                {Array.from({
                  length: SINGLE_CARD_DATA[deckIndex]?.length,
                }).map((activeIndex, i) => (
                  <SingleCardForGrid
                    key={i}
                    item={SINGLE_CARD_DATA[deckIndex]}
                    activeIndex={i}
                    cardIndex={0}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </AnimatePresence>
    </motion.div>
  );
}
