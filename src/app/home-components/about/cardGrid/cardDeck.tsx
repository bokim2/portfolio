import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SingleCardForGrid, { SINGLE_CARD_DATA } from './singleCardForGrid';

type TCardDeck = { selectedCardIndex: number | null };

export default function CardDeck({ selectedCardIndex }: TCardDeck) {
  return (
    // <AnimatePresence>
    <motion.section
    //   key="content"
    //   initial="collapsed"
    //   animate="open"
    //   exit="collapsed"
    //   variants={{
    //     open: { opacity: 1, height: 'auto' },
    //     collapsed: { opacity: 0, height: 0 },
    //   }}
    //   transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
    >
      {/* <AnimatePresence> */}
        {selectedCardIndex !== null &&
          Array.from({
            length: SINGLE_CARD_DATA[selectedCardIndex]?.length,
          }).map((activeIndex, i) => {
            return (
              <>
                <SingleCardForGrid
                  key={i}
                  item={SINGLE_CARD_DATA[selectedCardIndex]}
                  activeIndex={i}
                  cardIndex={0}
                  selectedCardIndex={selectedCardIndex}
                  // isOpen = {selectedCardIndex === i}
                />
              </>
            );
          })}
      {/* </AnimatePresence> */}
    </motion.section>
    // </AnimatePresence>
  );
}
