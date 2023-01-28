import { useLayoutEffect, useState } from "react";

const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)").matches; // вибір теми ОС
const defaultTheme = isDarkTheme ? "dark" : "light";

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") || defaultTheme // використання теми ОС чи останньої
  );

  useLayoutEffect(() => {
    // відстежує зміни у DOM через змінну theme
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
