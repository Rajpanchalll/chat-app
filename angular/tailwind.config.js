/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': ' #19194d',
        'light-blue': '#93c5fd',
      },
    },
  },
  plugins: [],
}