import React from 'react';
import styles from './aboutCarousel.module.scss';
import Card, { ABOUT_ME } from './card';

export default function AboutCarousel() {
  return (
    <div className={`${styles.aboutCarousel}`}>
      <h3>{`Why the transition to software engineering?`}</h3>
      <h4
        className={`lightText`}
      >{`Here are some of the technologies I've worked with over the years and what I liked about them.`}</h4>
      <Carousel />
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
