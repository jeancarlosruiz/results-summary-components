import React from "react";
import styles from "./Results.module.css";

function Results() {
  return (
    <div className={styles.results}>
      <h2 className={styles.sectionTitle}>Your Result</h2>
      <p className={styles.resultScore}>
        76 <span>of 100</span>
      </p>

      <div className={styles.wrapper}>
        <p className={styles.resultRank}>Great</p>
        <p>
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </div>
  );
}

export default Results;
