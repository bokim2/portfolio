import React from 'react'

import styles from '../experience.module.scss'
import { MotionValue, motion } from 'framer-motion'


const texts = [
    { content: 'bioreactor components', range: [0, 0.1] },
    { content: 'DO probe (dissolved oxygen)', range: [0.1, 0.2] },
    { content: 'impeller:  marine, microbial', range: [0.2, 0.3] },
    { content: 'pH probe - acid/base ports', range: [0.3, 0.4] },
    { content: 'feed port', range: [0.4, 0.5] },
    { content: 'air inlet and condenser', range: [0.5, 1] }
  ];

export default function TextOverlay({experienceScrollYProgress}: {experienceScrollYProgress: MotionValue<number>}) {
const [displayedText, setDisplayedText] = React.useState('')
experienceScrollYProgress.onChange((value) => {const tempDisplayedText = texts.find((text: {content: string; range: number[]})=> 
value >= text.range[0] && value <=text.range[1]
)?.content || 'failed'
setDisplayedText(tempDisplayedText)
})

  return (
    <div className={styles.sceneOverlay}>

        <motion.div className={styles.title}>Labscale Bioreactor
        <div>{displayedText}</div>
        </motion.div>
    </div>
  )
}
