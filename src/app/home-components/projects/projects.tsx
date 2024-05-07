import React from 'react';

import styles from './projects.module.scss';

import Wrapper from '@/components/wrapper/wrapper';
import Image from 'next/image';
import seed_flask_d1 from '../../../../public/images/projects/seed_flask_d1.jpg';
import rediscope_d1 from '../../../../public/images/projects/rediscope_d1.jpg';

export default function Projects() {
  return (
    <Wrapper backgroundColor="">
      <div className={styles.projects} id="projects">
        {/* project1 - seed flask 2.0 */}
        <div className={styles.project}>
          <div className={styles.projectText}>
            <h2 className={styles.projectTitle}>Seed Flask 2.0</h2>
            <p>
              Web app for recording and visualizing scientific data. Capture
              your strain information, start your flasks, and view previous
              growth curves to plan your sample times. Create sample schedules
              easily, use the dilution calculator - no need to calculate by
              hand. Securely log in with Auth0 (Google or GitHub) to observe and
              save your data.
            </p>

            <div className={styles.projectTechContainer}>
              <ul>
                <li>React</li>
                <li>React Router</li>
                <li>React Query</li>
                <li>Redux Toolkit</li>
                <li>Styled Components</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgresSQL</li>
                <li>React ChartJS</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>

          <div className={styles.projectImageContainer}>
            <Image
              src={seed_flask_d1}
              alt="seed flask 2.0"
              objectPosition="center top"
              fill
              priority
            />
          </div>
        </div>
        {/* project2 - rediscope */}
        <div className={styles.project}>
          <div className={styles.projectText}>
            <h2 className={styles.projectTitle}>Rediscope 2.0</h2>
            <p>
              An open source Redis database metrics visualization tool. Use the
              customizable data collection intervals and set max data points for
              enhanced data resolution. Dockerized and deployed using AWS.
            </p>

            <div className={styles.projectTechContainer}>
              <ul>
                <li>React</li>
                <li>React Router</li>
                <li>Styled Components</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgresSQL</li>
                <li>React ChartJS</li>
                <li>Node-Redis</li>
                <li>Docker</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>

          <div className={styles.projectImageContainer}>
            <Image
              src={rediscope_d1}
              alt="Rediscope 2.0"
              fill
              objectPosition="center top"
              priority
              style={{}}
            />
          </div>
        </div>

        <div className={styles.projectContainer}></div>
      </div>
    </Wrapper>
  );
}
