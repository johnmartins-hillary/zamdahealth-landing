/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B1F8A",
        "primary-dark": "#0F1260",
        "primary-light": "#2D33C8",
        accent: "#4F5FD4",
        "accent-light": "#818CF8",
        lavender: "#EEF0FF",
        "lavender-dark": "#DDE0FF",
      },
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
  animation: {
    "scroll-left": "scrollLeft 20s linear infinite",
  },
  keyframes: {
    scrollLeft: {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-50%)" },
    },
  },
};
