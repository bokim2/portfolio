import React from 'react';

import { motion } from 'framer-motion';
import styles from './aboutCarousel.module.scss';

type TCardSelector = {
  selectedCardIndex: number | null;
  handleSelectorChange: (selectedIndex: number) => void;
};

const SELECTOR_OPTIONS = ['past', 'current', 'future'];

export default function CardSelector({
  selectedCardIndex,
  handleSelectorChange,
}: TCardSelector) {
  return (
    <div className={`${styles.cardSelector}`}>
      {SELECTOR_OPTIONS.map((option, i) => (
        <div
          key={i}
          className={`${styles.cardSelectorOptions}`}
          // layoutId="cardSelection"
          onClick={() => handleSelectorChange(i)}
        >
          {SELECTOR_OPTIONS[i]}
        </div>
      ))}
    </div>
  );
}
