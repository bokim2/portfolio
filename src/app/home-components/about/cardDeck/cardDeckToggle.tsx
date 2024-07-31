import React from 'react';
import { motion } from 'framer-motion';

import styles from './cardDeck.module.scss';
import { SINGLE_CARD_DATA } from './singleCardForGrid';

type TCardDeckToggle = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deckIndex: number;
};
export default function CardDeckToggle({
  isOpen,
  setIsOpen,
  deckIndex,
}: TCardDeckToggle) {
  return (
    <motion.header
      className={styles.cardDeckToggle}
      key="header"
      initial={false}
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      animate={{
        backgroundColor: !isOpen ? '#FF0088' : '#0055FF',
        transition: { duration: 2 },
      }}
    >
      {/* {SINGLE_CARD_DATA[deckIndex]?.[0]?.section} */}
      <motion.div className={styles.innerCardDeckToggle}>
        {SINGLE_CARD_DATA[deckIndex]?.[0]?.intro}
      </motion.div>
    </motion.header>
  );
}
