/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blocks/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        black: "#000000",
      },
      fontFamily: {
        sans: ["Barlow Condensed", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
