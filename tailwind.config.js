/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./pages/**/*.js","./components/**/*.js"],
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

