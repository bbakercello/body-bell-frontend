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
    fontFamily: {
      'body': ['DIN 2014, sans-serif'],
      'paragraph': ['DIN 2014 Extra Light, sans-serif'],
    },
  }},
  plugins: [],
}

