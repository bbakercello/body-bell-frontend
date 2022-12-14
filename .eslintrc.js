module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["next", "next/babel"],
  overrides: [],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
  root: false,
};
