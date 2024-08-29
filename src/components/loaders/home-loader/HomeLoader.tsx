'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import styles from './homeLoader.module.scss';

export default function HomeLoader() {
  const [loaderActive, setLoaderActive] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoaderActive(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const TOTAL_NUMBER_OF_LOADER_UNITS = 5;

  function loaderDelayUnits(loaderIndex: number) {
    const centerIndex = Math.floor(TOTAL_NUMBER_OF_LOADER_UNITS / 2);

    // return how many away from the center index
    const unitsAwayFromCenter = Math.abs(centerIndex - loaderIndex);

    return unitsAwayFromCenter;
  }

  const loaderUnits = Array.from({ length: TOTAL_NUMBER_OF_LOADER_UNITS });

  return (
    <>
      {loaderActive && (
        <motion.div
          className={styles.homeLoader}

          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className={`${styles.loaderContainer} imgBorderRadius`}>
            {loaderUnits.map((loader, i) => {
              const leftPosition =
                (i / TOTAL_NUMBER_OF_LOADER_UNITS) * 100 + '%';
              return (
                <motion.div
                  key={i}
                  className={styles.loaderSingleUnit}
                  style={
                    {
                      '--i': `${i}`,
                      animationDelay: `${loaderDelayUnits(i) * 0.1}s`,
                    } as React.CSSProperties
                  } // Cast to React.CSSProperties
                ></motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
