import styles from "./app.module.css";
import Profile from "./components/profile";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Profile />
      </main>
      <Footer />
    </div>
  );
}
