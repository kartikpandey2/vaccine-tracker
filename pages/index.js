import { Search } from "../containers/Home";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <section className={styles.searchSection}>
        <Search />
      </section>
    </div>
  );
}
