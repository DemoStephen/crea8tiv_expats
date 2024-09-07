/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
      "button": "#147b73",
      "button-hover": "#319890"
     }
    },
  },
  plugins: [],
}