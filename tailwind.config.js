/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      },
      screens: {
        'tablet' : { 'min': '768px' , 'max': '880px' },
        'mobile' : { 'min': '300px' , 'max': '480px' },
        'laptop' : { 'min': '1200px' , 'max': '1600px' },
       },
  },
  plugins: [],
}
ode