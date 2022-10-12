/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{.js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'tahiti': {
        light: '#67e8f9',
        DEFAULT: '#06b6d4',
        dark: '#0e7490',
    },
  },
  extend: {},
  plugins: [],
}
}
