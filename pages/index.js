import { useRouter } from "next/router";
import { Search } from "../containers/Home";
import styles from "../styles/home.module.css";

export default function Home() {
  const router = useRouter();

  const handleSearch = (query) => {
    router.push({ pathname: "/search", query });
  };

  return (
    <div>
      <section className={styles.searchSection}>
        <Search onSearch={handleSearch} />
      </section>
    </div>
  );
}
