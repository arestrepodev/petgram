const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

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
		}),
		new WebpackPwaManifestPlugin({
			name: "Petgram - Tu App de fotos de mascotas.",
			short_name: "Petgram 🐶",
			description: "Con Petgram puedes encontrar fotos de animales domésticos.",
			background_color: "#fff",
			theme_color: "#b1a",
			icons: [
				{
					src: path.resolve("src/assets/icon.png"),
					sizes: [96, 128, 192, 256, 384, 512]
				}
			]
		}),
		new WorkboxWebpackPlugin.GenerateSW({
			runtimeCaching: [
				{
					urlPattern: new RegExp(
						"https://(res.cloudinary.com|images.unsplash.com)"
					),
					handler: "CacheFirst",
					options: {
						cacheName: "images"
					}
				},
				{
					urlPattern: new RegExp(
						"https://petgram-server-arnold.restrepoarnold.now.sh/graphql"
					),
					handler: "NetworkFirst",
					options: {
						cacheName: "api"
					}
				}
			]
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
