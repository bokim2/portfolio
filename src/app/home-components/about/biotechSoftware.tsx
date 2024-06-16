import React from 'react';
import Image from 'next/image';

import styles from '@/app/home-components/experience-intro/experience/experience.module.scss';
import spotfire1Img from '@/../public/images/experience/spotfire1.jpg';
import biomek1Img from '@/../public/images/experience/biomek1.jpg';
import biomek2Img from '@/../public/images/experience/biomek2.jpg';
import ambr1Img from '@/../public/images/experience/ambr1.jpg';
import ambr2Img from '@/../public/images/experience/ambr2.jpg';
import ambr3Img from '@/../public/images/experience/ambr3.jpg';
import amyris from '@/../public/images/progressive/amyris.jpg';
import Wrapper from '@/components/wrapper/wrapper';

export default function BiotechSoftware() {
  return (<div className={``}>
    {/* <Wrapper backgroundColor="" className="firstWrapper"> */}
      {/* second section */}
      <section className={styles.experience}>
        <div className={styles.experienceTitleContainer}>
          <h5 className={styles.experienceName}>Origin</h5>
          <h3 className={styles.experienceRole}>
            Exposure to Work Related Software
          </h3>
          <div className={styles.experienceAbout}>
            <p>
              My interest in software engineering started with a data
              visualization software called Spotfire.  
            </p>
          </div>
        </div>

        <div className={styles.experienceSectionContainer}>
          <div className={styles.experienceTitleImageContainer}>
            <Image src={spotfire1Img} alt="spotfire graphs" fill priority />
          </div>
          <div>
            <p className={'imageCaption'}>
              My first job, I experienceed on enzymes for biofuel production
              with this team.{' '}
            </p>
          </div>
        </div>
      </section>

      {/* <WorkSoftware /> */}
      {/* third section */}
      <section className={`${styles.experience} ${styles.noReverse}`}>
        <div className={styles.experienceSectionContainer}>
          <div className={styles.experienceTitleImageContainer}>
            <Image src={biomek1Img} alt="biomek software" fill priority />
          </div>
          <div>
            <p className={'imageCaption'}>
              The Biomek Liquid Handler automates liquid handling tasks across a
              variety of applications, including protein assays and product
              quantification, to improve efficiency and precision in experience
              labs.
            </p>
          </div>
        </div>

        <div className={styles.experienceSectionContainer}>
          <div className={styles.experienceTitleImageContainer}>
            <Image
              src={biomek2Img}
              alt="biomek software"
              fill
              // objectFit="contain"
              objectPosition="center top"
              priority
            />
          </div>
          <div>
            <p className={'imageCaption'}>
              not pretty, but it got the job done.
            </p>
          </div>
        </div>
      </section>

      {/* third section */}
      <section className={`${styles.experience} ${styles.noReverse}`}>
        <div className={styles.experienceSectionContainer}>
          <div className={styles.experienceTitleImageContainer}>
            <Image src={ambr1Img} alt="biomek software" fill priority />
          </div>
          <div>
            <p className={'imageCaption'}>
              The Biomek Liquid Handler automates liquid handling tasks across a
              variety of applications, including protein assays and product
              quantification, to improve efficiency and precision in experience
              labs.
            </p>
          </div>
        </div>

        <div className={styles.experienceSectionContainer}>
          <div className={styles.experienceTitleImageContainer}>
            <Image
              src={ambr2Img}
              alt="biomek software"
              fill
              // objectFit="contain"
              objectPosition="center top"
              priority
            />
          </div>
          <div>
            <p className={'imageCaption'}>
              not pretty, but it got the job done.
            </p>
          </div>
        </div>
      </section>

      {/* pics */}
      <Wrapper>
        <section className={`${styles.experience} `}>
          <div
            className={`${styles.experienceFullImageContainer} ${styles.contain}`}
          >
            <Image
              src={amyris}
              alt="biomek software"
              layout="responsive"
              priority
            />
          </div>
        </section>
      </Wrapper>
    {/* </Wrapper> */}
    </div>
  );
}
