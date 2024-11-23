import Router from "./routes/Router";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Anasayfa</NavLink>
        </li>
        <li>
          <NavLink to="/about">Hakkında</NavLink>
        </li>
        <li>
          <NavLink to="/parametre/1">Parametre</NavLink>
        </li>
        <li>
          <NavLink to="/haberler">Haberler</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/spor">Spor</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/ekonomi">Ekonomi</NavLink>
        </li>
      </ul>
      <Router />
    </>
  );
}

export default App;
