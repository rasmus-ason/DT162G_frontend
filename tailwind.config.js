/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      'Prosto-One': ['Prosto One', 'cursive'],
      'Poppins': ['Poppins', 'cursive']
    }},
  },
  plugins: [],
}
