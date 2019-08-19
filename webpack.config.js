const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  output: {
    filename: "app.bundle.js"
  },
  devServer: {
    port: 8000
  },
  plugins: [new HtmlWebpackPlugin()]
};
