const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.[contentHash].js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [new HtmlWebpackPlugin()],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
				"style-loader", // last
				"css-loader",
				"sass-loader" // first
						]
			}
		]
	}
};