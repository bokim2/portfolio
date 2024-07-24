'use client';
import Wrapper from '@/components/wrapper/wrapper';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import styles from './about.module.scss';
import Image from 'next/image';
import genencor4Img from '../../../../public/images/experience/genencor2.jpg';
import spotfire1Img from '../../../../public/images/experience/spotfire1.jpg';
import Link from 'next/link';
import { useUpdateActiveSection } from '@/app/lib/custom-hooks';
import BiotechSoftware from './biotechSoftware';
import ThisPortfolio from './thisPortfolio';
import AboutCarousel from './about-carousel/aboutCarousel';
import CardGrid from './cardGrid/cardGrid';
import CardSelector from './about-carousel/cardSelector';
import { useAnimation } from 'framer-motion';

// type T_ABOUT_INTRO = React.ReactNode[];

// const ABOUT_INTRO= [
//   <>
//     <h2>Origins</h2>
//     <ul>
//       <li>what i did in biotech</li>
//       <li>cool equipment and software that got me interested in software engineering</li>
//     </ul>
//   </>,
//     <>
//     <h2>current</h2>
//     <ul>
//       <li>what ive been working on, portfolio, AWS cert, projects</li>
//       <li>where i hope to be, what type of role</li>
//     </ul>
//   </>,
//       <>
//       <h2>next</h2>
//       <ul>
//         <li>my interests in software developement</li>
//         <li>cool equipment and software that got me interested in software engineering</li>
//       </ul>
//     </>,
// ];

export default function About() {
  const { activeSection, setActiveSection, ref } =
    useUpdateActiveSection('about');
  // const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(0);

  // const [selectedCardReady, setSelectedCardReady] = useState<boolean>(true);
  // const controls = useAnimation();
  // const aboutRef = useRef<HTMLDivElement>(null);

  async function scrollToTop() {}

  function handleSelectorChange(clickedCardIndex: number) {
    // setSelectedCardReady(false);
    // console.log('in handleSelectorChange');
    // setTimeout(() => {
    //   console.log('entering settimeout');
    //   if (selectedCardIndex !== clickedCardIndex) {
    //     setSelectedCardIndex(clickedCardIndex);
    //   } else {
    //     setSelectedCardIndex(null);
    //   }
    //   setSelectedCardReady(true);
    // }, 1000);
      //     if (selectedCardIndex !== clickedCardIndex) {
      //   setSelectedCardIndex(clickedCardIndex);
      // } else {
      //   setSelectedCardIndex(null);
      // }
  }

  return (
    <>
      <div className={styles.about} id="about">
        {/* <div
          id="beforeAbout"
          className={styles.beforeAbout}
          style={{ backgroundColor: 'blue', height: '10px', width: '10px' }}
        /> */}
        {/* <CardSelector
          selectedCardIndex={selectedCardIndex}
          handleSelectorChange={handleSelectorChange}
        /> */}

        <div className={styles.beforeCardSpacer}>
          <h1>About</h1>
          this section is more just for fun, so feel free to check it out or
          skip it.
          {/* {ABOUT_INTRO?.map((text, i)=> {
           return  <div key={i}>{text}</div>
          })} */}
          {/* {selectedCardIndex !== null && <div key={selectedCardIndex}>{ABOUT_INTRO[selectedCardIndex]}</div>} */}
        </div>
        <Wrapper additionalClasses={`wrapper mobileLessPadding`}>
          {/* <Link href="/experience">
        <h2 className={`animatedH2 animated`}>About</h2>
        </Link>
        <section className={styles.experience} ref={ref}>
        <div className={styles.experienceTitleContainer}>
        <h5 className={styles.experienceH6}>Motivations</h5>
        <h3 className={styles.experienceRole}>
        The Journey up to this point
        </h3>
        <div className={styles.experienceAbout}>
        <p className="paragraph">
        {`My primary area of specialization was upstream process development, aka working with bioreactors, often referred to as "fermentation", a term originating from the historical use of microorganisms for the production of alcoholic beverages.`}
        </p>
        
        <p className="paragraph">
        My experience involved cultivating genetically modified microbes
        to produce therapeutic proteins and enzymes. Additionally, I was
        involved in the production of molecules such as squalene, an oil
        found in shark liver used in cosmetics, and Rebaudioside M (rebM),
        a zero-calorie sweetener naturally derived from the stevia plant.
        </p>
        </div>
        </div>
        <div className={styles.experienceSectionContainer}>
        <div className={styles.experienceTitleImageContainer}>
        <Image
        className="sepia"
        src={genencor4Img}
        alt="first job, Genencor"
        fill
        priority
        />
        </div>
        <div>
        <p className={'imageCaption'}>
        My first job, I worked on enzymes for biofuel production.
        </p>
        </div>
        </div>
      </section> */}

          {/* {<CardGrid
          selectedCardIndex={selectedCardIndex}
          handleSelectorChange={handleSelectorChange}
          />} */}
          {/* {selectedCardReady && ( */}
            <CardGrid
            // selectedCardReady={selectedCardReady}
            //   selectedCardIndex={selectedCardIndex}
              // handleSelectorChange={handleSelectorChange}
            />
          {/* )} */}
        </Wrapper>
        {/* <AboutCarousel /> */}
        <Wrapper>
          <BiotechSoftware />
          <ThisPortfolio />
        </Wrapper>
      </div>
    </>
  );
}
