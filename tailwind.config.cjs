/** @type {import('tailwindcss').Config} */

const FormKitVariants = require('@formkit/themes/tailwindcss')


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), FormKitVariants]
}