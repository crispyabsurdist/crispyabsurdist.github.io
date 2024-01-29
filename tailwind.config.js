/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', "sans-serif"],
        mono: ['"Noto Sans Mono"', "monospace"],
      },
      colors: {
        swe: {
          50: "#f4f5fb",
          100: "#e9ebf6",
          200: "#cbd4ec",
          300: "#9eafdc",
          400: "#6a88c8",
          500: "#4669af",
          600: "#345293",
          700: "#2a4379",
          800: "#273b63",
          900: "#253455",
          950: "#111827",
        },
        bunker: {
          50: "#a6bdf2",
          100: "#9cb2ec",
          200: "#799ce7",
          300: "#427ae0",
          400: "#2159ba",
          500: "#1b3f83",
          600: "#0f2a62",
          700: "#0b1b42",
          800: "#08132b",
          900: "#070e1c",
          950: "#030711",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
