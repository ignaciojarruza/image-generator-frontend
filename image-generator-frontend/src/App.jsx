import Form from "./components/Form";
import Header from "./components/Header";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Form />
    </div>
  );
}

export default App;
