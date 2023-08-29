// utils
import { marked } from "marked";

// styles
import styles from "./App.module.css";
import { useRef, useState } from "react";

function App() {
  const text = `
  # H1 타이틀
  ## H2 타이틀
  ### H3 타이틀
  #### H4 타이틀
  ##### H5 타이틀
  ###### H6 타이틀
  \`\`\`toString()\`\`\`
  `;
  const [result, setResult] = useState(marked(text));

  return (
    <main className={styles.App}>
      <header>Chris's Devlog</header>
      <article dangerouslySetInnerHTML={{__html: result}}></article>
      <footer>toString()</footer>
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
