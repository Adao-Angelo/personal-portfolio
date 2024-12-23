import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export function useTheme(initialTheme: Theme = "light") {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    const storedTheme = localStorage.getItem("theme") as Theme;

    const activeTheme = storedTheme || initialTheme;

    root.classList.remove(activeTheme === "light" ? "dark" : "light");
    root.classList.add(activeTheme);
    setTheme(activeTheme);
  }, [initialTheme]);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    const root = window.document.documentElement;

    root.classList.remove(theme);
    root.classList.add(newTheme);

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme };
}
export function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light"; // Fallback
  const storedTheme = localStorage.getItem("theme") as Theme | null;
  if (storedTheme) return storedTheme;

  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  return systemPrefersDark ? "dark" : "light";
}
