/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "/node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'georgia': ['Georgia1', 'Georgia', 'serif'],
      },
      colors: {
        primaryColor: 'rgb(55, 204, 72)',
        secondaryColor: 'rgb(0, 13, 158)',
        neutral1: 'rgb(51, 51, 51)',
        neutral2: 'rgb(249, 249, 249)',
      },
      screens: {
        'xs': '350px',
        'xsm': '400px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
