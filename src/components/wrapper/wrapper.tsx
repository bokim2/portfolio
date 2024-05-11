import React from 'react';
import styles from './wrapper.module.scss';

export default function Wrapper({
  children,
  backgroundColor,
  className,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}) {
  return (
    <div
      className={`${styles.wrapper} ${className}`}
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
    </div>
  );
}
