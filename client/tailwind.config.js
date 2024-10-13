/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path according to your file structure
  ],
  theme: {
    extend: {
      colors:{
        'custom_bg':'#e1f2f8'
      }
    },
  },
  plugins: [],
}

