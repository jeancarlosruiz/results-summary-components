import React from "react";
import styles from "./SummaryItem.module.css";

function SummaryItem({ category, title, image, imageAlt, score }) {
  const className = `${styles.summaryItem} ${styles[category]}`;

  return (
    <div className={className}>
      <div className={styles.flexGroup}>
        <img src={image} alt={imageAlt} />
        <h3>{title}</h3>
      </div>
      <p className={styles.summaryItemScore}>
        <span>{score}</span> / 100
      </p>
    </div>
  );
}

export default SummaryItem;
