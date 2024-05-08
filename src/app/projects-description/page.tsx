'use client';
import Wrapper from '@/components/wrapper/wrapper';
import React from 'react';
import { motion } from 'framer-motion';

import styles from './projectsDescriptionPage.module.scss';
import seed_flask_d1 from '../../../public/images/projects/seed_flask_d1.jpg';
import Image from 'next/image';

export default function ProjectsDescriptionPage() {
  return (
    <div className="pageContainer">
      <div className='outerContainer center'>
      {/* <motion.div className='testDiv'>test</motion.div> */}
        <motion.div className={styles.projectImageContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, width: '100%'}}
        transition={{ delay: 0.5, duration: 1 }}>
          <Image
            src={seed_flask_d1}
            alt="seed flask 2.0"
            // objectPosition="center top"
            fill
            priority
          />
        
        </motion.div>
      </div>
      <Wrapper>
        <div className={styles.projectsDescription} id="projects-description">
          <div className={styles.projectDescription} id="seed-flask">
            <h3>Seed flask 2.0</h3>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
