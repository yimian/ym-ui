module.exports = {
  purge: {
    enable: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.html',
      './src/**/*.vue',
    ],
  },
  important: true,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      neutral: {
        10: '#F3F4F6',
        20: '#E5E7EB',
        30: '#D1D5DC',
        40: '#BEC4CE',
        50: '#AFB7C3',
        60: '#9EA7B6',
        70: '#8C97A9',
        300: '#7D899D',
        400: '#6D7B91',
        500: '#55647C',
        600: '#3D4D68',
        700: '#253753',
        800: '#0E2140',
        900: '#051123'
      },
      brand: {
        100: '#EBF4FF',
        200: '#C2DDFF',
        300: '#90C2FF',
        400: '#62A9FF',
        500: '#338FFF',
        600: '#1C72E3',
        700: '#0455C6',
        800: '#084191',
        900: '#0E2A58'
      },
      skyblue: {
        100: '#DCF2FE',
        200: '#B7E5FE',
        300: '#7CCFFE',
        400: '#43B9FD',
        500: '#09A4FC',
        600: '#058FDD',
        700: '#017ABE',
        800: '#03598A',
        900: '#083653'
      },
      teal: {
        100: '#EAF9FB',
        200: '#BBECF3',
        300: '#8BDFEB',
        400: '#5CD1E3',
        500: '#26C2D9',
        600: '#24A4B7',
        700: '#218897',
        800: '#18646F',
        900: '#103F46'
      },
      green: {
        100: '#ECF9F2',
        200: '#C0EBCF',
        300: '#8EDAA8',
        400: '#5CC980',
        500: '#2FBA5D',
        600: '#26A14F',
        700: '#1D8740',
        800: '#126C30',
        900: '#064B1D'
      },
      ascential: {
        100: '#F2F7E5',
        200: '#DBE9B6',
        300: '#C2DB84',
        400: '#A8CB50',
        500: '#91BE23',
        600: '#729C3B',
        700: '#486F59',
        800: '#255A4D',
        900: '#054641'
      },
      orange: {
        100: '#FFF5E0',
        200: '#FFE3A8',
        300: '#FFD071',
        400: '#FFBC35',
        500: '#FFAA00',
        600: '#D78A05',
        700: '#AE690A',
        800: '#824F12',
        900: '#5C3D1F'
      },
      red: {
        100: '#FCE8E8',
        200: '#FCC4C4',
        300: '#FB9B9B',
        400: '#FA7372',
        500: '#F8504F',
        600: '#D74342',
        700: '#BB3737',
        800: '#872C2C',
        900: '#592222'
      },
      pink: {
        100: '#FCE8F5',
        200: '#F7CCE7',
        300: '#F0ABD6',
        400: '#EA8DC6',
        500: '#E16FB5',
        600: '#C2599A',
        700: '#A1457D',
        800: '#7A335E',
        900: '#4A1C38'
      },
      purple: {
        100: '#EDE9FB',
        200: '#DBD5F7',
        300: '#C7BDF3',
        400: '#B5A7EF',
        500: '#A190EA',
        600: '#8772DE',
        700: '#6D54D1',
        800: '#4F3C9C',
        900: '#33246B'
      }
    },
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 0 0 rgba(0, 0, 0, 0.08)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      "2xl": '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(51, 143, 255, 0.5)',
      none: 'none'
    },
    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Arial',
        'Lato',
        'Poppins',
        '"Helvetica Neue"',
        '"Pingfang SC"',
        '"Microsoft Yahei"',
        '"Souce Han Sans SC"',
        '"WenQuanYi Micro Hei"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px'
    },
    extend: {},
  },
  variants: {
  },
  plugins: [],
};
