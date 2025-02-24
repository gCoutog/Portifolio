/* @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E65F78',
        dark: {
          900: '#1F1F1F',
          800: '#333333',
        }
      }
    },
  },
  plugins: [],
}
