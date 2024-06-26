import Image from 'next/image';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { GoDot, GoDotFill } from 'react-icons/go';
import styles from './aboutCarousel.module.scss';

import biomek1Img from '@/../public/images/experience/biomek1.jpg';
import genencorFun from '@/../public/images/carousel/1.jpg';
import genencor2 from '@/../public/images/progressive/genencor3.jpg';
import biostatB from '@/../public/images/carousel/biostatB.jpg';
import dasgip from '@/../public/images/carousel/dasgip.jpg';
import ambr250 from '@/../public/images/carousel/ambr250.jpg';
import suf from '@/../public/images/carousel/suf.jpg';
import CardControls from './cardControls';

export const ABOUT_ME = [
  {
    title: 'the journey up to this point',
    subtitle: 'biotech',
    equipment: [],
    images: [
      { pic1: genencorFun, pic2: genencor2, pic1StyleOverrides: '' },
      { pic1: biostatB },
      { pic1: biomek1Img },
      { pic1: dasgip },
      { pic1: ambr250 },
      { pic1: suf },
    ],

    text: [
      <>
        My primary area of specialization was upstream process development, aka
        working with bioreactors, often referred to as &quot;fermentation&quot;,
        a term originating from the historical use of microorganisms for the
        production of alcoholic beverages.
        <br />
      </>,
      <>
        My experience involved cultivating genetically modified microbes to
        produce therapeutic proteins and enzymes. Additionally, I was involved
        in the production of molecules such as squalene, an oil found in shark
        liver used in cosmetics, and Rebaudioside M (rebM), a zero-calorie
        sweetener naturally derived from the stevia plant.
      </>,
    ],
  },
  {
    title: 'interest in software engineering',
    subtitle: "what I've worked with",
    equipment: [],
    images: [{ pic1: '' }],
    text: [
      <>
        My primary area of specialization was upstream process development, aka
        working with bioreactors, often referred to as &quot;fermentation&quot;,
        a term originating from the historical use of microorganisms for the
        production of alcoholic beverages.
        <br />
        My experience involved cultivating genetically modified microbes to
        produce therapeutic proteins and enzymes. Additionally, I was involved
        in the production of molecules such as squalene, an oil found in shark
        liver used in cosmetics, and Rebaudioside M (rebM), a zero-calorie
        sweetener naturally derived from the stevia plant.
      </>,
    ],
  },
] as const;

type TCard = {
  item: (typeof ABOUT_ME)[number];
  i: number;
};

export default function Card({ item, i }: TCard) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleIndexChange(incrementValue: number) {
    console.log('incrementValue', incrementValue, 'activeIndex', activeIndex);
    if (incrementValue > 0) {
      if (activeIndex >= item.images.length - 1) return;

      setActiveIndex((prev) => prev + incrementValue);
    } else {
      if (activeIndex <= 0) return;

      setActiveIndex((prev) => prev + incrementValue);
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardColumn}>
        <h3>{item?.title}</h3>
        <h4>{item?.subtitle}</h4>

        <p>{item?.text?.[activeIndex]}</p>
      </div>

      <div className={`${styles.cardColumn} ${styles.imageColumn}`}>
        {item?.images?.length > 0 ? (
          <div className={styles.cardImageContainer}>
            <Image
              src={item?.images?.[activeIndex]?.pic1}
              alt={item?.title}
              layout="fill"
              //   objectFit="cover"
              key={i}
            />
            <CardControls handleIndexChange={handleIndexChange} />
          </div>
        ) : null}
        <div className={`${styles.imageDots}`}>
          {item?.images?.map((count, i) =>
            activeIndex == i ? (
              <motion.div key={i} whileHover={{ scale: 1.2 }}>
                <GoDotFill onClick={() => setActiveIndex(i)} />
              </motion.div>
            ) : (
              <motion.div key={i} whileHover={{ scale: 1.2 }}>
                <GoDot onClick={() => setActiveIndex(i)} />
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
