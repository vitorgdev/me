/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        'gray-green': '#37474F', // Substitua pelo código da cor desejada
      },
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
