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
import Link from 'next/link';

import linkedinIcon from '@/../public/images/icons/linkedin.png';
import emailIcon from '@/../public/images/icons/linkedin.png';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

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
    <Wrapper>
      <section className={styles.contact} id="contact" ref={ref}>
        <div className={styles.headshotImgOuterContainer}>
          <h2 className={``}>Contact</h2>
        </div>

        <div className={styles.contactAbout}>
          <div className={styles.contactTitleContainer}>
            {/* <h2 className={``}>Contact</h2> */}

            {/* <p className={`${styles.contactParagraph} large`}>
              {"If you think I'd be a good fit for your team,"}
            </p> */}

            {/* <p className={`${styles.contactParagraph} large`}>
              {"Whether you think I'd be a great fit for your team, or you're curious to learn more about my work, feel free to reach out via LinkedIn or send me an email.  "}
            </p> */}
{/* 
            <p className={`${styles.contactRole}  large`}>Bo Kim</p> */}

            <div className={styles.singleContact}>
              <motion.a
                whileHover={{ fontWeight: 500 }}
                href="mailto:bokim.ce@gmail.com"
              >
                <p
                  // className={`${styles.contactEmail} large`}
                  className={` large`}
                >
                  bokim.ce@gmail.com <MdEmail />
                </p>{' '}
              </motion.a>
            </div>

            <div className={styles.singleContact}>
              <Link href="https://www.linkedin.com/in/bokim1/" target="_">
                {/* <div className={styles.iconContainer}>
                  <Image
                    className={styles.icon}
                    src={linkedinIcon}
                    alt="linkedin"
                    height={100}
                    width={100}
                    priority
                    //   sizes='5vw'
                    //   fill
                  />
                </div> */}
                <p className={` large`}>
                  linkedin <FaLinkedin />
                </p>
              </Link>
            </div>

            {/* <div className={styles.singleContact}>
              <Link href="https://www.linkedin.com/in/bokim1/" target="_">
                <div className={styles.iconContainer}>
                  <Image
                    className={styles.icon}
                    src={linkedinIcon}
                    alt="linkedin"
                    height={100}
                    width={100}
                    priority
                    //   sizes='5vw'
                    //   fill
                  />
                </div>
                <MdEmail />
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
