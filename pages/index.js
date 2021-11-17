import Head from "next/head";
import styles from "./index.module.css";
import Link from "next/link";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className="d-flex justify-content-center py-3">
      {/* <Link className="nav-link">POKEMON</Link> */}
      <Link className="nav-link" href="/">
        HOME/
      </Link>
      <Link className="nav-link" href="/PostsList">
        POSTS LIST/
      </Link>
      {/* <Link className="nav-link" href="/CreatePost">
        CREATE POST/
      </Link> */}
    </header>
    <main>
      <h1 className={styles.title}>This is my blog</h1>
    </main>
  </div>
);

export default Home;
