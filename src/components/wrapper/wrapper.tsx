import React from 'react';
import styles from './wrapper.module.scss';

export default function Wrapper({
  children,
  backgroundColor,
  additionalClasses,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  additionalClasses?: string;
  className?: string;
}) {

  const additionalClassesArray = additionalClasses ? additionalClasses.split(' ').map(className => styles[className] || className).join(' ') : styles.wrapper;
  return (
    <div
      className={`${additionalClassesArray}`}
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
    </div>
  );
}
