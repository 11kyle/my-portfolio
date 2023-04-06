/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "dark-grey": "#242424",
          "grey": "#D9D9D9",
          "spotlight-green": "#4EE1A0",
          "primary-green": "hsl(153,71%,59%)",
          "primary-gray": "hsl(0,0%,14%)",
          "secondary-gray": "hsl(0,0%,100%)",
          "primary-white": "hsl(0,0%,85%)",
          "primary-orange": "#EF402E",
          "secondary-orange": "#EF412D]",
          "primary-black": "#212529",
        },
        fontFamily: {
          "space-rotesk": ['"Space Grotesk"', 'sans-serif'],
          "space-mono": ['"Space Mono"', 'monospace'],
          "alexandria": ['Alexandria', 'sans-serif'],
          "exo-2": ['"Exo 2"', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }