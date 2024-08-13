'use client';
import React, { useRef } from 'react';
import {
  motion,
  useAnimate,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

import styles from './cardDeck.module.scss';
import { SINGLE_CARD_DATA } from './singleCardForGrid';
import { useScroll } from 'framer-motion';
import { SiI18Next } from 'react-icons/si';

type TCardDeckToggle = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deckIndex: number;
};

const CARD_DECK_TOGGLE_INFO = [
  {
    cardDeckToggle: {
      title: 'Origin',
      bulletPoints: [
        'what i did in biotech',
        'cool equipment and software that got me interested in software engineering',
      ],
    },
  },
  {
    cardDeckToggle: {
      title: 'Next',
      bulletPoints: [
        'my interests in software developement',
        'what i have done so far and what i am interested in',
      ],
    },
  },
];

export default function CardDeckToggle({
  isOpen,
  setIsOpen,
  deckIndex,
}: TCardDeckToggle) {
  const leftTopCornerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: leftTopCornerRef,
    offset: ['start .7', 'end .5'],
  });

  const widthTransformed = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  // const leftClipPathTransformed = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ['polygon(0 0, 35% 0, 0 0, 0 30%)', 'polygon(0 0, 35% 0, 21% 17%, 0 30%)']
  // );

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const ROTATE_PX = 7.5;
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [-ROTATE_PX, ROTATE_PX]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [-ROTATE_PX, ROTATE_PX]
  );

  // icon movement with mouse in card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('mouse move event', e);
    const target = e.currentTarget;

    if (target instanceof HTMLElement) {
      const rect = target.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPercentage = mouseX / width - 0.5;
      const yPercentage = mouseY / height - 0.5;

      x.set(xPercentage);
      y.set(yPercentage);
    }
  };

  // border animations on card
  const leftBorderRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(leftBorderRef, { once: true });

  const cardDeckToggleVariants = {
    animate: {
      backgroundColor: !isOpen
        ? 'rgba(206, 209, 226, .3)'
        : 'rgba(161, 101, 73, .1)',
      transition: { duration: 1 },
      // width: !isOpen ?  '30%' :  '100%',
    },
  };

  return (
    <motion.header
      className={styles.cardDeckToggle}
      onMouseMove={handleMouseMove}
      key="header"
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      animate="animate"
      variants={cardDeckToggleVariants}
    >


      <motion.div
        className={`${styles.innerCardDeckToggle}`}
        animate="animate"
        variants={cardDeckToggleVariants}
      >
        <h2>{CARD_DECK_TOGGLE_INFO[deckIndex]?.cardDeckToggle?.title}</h2>
        <ul>
          {CARD_DECK_TOGGLE_INFO[deckIndex]?.cardDeckToggle?.bulletPoints.map(
            (bullet, i) => {
              return <li key={i}>{bullet}</li>;
            }
          )}
        </ul>

        <motion.div
          className={styles.leftBorderAnimation}
          ref={leftBorderRef}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={{
            initial: { opacity: 0, clipPath: 'polygon(0 0, 0% 0, 0 0, 0 0%)' },
            animate: {
              opacity: 1,
              clipPath: [
                'polygon(0 0, 0% 0, 0 0, 0 0%)',
                'polygon(0 0, 35% 0, 21% 17%, 0 30%)',
              ],
              transition: { duration: 2 },
            },
          }}

        ></motion.div>
      </motion.div>

      <motion.div
        ref={leftTopCornerRef}
        className={`${styles.leftTopCorner} ${styles.sibling}`}
        variants={{
          initial: { width: '0%' },
        }}
        style={{ width: widthTransformed }}
      ></motion.div>

      <motion.div
        className={`${styles.movingIcon}`}
        style={{
          rotateX,
          rotateY,
          zIndex: 1000,
          translateZ: '20px',
        }}
      >
        <SiI18Next />
      </motion.div>
    </motion.header>
  );
}
