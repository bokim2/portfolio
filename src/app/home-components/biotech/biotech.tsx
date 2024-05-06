import React from 'react';
// inside src/app/page.tsx - home component

import styles from './biotech.module.scss';
import Image from 'next/image';

export default function Biotech() {
  return (
    <div className={styles.biotechContainer}>
      {/* first section */}
      <section className={styles.biotech}>
        <div className={styles.biotechSectionContainer}>
          <div className={styles.biotechTitleImageContainer}>
            <Image
              src="/images/progressive/genencor4.jpg"
              alt="first job"
              fill
              priority
            />
          </div>
          <div>
            My first job, I worked on enzymes for biofuel production with this
            team.{' '}
          </div>
        </div>
        <div className={styles.biotechTitleContainer}>
          <h1 className={styles.biotechName}>Motivations</h1>
          <h2 className={styles.biotechRole}>The Journey up to this point</h2>
          <div className={styles.biotechAbout}>
            <p className="">
              {`In biotech, my primary area of specialization was upstream process development, aka working with bioreactors, often referred to as "fermentation", a term historically originating from the use of microorganisms for the production of drinkable alcohol.`}
            </p>
            <br />
            My work involved cultivating genetically modified microbes to
            produce therapeutic proteins and enzymes. Additionally, I was
            involved in the production of molecules such as squalene, an
            oil found in shark liver widely used in cosmetics, and Rebaudioside
            M (rebM), a zero-calorie sweetener derived from the stevia plant.
          </div>
        </div>
      </section>

{/* second section */}
      <section className={styles.biotech}>

        <div className={styles.biotechSectionContainer}>
          <div className={styles.biotechTitleImageContainer}>
            <Image
              src="/images/intro/spotfire1.jpg"
              alt="first job"
              fill
              priority
            />
          </div>
          <div>
            My first job, I worked on enzymes for biofuel production with this
            team.{' '}
          </div>
        </div>

        <div className={styles.biotechTitleContainer}>
          <h1 className={styles.biotechName}>Origin</h1>
          <h2 className={styles.biotechRole}>Exposure to Biotech Related Software</h2>
          <div className={styles.biotechAbout}>
            <p className="">
              My interest in software engineering started with a data
              visualization software called Spotfire.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
