import React from "react";
import SummaryItem from "./SummaryItem";
import Button from "./Button";
import styles from "./Summary.module.css";
import data from "../data.json";

function Summary() {
  return (
    <div className={styles.summary}>
      <h2 className={styles.sectionTitle}>Summary</h2>
      <div className={styles.wrapper}>
        {data.map((data, id) => (
          <SummaryItem
            key={id}
            category={data.category}
            image={data.iconImg}
            imageAlt={data.iconAlt}
            title={data.category}
            score={data.score}
          />
        ))}
      </div>
      <Button />
    </div>
  );
}

export default Summary;
