import React from 'react';
import styles from './wrapper.module.scss';

export default function Wrapper({
  children,
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
    </div>
  );
}
