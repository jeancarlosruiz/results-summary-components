import styles from "./App.module.css";
import Results from "./components/Results";
import "./utilities/utils";
import { useState } from "react";

function App() {
  return (
    <>
      <main className={styles.container}>
        <Results />
      </main>
    </>
  );
}

export default App;
