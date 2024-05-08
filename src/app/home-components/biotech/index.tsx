import React from 'react';
// inside src/app/page.tsx - home component

import styles from './biotech.module.scss';
import Image from 'next/image';
import genencor4Img from '../../../../public/images/biotech/genencor2.jpg';
import spotfire1Img from '../../../../public/images/biotech/spotfire1.jpg';

import Wrapper from '@/components/wrapper/wrapper';
import BiotechSoftware from './biotechSoftware';

export default function Biotech() {
  return (
    <Wrapper backgroundColor="">
      <div className={styles.biotechContainer} id="biotech">
        <h2>Biotech</h2>
        {/* first section */}
        <section className={styles.biotech}>
          <div className={styles.biotechTitleContainer}>
            <h6 className={styles.biotechH6}>Motivations</h6>
            <h3 className={styles.biotechRole}>The Journey up to this point</h3>
            <div className={styles.biotechAbout}>
              <p className="">
                {`In biotech, my primary area of specialization was upstream process development, aka working with bioreactors, often referred to as "fermentation", a term originating from the historical use of microorganisms for the production of alcoholic beverages.`}
              </p>
              <br />
              <p>
                My work involved cultivating genetically modified microbes to
                produce therapeutic proteins and enzymes. Additionally, I was
                involved in the production of molecules such as squalene, an oil
                found in shark liver used in cosmetics, and Rebaudioside M
                (rebM), a zero-calorie sweetener derived from the stevia plant.
              </p>
            </div>
          </div>
          <div className={styles.biotechSectionContainer}>
            <div className={styles.biotechTitleImageContainer}>
              <Image
                className="sepia"
                src={genencor4Img}
                alt="first job, Genencor"
                fill
                priority
              />
            </div>
            <div>
              <p className={'imageCaption'}>
                My first job, I worked on enzymes for biofuel production.
              </p>
            </div>
          </div>
        </section>

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
                My first job, I worked on enzymes for biofuel production with
                this team.{' '}
              </p>
            </div>
          </div>
        </section>

        <BiotechSoftware />
      </div>
    </Wrapper>
  );
}
