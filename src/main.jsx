import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Initialiser AOS
AOS.init({
  once: true, // L'animation se joue une seule fois
  offset: 100, // Déclenchement quand l'élément est à 100px du viewport
  duration: 1000, // Durée de l'animation
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
