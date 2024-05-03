import Image from 'next/image';
import styles from './intro.module.scss';

export default function intro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.background}>
      
        <div className={styles.backgroundImgContainer}>
          <Image
            className="headshotImg"
            src="/images/intro/headshot.png"
            alt="background"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* <Image
            className="headshotImg"
            src="/images/intro/moab_bo.png"
            alt="background"
            layout = "fill"
            objectFit = "cover"
            objectPosition= "top"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          /> */}
        </div>
      </div>
    </div>
  );
}
