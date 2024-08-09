import React from 'react';
import { motion } from 'framer-motion';
import styles from './molecule.module.scss';

type Tmolecule = {
  index: number ;
  setActiveMoleculeIdx: React.Dispatch<React.SetStateAction<number >>;
  activeMoleculeIdx: number | null;
  handleSelectMolecule: (index: number ) => void;
  xPosition: string;
  yPosition: string;
};

export default function Molecule({
  index,
  setActiveMoleculeIdx,
  activeMoleculeIdx,
  handleSelectMolecule,
  xPosition,
  yPosition,

}: Tmolecule) {
  return (
    <motion.div
    style={{ left: xPosition, top: yPosition }}
    className={`${styles.moleculeBtn}`}
      key={index}
      whileHover={{scale: 1.2}}
      whileTap={{scale: 0.9}}
      onMouseOver={(e) => {
        e.stopPropagation();
        handleSelectMolecule(index);
      }}
      onClick={(e) => {
        e.stopPropagation();
        handleSelectMolecule(index);
      }}
      // onMouseLeave={() => handleSelectMolecule(null)}
    >
      
    </motion.div>
  );
}
