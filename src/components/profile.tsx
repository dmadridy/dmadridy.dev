import styles from "./profile.module.css";
export default function Profile() {
  return (
    <section className={styles.profileSection}>
      <div className={styles.profilePicContainer}>
        <img
          src="/profile-pic.JPG"
          alt="David Madrid"
          className={styles.profilePic}
        />
      </div>
      <h1>Hey there!</h1>
      <p>I'm David Madrid, a Frontend Engineer based in Colombia. </p>
    </section>
  );
}
