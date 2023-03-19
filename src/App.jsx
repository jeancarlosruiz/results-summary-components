import styles from "./App.module.css";
import Results from "./components/Results";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <main className={styles.container}>
        <h1 className="visually-hidden">Results-Summary-Components</h1>
        <Results />
        <Summary />
      </main>
    </>
  );
}

export default App;
