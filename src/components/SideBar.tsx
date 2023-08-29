import { useNavigate } from "react-router";
import styles from "./SideBar.module.css";

export default function SideBar() {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <button className={styles.button} onClick={() => navigate('/posting')}>Posting</button>
      <button className={styles.button} onClick={() => navigate('/news')}>News</button>
      <button className={styles.button} onClick={() => navigate('/aboutme')}>About me</button>
    </main>
  );
}
