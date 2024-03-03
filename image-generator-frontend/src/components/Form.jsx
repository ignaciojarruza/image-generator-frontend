import { useState } from "react";
import styles from "./form.module.css";

export default function Form() {
  const [image_description, setDescription] = useState("");
  const [image_url, setImageUrl] = useState("");

  const generateImage = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/generate/${image_description}`
      );
      const data = await response.json();
      console.log(data.image_url);
    } catch (error) {
      console.error("Error generating Image:", error);
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    generateImage();
  }

  return (
    <div>
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
    </div>
  );
}
