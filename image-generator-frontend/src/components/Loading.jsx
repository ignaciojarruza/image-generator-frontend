import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <p>Loading...</p>
      <p>Wait until image is generated.</p>
    </div>
  );
}
