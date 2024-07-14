/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue_100': "rgb(0, 166, 255)",
        'black_100': "rgba(50, 85, 68, 1)",
        "blue-100": "rgb(0, 166, 255)",
        "black-200": "rgb(102, 102, 102)"
      },
      screens: {
        "lmd": "824px",
        'xsm': '424px'
      }
    },
  },
  plugins: [],
};
