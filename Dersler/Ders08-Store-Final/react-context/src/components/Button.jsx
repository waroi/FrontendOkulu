import { useTheme } from "../context/ThemeContext.jsx";
const Button = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <h2>Aktif Tema: {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Temayı Değiştir
      </button>
    </>
  );
};

export default Button;
