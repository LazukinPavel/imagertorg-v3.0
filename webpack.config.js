const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	devtool: 'source-map',
	module: {
		rules : [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: { minimize: true }
				}]
			},
			{
				test: /\.scss$/,
				use: [{
	                loader: "style-loader", options: {
	                    sourceMap: true
	                }
	            }, {
	                loader: "css-loader", options: {
	                    sourceMap: true
	                }
	            }, {
	                loader: "sass-loader", options: {
	                    sourceMap: true
	                }
            	}]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	]
}