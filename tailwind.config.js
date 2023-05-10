/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(256, 26%, 20%)',
        primary2: 'Grayish Blue: hsl(216, 30%, 68%)',
        neutral: 'hsl(270, 9%, 17%)',
        neutral2: 'hsl(273, 4%, 51%)',
        neutral3: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}

