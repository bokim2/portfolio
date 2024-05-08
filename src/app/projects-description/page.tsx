import Wrapper from '@/components/wrapper/wrapper';
import React from 'react';

import styles from './projectsDescriptionPage.module.scss';

export default function ProjectsDescriptionPage() {
  return (
    <Wrapper>
      <div className={styles.projectsDescription} id="projects-description">
        <div className={styles.projectDescription} id="seed-flask">
          <h3>Seed flask 2.0</h3>
        </div>
      </div>
    </Wrapper>
  );
}
