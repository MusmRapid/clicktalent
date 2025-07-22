/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        heroBlue: '#95DDE8',
        smallText: '#676767',
        faqBack: '#F5F5F5',
        marketGreen: '#A5DF9F'
      },
      screens: {
        '3xl': '100rem'
      }
    },
  },
  plugins: [],
}