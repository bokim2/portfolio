
import React from 'react';
import {motion} from 'framer-motion';
import styles from './molecule.module.scss'

type Tmolecule = {
  index: number | null;
  setActiveMoleculeIdx: React.Dispatch<React.SetStateAction<number | null>>;
  activeMoleculeIdx: number | null;
};

export default function Molecule({
  index,
  setActiveMoleculeIdx,
  activeMoleculeIdx,
}: Tmolecule) {
  const handleSelectMolecule = (index: number | null) => {
    if(index == null){
      setTimeout(()=>setActiveMoleculeIdx(null), 1000)
    } else {
    setActiveMoleculeIdx(index);
    }
  };

  return <motion.div key={index}

  onMouseOver={()=>handleSelectMolecule(index)}
    onMouseLeave={()=>handleSelectMolecule(null)}>
1
  </motion.div>;
}
