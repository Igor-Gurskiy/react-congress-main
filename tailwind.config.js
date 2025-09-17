const plugin= require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007FFF',
        secondary: '#101928',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in',
      },
      transitionDuration: {
        DEFAULT: '250ms',
      }
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      })
    })
  ],
}