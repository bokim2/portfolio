import React, { useRef } from 'react';
import styles from './parallaxGallery.module.scss';
import Image from 'next/image';

import img1 from '@/../public/images/parallax-gallery/1.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxGallery() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])

  return (
    <div ref={container} className={`${styles.container}`}>
      <div className={`${styles.sticky}`}>
        <motion.div 
        style={{scale: scale4}} 
        className={`${styles.el}`}>
          <div 
          className={`${styles.imageContainer}`}>
            <Image src={img1} alt="gallery image" fill placeholder="blur" />
          </div>
        </motion.div>
        ParallaxGallery
      </div>
    </div>
  );
}
