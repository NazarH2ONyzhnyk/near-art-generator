module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          400: '#CFDBE8',
          300: '#EAECF0',
          500: '#BFBFBF',
          700: '#062743',
          800: '#011627',
          900: '#01111D'
        },
        red: {
          400: '#F94119',
        }
      }
    },
  },
  variants: {
    extend: {
      scale: ['active'],
    },
  },
  plugins: [],
}
