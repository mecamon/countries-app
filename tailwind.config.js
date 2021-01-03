module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '0': '0',
        '220': '220px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
