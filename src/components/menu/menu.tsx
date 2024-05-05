import React from 'react';
import styles from './menu.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={`${styles.menuItem} ${styles.menuItem1}`}>
        {/* <Link href="/">ㅂ</Link> */}
        <Link href="/">Bo Kim</Link>
      </div>

      {/* menu button */}
      <button className={styles.menuButton}>
        <div className={styles.menuLine}></div>
        <div className={styles.menuLine}></div>
        <div className={styles.menuLine}></div>
      </button>

      <div className={`${styles.menuItem} ${styles.menuItem2}`}>
        <Link href="https://www.linkedin.com/in/bokim1/" target="_">
          <div className={styles.iconContainer}>
            <Image
              className={styles.icon}
              src="/images/icons/linkedin.png"
              alt="linkedin"
              height={100}
              width={100}
              priority
              //   sizes='5vw'
              //   fill
            />
          </div>
        </Link>

        <Link href="https://github.com/bokim2" target="_">
          <div className={styles.iconContainer}>
            <Image
              className={styles.icon}
              src="/images/icons/github.png"
              alt="github"
              height={100}
              width={100}
              priority
              //   sizes='5vw'
              //   fill
            />
          </div>
        </Link>

        <Link href="/gallery" target="_">
          <div className={styles.iconContainer}>
            <Image
              className={styles.icon}
              src="/images/icons/gallery2.png"
              alt="linkedin"
              height={100}
              width={100}
              priority
              //   sizes='5vw'
              //   fill
            />
          </div>
        </Link>

        {/* <Link href="https://www.linkedin.com/in/bokim1/" target="_">
          <Image src="/images/icons/linkedin.png" alt="linkedin" fill/>
        </Link> */}
        {/* <Link href="https://github.com/bokim2" target="_">
          Github
        </Link>{' '}
        <Link href="https://www.linkedin.com/in/bokim1/" target="_">
          Linkedin
        </Link> */}
      </div>
    </div>
  );
}
