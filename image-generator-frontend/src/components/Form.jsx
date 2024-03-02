import { useState } from "react";
import styles from "./form.module.css";

export default function Form() {
  const [image_description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.modernForm} onSubmit={handleSubmit}>
      <input
        className={styles.modernInput}
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter Image Description..."
      />
      <button className={styles.modernButton} type="submit">
        Generate!
      </button>
    </form>
  );
}
