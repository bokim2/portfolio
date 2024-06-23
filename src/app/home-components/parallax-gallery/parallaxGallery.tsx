import React, { useEffect, useRef } from 'react';
import styles from './parallaxGallery.module.scss';
import Image, { StaticImageData } from 'next/image';

import img1 from '@/../public/images/parallax-gallery/1.jpg';
import img2 from '@/../public/images/parallax-gallery/2.jpg';
import img3 from '@/../public/images/parallax-gallery/3.jpg';
import img4 from '@/../public/images/parallax-gallery/4.jpg';
import img5 from '@/../public/images/parallax-gallery/5.jpg';
import img6 from '@/../public/images/parallax-gallery/6.jpg';
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

export default function ParallaxGallery() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 2.2]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 1.95]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 1.9]);

  const pictures: { src: StaticImageData; scale: MotionValue<number> }[] = [
    {
      src: img1,
      scale: scale4,
    },
    {
      src: img2,
      scale: scale5,
    },
    {
      src: img3,
      scale: scale6,
    },
    {
      src: img4,
      scale: scale8,
    },
    {
      src: img5,
      scale: scale9,
    },
    {
      src: img6,
      scale: scale6,
    },
  ];

  useEffect(() => {
    

const lenis = new Lenis()

// lenis.on('scroll', (e: any) => {
//   console.log(e)
// })

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  },[])

  return (
    <div ref={container} className={`${styles.container}`}>
      <div className={`${styles.sticky}`}>
        {pictures.map(({ scale, src }, i) => {
            console.log(src, i, pictures)
          return (
            <motion.div
              style={{ scale: scale }}
              className={`${styles.el}`}
              key={i}
            >
              <div className={`${styles.imageContainer}`}>
                <Image src={src} alt="gallery image" fill placeholder="blur" />
              </div>
            </motion.div>
          );
        })}
        ParallaxGallery
      </div>
    </div>
  );
}
