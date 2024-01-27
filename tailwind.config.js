/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        mono: ['"Noto Sans Mono"', "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
