/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ toggle basé sur la classe dark
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // tous tes fichiers JSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
