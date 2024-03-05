import logo from "../assets/logo.png";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div>
      <img className={styles.logo} src={logo} alt="Logo, dall-e-3 generated." />
      <h1 className={styles.title}>Dall-e-3 Image Generator</h1>
    </div>
  );
}
