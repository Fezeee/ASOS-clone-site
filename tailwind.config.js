
/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xxl':'1440px',
      'xl':'1280px',
      'lg':'1024px',
      'md':'768px',
      'sm':'640px',
      'xs':'550px',
      'xxs':'370px',
    },
    extend: {
      boxShadow:{
        'ox' : '0 5px 13px -2px rgba(45,45,45, 80%)',
      }
    }
  },
  plugins: [],
}