module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  // prefix: 'tw-',
  important: true,
  theme: {
    // container: {
    //   padding: {

    //     DEFAULT: '1rem',
    //     sm: '2rem',
    //     lg: '4rem',
    //     xl: '5rem',
    //     '2xl': '6rem',
    //   },
    // },
    container: {
      padding: '1rem'
    },
    screens: {
      sm: '480px',
      sm_l: '600px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },


    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        transparent: 'transparent',
        primary: '#5c6ac4',
        secondary: '#ecc94b',
        dark1: '#21201E',
        brand: '#ED9902'
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['rubik', 'sans-serif'],
      'body': ['"Open Sans"'],
    },
  },
  plugins: [],
}