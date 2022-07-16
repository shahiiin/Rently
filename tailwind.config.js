/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '8px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      borderRadius: {
        'md': '15px',
        'lg': '20px',
        'xl': '25px',
      },
      height: {
        '10': '10vh',
        '15': '15vh',
        '20': '20vh',
        '25': '25vh',
        '30': '30vh',
        '35': '35vh',
        '40': '40vh',
        '45': '45vh',
        '50': '50vh',
        '55': '55vh',
        '60': '60vh',
        '65': '65vh',
        '80': '80vh',
        '100': '100vh',
        '130':' 130vh',
      },
      width: {
        'xs-small': '345px',
        'small': '400px',
        'medium': '500px',
        'larg': '600',
      },
      marginLeft: {
        'larg': '7.5rem',
      }
    },
    colors: {
      'purple': '#301064',
      'green': '#A3C5C4',
      'green-100': '#11BB8D',
      'red': '#E24949',
      'white': '#FFFFFF',
      'gray': '#C4C4C4',
      'light-gray':'#F9F9F9',
      'red2':'#f80509',
    },
    dropShadow: {
      'md': '0px, 1px',
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
        '0 35px 35px rgba(0, 0, 0, 0.25)',
        '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    },
  },
  plugins: [],
}
