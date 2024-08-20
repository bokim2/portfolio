'use client';
import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './cardDeck.module.scss';
import SingleCardForGrid, { SINGLE_CARD_DATA } from './singleCardForGrid';

import CardDeckToggle from './cardDeckToggle';

type TCardDeck = { deckIndex: number };

export default function CardDeck({ deckIndex }: TCardDeck) {
  const [isOpen, setIsOpen] = useState(false);
  const outsideCardDeckRef = useRef<HTMLDivElement>(null);
  const singleCardDeckRef = useRef<HTMLDivElement>(null);

function handleClickOutside (event: MouseEvent) {
  if(outsideCardDeckRef.current && outsideCardDeckRef.current.contains(event.target as Node) 
  && singleCardDeckRef && !singleCardDeckRef.current?.contains(event.target as Node)) {
    setIsOpen(false)
  }
}

useEffect(()=> {
  document.addEventListener('mousedown', handleClickOutside)

  return ()=> {
    document.removeEventListener('mousedown', handleClickOutside)
  }
},[])

  return (
    <motion.div
    layout
      ref={outsideCardDeckRef}
      key={'outsideCardDeckRef'}
      className={styles.cardDeckWrapper}
      // initial={{ height: 'auto' }}
      // animate={{ height: 'auto' }}
    >
      <AnimatePresence initial={false}>
        <motion.section
          // layout
          className={styles.cardDeckInnerWrapper}
          key={deckIndex}
          // ref={outsideCardDeckRef}
        >
          <CardDeckToggle
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            deckIndex={deckIndex}
          />
          <AnimatePresence>
            {isOpen && (
              <motion.div
              ref={singleCardDeckRef}
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
    </motion.div>
  );
}
