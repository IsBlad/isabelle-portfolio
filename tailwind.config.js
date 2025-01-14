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
        link: '#A3A597',
        lightGreen: '#C9CCBD',
        bg: '#EEEFE8',
        inner:'#F9F9F9',
        pink: '#DABEA7',
        midPink: '#EFD0BF',
        lightPink: '#F4E7D7',
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

