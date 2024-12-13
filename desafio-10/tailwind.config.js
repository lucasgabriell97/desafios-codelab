/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1216px",
    },
    colors: {
      'brand-color-red': '#cd3c32',
      'brand-color-pink': '#ffe9e8',
      'icon-color': '#ffd5d3',
      'dark': '#121214',
      'white': '#ffffff',
    },
    fontFamily: {
      archivo: ['Archivo', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

