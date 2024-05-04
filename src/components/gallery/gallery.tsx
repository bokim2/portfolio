import styles from './gallery.module.scss';
import Image from 'next/image';
import { MotionValue, motion } from 'framer-motion';

type TGalleryProps = {
  handle: string;
  mousePosition: { x: MotionValue<any>; y: MotionValue<any> };
  name: string;
};

export default function index({ handle, mousePosition, name }: TGalleryProps) {
  const { x, y } = mousePosition;
  console.log('gallery', mousePosition);

  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image src={`/images/${handle}/background.jpg`} alt={name} fill />
      </div>
      <motion.div className={styles.vignette} style={{ x, y }}>
        {handle !== 'tahoe_1' ? (
          <Image src={`/images/${handle}/1.jpg`} alt={name} fill />
        ) : (
          <Image src={`/images/${handle}/1.png`} alt={name} fill />
        )}
      </motion.div>
    </div>
  );
}
