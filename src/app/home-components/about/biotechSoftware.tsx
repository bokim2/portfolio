import React from 'react';
import Image from 'next/image';

import styles from '@/app/home-components/about/biotechSoftware.module.scss';

import spotfire1Img from '@/../public/images/experience/spotfire1.jpg';
import biomek1Img from '@/../public/images/experience/biomek1.jpg';
import biomek2Img from '@/../public/images/experience/biomek2.jpg';
import ambr1Img from '@/../public/images/experience/ambr1.jpg';
import ambr2Img from '@/../public/images/experience/ambr2.jpg';
import ambr3Img from '@/../public/images/experience/ambr3.jpg';
import amyris from '@/../public/images/progressive/amyris.jpg';
import Wrapper from '@/components/wrapper/wrapper';

export default function BiotechSoftware() {
  return (
    <div className={``}>
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
              {`My interest in software engineering started with a data
              visualization software called Spotfire (similar to Tableau).
              `}
            </p>
            <br />
            <p>
              {`At the time, using excel to graph scientific data was very common.  Spotfire saved hours of data manipulation each experiment and possible errors.  This was my first exposure to the power of software in the workplace.It made me realize that sometimes, using the right tool is just as important than knowing how to do it manually.`}
            </p>
            <br />
            <p>
              {`My favorite part of biotech was working with and implementing new equipment and software.  I've worked with many of the new technologies used in high-throughput screening and fermentation today.  A lot of the emphasis is on throughput and miniturization, reduction of personel involvement and potential for errors.  
             `}
            </p>
            <br />
            <p>
              {`
             Because biotech laboratory work is still very manual, the focus of the industry has been `}
            </p>

            <br />
            <h3>why am i leaving biotech</h3>
            <p>
              {`After a decade in the industry, I feel that I've completed what I wanted to do.  I've worked with or have implemented most of the major systems used in research.  `}
            </p>
              
            <br />

            <p>
             {`I believe that a lot of the next big advancements in biotech will come from advancement in software and automation.  Within biotech, it's my personal opinion that the largest impact will come from improvements in strain engineering rather than in fermentation (mostly due to economics and what is possible at commercial scale).  Fermentation in recent years have become more and more of a testing platform, which is why throughput has taken center stage. `}
            </p>
            <br />
            <p>
             {`It has been such an interesting experience to be able to work with so many systems that are all trying to address the same problems different ways.  The imact of software quality on workflow is very noticible.  
             `}
            </p>
          
            <br />
            <p>
             {`why software engineering?  which areas am i interested in?

             `}
            </p>

          </div>
        </div>

        <div className={`${styles.experienceSectionContainer} imgBorderRadius`}>
          <div
            className={`${styles.experienceTitleImageContainer} imgBorderRadius`}
          >
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
          <div
            className={`${styles.experienceTitleImageContainer} imgBorderRadius`}
          >
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
          <div
            className={`${styles.experienceTitleImageContainer} imgBorderRadius`}
          >
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
          <div
            className={`${styles.experienceTitleImageContainer} imgBorderRadius`}
          >
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
          <div
            className={`${styles.experienceTitleImageContainer} imgBorderRadius`}
          >
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
            className={`${styles.experienceFullImageContainer} ${styles.contain} imgBorderRadius`}
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
