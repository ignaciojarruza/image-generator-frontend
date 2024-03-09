import { useState } from "react";
import styles from "./form.module.css";
import Loading from "./Loading";
import GeneratedImage from "./GeneratedImage";

export default function Form() {
  const [image_description, setDescription] = useState("");
  //Adding prompt
  const [prompt, setPrompt] = useState({});
  const [image_url, setImageUrl] = useState("");
  const [isLoading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //Modify here: change to prompt
        body: JSON.stringify({ image_description: image_description }),
      });
      const data = await response.json();
      setLoading(false);
      setImageUrl(data.image_url);
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

  //Adding prompt here
  function handleOptionChange(e) {
    setPrompt(...prompt, (model = e.target.value));
  }

  return (
    <div>
      <form className={styles.modernForm} onSubmit={handleSubmit}>
        <input
          className={styles.modernInput}
          type="text"
          onChange={(e) =>
            setPrompt(...prompt, (image_description = e.target.value))
          }
          placeholder="Enter Image Description..."
        />
        <label>
          <input
            type="radio"
            value="dall-e-2"
            checked={selectedOption === "dall-e-2"}
            onChange={handleOptionChange}
          />
          <input
            type="radio"
            value="dall-e-3"
            checked={selectedOption === "dall-e-3"}
            onChange={handleOptionChange}
          />
        </label>

        <button className={styles.modernButton} type="submit">
          Generate!
        </button>
      </form>
      {isLoading ? (
        <Loading />
      ) : (
        image_url && <GeneratedImage image_url={image_url} />
      )}
    </div>
  );
}
