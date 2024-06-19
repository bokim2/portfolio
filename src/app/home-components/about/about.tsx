import Wrapper from '@/components/wrapper/wrapper'
import React from 'react'

import styles from './about.module.scss'
import Image from 'next/image';
import genencor4Img from '../../../../public/images/experience/genencor2.jpg';
import spotfire1Img from '../../../../public/images/experience/spotfire1.jpg';
import Link from 'next/link';
import { useUpdateActiveSection } from '@/app/lib/custom-hooks';
import BiotechSoftware from './biotechSoftware';
import ThisPortfolio from './thisPortfolio';


export default function About() {

    const { activeSection, setActiveSection, ref } =
    useUpdateActiveSection('about');

  return (
    <Wrapper>
        <Link href="/experience">
            <h2 className={`animatedH2 animated`}>About</h2>
          </Link>
          {/* first section */}
          <section className={styles.experience} ref={ref}>
            <div className={styles.experienceTitleContainer}>
              <h5 className={styles.experienceH6}>Motivations</h5>
              <h3 className={styles.experienceRole}>
                The Journey up to this point
              </h3>
              <div className={styles.experienceAbout}>
                <p className="paragraph">
                  {`My primary area of specialization was upstream process development, aka working with bioreactors, often referred to as "fermentation", a term originating from the historical use of microorganisms for the production of alcoholic beverages.`}
                </p>

                <p className="paragraph">
                  My experience involved cultivating genetically modified
                  microbes to produce therapeutic proteins and enzymes.
                  Additionally, I was involved in the production of molecules
                  such as squalene, an oil found in shark liver used in
                  cosmetics, and Rebaudioside M (rebM), a zero-calorie sweetener
                  derived from the stevia plant.
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

          <BiotechSoftware />
          <ThisPortfolio />
    </Wrapper>
  )
}
