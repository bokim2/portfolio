import React from 'react';

import { motion } from 'framer-motion';
import styles from './aboutCarousel.module.scss';

type TCardSelector = {
  selectedCardIndex: number | null;
  handleSelectorChange: (selectedIndex: number) => void;
};

const SELECTOR_OPTIONS = ['past', 'present', 'future'];

export default function CardSelector({
  selectedCardIndex,
  handleSelectorChange,
}: TCardSelector) {
  return (
    <div className={`${styles.cardSelector}`}>
      {SELECTOR_OPTIONS.map((option, i) => (
        <div
          key={i}
          className={`${styles.cardSelectorOptions} imgBorderRadius`}
          // layoutId="cardSelection"
          onClick={() => handleSelectorChange(i)}
        >
          <p className={`large`}>{SELECTOR_OPTIONS[i]}</p>
        </div>
      ))}
    </div>
  );
}
