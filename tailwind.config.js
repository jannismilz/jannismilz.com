const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'red': colors.red,
      'green': colors.green,
      'black': '#000000',
      'darkgray': '#262626',
      'gray': '#404040',
      'blue': '#3B82F6',
      'lightblue': '#60A5FA',
      'lightgray': '#D4D4D4',
      'white': '#FFFFFF'
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      gridTemplateColumns: {
        'autofill': 'repeat(auto-fill, minmax(300px, 1fr))',
        'autofillSkills': 'repeat(auto-fill, minmax(100px, 1fr))',
      },
      boxShadow: {
        'reference': '0 8px 16px 0 rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}