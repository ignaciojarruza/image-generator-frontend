import { useState } from "react";
import Form from "./components/Form";
import styles from "./app.module.css";

function App() {
  return (
    <>
      <h1 className={styles.app}>Dall-e-3 Image Generator</h1>
      <Form />
    </>
  );
}

export default App;
