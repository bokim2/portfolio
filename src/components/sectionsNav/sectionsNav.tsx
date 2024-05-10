'use client';
import React, { useContext } from 'react';
import styles from './sectionsNav.module.scss';
import { sectionsLinks } from '@/app/lib/constants';
import { useActiveSectionContext } from '@/app/context/activeSection';


export default function SectionsNav() {
  const {activeSection, setActiveSection} = useActiveSectionContext()

  return <div className={styles.sectionsNav}>
    <nav>
        <ul>
            {sectionsLinks.map((section, index) => 
                (<li key={section.link} 
                className={`${styles.section} ${activeSection === section.name ? 'activeSectionStyle' : ''}`}
                >
                    <a href={section.link}>{section.name}</a>
                </li>))}
                
        </ul>
    </nav>
  </div>
}
