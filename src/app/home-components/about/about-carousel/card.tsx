import Image, { StaticImageData } from 'next/image';
import { CSSProperties, useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { GoDot, GoDotFill } from 'react-icons/go';
import styles from './aboutCarousel.module.scss';

import genencorFun from '@/../public/images/carousel/1.jpg';
import genencor2 from '@/../public/images/progressive/genencor3.jpg';
import egyptWine from '@/../public/images/carousel/egyptWine.jpg';

import biostatB from '@/../public/images/carousel/biostatB.jpg';
import mfcs from '@/../public/images/carousel/mfcs.jpg';

import biomek1 from '@/../public/images/carousel/biomek1.jpg';
import biomek2 from '@/../public/images/carousel/biomek2.jpg';

import dasgip from '@/../public/images/carousel/dasgip.jpg';
import dasgipSw from '@/../public/images/carousel/dasgipSw.jpg';

import ambr250 from '@/../public/images/carousel/ambr250.jpg';
import ambr250Sw from '@/../public/images/carousel/ambr250Sw.jpg';

import suf from '@/../public/images/carousel/suf.jpg';
import sufProfile from '@/../public/images/carousel/sufProfile.jpg';
import CardControls from './cardControls';

// type Timages = {
//   pic1: StaticImageData;
//   pic2?: StaticImageData | undefined;
// };

// type TAboutMeCard = {
//   title: string;
//   subtitle: string;
//   equipment?: string[];
//   slides: Timages[];
//   text: JSX.Element[];
// };

type TSlide = {
  title?: string;
  subtitle?: string;
  equipment?: string;
  pic1: StaticImageData;
  pic2?: StaticImageData | undefined;
  pic3?: StaticImageData | undefined;
  pic1StyleOverrides?: CSSProperties;
  pic2StyleOverrides?: CSSProperties;
  text?: string[];
};

export const CARD_DATA = [
  [
    {
      title: 'the journey up to this point',
      subtitle: 'biotech',
      equipment: '',
      pic1: genencorFun,
      pic2: egyptWine,
      pic3: egyptWine,
      pic1StyleOverrides: {
        // transform: 'scale(2)',
        // backgroundColor: 'red',
        // opacity: .2
      },
      pic2StyleOverrides: {
        // transform: 'scale(2)',
        // backgroundColor: 'red',
        // opacity: .2
      },
      text: [
        <>
          My primary area of specialization was upstream process development,
          aka working with{' '}
          <em>
            <b>bioreactors</b>
          </em>
          , often referred to as{' '}
          <em>
            <b>&quot;fermentation&quot;</b>
          </em>
          .
        </>,
        <>
          The term originated from the historical use of microorganisms for the
          production of alcoholic beverages.
        </>,
      ],
    },
    {
      title: 'the journey up to this point2',
      subtitle: 'biotech2',
      equipment: '',
      pic1: biostatB,
      pic2: mfcs,
      text: [
        `
          My experience involved cultivating genetically modified microbes to
          produce therapeutic proteins and enzymes. Additionally, I was involved
          in the production of molecules such as squalene, an oil found in shark
          liver used in cosmetics, and Rebaudioside M (rebM), a zero-calorie
          sweetener naturally derived from the stevia plant.
`,
      ],
    },
    { pic1: biomek1, pic2: biomek2 },
    { pic1: dasgip, pic2: dasgipSw },
    { pic1: ambr250, pic2: ambr250Sw },
    { pic1: suf, pic2: sufProfile },
  ],
] as TSlide[][];

// export const ABOUT_ME = [
//   {
//     title: 'the journey up to this point',
//     subtitle: 'biotech',
//     equipment: [],
//     slides: [
//       {
//         pic1: genencorFun,
//         pic2: genencor2,
//         pic1StyleOverrides: '',
//         pic2StyleOverrides: '',
//       },
//       { pic1: biostatB, pic2: mfcs },
//       { pic1: biomek1, pic2: biomek2 },
//       { pic1: dasgip, pic2: dasgipSw },
//       { pic1: ambr250, pic2: ambr250Sw },
//       { pic1: suf, pic2: sufProfile },
//     ],

//     text: [
//       <>
//         My primary area of specialization was upstream process development, aka
//         working with bioreactors, often referred to as &quot;fermentation&quot;,
//         a term originating from the historical use of microorganisms for the
//         production of alcoholic beverages.
//         <br />
//       </>,
//       <>
//         My experience involved cultivating genetically modified microbes to
//         produce therapeutic proteins and enzymes. Additionally, I was involved
//         in the production of molecules such as squalene, an oil found in shark
//         liver used in cosmetics, and Rebaudioside M (rebM), a zero-calorie
//         sweetener naturally derived from the stevia plant.
//       </>,
//     ],
//   },
//   {
//     title: 'interest in software engineering',
//     subtitle: "what I've worked with",
//     equipment: [],
//     slides: [{ pic1: '', pic2: undefined }],
//     text: [
//       <>
//         My primary area of specialization was upstream process development, aka
//         working with bioreactors, often referred to as &quot;fermentation&quot;,
//         a term originating from the historical use of microorganisms for the
//         production of alcoholic beverages.
//         <br />
//         My experience involved cultivating genetically modified microbes to
//         produce therapeutic proteins and enzymes. Additionally, I was involved
//         in the production of molecules such as squalene, an oil found in shark
//         liver used in cosmetics, and Rebaudioside M (rebM), a zero-calorie
//         sweetener naturally derived from the stevia plant.
//       </>,
//     ],
//   },
// ] as TAboutMeCard[];

type TCard = {
  item: (typeof CARD_DATA)[number];
  i: number;
};

export default function Card({ item, i }: TCard) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  // useEffect(() => {
  // console.log(i)
  // }, [i])

  function handleIndexChange(incrementValue: number) {
    console.log('incrementValue', incrementValue, 'activeIndex', activeIndex);
    if (incrementValue > 0) {
      if (activeIndex >= item?.length - 1) {
        setActiveIndex(0);
        return;
      }

      setActiveIndex((prev) => prev + incrementValue);
    } else {
      if (activeIndex <= 0) {
        setActiveIndex(item.length - 1);
        return;
      }

      setActiveIndex((prev) => prev + incrementValue);
    }
  }

  return (
    <div className={styles.card}>
      <CardControls
        handleIndexChange={handleIndexChange}
        isHovered={isHovered}
        isClicked={isClicked}
      />

      {activeIndex % 2 !== 0 ? (
        <motion.div className={styles.cardInner}>
          <div className={styles.cardColumn}>
            <div className={styles.cardTitles}>
              <h3>{item?.[activeIndex]?.title ?? ''}</h3>
              <p className={`xlarge ${styles.cardSubtitle}`}>
                {item?.[activeIndex]?.subtitle ?? ''}
              </p>
            </div>
            <div className={`${styles.cardTextAndSecondImage}`}>
              <div className={`${styles.cardTextContainer}`}>
                {item?.[activeIndex]?.text?.map((singleParagraph, i) => (
                  <>
                    <p key={i} className={`large`}>
                      {singleParagraph}
                    </p>
                    {i < (item?.[activeIndex]?.text?.length ?? 0) - 1 && <br />}
                  </>
                ))}
              </div>
              {/* second pic */}
              {item?.[activeIndex]?.pic3 && (
                <div className={styles.cardImageContainerSecondary}>
                  <Image
                    src={item?.[activeIndex]?.pic3 as StaticImageData}
                    alt={item?.[activeIndex]?.title as string}
                    layout="fill"
                    style={item?.[activeIndex]?.pic2StyleOverrides ?? {}}
                  />
                </div>
              )}
            </div>
          </div>

          <div
            className={`${styles.cardColumn} ${styles.imageColumn}`}
            onClick={() => handleIndexChange(1)}
          >
            {item?.length > 0 ? (
              <>
                <motion.div
                  whileHover={{
                    boxShadow: '0.25px 0.25px 3px var(--clr-accent-2)',
                  }}
                  className={`${styles.cardImageContainer} imgBorderRadius`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onMouseDown={() => setIsClicked(true)}
                  onMouseUp={() => setIsClicked(false)}
                  // whileHover={{'.pic2': {opacity: 1}}}
                >
                  <Image
                    className={styles.pic1}
                    src={item?.[activeIndex]?.pic1}
                    alt={item?.[activeIndex]?.title as string}
                    layout="fill"
                    //   objectFit="cover"
                    style={item?.[activeIndex]?.pic1StyleOverrides ?? {}}
                    key={i}
                  />

                  <Image
                    className={styles.pic2}
                    src={item?.[activeIndex]?.pic2 as StaticImageData}
                    alt={item?.[activeIndex]?.title as string}
                    layout="fill"
                    style={item?.[activeIndex]?.pic2StyleOverrides ?? {}}
                  />
                </motion.div>
              </>
            ) : null}
          </div>
        </motion.div>
      ) : (
        <motion.div className={styles.cardInner}>
          <div
            className={`${styles.cardColumn} ${styles.imageColumn}`}
            onClick={() => handleIndexChange(-1)}
          >
            {item?.length > 0 ? (
              <>
                <motion.div
                  whileHover={{
                    boxShadow: '0.25px 0.25px 3px var(--clr-accent-2)',
                  }}
                  className={`${styles.cardImageContainer} imgBorderRadius`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onMouseDown={() => setIsClicked(true)}
                  onMouseUp={() => setIsClicked(false)}
                  // whileHover={{'.pic2': {opacity: 1}}}
                >
                  <Image
                    className={styles.pic1}
                    src={item?.[activeIndex]?.pic1}
                    alt={item?.[activeIndex]?.title as string}
                    layout="fill"
                    //   objectFit="cover"
                    style={item?.[activeIndex]?.pic1StyleOverrides ?? {}}
                    key={i}
                  />

                  <Image
                    className={styles.pic2}
                    src={item?.[activeIndex]?.pic2 as StaticImageData}
                    alt={item?.[activeIndex]?.title as string}
                    layout="fill"
                    style={item?.[activeIndex]?.pic2StyleOverrides ?? {}}
                  />
                </motion.div>
              </>
            ) : null}
          </div>

          <div className={styles.cardColumn}>
            <div className={styles.cardTitles}>
              <h3>{item?.[activeIndex]?.title ?? ''}</h3>
              <p className={`xlarge ${styles.cardSubtitle}`}>
                {item?.[activeIndex]?.subtitle ?? ''}
              </p>
            </div>
            <div className={`${styles.cardTextAndSecondImage}`}>
              <div className={`${styles.cardTextContainer}`}>
                {item?.[activeIndex]?.text?.map((singleParagraph, i) => (
                  <>
                    <p key={i} className={`large`}>
                      {singleParagraph}
                    </p>
                    {i < (item?.[activeIndex]?.text?.length ?? 0) - 1 && <br />}
                  </>
                ))}
              </div>
              {/* second pic */}
              {item?.[activeIndex]?.pic3 && (
                <div className={styles.cardImageContainerSecondary}>
                  <Image
                    src={item?.[activeIndex]?.pic3 as StaticImageData}
                    alt={item?.[activeIndex]?.title as string}
                    layout="fill"
                    style={item?.[activeIndex]?.pic2StyleOverrides ?? {}}
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      <div className={`${styles.imageDots}`}>
        {item?.map((count, i) =>
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
  );
}
