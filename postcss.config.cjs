const autoprefixer = require("autoprefixer")

module.exports = {
  plugins: [
    autoprefixer,
    require('postcss-nested')({bubble: ["phone"]}),
		require("postcss-preset-env")({ stage: 1 }),
  ],
};