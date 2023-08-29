// utils
import { marked } from "marked";

// styles
import styles from "./App.module.css";
import { useRef, useState } from "react";
import SideBar from "./components/SideBar";
import { Route, Routes, useNavigate } from "react-router";
import Home from "./router/Home";
import News from "./router/NewsPage";
import Aboutme from "./router/Aboutme";
import PostingPage from "./router/PostingPage";
import Posting from "./router/PostingPage/Posting";
import NewsPage from "./router/NewsPage";

function App() {
  const navigate = useNavigate();
  // const [result, setResult] = useState(marked(text));

  return (
    <main className={styles.App}>
      <header className={styles.headerBack}>
        <header className={styles.header}>
          <article
            className={styles.mainLogo}
            onClick={() => {
              navigate("/");
            }}
          >
            Chris's Devlog
          </article>
          <SideBar />
        </header>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posting" element={<PostingPage />}>
          <Route path="/posting/:postno" element={<Posting />} />
        </Route>
        <Route path="/news" element={<NewsPage />}>
          <Route path="/news/:newsno" element={<News />} />
        </Route>
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
      <footer className={styles.footerBack}>
        <footer className={styles.footer}>
          <p><strong>Contact</strong></p>
          <div>eanair@kakao.com</div>
        </footer>
      </footer>
    </main>
  );
}

export default App;
