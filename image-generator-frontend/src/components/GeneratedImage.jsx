import styles from "./generatedimage.module.css";

export default function GeneratedImage({ image_url }) {
  return (
    <img className={styles.modernImage} src={image_url} alt="Generated Image" />
  );
}
