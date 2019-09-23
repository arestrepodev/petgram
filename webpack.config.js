const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		index: "./src/index.js"
	},
	output: {
		filename: "app.bundle.js",
		path: path.join(__dirname, "js/")
	},
	devServer: {
		port: 9000
	},
	plugins: [
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
					loader: "babel-loader",
					options: {
						plugins: ["@babel/plugin-syntax-dynamic-import"],
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"]
	}
};
