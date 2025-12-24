// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,js}"],
  theme: {
    extend: {
      backdropBlur: {
        glass: "12px",
        "glass-light": "8px",
        "glass-heavy": "16px",
      },
      colors: {
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "glass-border-hover": "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
