'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './molecule.module.scss';

type Tmolecule = {
  index: number;
  setActiveMoleculeIdx: React.Dispatch<React.SetStateAction<number>>;
  activeMoleculeIdx: number | null;
  handleSelectMolecule: (index: number) => void;
  // xPosition: string;
  // yPosition: string;
};

export default function MoleculeBtn({
  index,
  setActiveMoleculeIdx,
  activeMoleculeIdx,
  handleSelectMolecule,
}: // xPosition,
// yPosition,

Tmolecule) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={styles.moleculeBtnContainer}
      // variants={{
      //   hovered: {scale: 1.2, y: '-35%'}
      // }}
      initial="initial"
      whileHover="hovered"
      onMouseOver={(e) => {
        setIsHovered(true);
        e.stopPropagation();
        handleSelectMolecule(index);
      }}
      onMouseOut={() => {
        setIsHovered(false);
      }}
      
      onClick={(e) => {
        e.stopPropagation();
        setIsHovered(true);
        handleSelectMolecule(index);
      }}
    >
      <motion.div
        // style={{ left: xPosition, top: yPosition }}
        className={`${styles.moleculeBtn}`}
        key={index}
        animate={{
          backgroundColor: activeMoleculeIdx == index ? '#1eff00' : '#f0a062',
          y: isHovered ? '-80%' : '0%',
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{
          duration: isHovered ? .25 : .6,
          ease: isHovered ? 'easeOut' : 'easeInOut',
        }}
        // variants={{
        //   initial: {
        //     y: 0,
        //     scale: 1,
        //     transition: { y: { duration: 4, ease: 'easeInOut' } },
        //   },
        //   hovered: { scale: 1.2, y: '-80%' ,
        //   transition: { y: { duration: 4, ease: 'easeInOut' } },},
        // }}
        // whileHover={{scale: 1.2, y: '-35%'}}
        whileTap={{ scale: 0.9 }}

        // onMouseLeave={() => handleSelectMolecule(null)}
      ></motion.div>
    </motion.div>
  );
}
