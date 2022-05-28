const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  plugins: [
    new webpack.DefinePlugin({
      __FLAG__: true,
    }),
  ],
};
