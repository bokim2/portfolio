import styles from './style.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function index({ handle, mousePosition, name }) {

  const {x,y} = mousePosition;
  console.log('gallery', mousePosition);

  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image src={`/images/${handle}/background.jpg`} alt={name} fill />
      </div>
      <motion.div className={styles.vignette} style={{x, y}}>
        {handle !== 'tahoe_1' ? (
          <Image src={`/images/${handle}/1.jpg`} alt={name} fill />
        ) : (
          <Image src={`/images/${handle}/1.png`} alt={name} fill />
        )}
      </motion.div>
    </div>
  );
}
