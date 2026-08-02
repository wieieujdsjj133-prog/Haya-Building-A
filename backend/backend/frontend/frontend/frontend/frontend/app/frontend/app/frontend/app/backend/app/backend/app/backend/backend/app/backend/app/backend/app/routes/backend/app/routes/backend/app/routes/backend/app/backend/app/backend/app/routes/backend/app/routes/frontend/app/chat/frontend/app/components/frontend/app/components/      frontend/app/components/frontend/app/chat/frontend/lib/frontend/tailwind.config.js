/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        haya: {
          dark: "#050505",
          panel: "#111111"
        }
      },

      borderRadius: {
        xl: "1rem"
      }
    }
  },

  plugins: []
};
