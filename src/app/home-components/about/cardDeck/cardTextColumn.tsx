import React from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from './cardDeck.module.scss';

import { TCard } from './singleCardForGrid';
export default function CardTextColumn({
  item,
  cardIndex,
  activeIndex,
}: TCard) {
  return (
    <div className={styles.cardTextColumn}>
      <div className={styles.cardTitles}>
        <h3 className={styles.cardTitle}
        style={{marginBottom: 0}}>{item?.[activeIndex]?.title ?? ''}</h3>
        <p className={` ${styles.cardSubtitle}`}>
          {item?.[activeIndex]?.subtitle ?? ''}
        </p>
      </div>
      <div className={`${styles.cardTextAndSecondImage}`}>
        <div className={`${styles.cardTextContainer}`}>
          {item?.[activeIndex]?.text?.map((singleParagraph, i) => (
            <>
              <p key={i} className={styles.singleParagraph}>{singleParagraph}</p>
              {/* {i < (item?.[activeIndex]?.text?.length ?? 0) - 1 && <br />} */}
            </>
          ))}
        </div>

        {item?.[activeIndex]?.pic3 && (
          <div className={styles.cardImageContainerSecondary}>
            <Image
              src={item?.[activeIndex]?.pic3 as StaticImageData}
              alt={item?.[activeIndex]?.title as string}
              layout="fill"
              style={item?.[activeIndex]?.pic2StyleOverrides ?? {}}
            />
          </div>
        )}
      </div>
    </div>
  );
}
