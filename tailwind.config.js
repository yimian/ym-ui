module.exports = {
  purge: [],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: "#000",
      white: "#fff",

      netural: {
        10: "var(--color-netural-10)",
        20: "var(--color-netural-20)",
        30: "var(--color-netural-30)",
        40: "var(--color-netural-40)",
        50: "var(--color-netural-50)",
        60: "var(--color-netural-60)",
        70: "var(--color-netural-70)",
        300: "var(--color-netural-300)",
        400: "var(--color-netural-400)",
        500: "var(--color-netural-500)",
        600: "var(--color-netural-600)",
        700: "var(--color-netural-700)",
        800: "var(--color-netural-800)",
        900: "var(--color-netural-900)"
      },

      brand: {
        100: "var(--color-brand-100)",
        200: "var(--color-brand-200)",
        300: "var(--color-brand-300)",
        400: "var(--color-brand-400)",
        500: "var(--color-brand-500)",
        600: "var(--color-brand-600)",
        700: "var(--color-brand-700)",
        800: "var(--color-brand-800)",
        900: "var(--color-brand-900)"
      },

      skyblue: {
        100: "var(--color-skyblue-100)",
        200: "var(--color-skyblue-200)",
        300: "var(--color-skyblue-300)",
        400: "var(--color-skyblue-400)",
        500: "var(--color-skyblue-500)",
        600: "var(--color-skyblue-600)",
        700: "var(--color-skyblue-700)",
        800: "var(--color-skyblue-800)",
        900: "var(--color-skyblue-900)"
      },

      teal: {
        100: "var(--color-teal-100)",
        200: "var(--color-teal-200)",
        300: "var(--color-teal-300)",
        400: "var(--color-teal-400)",
        500: "var(--color-teal-500)",
        600: "var(--color-teal-600)",
        700: "var(--color-teal-700)",
        800: "var(--color-teal-800)",
        900: "var(--color-teal-900)"
      },

      green: {
        100: "var(--color-green-100)",
        200: "var(--color-green-200)",
        300: "var(--color-green-300)",
        400: "var(--color-green-400)",
        500: "var(--color-green-500)",
        600: "var(--color-green-600)",
        700: "var(--color-green-700)",
        800: "var(--color-green-800)",
        900: "var(--color-green-900)"
      },

      ascential: {
        100: "var(--color-ascential-100)",
        200: "var(--color-ascential-200)",
        300: "var(--color-ascential-300)",
        400: "var(--color-ascential-400)",
        500: "var(--color-ascential-500)",
        600: "var(--color-ascential-600)",
        700: "var(--color-ascential-700)",
        800: "var(--color-ascential-800)",
        900: "var(--color-ascential-900)"
      },

      red: {
        100: "var(--color-red-100)",
        200: "var(--color-red-200)",
        300: "var(--color-red-300)",
        400: "var(--color-red-400)",
        500: "var(--color-red-500)",
        600: "var(--color-red-600)",
        700: "var(--color-red-700)",
        800: "var(--color-red-800)",
        900: "var(--color-red-900)"
      },

      pink: {
        100: "var(--color-pink-100)",
        200: "var(--color-pink-200)",
        300: "var(--color-pink-300)",
        400: "var(--color-pink-400)",
        500: "var(--color-pink-500)",
        600: "var(--color-pink-600)",
        700: "var(--color-pink-700)",
        800: "var(--color-pink-800)",
        900: "var(--color-pink-900)"
      },

      purple: {
        100: "var(--color-purple-100)",
        200: "var(--color-purple-200)",
        300: "var(--color-purple-300)",
        400: "var(--color-purple-400)",
        500: "var(--color-purple-500)",
        600: "var(--color-purple-600)",
        700: "var(--color-purple-700)",
        800: "var(--color-purple-800)",
        900: "var(--color-purple-900)"
      }
    },

    boxShadow: {
      xs: "var(--shadow-xs)",
      sm: "var(--shadow-sm)",
      default: "var(--shadow-default)",
      md: "var(--shadow-md)",
      lg: "var(--shadow-lg)",
      xl: "var(--shadow-xl)",
      "2xl": "var(--shadow-2xl)",
      inner: "var(--shadow-inner)",
      outline: "var(--shadow-outline)",
      none: "var(--shadow-none)"
    },

    fontFamily: {
      sans: [
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        "Arial",
        "Lato",
        "Poppins",
        '"Helvetica Neue"',
        '"Pingfang SC"',
        '"Microsoft Yahei"',
        '"Souce Han Sans SC"',
        '"WenQuanYi Micro Hei"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },

    borderRadius: {
      none: "var(--borderRadius-none)",
      sm: "var(--borderRadius-sm)",
      default: "var(--borderRadius-default)",
      md: "var(--borderRadius-md)",
      lg: "var(--borderRadius-lg)",
      full: "var(--borderRadius-full)"
    },

    extend: {},
  },
  variants: {},
  plugins: [],

  /** https://tailwindcss.com/docs/upcoming-changes
   * Remove deprecated gap utilities
   * Purge layers by default
   */
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },

  /** https://tailwindcss.com/docs/configuration#important
   * The important option lets you control whether or not Tailwind's utilities should be marked with !important.
   */
  important: true
};
