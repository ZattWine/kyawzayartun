const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: 'rgba(4, 120, 87, 1)',
              '&:hover': {
                color: 'rgba(16, 185, 129, 1)',
              },
            },
            code: {
              color: '#c7254e',
              padding: '2px 4px',
              background: '#f9f2f4',
              borderRadius: '4px',
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
            // pre: {
            //   border: '1px solid #ccc',
            //   background: '#f8f8f8',
            //   color: '#333',
            // },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
