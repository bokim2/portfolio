
import React from 'react';

import styles from './about.module.scss';

import Wrapper from '@/components/wrapper/wrapper';
import Image from 'next/image';
import seed_flask_d1 from '../../../../public/images/projects/seed_flask_d1.jpg';
import rediscope_d1 from '../../../../public/images/projects/rediscope_d1.jpg';
import Link from 'next/link';
import { useUpdateActiveSection } from '@/app/lib/custom-hooks';

export default function ThisPortfolio() {


  return (
    // <Wrapper backgroundColor="">
      <div className={styles.thisPortfolio} id="thisPortfolio" >
        {/* project1 - seed flask 2.0 */}
        <div className={styles.project}>
          <h2 className={`animatedH2 animated`}>this Portfolio</h2>
          {/* <Link href="/thisPortfolio-description"> */}
          <Link href="/thisPortfolio-description/#seed-flask-description">
            <h3 className={styles.projectTitle}>Frontend Heavy</h3>
          </Link>
          <div className={styles.projectText}>
            <p>
              I wanted to have fun and explore with this portfolio.  I wanted to take a look at three.js, framer motion, and other libraries.  
            </p>

            <div className={styles.projectImageContainer}>
              {/* <Image
                src={seed_flask_d1}
                alt="seed flask 2.0"
                objectPosition="center top"
                fill
                priority
              /> */}
            </div>

            <div className={styles.projectTechContainer}>
              <ul>
                <li>Next.js</li>
                <li>Typescript</li>
                <li>React</li>
                <li>CSS modules</li>
                <li>Framer Motion</li>
                <li>Three.js</li>
                <li>React Three Fiber</li>
                <li>React Three Drei</li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
       
      </div>
    // </Wrapper>
  );
}
