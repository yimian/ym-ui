const postcssimport = require("postcss-import")();
const tailwindcss = require("tailwindcss")("./tailwind.config.js");
const postcssnested = require("postcss-nested")();
const postcsscustomproperties = require("postcss-custom-properties")();
const autoprefixer = require("autoprefixer")();

module.exports = {
  plugins: [postcssimport, tailwindcss, postcssnested, postcsscustomproperties, autoprefixer]
};
