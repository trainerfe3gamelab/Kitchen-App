/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1F2B",
        bg: "#FFFEFB",
        accent: {
          1: "#F21B1B",
          2: "#57BA28",
        },
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

