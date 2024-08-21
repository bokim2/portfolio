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
import styles from './cardDeck.module.scss';
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
import CardTextColumn from './cardTextColumn';
import CardImageColumn from './cardImageColumn';

type TSlide = {
  section?: string;
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
    {
      // section: 'origin',
      // intro: (
      //   <>
      //     <h2>Origins</h2>
      //     <ul>
      //       <li>what i did in biotech</li>
      //       <li>
      //         cool equipment and software that got me interested in software
      //         engineering
      //       </li>
      //     </ul>
      //   </>
      // ),

      title: 'the journey up to this point',
      subtitle: 'biotech',
      equipment: '',
      pic1: fermAmyrisBM,
      pic2: background,
      pic1StyleOverrides: {
        objectFit: 'contain',
      },
      pic2StyleOverrides: {
        objectFit: 'contain',
      },
      pic1ImageCaption: 'cane syrup to non-nutritive sweetner.',
      pic2ImageCaption: 'My biotech experience in the Bay Area.',
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
      title: 'Data analysis software',
      subtitle: 'Spotfire - Data visualization',
      equipment: 'Spotfire',
      pic1: spotfireGIF,
      pic2: spotfireFilters,
      pic1ImageCaption:
        'Spotfire, a favorite data visualization tool for many scientists (other than excel, still).  ',
      pic2ImageCaption: 'filtering and grouping for easy visualization',
      text: [
        <>
          Spotfire... the software that got me interested in software.
          Surprisingly, graphing experimental data to this day is often done in
          excel.{' '}
        </>,

        <>
          Spotfire changed the game on this with this with an intuitive user
          interface and easy to apply filters and groupings. It is similar to
          Tableau but much easier to use for scientists.{' '}
        </>,

        ,
      ],
    },
    {
      title: 'Data management software',
      subtitle: 'Benchling - Electronic lab notebook',
      equipment: 'Benchling',
      pic1: benchlingGIF,
      pic2: benchlingNotebook,
      pic1ImageCaption:
        'Benchling, an all in one platform for scientific research and collaboration',
      pic2ImageCaption:
        'Laboratory notebook templates - for unified data entry and organization.',
      pic1StyleOverrides: {
        objectFit: 'contain',
      },
      pic2StyleOverrides: {},
      text: [
        <>
          Before Benchling, I used a much simpler electronic lab notebook. It
          was convenient because there was no need for glue sticks or carbon
          copy lab notebooks (check this out, it is ancient).
        </>,
        <>
          While there are other big players like Sapio Biosciences in the space
          that integrate strain information, experimental data, and lab notebook
          functions, I specifically worked with Benchling implementation on the
          client-side.
        </>,
        //   <>
        //   Before Benchling, I used a different
        //   electronic lab notebook. It was convenient because there was no need
        //   for carbon copy lab notebooks (check this out, it is ancient).
        // </>,
        // <>
        //   Until recently, no polished product centralized both database and
        //   laboratory notebook functions. While there are other big players in the space like Sapio Biosciences, I specifically worked with Benchling
        //   implementation on the client-side.
        // </>,
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
      pic2ImageCaption:
        'Biostat bioreactor control software - difficult to set up or modify recipes',
      text: [
        <>
          The Biostat B is a work horse. It is an older system that is tried and
          true. However, the software used to create fermentation recipes for it
          is not easy to use.{' '}
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
        filter: 'brightness(1.05)',
        transform: 'scale(1.25)',

        objectFit: 'contain',
      },
      pic2StyleOverrides: {},
      pic1ImageCaption: 'parallel bioreactor',
      pic2ImageCaption:
        'Dasgip software - better UI and partially optimized for controlling multiple reactors',
      text: [
        <>
          The Dasgip bioreactor is the industry standard for lab-scale
          benchscale fermentations. It was where we started seeing better UI and
          allowed convenient control of multiple bioreactors through one
          controller.{' '}
        </>,
        <>
          But there were improvements yet to come since the UI was split up, one
          bioreactor at a time for some parts, not for others.
        </>,
      ],
    },
    {
      title: 'Evolution of Bioreactors',
      subtitle: 'Microfluidics - miniturization / simplified fermentation',
      equipment: '',
      pic1: biolector1,
      pic2: MF_biolector_feed_profile,
      pic1StyleOverrides: {
        filter: 'brightness(1.05)',
      },
      pic2StyleOverrides: {},
      pic1ImageCaption:
        'biolector - less aeration, less feeding, lower cell density, lower product formation',
      pic2ImageCaption:
        'still, much better than using microtiter plates  which have no pH control, no controlled feeding.',
      text: [
        <>
          The Biolector attempts to solve the problem with Bioreactor
          fermentations, that it is very hands on and requires a lot of
          resources.
        </>,
        <>
          Although much less than with fully featured bioreactors, with the
          Biolector, you can get to much higher cell densities and product
          formation, resulting in better breakout in performance than in
          microtiter plates.
        </>,
        <>
          Recipe controls were simplified (less fine-grain control) compared to
          a &quot;real&quot; bioreactor. It makes sense given the growth
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
        filter: 'brightness(1.05)',
      },
      pic2StyleOverrides: {},
      pic1ImageCaption: 'the new industry standard in screening',
      pic2ImageCaption:
        'software that is intuitive and set up for DOE (Design of Experiments).',
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
      pic1StyleOverrides: {},
      pic2StyleOverrides: {
        filter: 'brightness(1.2)',
      },
      pic1ImageCaption: 'a 30L fermentation bag',
      pic2ImageCaption:
        'this system is set up to handle GMP (Good Manufacturing Practice).',
      text: [
        <>
          The SUF software is designed to manage a single reactor at a time and
          is built on the mature DeltaV platform, but the hardware is very new.
        </>,
        <>
          The single use fermentation vessel (a plastic bag in this case) has
          become more popular in recent years due to issues with contamination,
          longer turn-around time, resource consumption with traditional
          systems.{' '}
        </>,
      ],
    },
  ],

  // second card
  [
    {
      // section: 'current',
      // intro: (
      //   <>
      //     <h2>next</h2>
      //     <ul>
      //       <li>my interests in software developement</li>
      //       <li>what i have done so far and what i am interested in</li>
      //     </ul>
      //   </>
      // ),

      title: 'Bootcamp',
      subtitle: 'Codesmith',
      equipment: '',
      pic1: codesmith,
      pic2: rediscopeZ,
      pic1StyleOverrides: {
        objectFit: 'contain',
      },
      pic2StyleOverrides: {
        objectPosition: 'center right',
      },
      pic1ImageCaption: '',
      pic2ImageCaption: '',
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
          While the bootcamp provided a base understanding, three months were
          not enough to fully grasp full stack development (maybe that&apos;s a
          life-long journey). I committed to self-directed learning to build a
          more comprehensive skill set.
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
      },
      pic2StyleOverrides: {
        objectFit: 'contain',
      },
      pic1ImageCaption: '',
      pic2ImageCaption: '',
      text: [
        <>
          {/* Studying to pass the exam took a couple months.  */}
          At the end of the process, I had a better understanding of system
          design and the weaknesses, costs, and bottlenecks in current
          infrastructures and solutions that had be created to compensate those
          areas (ex: database replication, storage tiers, CDN, etc).{' '}
        </>,
        <>
          It was fun to learn about the issues related to scaling up, vastly
          different from biotech but the same result.{' '}
        </>,
        <>
          &ldquo;If it doesn&apos;t scale, it doesn&apos;t work.&ldquo;
          <p>
            <i>{` - someone somewhere`}</i>
          </p>
        </>,

        ,
      ],
    },

    {
      title: 'Areas of Interest',
      subtitle: '',
      equipment: '',
      pic1: interest3d,
      pic2: spotfireEX,
      pic1StyleOverrides: {},
      pic2StyleOverrides: {
        objectFit: 'contain',
      },
      pic1ImageCaption: '',
      pic2ImageCaption: '',
      text: [
        <>
          Open to a lot. It could be cool to work on things like technical
          software, data visualization (because how data is visualized really
          matters!), 3D, etc.
        </>,
        <>
          I believe that applications should be purposeful, intuitive, and
          aligned with their original intent. The practical value and the
          overall user experience of an application are my primary drivers and
          motivation.
        </>,
        // I believe in trying things out and seeing what the best fit is.{' '}
        // I subscribe to the belief that applications should be purposeful,
        //   intuitive, and relevant to its originial intention.  The practical value and the user experience of the application is my primary driver and what I get the most energy and motivation from.
      ],
    },
    {
      title: 'What I can bring',
      subtitle: 'diverse background',
      equipment: '',
      pic1: mosaic,
      pic2: dna,
      pic1StyleOverrides: {
        objectFit: 'cover',
        // objectPosition: '9% 50%',
        transform: 'scale(1.5) translateX(-.81%)',
        // objectPosition: '135% 50%',
      },
      pic2StyleOverrides: {
        filter: 'grayscale(80%) brightness(80%)',
      },
      text: [
        <>
          Dedication, attention to detail, emphasis on open communication. I
          believe in Kaizen, continuous improvement.
        </>,
        <>I also hope to bring a unique perspective from my time in biotech.</>,
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
      },
      pic2StyleOverrides: {
        objectPosition: 'top',
        filter: 'brightness(1.05)',
      },
      pic1ImageCaption: '',
      pic2ImageCaption: '',
      text: [
        <>
          I love an open, inclusive, and engaging work culture. I was based in
          the San Francisco Bay Area during my time in biotech and enjoyed it. I
          hope to be based in California, Colorado, or Washington.
        </>,
        // <></>,
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

export type TCard = {
  item: (typeof SINGLE_CARD_DATA)[number];
  activeIndex: number;
  cardIndex: number;
};

export default function SingleCardForGrid({
  item,
  cardIndex,
  activeIndex,
}: TCard) {
  const [isHovered, setIsHovered] = useState<'left' | 'right' | null>(null);
  const [isClicked, setIsClicked] = useState<'left' | 'right' | null>(null);
  const [scrollCardImgTriggered, setScrollCardImgTriggered] =
    useState<boolean>(false);

  const scrollCardRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: scrollCardRef,
    offset: ['start end', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('Page scroll: ', latest);
    if (latest >= 0.6 && !scrollCardImgTriggered) {
      setIsHovered('right');
      setScrollCardImgTriggered(true);
    }
  });

  return (
    <motion.div className={styles.card} initial={{ height: 'auto' }}>
      {/* odd pictures on card */}
      {activeIndex % 2 !== 0 ? (
        <motion.div className={styles.cardInner}>
          <div className={styles.cardColumn}>
            <CardTextColumn
              item={item}
              cardIndex={cardIndex}
              activeIndex={activeIndex}
            />
          </div>

          <div className={`${styles.cardColumn} ${styles.imageColumn}`}>
            <CardImageColumn
              item={item}
              cardIndex={cardIndex}
              activeIndex={activeIndex}
              isHovered={isHovered}
              setIsHovered={setIsHovered}
              ref={scrollCardRef}
            />
          </div>
        </motion.div>
      ) : (
        // Even cards
        <motion.div className={styles.cardInner}>
          <div className={`${styles.cardColumn} ${styles.imageColumn}`}>
            <CardImageColumn
              item={item}
              cardIndex={cardIndex}
              activeIndex={activeIndex}
              isHovered={isHovered}
              setIsHovered={setIsHovered}
              ref={scrollCardRef}
            />
          </div>

          <div className={`${styles.cardColumn} ${styles.textColumn}`}>
            <CardTextColumn
              item={item}
              cardIndex={cardIndex}
              activeIndex={activeIndex}
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
