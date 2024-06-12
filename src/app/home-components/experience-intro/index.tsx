import React from 'react';
// inside src/app/page.tsx - home component

import styles from './experienceIntro.module.scss';

import { useUpdateActiveSection } from '@/app/lib/custom-hooks';
import Link from 'next/link';
import Experience from './experience/experience';

export default function WorkIntro() {
  const { activeSection, setActiveSection, ref } =
    useUpdateActiveSection('experience');


  return (
    <>
      {/* <Wrapper backgroundColor=""> */}
        {/* <div className={styles.experienceContainer} id="experience"> */}
          {/* <div className={styles.experienceContainer} id="experience"></div> */}
          <Experience />

          
        {/* </div> */}
      {/* </Wrapper> */}
    </>
  );
}
