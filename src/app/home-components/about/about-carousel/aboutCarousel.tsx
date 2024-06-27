'use client';

import React, { useState } from 'react';
import styles from './aboutCarousel.module.scss';
import Card, { ABOUT_ME } from './card';
import CardSelector from './cardSelector';



export default function AboutCarousel() {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  function handleSelectorChange(selectedIndex: number) {
    setSelectedCardIndex(selectedIndex);
  }
  return (
    <div className={`${styles.aboutCarousel}`}>
      <h3>{`Why the transition to software engineering?`}</h3>
      <h4
        className={`lightText`}
      >{`Here are some of the technologies I've worked with over the years and what I liked about them.`}</h4>

      <CardSelector selectedCardIndex={selectedCardIndex} 
      handleSelectorChange={handleSelectorChange}/>
      {selectedCardIndex !== null && (
        <Card item={ABOUT_ME[selectedCardIndex]} i={selectedCardIndex} />
      )}
      {/* <Carousel /> */}
    </div>
  );
}

function Carousel() {
  return (
    <>
      {ABOUT_ME.map((item, i) => (
        <Card key={i} item={item} i={i} />
      ))}
    </>
  );
}
