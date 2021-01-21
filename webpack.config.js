const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./client/index.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  devtool: "source-map",
  watch: true,
};
