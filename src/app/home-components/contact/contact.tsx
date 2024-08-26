'use client';
import React, { createRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import headshotImg from '../../../../public/images/intro/headshot.png';

// inside src/app/page.tsx - home component

import styles from './contact.module.scss';
import Wrapper from '@/components/wrapper/wrapper';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/app/context/activeSection';
import { useUpdateActiveSection } from '@/app/lib/custom-hooks';
import Link from 'next/link';

import linkedinIcon from '@/../public/images/icons/linkedin.png';
import emailIcon from '@/../public/images/icons/linkedin.png';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import AnimationHome from '../bio/animation-home';
import { WebGL } from 'three/examples/jsm/Addons.js';

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

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

  return (
    
    <section className={styles.contact} id="contact" ref={ref}>
      {/* <Wrapper additionalClasses='noMarginBlock'> */}
      <div className={styles.contactOuter}>

      <div className={styles.contactInner}>
        <div className={styles.headshotImgOuterContainer}>
          <h2 className={`${styles.contactTitle}`}>Contact</h2>
          <p className={`${styles.contactSubtitle} subTitlePaddingLeft-small`}>{`Let's build together`}</p>
        </div>

        <div className={`${styles.contacts} subTitlePaddingLeft`}>
          <div className={styles.singleContact}>
            <motion.a
              whileHover={{ fontWeight: 500 }}
              href="mailto:bokim.ce@gmail.com"
            >
              <p className={`large`}>
                bokim.ce@gmail.com <MdEmail />
              </p>{' '}
            </motion.a>
          </div>

          <div className={styles.singleContact}>
            <Link href="https://www.linkedin.com/in/bokim1/" target="_">
              <p className={` large`}>
                linkedin <FaLinkedin />
              </p>
            </Link>
          </div>
        </div>
      </div>
      </div>
      {/* </Wrapper> */}

{isClient && typeof window !== 'undefined' && WebGL.isWebGLAvailable() ?

      <div className={styles.flaskAnimation}>
        <AnimationHome />
      </div>
      : 
      <div className={styles.noAnimation}></div>

}
    </section>
  );
}
