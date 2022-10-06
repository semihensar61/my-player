/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      extend: {
      fontFamily: {
        sans: ['Source Sans Pro'],
      },
      gap: {
        25: '25px',
      },
      margin: {
        15: '15px',
        25: '25px',
        50: '50px',
      },
    },
  },
  plugins: [],
}
