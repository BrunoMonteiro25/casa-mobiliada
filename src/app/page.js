import Header from "@/components/header/header";
import styles from "./page.module.css";
import "./globals.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}
