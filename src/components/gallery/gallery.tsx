import styles from './gallery.module.scss';
import Image, { StaticImageData } from 'next/image';
import { MotionValue, motion } from 'framer-motion';

type TGalleryProps = {
  handle: string;
  mousePosition: { x: MotionValue<any>; y: MotionValue<any> };
  name: string;
  imageImported: StaticImageData;
  backgroundImg: StaticImageData;
};

export default function index({
  handle,
  mousePosition,
  name,
  imageImported,
  backgroundImg,
}: TGalleryProps) {
  const { x, y } = mousePosition;
  console.log('gallery', mousePosition);

  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image src={backgroundImg} alt={name} fill priority />
      </div>
      <motion.div className={styles.vignette} style={{ x, y }}>
        {/* {handle !== 'tahoe_1' ? ( */}
        <Image src={imageImported} alt={name} fill priority />
        {/* ) : (
          <Image src={imageImported} alt={name} fill priority />
        )} */}
      </motion.div>
    </div>
  );
}
