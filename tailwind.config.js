/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",       
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        limegreen: '#c9f31d'
      },
      fontFamily: {
        DiodrumArabic: ['DiodrumArabic' , 'sans-serif'],
       
      },
    },
  },
  plugins: [],
};
