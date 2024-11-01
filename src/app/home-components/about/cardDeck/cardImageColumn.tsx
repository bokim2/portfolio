'use client';
import React, { Dispatch, SetStateAction, forwardRef, useState } from 'react';
import { TCard } from './singleCardForGrid';
import Image, { StaticImageData } from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './cardDeck.module.scss';


type TCardImageColumnProps = TCard & {
  isHovered: 'left' | 'right' | null;
  setIsHovered: Dispatch<SetStateAction<'left' | 'right' | null>>;
};

type RefType = HTMLDivElement;


const CardImageColumn = forwardRef<RefType, TCardImageColumnProps>(
  (props, ref) => {
    const { item, cardIndex, activeIndex, isHovered, setIsHovered } = props;

    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    const isGif = (url: StaticImageData): Boolean => {
      return url.src.endsWith('.gif');
    };

    return (
      <>
        {item?.length > 0 ? (
          <div className={styles.imageAndCaptionContainer}>
            <motion.div
              layout
              key={`${cardIndex}_${activeIndex}`}
              initial={{ transform: 'scale(1)' }}
              whileHover={{
                boxShadow: '0.25px 0.25px 10px var(--clr-accent-2)',
                transform: 'scale(1.02)',
              }}
              className={`${styles.cardImageContainer} imgBorderRadius`}
              ref={ref} 
              onClick={() => {
                isHovered === null ? setIsHovered('right') : setIsHovered(null);
              }}
              whileTap={{
                boxShadow: '2px 4px 7px var(--clr-accent-3)',
                transform: 'scale(.98)',
              }}
            >
              <AnimatePresence>
                <motion.div
                  key={`${cardIndex}_${activeIndex}_pic1`}
                  className={styles.cardImageContainer}
                  initial={{ opacity: 1, x: '0%', height: 'auto' }}
                  animate={{
                    opacity: imageLoaded ? (isHovered ? 0 : 1) : 0.5,
                    x: isHovered ? '-2%' : '0%',
                  }}
                  exit={{ opacity: 0, x: '-2%' }}
                  transition={{ duration: 0.7 }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Image
                    className={styles.pic1}
                    placeholder={
                      !isGif(item?.[activeIndex]?.pic1) ? 'blur' : undefined
                    }
                    src={item?.[activeIndex]?.pic1}
                    alt={item?.[activeIndex]?.title as string}
                    layout="fill"
                    sizes="(max-width: 800px) 80vw, 40vw"
                    style={item?.[activeIndex]?.pic1StyleOverrides ?? {}}
                    key={`${cardIndex}_${activeIndex}_pic1`}
                    onLoadingComplete={() => setImageLoaded(true)}
                  />
                </motion.div>

                <motion.div
                  key={`${cardIndex}_${activeIndex}_pic2`}
                  className={styles.cardImageContainer}
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? '0%' : '2%',
                    transition: {
                      duration: 0.8,
                      delay: 0.4,
                    },
                  }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Image
                    className={styles.pic2}
                    src={item?.[activeIndex]?.pic2 as StaticImageData}
                    alt={item?.[activeIndex]?.title as string}
                    layout="fill"
                    style={item?.[activeIndex]?.pic2StyleOverrides ?? {}}
                    key={`${cardIndex}_${activeIndex}_pic2`}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
            {/* {activeIndex == 0 && (
              <motion.div className={styles.imageCaptionContainer}>
                {!isHovered
                  ? item?.[activeIndex]?.pic1ImageCaption && (
                      <p className={'imageCaption'}>
                        {item?.[activeIndex]?.pic1ImageCaption}
                      </p>
                    )
                  : item?.[activeIndex]?.pic2ImageCaption && (
                      <p className={'imageCaption'}>
                        {item?.[activeIndex]?.pic2ImageCaption}
                      </p>
                    )}
              </motion.div>
            )} */}
          </div>
        ) : null}
      </>
    );
  }
);

// Set the displayName for the component
CardImageColumn.displayName = 'CardImageColumn';

export default CardImageColumn;
