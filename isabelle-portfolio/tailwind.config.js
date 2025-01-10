/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",  // Adjust based on where your files are located
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#1C3E40',
        darkerGreen: '#132828',
        midGreen: '#314E50',
        lightGreen: '#C9CCBD',
        pink: '#DABEA7',
        lightPink: '#F4E7D7',
      },
    },
  },
  plugins: [],
}

