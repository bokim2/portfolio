'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

import styles from './overlay.module.scss'

type TOverlay = {
  onClose: () => void
}
export default function Overlay({onClose}: TOverlay) {
useEffect(()=> {
const timer = setTimeout(()=> onClose(), 700)

return ()=> clearTimeout(timer)
},[onClose])

  return (
    <motion.div 
    className={styles.overlay}
    initial={{opacity: 0.1}}
    animate={{opacity: .95}}
    transition={{duration: .2}}
    ></motion.div>
  )
}
