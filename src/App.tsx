// utils
import { marked } from "marked";

// styles
import styles from "./App.module.css";
import { useRef, useState } from "react";

function App() {
  const text = `#타이틀`;
  const [result, setResult] = useState(marked(text));

  return (
    <main className={styles.App}>
      <header>Chris's Devlog</header>
      <article>{result}</article>
      <footer>VS Code</footer>
      <footer>TS</footer>
      <footer>React</footer>
      <footer>FabricJS</footer>
      <footer>ChartJS</footer>
      <footer>CesiumJS</footer>
    </main>
  );
}

export default App;
