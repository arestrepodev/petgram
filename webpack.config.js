const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: {
		index: "./src/index.js"
	},
	output: {
		filename: "app.bundle.js",
		path: path.join(__dirname, "dist/"),
		publicPath: "/"
	},
	devServer: {
		port: 9000,
		hot: true,
		open: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: "src/index.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".mjs", "gql", "graphql", ".cjs"]
	}
};
