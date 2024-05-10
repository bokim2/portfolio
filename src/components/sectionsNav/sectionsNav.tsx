'use client';
import React, { useContext } from 'react';
import styles from './sectionsNav.module.scss';
import { motion } from 'framer-motion';

import { sectionsLinks } from '@/app/lib/constants';
import { useActiveSectionContext } from '@/app/context/activeSection';
import Link from 'next/link';

export default function SectionsNav() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <div className={styles.sectionsNav}>
      <nav>
        <ul>
          {sectionsLinks.map((section, index) => (
            <motion.li
              key={section.link}
              className={styles.sectionNavLi}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // className={`${styles.section} ${activeSection === section.name ? 'activeSectionStyle' : ''}`}
              // layoutId='activeSection'
              // transition={{
              //   type: 'spring',
              //   stiffness: 380,
              //   damping: 30
              // }}
              onClick={() => setActiveSection(section.name)}
            >
              {activeSection === section.name && (
                <motion.span
                  // className={`${
                  //   activeSection === section.name ? styles.activeLinkStyle : ''
                  // }`}
                  className={`${styles.activeLinkStyle}`}
                  layoutId="activeSection"
                  // initial={false}
                  // animate={{ x: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}

              <Link href={section.link} className={`${styles.sectionLink}`}>
                {section.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
