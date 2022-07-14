/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '10': '10vh',
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
      
      'white': '#FFFFFF',
    },
    dropShadow: {
      'md':'0px, 1px',
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
        '0 35px 35px rgba(0, 0, 0, 0.25)',
        '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    }
  },
  plugins: [],
}
