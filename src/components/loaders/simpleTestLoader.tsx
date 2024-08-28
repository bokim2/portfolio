'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SimpleTestLoader() {
  const [loaderActive, setLoaderActive] = useState(true);

useEffect(()=> {
    const handleLoad = ()=> {
        setLoaderActive(false)
    }

    window.addEventListener('load', handleLoad);

    return ()=> {
        window.removeEventListener('load', handleLoad)
    }
},[])

  return (
    <>
      {loaderActive && (
        <motion.div
          style={{
            position: 'absolute',
            zIndex: 10,
            width: '100vw',
            height: '60vh',
            backgroundColor: 'pink',
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: .5 }}
        >
          lorem10
        </motion.div>
      )}
    </>
  );
}
