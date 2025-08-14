import React from 'react';
import styles from './gallery.module.css';

const UnderConstruction = () => {
  return (
    <div className={styles.underConstructionContainer}>
      <div className={styles.underConstructionContent}>
        <h3>More Projects Coming Soon</h3>
        <p>This section of the portfolio is currently under development.</p>
        <p>Check back soon to see more of my work!</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
