module.exports = {
  // plugins: {
  //   postcssimport: {},
  //   tailwindcss: {},
  //   postcssnested: {},
  //   postcsscustomproperties: {},
  //   autoprefixer: {},
  // }
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-custom-properties'),
    require('postcss-nested'),
    require('autoprefixer'),
  ]
}