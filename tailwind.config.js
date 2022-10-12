/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./pages/_app.js.{.js}","./pages/index.js.{.js}","./components/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
    colors: {
      'tahiti':'#67e8f9',
      'DEFAULT': '#06b6d4',
      'tahiti-dark': '#0e7490',
    },
  }},
  extend: {},
  plugins: [],
}

