import { useEffect, useState } from "react";

export function useDarkSide() {
  const [theme, setTheme] = useState("");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    // Perform localStorage action
    setTheme(localStorage.theme);
  }, []);

  useEffect(() => {
    if (theme) {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
