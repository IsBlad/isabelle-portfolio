/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.{html,js}',
    ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(10px)' // Reduced from 40px to 10px for subtler movement
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
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
        lime: ['Limelight', 'sans-serif', 'Arial'],
        quick: ['Quicksand', 'sans-serif', 'Arial'],
      }
    },
  },
  plugins: [],
}

