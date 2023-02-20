import Terminal from "../components/Terminal";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        wasimreja:$ <span className={styles.help}>type help to start</span>
      </h1>
      <p>
        Visit{" "}
        <a href="https://wasimreja.me" target="_blank" rel="noreferrer">
          wasimreja.me
        </a>
      </p>

      <Terminal />
    </div>
  );
}
