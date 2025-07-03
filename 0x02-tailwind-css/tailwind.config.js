// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}", "./1-index.html, ./2-index.html"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // include everything in src/
    "./*.html"              // ✅ include all HTML files in root folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
