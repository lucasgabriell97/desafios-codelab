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
      'blue': '#bad8eb',
      'pink': '#ffc6da',
      'yellow': '#fff1a8',
      'black': '#000000',
      'gray-100': '#f3f6f7',
      'navy-blue': '#124c5f',
      'white': '#ffffff',
    },
    fontFamily: {
      roboto: ['Roboto', 'serif'],
      pangolin: ['Pangolin', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

