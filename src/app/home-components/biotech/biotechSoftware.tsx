import React from 'react';
import Image from 'next/image';

import styles from './biotech.module.scss';
import biomek1Img from '../../../../public/images/biotech/biomek1.jpg';
import biomek2Img from '../../../../public/images/biotech/biomek2.jpg';

export default function BiotechSoftware() {
  return (
    <div>
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
    </div>
  );
}
