import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './intro.module.scss';

const imageVariants = {
  initial: {filter: 'sepia(100%)'},
  animate: {filter: 'sepia(0%)', transition: {delay: 1, duration: 1.5}},
}

export default function Intro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.background}>
      
        <motion.div className={styles.backgroundImgContainer}
        variants={imageVariants}
        initial='initial'
        animate='animate'>
        <Image
            className={`${styles.headshotImgMoab} `}
            src="/images/intro/headshot.png"
            alt="background"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            priority
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* <Image
            className={`${styles.headshotImgMoab} ${styles.sepia}`}
            src="/images/intro/headshot.png"
            alt="background"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          /> */}
          {/* <Image
            className={`${styles.headshotImgMoab} ${styles.sepia}`}
            src="/images/intro/moab_bo.jpeg"
            alt="background"
            layout = "fill"
            objectFit = "cover"
            objectPosition= "top"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          /> */}
        </motion.div>
      </div>
    </div>
  );
}
