// import dynamic from 'next/dynamic';
// const AnimationHome = dynamic(() => import('../animation-home'), {
//   loading: () => <h1>Loading...</h1>,
//   ssr: true,
// });
'use client';
import AnimationHome from './animation-home';

import React, { createRef, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WebGL from 'three/addons/capabilities/WebGL.js';

import headshotImg from '../../../../public/images/intro/headshot.png';

// inside src/app/page.tsx - home component

import styles from './bio.module.scss';
import Wrapper from '@/components/wrapper/wrapper';
import Image from 'next/image';
// import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/app/context/activeSection';
import { useUpdateActiveSection } from '@/app/lib/custom-hooks';
import LaboratoryAnimation from './laboratory-animation';
import Molecule from './molecule/moleculeBtn';
import Molecules from './molecule/moleculesDescription';
import MoleculeBtn from './molecule/moleculeBtn';
import MoleculeDescription from './molecule/moleculesDescription';
// import AnimationHome from '../animation-home';

const imageVariants = {
  initial: { filter: 'sepia(100%)' },
  animate: { filter: 'sepia(0%)', transition: { delay: 1, duration: 1.5 } },
};

export const MOLECULES_DATA = [
  {
    molecule: 'recombinant human interleukin-10 fusion protein',
    traditionalSource: '',
    description: `AMT-101 is a recombinant fusion protein that is designed to leverage the anti-inflammatory properties of human interleukin-10 (IL-10). IL-10 is a cytokine with potent anti-inflammatory effects, playing a crucial role in regulating the immune system's response to inflammation and infection. In the context of AMT-101, this protein is used therapeutically to target specific inflammatory conditions.`,
  },
  {
    molecule: 'rebM',
    traditionalSource: 'stevia plant',
    description: `Rebaudioside M (rebM) is a zero-calorie sweetener that is traditionally derived from the Stevia plant. It is a natural sweetener that is 200 times sweeter than sugar.  Unlike traditional sugars, rebM is not metabolized by the body, allowing for reduced sugar intake`,
  },
  {
    molecule: 'farnesane',
    traditionalSource: 'stevia plant',
    description:
      'diesel/jet fuel additive.  Farnesane has a higher energy density than other alcohols, and is commonly used at a blend ratio of only 10% with traditional fuels.',
  },
  {
    molecule: 'alpha-amylase',
    traditionalSource: '',
    description: `α-Amylase is essential in fuel ethanol production and laundry detergents. It employs endo-hydrolytic activity to cleave internal α-1,4-glycosidic linkages in starch, breaking down large polysaccharides into smaller sugars. This step is crucial in ethanol production, as yeast cannot ferment large sugar molecules directly. In detergents, α-amylase enhances stain removal by degrading starch-based residues.`,
  },
  {
    molecule: 'gluco-amylase',
    traditionalSource: '',
    description: `Glucoamylase plays a key role in fuel ethanol production by breaking down starch into glucose through exo-hydrolytic cleavage of α-1,4-glycosidic and α-1,6-glycosidic linkages. Yeast can directly ferment glucose, as well as simple sugars like maltose, into ethanol, making glucoamylase essential for maximizing ethanol yield.`,
  },
    {
    molecule: 'Human milk oligosaccharides (HMOs)',
    traditionalSource: '',
    description: `complex carbohydrates that are naturally found in human breast milk. They are the third largest solid component in human milk after lactose and fat. They serve several crucial functions, primarily related to the development of the infant's immune system and gut microbiota`,
  },{
    molecule: 'CBD',
    traditionalSource: '',
    description:
      'is one of the many active compounds found in the Cannabis sativa plant. Unlike tetrahydrocannabinol (THC), which is the main psychoactive compound in cannabis and CBD is not psychoactive',
  },

];

export default function Bio() {
  const [isClient, setIsClient] = useState(false);
  const [activeMoleculeIdx, setActiveMoleculeIdx] = useState<number>(1);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // const bioRef = createRef<HTMLElement>();
  //   const {activeSection, setActiveSection} = useActiveSectionContext();

  //   const {ref, inView} = useInView({
  //     threshold: 0.5,
  //     triggerOnce: false,
  //   })

  // useEffect(() => {
  //   console.log('bio inView', inView)
  //   setActiveSection('bio')
  // },[inView])

  const { activeSection, setActiveSection, ref } =
    useUpdateActiveSection('bio');

  const handleSelectMolecule = (index: number) => {
    setActiveMoleculeIdx(index);
  };

  return (
    <>
      <Wrapper backgroundColor="" additionalClasses="capped noBtmMargin">
        <section
          className={styles.bio}
          id="bio"
          ref={ref}
          //  onClick={(e)=>{

          // handleSelectMolecule(null)}}
          //  onMouseLeave={()=>handleSelectMolecule(null)}
        >
          <motion.div
            className={styles.headshotImgOuterContainer}
            // key={`headshotImgOuterContainer_${activeMoleculeIdx}`}

            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              className={`${styles.headshotImgContainer} imgBorderRadius`}
              variants={imageVariants}
              initial="initial"
              animate="animate"
            >
              {/* {activeMoleculeIdx == null ? ( */}
              <Image
                className={`${styles.headshotImg} `}
                placeholder='blur'
                src={headshotImg}
                alt="background"
                layout="fill"
                // objectFit="cover"
                // objectPosition="top"
                priority
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* ) : (
                <div>{MOLECULES_DATA?.[activeMoleculeIdx]?.molecule}</div>
              )} */}
            </motion.div>
          </motion.div>

          <motion.div
            // key={`bioAbout_${activeMoleculeIdx}`}
            className={styles.bioAbout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* {activeMoleculeIdx == null ? ( */}
            <div className={styles.bioTitleContainer}>
              <h1 className={styles.bioName}>Bo Kim</h1>
              <h2 className={styles.bioRole}>
                Software Engineer{' '}
                <span className={styles.scientistTitle}>& Scientist</span>
              </h2>
              <div>
                <p className={`${styles.bioParagraph} `}>
                  {`I'm a full-stack developer and former fermentation scientist (no, not beer, find out what molecules!).  
                `}
                </p>
              </div>
            </div>
            <div className={styles.moleculesBtnGroup}>
              {/* <AnimatePresence > */}
              {MOLECULES_DATA.map((molecule, idx) => {
                // const xPosition = `${idx * 10}%`;
                // const yPosition = `${idx * 10}%`;
                return (
                  // <div className={styles.moleculeBtn} key={idx}>
                  //   one
                  // </div>
                  <MoleculeBtn
                    index={idx}
                    key={idx}
                    // style={}
                    setActiveMoleculeIdx={setActiveMoleculeIdx}
                    activeMoleculeIdx={activeMoleculeIdx}
                    handleSelectMolecule={handleSelectMolecule}
                    // xPosition={xPosition}
                    // yPosition={'100%'}
                  />
                );
              })}
              {/* </AnimatePresence> */}
            </div>

            {/* ) : (
              <div>{MOLECULES_DATA?.[activeMoleculeIdx]?.description}</div>
            )} */}
          </motion.div>
        </section>
  
          <MoleculeDescription
            setActiveMoleculeIdx={setActiveMoleculeIdx}
            activeMoleculeIdx={activeMoleculeIdx}
            handleSelectMolecule={handleSelectMolecule}
          />
   
      </Wrapper>
    </>
  );
}

{
  /* <div className={styles.animationHome}>
        {isClient &&
          typeof window !== 'undefined' &&
          WebGL.isWebGLAvailable() && <AnimationHome />}
      </div> */
}

{
  /* 
                <p className={`${styles.bioParagraph} large`}>
                  {`I'm JavaScript centric currently but am always looking to expand my
                  technical skills. `}
                </p>
                <p className={`${styles.bioParagraph} large`}>
                  From my previous background, I hope to bring a fresh and
                  unique perspective and am looking forward to new and
                  interesting technical challenges.
                </p> */
}

{
  /* <h4 className={styles.bioQuote}>
                <span
                  className={styles.bioQuoteSpan}
                  style={{
                    position: 'relative',
                    transform: 'translateX(-2ch)',
                  }}
                >{`"Great challenges make life interesting; `}</span>
                <span
                  className={styles.bioQuoteSpan}
                  style={{ position: 'relative', transform: 'translateX(1ch)' }}
                >
                  {`overcoming them makes life meaningful."`}
                </span>
              </h4> */
}

{
  /* <div className = {styles.animationHome}>
       { isClient &&
        typeof window !== 'undefined' &&
        WebGL.isWebGLAvailable() && <LaboratoryAnimation />}
      </div> */
}
