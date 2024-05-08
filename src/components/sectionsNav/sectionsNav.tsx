import React from 'react';
import styles from './sectionsNav.module.scss';

export const sectionsLinks = [
  {
    name: 'bio',
    link: '/#bio',
  },
  {
    name: 'projects',
    link: '/#projects',
  },
  {
    name: 'biotech',
    link: '/#biotech',
  },

  {
    name: 'contact',
    link: '/#contact',
  },
] as const;

export default function SectionsNav() {
  return <div className={styles.sectionsNav}>
    <nav>
        <ul>
            {sectionsLinks.map((section, index) => 
                (<li key={section.link} 
                className={styles.section}
                >
                    <a href={section.link}>{section.name}</a>
                </li>))}
                
        </ul>
    </nav>
  </div>
}
