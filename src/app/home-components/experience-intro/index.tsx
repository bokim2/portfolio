import React from 'react';
// inside src/app/page.tsx - home component

import styles from './experienceIntro.module.scss';
import Image from 'next/image';
import genencor4Img from '../../../../public/images/experience/genencor2.jpg';
import spotfire1Img from '../../../../public/images/experience/spotfire1.jpg';

import Wrapper from '@/components/wrapper/wrapper';
import { useUpdateActiveSection } from '@/app/lib/custom-hooks';
import Link from 'next/link';

export default function WorkIntro() {
  const { activeSection, setActiveSection, ref } =
    useUpdateActiveSection('experience');

  return (
    <Wrapper backgroundColor="">
      <div className={styles.experienceContainer} id="experience">
        <Link href="/experience">
          <h2 className={`animatedH2 animated`}>Experience</h2>
        </Link>
        {/* first section */}
        <section className={styles.experience} ref={ref}>
          <div className={styles.experienceTitleContainer}>
            <h5 className={styles.experienceH6}>Motivations</h5>
            <h3 className={styles.experienceRole}>
              The Journey up to this point
            </h3>
            <div className={styles.experienceAbout}>
              <p className="">
                {`In experience, my primary area of specialization was upstream process development, aka working with bioreactors, often referred to as "fermentation", a term originating from the historical use of microorganisms for the production of alcoholic beverages.`}
              </p>
              <br />
              <p>
                My experience involved cultivating genetically modified microbes
                to produce therapeutic proteins and enzymes. Additionally, I was
                involved in the production of molecules such as squalene, an oil
                found in shark liver used in cosmetics, and Rebaudioside M
                (rebM), a zero-calorie sweetener derived from the stevia plant.
              </p>
            </div>
          </div>
          <div className={styles.experienceSectionContainer}>
            <div className={styles.experienceTitleImageContainer}>
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
      </div>
    </Wrapper>
  );
}
