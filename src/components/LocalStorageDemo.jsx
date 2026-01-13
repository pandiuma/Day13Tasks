import useLocalStorage from "../hooks/useLocalStorage";

 function LocalStorageDemo() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <div>
      <h2>3.useLocalStorage</h2>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default LocalStorageDemo;