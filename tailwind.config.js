/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ibge: '#006633', // Verde oficial opcional
      }
    },
  },
  plugins: [],
}