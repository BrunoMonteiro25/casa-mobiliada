import Header from "@/components/header/Header";
import styles from "./page.module.css";
import "./globals.css";
import HeaderMobile from "@/components/headerMobile/HeaderMobile";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HeaderMobile />
    </div>
  );
}
