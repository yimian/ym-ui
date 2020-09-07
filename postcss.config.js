const autoprefixer = require("autoprefixer")();
const postcssnested = require("postcss-nested")();
const tailwindcss = require("tailwindcss")("./tailwind.config.js");
const postcsscustomproperties = require("postcss-custom-properties")();

module.exports = {
  plugins: [tailwindcss, postcssnested, postcsscustomproperties, autoprefixer]
};
