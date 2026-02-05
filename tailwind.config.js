/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translate(-50%, -50%) translateY(0)' },
          '50%': { transform: 'translate(-50%, -50%) translateY(-15px)' },
        },
        'float-slower': {
            '0%, 100%': { transform: 'translate(-50%, -50%) translateY(0)' },
            '50%': { transform: 'translate(-50%, -50%) translateY(-10px)' },
        },
        'blink': {
            '50%': { opacity: 0 },
        },
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slower': 'float-slower 6s ease-in-out infinite',
        'blink': 'blink 1.2s step-end infinite',
      },
    },
  },
  plugins: [],
}