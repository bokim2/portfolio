'use client';

import React, { createRef, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WebGL from 'three/addons/capabilities/WebGL.js';

// import molecules from '../../../../public/images/intro/headshot.png';

// inside src/app/page.tsx - home component

import styles from './molecule.module.scss';
import Wrapper from '@/components/wrapper/wrapper';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/app/context/activeSection';
import { useUpdateActiveSection } from '@/app/lib/custom-hooks';
import Molecule from './moleculeBtn';
import { MOLECULES_DATA } from '../bio';

// import AnimationHome from '../animation-home';

const imageVariants = {
  initial: { filter: 'sepia(100%)' },
  animate: { filter: 'sepia(0%)', transition: { delay: 1, duration: 1.5 } },
};

type Tmolecules = {
  setActiveMoleculeIdx: React.Dispatch<React.SetStateAction<number>>;
  activeMoleculeIdx: number;
  handleSelectMolecule: (index: number) => void;
};

export default function MoleculeDescription({
  setActiveMoleculeIdx,
  activeMoleculeIdx,
  handleSelectMolecule,
}: Tmolecules) {
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
      {/* <Wrapper backgroundColor=""> */}
      <section
        className={styles.moleculeDescription}
        id="molecules"
        ref={ref}
        onClick={(e) => {
          handleSelectMolecule(0);
        }}
        //  onMouseLeave={()=>handleSelectMolecule(null)}
      >
        <motion.div
          className={styles.descriptionOuterContainer}
          key={`moleculesOuterContainer_${activeMoleculeIdx}`}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className={`${styles.moleculeDescriptionContainer} imgBorderRadius`}
            variants={imageVariants}
            initial="initial"
            animate="animate"
          >
           
              <p>{MOLECULES_DATA?.[activeMoleculeIdx]?.molecule}</p>
       
              <p>{MOLECULES_DATA?.[activeMoleculeIdx]?.description}</p>
        
          </motion.div>
        </motion.div>

        {/* <motion.div
            key={`moleculeAbout_${activeMoleculeIdx}`}
            className={styles.bioAbout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className={styles.moleculesBtnGroup}>
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
            </div>
          </motion.div> */}
        {/* <Molecules /> */}
      </section>
      {/* </Wrapper> */}
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
