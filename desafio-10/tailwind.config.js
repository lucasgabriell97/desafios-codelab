/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "744px",
      lg: "1216px",
    },
    colors: {
      'brand-color': '#cd3c32',
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

