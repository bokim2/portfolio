import React from 'react';

import styles from './projects-intro.module.scss';

import Wrapper from '@/components/wrapper/wrapper';
import Image from 'next/image';
import seed_flask_d1 from '../../../../public/images/projects/seed_flask_d1.jpg';
import rediscope_d1 from '../../../../public/images/projects/rediscope_d1.jpg';
import Link from 'next/link';
import { useUpdateActiveSection } from '@/app/lib/custom-hooks';

export default function ProjectsIntro() {
  const { activeSection, setActiveSection, ref } =
  useUpdateActiveSection('projects');

  return (
    <Wrapper backgroundColor="">
      <div className={styles.projects} id="projects" ref={ref}>
        {/* project1 - seed flask 2.0 */}
        <div className={styles.project}>
          <h2 className={`animatedH2 animated`}>Projects</h2>
          {/* <Link href="/projects-description"> */}
          <Link href="/projects-description/#seed-flask-description">
            <h3 className={styles.projectTitle}>Seed Flask 2.0</h3>
          </Link>
          <div className={styles.projectText}>
            <p>
              Web app for recording and visualizing scientific data. Capture
               strain information, start flasks, and view previous
              growth curves to plan sample times, create sample schedules,
              save time with the dilution calculator. Securely log in
              with Auth0 (Google or GitHub) to observe and save your data.
            </p>

            <div className={styles.projectImageContainer}>
              <Image
                src={seed_flask_d1}
                alt="seed flask 2.0"
                objectPosition="center top"
                fill
                priority
              />
            </div>

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
        </div>
        {/* project2 - rediscope */}
        <div className={styles.project}>
          <Link href="/projects-description">
            <h3 className={styles.projectTitle}>Rediscope 2.0</h3>
          </Link>
          <div className={styles.projectText}>
            <p>
              An open source Redis database metrics visualization tool. Use the
              customizable data collection intervals and set max data points for
              enhanced data resolution. Dockerized and deployed using AWS.
            </p>

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
        </div>

        <div className={styles.projectContainer}></div>
      </div>
    </Wrapper>
  );
}
