import ListItem from "./components/ListItem";
import { useState, useEffect } from "react";
import "./App.css";
import styles from "./CustomStyle.module.css";

function App() {
  const [value, setValue] = useState(0);
  const students = ["Ali", "Veli", "Ayşe", "Fatma"];
  useEffect(() => {
    console.log("Component Yüklendi");
  }, []);
  useEffect(() => {
    console.log("Butona Tıklandı");
  }, [value]);
  return (
    <>
      <h1 style={{ fontSize: "23px" }}>Merhaba Dünya!</h1>
      <ul>
        {students.map((student, index) => {
          return <ListItem key={index} student={student} value={value} />;
        })}
      </ul>
      <button
        className={styles.customButton}
        onClick={() => setValue(value + 1)}
      >
        Arttır
      </button>
    </>
  );
}

export default App;
