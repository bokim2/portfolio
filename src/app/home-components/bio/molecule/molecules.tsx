'use client';

import React, { createRef, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WebGL from 'three/addons/capabilities/WebGL.js';

// import molecules from '../../../../public/images/intro/headshot.png';

// inside src/app/page.tsx - home component

import styles from '../bio.module.scss';
import Wrapper from '@/components/wrapper/wrapper';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/app/context/activeSection';
import { useUpdateActiveSection } from '@/app/lib/custom-hooks';
import Molecule from './molecule';
import { MOLECULES_DATA } from '../bio';

// import AnimationHome from '../animation-home';

const imageVariants = {
  initial: { filter: 'sepia(100%)' },
  animate: { filter: 'sepia(0%)', transition: { delay: 1, duration: 1.5 } },
};

// export const MOLECULES_DATA = [
//   {
//     molecule: 'recombinant human interleukin-10 fusion protein',
//     traditionalSource: '',
//     description:
//       'AMT-101 is a recombinant fusion protein that is designed to leverage the anti-inflammatory properties of human interleukin-10 (IL-10). IL-10 is a cytokine with potent anti-inflammatory effects, playing a crucial role in regulating the immune system&quote;s response to inflammation and infection. In the context of AMT-101, this protein is used therapeutically to target specific inflammatory conditions.',
//   },
//   {
//     molecule: 'rebM',
//     traditionalSource: 'stevia plant',
//     description:
//       'rebM is a steviol glycoside that is found in the stevia plant. It is a natural sweetener that is 200 times sweeter than sugar.',
//   },
//   {
//     molecule: 'farnesane',
//     traditionalSource: 'stevia plant',
//     description:
//       'diesel/jet fuel additive.  Farnesane has a higher energy density than other alcohols, and is commonly used at a blend ratio of only 10% with traditional fuels.',
//   },
//   {
//     molecule: 'alpha-amylase',
//     traditionalSource: '',
//     description: '.',
//   },
//   {
//     molecule: 'gluco-amylase',
//     traditionalSource: '',
//     description: '.',
//   },
//   {
//     molecule: 'CBD',
//     traditionalSource: '',
//     description:
//       'is one of the many active compounds found in the Cannabis sativa plant. Unlike tetrahydrocannabinol (THC), which is the main psychoactive compound in cannabis and CBD is not psychoactive',
//   },
//   {
//     molecule: 'Human milk oligosaccharides (HMOs)',
//     traditionalSource: '',
//     description:
//       'complex carbohydrates that are naturally found in human breast milk. They are the third largest solid component in human milk after lactose and fat. They serve several crucial functions, primarily related to the development of the infant&quote;s immune system and gut microbiota',
//   },
// ];

type Tmolecules = {
  setActiveMoleculeIdx: React.Dispatch<React.SetStateAction<number >>;
  activeMoleculeIdx: number;
  handleSelectMolecule: (index: number ) => void;
};

export default function Molecules({  setActiveMoleculeIdx,
  activeMoleculeIdx,
  handleSelectMolecule, }: Tmolecules) {
  const [isClient, setIsClient] = useState(false);
  // const [activeMoleculeIdx, setActiveMoleculeIdx] = useState<number>(1);

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

  // const handleSelectMolecule = (index: number | null) => {
  //   if (index == null) {
  //     setTimeout(() => setActiveMoleculeIdx(0), 1000);
  //   } else {
  //     setActiveMoleculeIdx(index);
  //   }
  // };

  return (
    <>
      <Wrapper backgroundColor="">
        <section
          className={styles.bio}
          id="molecules"
          ref={ref}
          onClick={(e) => {
            handleSelectMolecule(0);
          }}
          //  onMouseLeave={()=>handleSelectMolecule(null)}
        >
          <motion.div
            className={styles.moleculesOuterContainer}
            key={`moleculesOuterContainer_${activeMoleculeIdx}`}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              className={`${styles.moleculesContainer} imgBorderRadius`}
              variants={imageVariants}
              initial="initial"
              animate="animate"
            >
              <div>{MOLECULES_DATA?.[activeMoleculeIdx]?.molecule}</div>
              <div>{MOLECULES_DATA?.[activeMoleculeIdx]?.description}</div>
            </motion.div>
          </motion.div>

          <motion.div
            key={`moleculeAbout_${activeMoleculeIdx}`}
            className={styles.bioAbout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            
            {/* <div className={styles.moleculesBtnGroup}>
              {MOLECULES_DATA.map((molecule, idx) => {
                return (
                  // <div className={styles.moleculeBtn} key={idx}>
                  //   one
                  // </div>
                  <AnimatePresence key={idx}>
                    <Molecule
                      index={idx}
                      key={idx}
                      setActiveMoleculeIdx={setActiveMoleculeIdx}
                      activeMoleculeIdx={activeMoleculeIdx}
                      handleSelectMolecule={handleSelectMolecule}
                    />
                  </AnimatePresence>
                );
              })}
            </div> */}
          </motion.div>
          {/* <Molecules /> */}
        </section>
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
