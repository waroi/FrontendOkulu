import { useRef, useState } from "react";
import Portal from "./components/Portal";
import "./App.css";

function App() {
  const divRef = useRef();
  const [portalTaget, setPortalTarget] = useState(document.body);
  const [textPortal, setTextPortal] = useState("Dökümanın Body'si");
  const handlePortal = () => {
    setPortalTarget(divRef.current);
    setTextPortal(divRef.current.textContent);
    console.log("handlePortal çalıştı", divRef.current.textContent);
  };
  return (
    <>
      <div ref={divRef}>Deneme</div>
      <button onClick={() => console.log(divRef.current.textContent)}>
        Tıkla
      </button>
      <Portal target={portalTaget} text={textPortal} />
      <button onClick={handlePortal}>Portalı Değiştir</button>
    </>
  );
}

export default App;
