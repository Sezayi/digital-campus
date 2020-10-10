import Head from "next/head";
import styles from "../styles/Home.module.css";
import Ethereumbg from "../components/ethereumbg"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Explorers guide to Ethereum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main>

      
        <div className={styles.wrapper}>
          <Ethereumbg />
        </div>

        <h1>The Explorers guide to Ethereum</h1>
      </main>

      <footer></footer>
    </div>
  );
}
