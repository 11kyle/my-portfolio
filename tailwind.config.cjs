/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors : {
          "dark-grey": "#242424",
          "grey": "#D9D9D9",
          "spotlight-green": "#4EE1A0"
        }
      },
    },
    plugins: [],
  }