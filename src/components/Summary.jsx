import React from "react";
import SummaryItem from "./SummaryItem";
import Button from "./Button";
import styles from "./Summary.module.css";

function Summary() {
  const data = [
    {
      category: "Reaction",
      score: 80,
      iconImg: "./icon-reaction.svg",
      iconAlt: "Thunder icon",
    },
    {
      category: "Memory",
      score: 92,
      iconImg: "./icon-memory.svg",
      iconAlt: "Brain icon",
    },
    {
      category: "Verbal",
      score: 61,
      iconImg: "./icon-verbal.svg",
      iconAlt: "Communication icon",
    },
    {
      category: "Visual",
      score: 72,
      iconImg: "./icon-visual.svg",
      iconAlt: "Eye icon",
    },
  ];

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
