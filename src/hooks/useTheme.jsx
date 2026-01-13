import { useEffect, useState } from "react";

function useTheme() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    const toggleTheme = () =>
        setTheme(t => (t === "light" ? "dark" : "light"));

    return { theme, toggleTheme };
}

export default useTheme;