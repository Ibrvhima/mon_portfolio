import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  // ✅ Initialise directement depuis localStorage ou préférence OS
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return saved === "true";
    // fallback: détection préférence OS
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Applique ou retire la classe 'dark' sur <html>
  useEffect(() => {
    const html = document.documentElement;
    if (dark) html.classList.add("dark");
    else html.classList.remove("dark");

    localStorage.setItem("darkMode", dark);
  }, [dark]);

  // Toggle Dark/Light
  const toggleTheme = () => setDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
