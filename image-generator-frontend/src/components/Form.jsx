import { useState } from "react";
import styles from "./form.module.css";
import Loading from "./Loading";

export default function Form() {
  const [image_description, setDescription] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [isLoading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3000/generate/${image_description}`
      );
      const data = await response.json();
      setLoading(false);
      setImageUrl(data.image_url);
      console.log(data.image_url);
      setLoading(false);
    } catch (error) {
      console.error("Error generating Image:", error);
      setLoading(false);
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    setImageUrl("");
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
      here
      {isLoading ? (
        <Loading />
      ) : (
        image_url && (
          <img
            className={styles.modernImage}
            src={image_url}
            alt="Generated Image"
          />
        )
      )}
    </div>
  );
}
