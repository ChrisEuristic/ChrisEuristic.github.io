import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.outterSection}>
        <section className={styles.section}>Posting</section>
        <section className={styles.section}>News</section>
      </section>
      <section className={styles.outterSection}>
        <section className={styles.section}>About me</section>
      </section>
    </main>
  );
}
