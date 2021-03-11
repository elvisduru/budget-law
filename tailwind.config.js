const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
        text: '#232323',
        accent: '#E6B891',
        primary: '#1E2E3E',
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Frank Ruhl Libre', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
