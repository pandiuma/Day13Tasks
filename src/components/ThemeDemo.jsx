import useTheme from "../hooks/useTheme";

 function ThemeDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h2>15.useTheme</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeDemo;