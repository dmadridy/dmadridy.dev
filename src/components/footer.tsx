import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <a
          href="https://github.com/dmadridy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://linkedin.com/in/dmadridy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </nav>
    </footer>
  );
}
