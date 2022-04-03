const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        blue: {
          grayish: 'hsl(217, 19%, 38%)',
          'dark-grayish': 'hsl(217, 19%, 24%)',
          dark: 'hsl(218, 23%, 16%)',
        },
        cyan: {
          light: 'hsl(193, 38%, 86%)',
        },
        green: {
          neon: 'hsl(150, 100%, 66%)',
        },
      },
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        quote: '1.75rem',
      },
    },
  },
  plugins: [],
}
