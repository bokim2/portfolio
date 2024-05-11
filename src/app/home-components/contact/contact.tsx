import React, { createRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import headshotImg from '../../../../public/images/intro/headshot.png';

// inside src/app/page.tsx - home component

import styles from './contact.module.scss';
import Wrapper from '@/components/wrapper/wrapper';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/app/context/activeSection';
import { useUpdateActiveSection } from '@/app/lib/custom-hooks';

const imageVariants = {
  initial: { filter: 'sepia(100%)' },
  animate: { filter: 'sepia(0%)', transition: { delay: 1, duration: 1.5 } },
};

export default function Contact() {
  // const contactRef = createRef<HTMLElement>();
  //   const {activeSection, setActiveSection} = useActiveSectionContext();

  //   const {ref, inView} = useInView({
  //     threshold: 0.5,
  //     triggerOnce: false,
  //   })

  // useEffect(() => {
  //   console.log('contact inView', inView)
  //   setActiveSection('contact')
  // },[inView])

  const { activeSection, setActiveSection, ref } =
    useUpdateActiveSection('contact');

  return (
    <Wrapper >
      <section className={styles.contact} id="contact" ref={ref}>
        <div className={styles.headshotImgOuterContainer}>
        
        </div>

        <div className={styles.contactAbout}>
          <div className={styles.contactTitleContainer}>
            <h1 className={styles.contactName}>Contact</h1>
            <h3 className={styles.contactRole}>Bo Kim</h3>

            <p className={`${styles.contactParagraph} large`}>
              {"If you think I'd be a good fit for your team,"}
            </p>
            <h4 className={styles.contactQuote}>
              bokim.ce@gmail.com
            </h4>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
