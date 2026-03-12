/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F5500E',
        secondary: '#FF8921',
        dark: '#242520',
        light: '#FFF8ED',
        bg01: '#FEE8D7',
        tertiary: '#7679EC',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
