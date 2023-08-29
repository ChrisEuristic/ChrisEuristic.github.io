import { useEffect, useState } from "react";
import styles from "./PostingPage.module.css";

export default function PostingPage() {
  const [pageTitle, setPageTitle] = useState("TypeScript");

  useEffect(() => {
    // 변경되는 페이지 타이틀에 따라 게시물 결과 필터링하기
  }, [pageTitle]);

  return (
    <main className={styles.main}>
      <section className={styles.outterSection}>
        <section className={styles.sidebar}>
          <h5 className={styles.sidebarTitle}>Language</h5>
          <button className={styles.categoryButton} onClick={() => setPageTitle("TypeScript")}>
            TypeScript
          </button>
          <p></p>
          <h5 className={styles.sidebarTitle}>Library</h5>
          <button className={styles.categoryButton} onClick={() => setPageTitle("Fabric.js")}>
            Fabric.js
          </button>
          <button className={styles.categoryButton} onClick={() => setPageTitle("Chart.js")}>
            Chart.js
          </button>
          <button className={styles.categoryButton} onClick={() => setPageTitle("Cesium.js")}>
            Cesium.js
          </button>
          <p></p>
          <h5 className={styles.sidebarTitle}>Trouble Shooting</h5>
          <button className={styles.categoryButton} onClick={() => setPageTitle("What?")}>
            What?
          </button>
          <p></p>
        </section>
        <section className={styles.body}>
          <header className={styles.pageTitle}>{pageTitle}</header>
        </section>
      </section>
    </main>
  );
}
