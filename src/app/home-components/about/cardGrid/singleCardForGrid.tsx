'use client';

import Image, { StaticImageData } from 'next/image';
import { CSSProperties, useEffect, useRef, useState } from 'react';

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { GoDot, GoDotFill } from 'react-icons/go';
import styles from '../about-carousel/aboutCarousel.module.scss';

import genencorFun from '@/../public/images/carousel/1.jpg';
import genencor2 from '@/../public/images/progressive/genencor3.jpg';

import background from '@/../public/images/carousel/background.jpg';

import spotfireJH1 from '@/../public/images/carousel/spotfireJH1.jpg';
import spotfireFilters from '@/../public/images/carousel/spotfireFilters.jpg';
import spotfireGIF from '@/../public/images/carousel/spotfireGIF.gif';
import benchlingNotebook from '@/../public/images/carousel/benchlingNotebook.jpg';
import benchlingGIF from '@/../public/images/carousel/benchlingGIF.gif';

import biostatB from '@/../public/images/carousel/biostatB.jpg';
import biostatBY from '@/../public/images/carousel/biostatBY.jpg';
import mfcs from '@/../public/images/carousel/mfcs.jpg';

import biomek1 from '@/../public/images/carousel/biomek1.jpg';
import biomek2 from '@/../public/images/carousel/biomek2.jpg';

import dasgip from '@/../public/images/carousel/dasgip.jpg';
import dasgipSw from '@/../public/images/carousel/dasgipSw.jpg';

import biolector1 from '@/../public/images/carousel/biolector1.jpg';
import biolector2 from '@/../public/images/carousel/biolector2.jpg';
import MF_biolector_feed_profile from '@/../public/images/carousel/MF_biolector_feed_profile.jpg';

import ambr250 from '@/../public/images/carousel/ambr250.jpg';
import ambr250Sw from '@/../public/images/carousel/ambr250Sw.jpg';
import ambr1 from '@/../public/images/carousel/ambr1.jpg';
import ambr2 from '@/../public/images/carousel/ambr2.jpg';

import suf from '@/../public/images/carousel/suf.jpg';
import sufGIFShort from '@/../public/images/carousel/sufGIFShort.gif';
import suf300 from '@/../public/images/carousel/suf300.jpg';
import sufDeflated from '@/../public/images/carousel/sufDeflated.jpg';
import suf2 from '@/../public/images/carousel/suf2.jpg';
import sufProfile from '@/../public/images/carousel/sufProfile.jpg';
import sufSw2 from '@/../public/images/carousel/sufSw2.jpg';
import MF_thermo_suf from '@/../public/images/carousel/MF_thermo_suf.jpg';

// Current CARD
import codesmith from '@/../public/images/carousel/current/codesmith.jpg';
import codesmith2 from '@/../public/images/carousel/current/codesmith2.jpg';
import rediscopeSH from '@/../public/images/carousel/current/rediscopeSH.jpg';
import rediscopeZ from '@/../public/images/carousel/current/rediscopeZ.jpg';

import aws from '@/../public/images/carousel/current/aws.jpg';
import awsVPN from '@/../public/images/carousel/current/awsVPN.jpg';

import ambr15 from '@/../public/images/carousel/current/ambr15.jpg';
import dna from '@/../public/images/carousel/current/dna.jpg';

import interest3d from '@/../public/images/carousel/current/interest3d.jpg';
import spotfireEX from '@/../public/images/carousel/current/spotfireEX.jpg';

import commercialScale from '@/../public/images/carousel/current/commercialScale.jpg';
import manyBioreactors from '@/../public/images/carousel/current/manyBioreactors.jpg';

import mosaic from '@/../public/images/carousel/current/mosaic.jpg';
import bubbleDark from '@/../public/images/carousel/current/bubbleDark.jpg';
import genencor4 from '@/../public/images/progressive/genencor4.jpg';

import ambr250BM from '@/../public/images/carousel/ambr250BM.jpg';
import fermAmyrisBM from '@/../public/images/carousel/fermAmyrisBM.jpg';
import industrialBioBM from '@/../public/images/carousel/industrialBioBM.jpg';
import operizBM from '@/../public/images/carousel/operizBM.jpg';

import CardControls from '../about-carousel/cardControls';

type TSlide = {
  section?: string ;
  intro: string | JSX.Element;
  title?: string;
  subtitle?: string;
  equipment?: string;
  pic1: StaticImageData;
  pic2?: StaticImageData | undefined;
  pic3?: StaticImageData | undefined;
  pic1StyleOverrides?: CSSProperties;
  pic2StyleOverrides?: CSSProperties;
  pic1ImageCaption?: string;
  pic2ImageCaption?: string;
  text?: (string | JSX.Element)[];
};

`
My experience involved cultivating genetically modified microbes to
produce therapeutic proteins and enzymes. Additionally, I was involved
in the production of molecules such as squalene, an oil found in shark
liver used in cosmetics, and Rebaudioside M (rebM), a zero-calorie
sweetener naturally derived from the stevia plant.
`;

export const SINGLE_CARD_DATA = [
  [
    {section: 'origin',
      intro: (
        <>
          <h2>Origins</h2>
          <ul>
            <li>what i did in biotech</li>
            <li>
              cool equipment and software that got me interested in software
              engineering
            </li>
          </ul>
        </>
      ),
      title: 'the journey up to this point',
      subtitle: 'biotech',
      equipment: '',
      pic1: fermAmyrisBM,
      pic2: background,
      // pic3: egyptWine,
      pic1StyleOverrides: {
        // transform: 'scale(2)',
        // backgroundColor: 'red',
        // opacity: .2
        objectFit: 'contain',
      },
      pic2StyleOverrides: {
        // transform: 'scale(2)',
        objectFit: 'contain',
        // backgroundColor: 'red',
        // opacity: .2
      },
      pic1ImageCaption:
        'My first job, I worked on enzymes for biofuel production.',
      pic2ImageCaption: 'Fermentation - not beer.',
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
      title: 'Data management software',
      subtitle: 'Spotfire - Data visualization',
      equipment: 'Spotfire',
      pic1: spotfireGIF,
      pic2: spotfireFilters,
      pic1ImageCaption:
        'Spotfire, a favorite data visualization tool for many scientists (other than excel, still).  ',
      pic2ImageCaption:
        'Benchling, they came on the scene relatively recently but are implementing a lot of the features that we need',
      text: [
        <>
          Spotfire... the software that got me interested in software.
          Surprisingly, graphing experimental data to this day is often done in
          excel. Spotfire changed the game on this with this with an intuitive
          user interface and easy to apply filters and groupings. It is similar
          to Tableau but much easier to use for scientists.{' '}
        </>,

        ,
      ],
    },
    {
      title: 'Data management software',
      subtitle: 'Benchling - Data recording and tracking',
      equipment: 'Benchling',
      pic1: benchlingGIF,
      pic2: benchlingNotebook,
      pic1ImageCaption: '',
      pic2ImageCaption:
        'Benchling, they came on the scene relatively recently but are implementing a lot of the features that we need.',
      pic1StyleOverrides: {
        // transform: 'scale(2)',
        // backgroundColor: 'red',
        // opacity: .2
        objectFit: 'contain',
      },
      pic2StyleOverrides: {
        // transform: 'scale(2)',
        // objectFit: 'contain',
        // backgroundColor: 'red',
        // opacity: .2
      },
      text: [
        <>
          Before Benchling, I used a different electronic lab notebook. It was
          convenient because there was no need for carbon copy lab notebooks
          (check this out, it is ancient).
        </>,
        <>
          But until benchling, the database and laboratory notebook and strain
          information had not all been centralized in the way that I wish it had
          been. It has been amazing to see that it is finally being consolidated
          / integrated in a way that is usable.
        </>,

        ,
      ],
    },
    {
      title: 'Automation',
      subtitle: 'Biomek liquid handler',
      equipment: '',
      pic1: biomek1,
      pic2: biomek2,
      pic1ImageCaption: 'Biomek liquid handler - automation for assays.  ',
      pic2ImageCaption: 'Biomek software - ex: a simple method',
      text: [
        <>
          For a single protein engineering project, tens of thousands of
          variants can be generated and tested.{' '}
        </>,
        <>
          This was my first experience with automation. Later on, I would work
          with miniturized fermentation systems and bioreactors with liquid
          handling capabilities.
        </>,

        ,
      ],
    },
    {
      title: 'Evolution of Bioreactors',
      subtitle: 'Satorius Biostat B',
      equipment: '',
      pic1: biostatBY,
      pic2: mfcs,
      pic1ImageCaption: 'standard 2L bioreactor',
      pic2ImageCaption: 'MFCS software - difficult to set up or modify recipes',
      text: [
        <>
          The Biostat B is the work horse. It is an older model that is tried
          and true. The software used to create fermentation recipes is not easy
          to use.{' '}
        </>,
        <>
          It is a bit before my time in terms of implementing this system, the
          legends say that it is not user friendly.{' '}
        </>,
      ],
    },

    {
      title: 'Evolution of Bioreactors',
      subtitle: 'Dasgip - parallel system',
      equipment: '',
      pic1: dasgip,
      pic2: dasgipSw,
      pic1StyleOverrides: {
        // objectFit: 'contain',
        filter: 'brightness(1.05)',
        transform: 'scale(1.25)',

        objectFit: 'contain',
      },
      pic2StyleOverrides: {},
      pic1ImageCaption: 'parallel bioreactor',
      pic2ImageCaption: 'MFCS software - difficult to set up or modify recipes',
      text: [
        <>
          The Dasgip bioreactor is the industry standard for lab-scale
          benchscale fermentations. It was where we started seeing better UI and
          allowed convenient control of multiple bioreactors through one
          controller.{' '}
        </>,
        <>
          But clearly, there were improvements yet to come since the UI was
          split up, one bioreactor at a time for some parts, not for others.
        </>,
      ],
    },
    {
      title: 'Evolution of Bioreactors',
      subtitle: 'Biolector - miniturized / simplified fermentation',
      equipment: '',
      pic1: biolector1,
      pic2: MF_biolector_feed_profile,
      pic1StyleOverrides: {
        // objectFit: 'contain',
        filter: 'brightness(1.05)',
        // transform: 'scale(1.25)',

        // objectFit: 'contain',
      },
      pic2StyleOverrides: {},
      pic1ImageCaption:
        'less aeration, less feeding, lower cell density, lower product formation',
      pic2ImageCaption:
        'still, much better than using microtiter plates  which have no pH control, no controlled feeding.',
      text: [
        <>
          The Biolector attempts to solve the problem with Bioreactor
          fermentations, that it is very hands on and requires a lot of
          resources.
        </>,
        <>
          With the Biolector, you can get to much higher cell densities and
          product formation, resulting in better breakout in performance than in
          microtiter plates.
        </>,
        <>
          Recipe controls were simplified (less fine-grain control) compared to
          a &quot;real&quot; bioreactor. It made sense given the growth
          conditions.
        </>,
      ],
    },
    {
      title: 'Evolution of Bioreactors',
      subtitle: 'Ambr250 - full feature miniturized fermentation',
      equipment: '',
      pic1: ambr250,
      pic2: operizBM,
      pic1StyleOverrides: {
        // objectFit: 'contain',
        filter: 'brightness(1.05)',
        // transform: 'scale(1.25)',

        // objectFit: 'contain',
      },
      pic2StyleOverrides: {},
      pic1ImageCaption: 'the new industry standard in screening',
      pic2ImageCaption: 'software that is intuitive and set up for DOE.',
      text: [
        <>
          The Ambr250 is single-use and only 250mL in vessel size. It is geared
          for high-throughput and can be set up to control the fermentation
          using variables that can be entered in a columnar format.
        </>,
        <>
          It makes designing experiments to examine effects of specific
          variables very convenient, without having to re-write or modify the
          fermentation recipe.
        </>,
      ],
    },
    {
      title: 'Evolution of Bioreactors',
      subtitle: 'Thermo fisher SUF - single-use fermentation',
      equipment: '',
      pic1: sufGIFShort,
      pic2: sufProfile,
      pic1StyleOverrides: {
        // filter: 'brightness(1.5)',
      },
      pic2StyleOverrides: {
        filter: 'brightness(1.2)',
      },
      pic1ImageCaption: 'a 30L fermentation bag',
      pic2ImageCaption: 'this system is set up to handle GMP.',
      text: [
        <>
          software is designed to handle 1 reactor at a time. legacy software,
          but the hardware is very new.
        </>,
      ],
    },
  ],

  // second card
  [
    {section: 'current',
      intro: (
        <>
          <h2>next</h2>
          <ul>
            <li>my interests in software developement</li>
            <li>
              cool equipment and software that got me interested in software
              engineering
            </li>
          </ul>
        </>
      ),
      title: 'Bootcamp',
      subtitle: 'Codesmith',
      equipment: '',
      pic1: codesmith,
      pic2: rediscopeZ,
      // pic3: egyptWine,
      pic1StyleOverrides: {
        objectFit: 'contain',
        // transform: 'scale(2)',
        // backgroundColor: 'red',
        // opacity: .2
      },
      pic2StyleOverrides: {
        // transform: 'scale(1.5)',
        objectPosition: 'center right',
        // objectFit: 'contain',
        // backgroundColor: 'red',
        // opacity: .2
      },
      pic1ImageCaption: 'remote instruction.',
      pic2ImageCaption: '3 months',
      text: [
        <>
          At the bootcamp, I was exposed to pieces of how to put a basic web
          application together. The curriculum was
          <em>
            <b> full stack</b>
          </em>
          , React, Redux, Express, MongoDB, Postgres.
        </>,
        <>
          I knew once I was done with the bootcamp, that I had a long way to go,
          and was excited to start self-learning.
        </>,
      ],
    },
    {
      title: 'AWS',
      subtitle: 'Solutions Architect Associate',
      equipment: '',
      pic1: aws,
      pic2: awsVPN,
      pic1StyleOverrides: {
        objectFit: 'contain',
        // transform: 'scale(2)',
        // backgroundColor: 'red',
        // opacity: .2
      },
      pic2StyleOverrides: {
        objectFit: 'contain',
        // transform: 'scale(2)',
        // backgroundColor: 'red',
        // opacity: .2
      },
      pic1ImageCaption: 'remote instruction.',
      pic2ImageCaption: '3 months',
      text: [
        <>
          Studying to pass the exam took a couple months. At the end of the
          process, I was able to understand more about system design and the
          bottlenecks in current infrastructures and things that had be created
          to compensate those areas (ex: Cloudfront, ).{' '}
        </>,
        <></>,
        ,
      ],
    },

    {
      title: 'Areas of Interest',
      subtitle: '',
      equipment: '',
      pic1: interest3d,
      pic2: spotfireEX,
      // pic3: egyptWine,
      pic1StyleOverrides: {
        // objectFit: 'contain',
        // transform: 'scale(2)',
        // backgroundColor: 'red',
        // opacity: .2
      },
      pic2StyleOverrides: {
        objectFit: 'contain',
        // transform: 'scale(2)',
        // backgroundColor: 'red',
        // opacity: .2
      },
      pic1ImageCaption: 'remote instruction.',
      pic2ImageCaption: '3 months',
      text: [
        <>
          open to a lot. it could be cool to work on things like technical
          software, data visualization (because how data is visualized really
          matters!), 3D, etc.
          {/* <em>
            <b> full stack</b>
          </em> */}
        </>,
        <>
          I do believe in trying things out and seeing what the best fit is.{' '}
        </>,
      ],
    },
    {
      title: 'What I can bring',
      subtitle: 'diverse background',
      equipment: '',
      pic1: mosaic,
      pic2: dna,
      pic1StyleOverrides: {
        // objectFit: 'contain',
        transform: 'scale(1.5)',
        // backgroundColor: 'red',
        // opacity: .2
      },
      pic2StyleOverrides: {
        // opacity: .2
        filter: 'grayscale(80%)',

        // objectFit: 'contain',
        // transform: 'scale(2)',
        // backgroundColor: 'red',
        // opacity: .2
      },
      // pic1ImageCaption: 'remote instruction.',
      // pic2ImageCaption: '3 months',
      text: [
        <>
          dedication, attention to detail, emphasis on open communication. i
          believe in Kaizen, continuous improvement.
        </>,
        <>also hope to bring a unique perspective from my time in biotech.</>,
        ,
      ],
    },

    {
      title: 'environment',
      subtitle: 'culture',
      equipment: '',
      pic1: bubbleDark,
      pic2: genencor4,
      pic1StyleOverrides: {
        objectFit: 'contain',
        transform: 'scale(2.5)',
        // backgroundColor: 'red',
        // opacity: .2
      },
      pic2StyleOverrides: {
        objectPosition: 'top',
        filter: 'brightness(1.05)',
        // objectFit: 'contain',
        // transform: 'scale(2)',
        // backgroundColor: 'red',
      },
      pic1ImageCaption: 'remote instruction.',
      pic2ImageCaption: '3 months',
      text: [
        <>
          I love an open, inclusive, and engaging work culture. I worked in the
          San Francisco Bay Area during my time in biotech and enjoyed it. I
          hope to be based in California, Colorado, or Washington.
        </>,
        <></>,
        ,
      ],
    },
  ],

] as TSlide[][];

const slideVariants = {
  enter: { x: '100%', opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
};

type TCard = {
  item: (typeof SINGLE_CARD_DATA)[number];
  activeIndex: number;
  cardIndex: number;
  selectedCardIndex: (number | null);
};

export default function SingleCardForGrid({
  item,
  cardIndex,
  activeIndex,
  selectedCardIndex,
}: TCard) {
  // const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState<'left' | 'right' | null>(null);
  const [isClicked, setIsClicked] = useState<'left' | 'right' | null>(null);
  const [scrollCardImgTriggered, setScrollCardImgTriggered] =
    useState<boolean>(false);

  const scrollCardRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: scrollCardRef,
    offset: ['start end', 'end start'],
  });

  // useEffect(() => {
  // console.log(i)
  // }, [i])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('Page scroll: ', latest);
    if (latest >= 0.5 && !scrollCardImgTriggered) {
      setIsHovered('right');
      setScrollCardImgTriggered(true);
    }
  });

  function handleIndexChange(incrementValue: number) {
    //   console.log('incrementValue', incrementValue, 'activeIndex', activeIndex);
    //   if (incrementValue > 0) {
    //     if (activeIndex >= item?.length - 1) {
    //       setActiveIndex(0);
    //       return;
    //     }
    //     setActiveIndex((prev) => prev + incrementValue);
    //   } else {
    //     if (activeIndex <= 0) {
    //       setActiveIndex(item.length - 1);
    //       return;
    //     }
    //     setActiveIndex((prev) => prev + incrementValue);
    //   }
  }

  return (
    <div className={styles.card}>
      {/* odd pictures on card */}
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
                <div className={styles.imageAndCaptionContainer}>
                  <motion.div
                    key={`${cardIndex}_${activeIndex}`}
                    initial={{ transform: 'scale(1)' }}
                    whileHover={{
                      boxShadow: '0.25px 0.25px 3px var(--clr-accent-2)',
                      transform: 'scale(1.02)',
                    }}
                    className={`${styles.cardImageContainer} imgBorderRadius`}
                    ref={scrollCardRef}
                    onClick={() => {
                      isHovered === null
                        ? setIsHovered('right')
                        : setIsHovered(null);
                    }}
                    // onMouseEnter={() => {
                    //   setIsHovered('right');
                    // }}
                    // onMouseLeave={() => setIsHovered(null)}
                    whileTap={{
                      boxShadow: '2px 4px 7px var(--clr-accent-3)',
                      transform: 'scale(.98)',
                    }}
                    onMouseDown={() => {
                      setIsClicked('right');
                    }}
                    onMouseUp={() => setIsClicked(null)}
                    // whileHover={{'.pic2': {opacity: 1}}}
                  >
                    <AnimatePresence>
                      <motion.div
                        key={`${cardIndex}_${activeIndex}_pic1`}
                        className={styles.cardImageContainer}
                        initial={{ opacity: 1, x: '0%' }}
                        animate={{
                          opacity: isHovered ? 0 : 1,
                          x: isHovered ? '-100%' : '0%',
                        }}
                        exit={{ opacity: 0, x: '-100%' }}
                        transition={{ duration: 0.5 }}
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        <Image
                          className={styles.pic1}
                          src={item?.[activeIndex]?.pic1}
                          alt={item?.[activeIndex]?.title as string}
                          layout="fill"
                          //   objectFit="cover"
                          style={item?.[activeIndex]?.pic1StyleOverrides ?? {}}
                          // key={`${cardIndex}_${activeIndex}_pic1`}
                        />
                      </motion.div>

                      <motion.div
                        key={`${cardIndex}_${activeIndex}_pic2`}
                        className={styles.cardImageContainer}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          x: isHovered ? '0%' : '100%',
                          transition: {
                            duration: 0.5,
                          },
                        }}
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        <Image
                          className={styles.pic2}
                          src={item?.[activeIndex]?.pic2 as StaticImageData}
                          alt={item?.[activeIndex]?.title as string}
                          layout="fill"
                          style={item?.[activeIndex]?.pic2StyleOverrides ?? {}}
                          // key={`${cardIndex}_${activeIndex}_pic2`}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>

                  {!isHovered ? (
                    <p className={'imageCaption'}>
                      {item?.[activeIndex]?.pic1ImageCaption}
                    </p>
                  ) : (
                    <p className={'imageCaption'}>
                      {item?.[activeIndex]?.pic2ImageCaption}
                    </p>
                  )}
                </div>
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
                <div className={styles.imageAndCaptionContainer}>
                  <motion.div
                    initial={{ transform: 'scale(1)' }}
                    whileHover={{
                      boxShadow: '0.25px 0.25px 3px var(--clr-accent-2)',
                      transform: 'scale(1.02)',
                    }}
                    className={`${styles.cardImageContainer} imgBorderRadius`}
                    ref={scrollCardRef}
                    // onMouseEnter={() => {
                    //   setIsHovered('left');
                    // }}
                    // onMouseLeave={() => setIsHovered(null)}
                    onClick={() => {
                      isHovered === null
                        ? setIsHovered('left')
                        : setIsHovered(null);
                    }}
                    whileTap={{
                      boxShadow: '-2px 4px 7px var(--clr-accent-3)',
                      transform: 'scale(.98)',
                    }}
                    onMouseDown={() => setIsClicked('left')}
                    onMouseUp={() => setIsClicked(null)}
                    // whileHover={{'.pic2': {opacity: 1}}}
                  >
                    {/* {!isHovered ? ( */}
                    <AnimatePresence initial={false}>
                      <motion.div
                        key={`${cardIndex}_${activeIndex}_pic1_even`}
                        className={styles.cardImageContainer}
                        initial={{ opacity: 1, x: '0%' }}
                        animate={{
                          opacity: isHovered ? 0 : 1,
                          x: isHovered ? '100%' : '0%',
                          transition: { duration: 0.5 },
                        }}
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        <Image
                          className={styles.pic1}
                          src={item?.[activeIndex]?.pic1}
                          alt={item?.[activeIndex]?.title as string}
                          layout="fill"
                          //   objectFit="cover"
                          style={item?.[activeIndex]?.pic1StyleOverrides ?? {}}
                          // key={i}
                        />
                      </motion.div>
                      {/* ) : ( */}
                      <motion.div
                        key={`${cardIndex}_${activeIndex}_pic2_even`}
                        className={styles.cardImageContainer}
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          x: isHovered ? '0%' : '-100%',
                          // backgroundColor: 'red',
                          transition: { duration: 0.5 },
                        }}
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        <Image
                          className={styles.pic2}
                          src={item?.[activeIndex]?.pic2 as StaticImageData}
                          alt={item?.[activeIndex]?.title as string}
                          layout="fill"
                          style={item?.[activeIndex]?.pic2StyleOverrides ?? {}}
                        />
                      </motion.div>
                    </AnimatePresence>
                    {/* )} */}
                  </motion.div>
                  {!isHovered ? (
                    <p className={'imageCaption'}>
                      {item?.[activeIndex]?.pic1ImageCaption}
                    </p>
                  ) : (
                    <p className={'imageCaption'}>
                      {item?.[activeIndex]?.pic2ImageCaption}
                    </p>
                  )}
                </div>
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
                    <p key={i} className={`${styles.textParagraphs} large`}>
                      {singleParagraph}
                    </p>
                    {/* {i < (item?.[activeIndex]?.text?.length ?? 0) - 1 && <br />} */}
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

      {/* <AnimatePresence> */}
      {/* <div className={`${styles.imageDots}`}>
        {item?.map((count, i) =>
          activeIndex == i ? (
            <motion.div
              key={`active-${i}`}
              // initial={{ scale: 1 }}
              // animate={{ scale: 1 }}
              whileHover={{ scale: 1.35 }}
              // transition={{ duration: 0.2 }}
            >
              <GoDotFill onClick={() => setActiveIndex(i)} />
            </motion.div>
          ) : (
            <motion.div
              key={`inactive${i}`}
              // initial={{ scale: 1 }}
              // animate={{ scale: 1 }}
              whileHover={{ scale: 1.35 }}
              // transition={{ duration: 0.2 }}
            >
              <GoDot onClick={() => setActiveIndex(i)} />
            </motion.div>
          )
        )}
      </div> */}
      {/* </AnimatePresence> */}
    </div>
  );
}

// {
//   title: 'Self-learning',
//   subtitle: '',
//   equipment: '',
//   pic1: codesmith,
//   pic2: codesmith2,
//   // pic3: egyptWine,
//   pic1StyleOverrides: {
//     objectFit: 'contain',
//     // transform: 'scale(2)',
//     // backgroundColor: 'red',
//     // opacity: .2
//   },
//   pic2StyleOverrides: {
//     objectFit: 'contain',
//     // transform: 'scale(2)',
//     // backgroundColor: 'red',
//     // opacity: .2
//   },
//   pic1ImageCaption: 'remote instruction.',
//   pic2ImageCaption: '3 months',
//   text: [
//     <>
//       started looking at backend, started learning python for algos. but
//       eventually backed off to work on frontend to build a portfolio. was
//       surprised to find that i really enjoyed frontend, and stayed there for
//       a while.
//       {/* <em>
//         <b> full stack</b>
//       </em> */}
//     </>,
//     <></>,
//   ],
// },
// {
//   title: 'Why software engineering',
//   subtitle: '',
//   equipment: '',
//   pic1: codesmith,
//   pic2: codesmith2,
//   // pic3: egyptWine,
//   pic1StyleOverrides: {
//     objectFit: 'contain',
//     // transform: 'scale(2)',
//     // backgroundColor: 'red',
//     // opacity: .2
//   },
//   pic2StyleOverrides: {
//     objectFit: 'contain',
//     // transform: 'scale(2)',
//     // backgroundColor: 'red',
//     // opacity: .2
//   },
//   pic1ImageCaption: 'remote instruction.',
//   pic2ImageCaption: '3 months',
//   text: [
//     <>
//       my favorite part of working in biotech in the bay area was getting to
//       work with cutting edge equipment and software and also seeing the
//       iteration and progression of these tools over time.
//       {/* <em>
//         <b> full stack</b>
//       </em> */}
//     </>,
//     <>
//       After a decade in biotech, I have worked with most of the industry
//       standard tools in my area of specialization and developments in this
//       area is slower (game changing new tools every couple of years) than
//       you would find in a industry like tech.
//     </>,
//   ],
// },

// {
//   title: 'bioreactors - their role I',
//   subtitle: 'a testing platform',
//   equipment: '',
//   pic1: manyBioreactors,
//   pic2: dna,
//   // pic3: egyptWine,
//   pic1StyleOverrides: {
//     objectFit: 'contain',
//     // transform: 'scale(2)',
//     // backgroundColor: 'red',
//     // opacity: .2
//   },
//   pic2StyleOverrides: {
//     objectFit: 'contain',
//     // transform: 'scale(2)',
//     // backgroundColor: 'red',
//     // opacity: .2
//   },
//   pic1ImageCaption: 'remote instruction.',
//   pic2ImageCaption: '3 months',
//   text: [
//     <>
//       Over time, there has been more and more emphasis on throughput and
//       miniaturization in the fermentation space. This is because a large
//       part of bioreactor usage is for screening strains / variants with the
//       same fermentation recipe.
//       {/* <em>
//         <b> full stack</b>
//       </em> */}
//     </>,
//     <>
//       In my opinion, a lot of the focus in biotech is more in molecular
//       biology / strain engineering these days. After all, you can not make a
//       bad strain produce a lot of product, no matter what you do in
//       fermentation.
//     </>,
//   ],
// },

// {
//   title: 'bioreactors - their role II',
//   subtitle: 'a industrial scale model',
//   equipment: '',
//   pic1: commercialScale,
//   pic2: codesmith2,
//   // pic3: egyptWine,
//   pic1StyleOverrides: {
//     objectFit: 'contain',
//     // transform: 'scale(2)',
//     // backgroundColor: 'red',
//     // opacity: .2
//   },
//   pic2StyleOverrides: {
//     objectFit: 'contain',
//     // transform: 'scale(2)',
//     // backgroundColor: 'red',
//     // opacity: .2
//   },
//   pic1ImageCaption: 'remote instruction.',
//   pic2ImageCaption: '3 months',
//   text: [
//     <>
//       serious constraints due to what is possible at industrial scale.
//       Commercial scale plants often have poorer control over conditions than
//       bench scale, ex: poorer mixing, temperature control.
//       {/* <em>
//         <b> full stack</b>
//       </em> */}
//     </>,
//     <>
//       cost has taken center stage. biotech processes are expensive!
//       experimenting with media composition is limited, whatever goes in
//       costs $$, or may need to be removed at the end of the process (or can
//       interfere with purification). they say 90% of biotech production cost
//       is in the recovery / filtration process.
//     </>,
//   ],
// },
// {
//   title: 'Evolution of Bioreactors',
//   subtitle: 'Satorius Biostat B',
//   equipment: '',
//   pic1: biostatB,
//   pic2: mfcs,
//   pic1ImageCaption: 'standard 2L bioreactor - not the original, but close',
//   pic2ImageCaption: 'MFCS software - difficult to set up or modify',
//   text: [<></>],
// },

// { pic1: dasgip, pic2: dasgipSw },
// { pic1: biolector1, pic2: biolector2 },
// { pic1: ambr250, pic2: ambr250Sw },
// { pic1: suf, pic2: sufSw1 },

// {
//   title: 'Evolution of Bioreactors',
//   subtitle: 'Satorius Biostat B',
//   equipment: '',
//   pic1: biostatB,
//   pic2: mfcs,
//   pic1ImageCaption: 'standard 2L bioreactor - not the original, but close',
//   pic2ImageCaption: 'MFCS software - difficult to set up or modify',
//   text: [<></>],
// },

// { pic1: dasgip, pic2: dasgipSw },
// { pic1: biolector1, pic2: biolector2 },
// { pic1: ambr250, pic2: ambr250Sw },
// { pic1: suf, pic2: sufSw1 },
