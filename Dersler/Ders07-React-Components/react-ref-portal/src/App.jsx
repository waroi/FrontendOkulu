import { useRef } from "react";
import Portal from "./components/Portal";
import "./App.css";

function App() {
  const divRef = useRef();

  return (
    <>
      <div ref={divRef}>Deneme</div>
      <button onClick={() => console.log(divRef.current.textContent)}>
        Tıkla
      </button>
      <Portal target={document.body} text="Dökümamnın Body'si" />
    </>
  );
}

export default App;
