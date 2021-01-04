module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-header': '#2b3743',
        'dark-body': '#202d36',
      },
      minWidth: {
        '0': '0',
        '220': '220px',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
