module.exports = {
  purge: [],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [],

  /** https://tailwindcss.com/docs/upcoming-changes
   * Remove deprecated gap utilities
   */
  future: {
    removeDeprecatedGapUtilities: true,
  },

  /** https://tailwindcss.com/docs/configuration#important
   * The important option lets you control whether or not Tailwind's utilities should be marked with !important. 
   */
  important: true,
};
