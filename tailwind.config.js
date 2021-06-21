module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
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
