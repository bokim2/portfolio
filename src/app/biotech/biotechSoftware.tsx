import React from 'react';
import Image from 'next/image';

import styles from './biotechPage.module.scss';
import spotfire1Img from '../../../public/images/biotech/spotfire1.jpg';
import biomek1Img from '../../../public/images/biotech/biomek1.jpg';
import biomek2Img from '../../../public/images/biotech/biomek2.jpg';
import ambr1Img from '../../../public/images/biotech/ambr1.jpg';
import ambr2Img from '../../../public/images/biotech/ambr2.jpg';
import ambr3Img from '../../../public/images/biotech/ambr3.jpg';
import amyris from '../../../public/images/progressive/amyris.jpg';
import Wrapper from '@/components/wrapper/wrapper';

export default function BiotechSoftware() {
  return (
    <Wrapper backgroundColor="" className="firstWrapper">
      {/* second section */}
      <section className={styles.biotech}>
        <div className={styles.biotechTitleContainer}>
          <h6 className={styles.biotechName}>Origin</h6>
          <h3 className={styles.biotechRole}>
            Exposure to Biotech Related Software
          </h3>
          <div className={styles.biotechAbout}>
            <p>
              My interest in software engineering started with a data
              visualization software called Spotfire.
            </p>
          </div>
        </div>

        <div className={styles.biotechSectionContainer}>
          <div className={styles.biotechTitleImageContainer}>
            <Image src={spotfire1Img} alt="spotfire graphs" fill priority />
          </div>
          <div>
            <p className={'imageCaption'}>
              My first job, I worked on enzymes for biofuel production with this
              team.{' '}
            </p>
          </div>
        </div>
      </section>

      {/* <BiotechSoftware /> */}
      {/* third section */}
      <section className={`${styles.biotech} ${styles.noReverse}`}>
        <div className={styles.biotechSectionContainer}>
          <div className={styles.biotechTitleImageContainer}>
            <Image src={biomek1Img} alt="biomek software" fill priority />
          </div>
          <div>
            <p className={'imageCaption'}>
              The Biomek Liquid Handler automates liquid handling tasks across a
              variety of applications, including protein assays and product
              quantification, to improve efficiency and precision in biotech
              labs.
            </p>
          </div>
        </div>

        <div className={styles.biotechSectionContainer}>
          <div className={styles.biotechTitleImageContainer}>
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
      <section className={`${styles.biotech} ${styles.noReverse}`}>
        <div className={styles.biotechSectionContainer}>
          <div className={styles.biotechTitleImageContainer}>
            <Image src={ambr1Img} alt="biomek software" fill priority />
          </div>
          <div>
            <p className={'imageCaption'}>
              The Biomek Liquid Handler automates liquid handling tasks across a
              variety of applications, including protein assays and product
              quantification, to improve efficiency and precision in biotech
              labs.
            </p>
          </div>
        </div>

        <div className={styles.biotechSectionContainer}>
          <div className={styles.biotechTitleImageContainer}>
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
        <section className={`${styles.biotech} `}>
          <div
            className={`${styles.biotechFullImageContainer} ${styles.contain}`}
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
    </Wrapper>
  );
}
