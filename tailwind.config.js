/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      'logo': ['Montserrat', 'sans-serif'],
    },
    fontStyle: {
      'italic': 'italic',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'primary': {
        'dark': '#060D15',
        'mid-dark': '#0B141D',
        'main': '#0F1A24',
        'light': '#2A3642',
        'navy': '#182A37',
        'mid-grey': '#293642',
        'light-grey': '#A0A5AA',
      },
      'secondary': {
        DEFAULT: '#ED9C11',
        'dark': '#432C03',
        'mid': '#BC7700',
      },
      'green': {
        DEFAULT: '#00BA60',
        'dark': '#03371E',
        'mid': '#068A4A',
      },
      'blue': {
        DEFAULT: '#0083FF',
        'glow': '#47A3D7',
      },
      'red': {
        DEFAULT: '#B20A0A',
        'dark': '#840D0D',
      },

      // text colors
      'main': '#B0B2B8',
      'mid': '#26323F',
      'light': '#8F92A1',
    },
    extend: {
      maxWidth: {
        '8xl': '90rem',  // 1440px
        '9xl': '100rem', // 1600px
      },
      lineHeight: {
        '11': '3rem',
        '12': '3.5rem',
        '13': '4rem',
        '14': '4.5rem',
        '15': '5rem',
      },
      boxShadow: {
        'navbar': '0 10px 100px #47A3D711',
        'timeline': '0 0 10px #ED9C11',
      },
      spacing: {
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '12rem',
        '56': '14rem',
        '60': '15rem',
      },
    },
    darkSelector: '.dark',
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}

