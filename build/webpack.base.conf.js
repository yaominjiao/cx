const path = require('path') 
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractPlugin = require('extract-text-webpack-plugin')
const vuxLoader = require('vux-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin') 
const config = require('../config')

module.exports = {
	target:"web",
	entry:path.join(__dirname,'../src/index.js'),
	output:{
		filename:'index.js',
		path:config.build.assetsRoot,
		publicPath: process.env.NODE_ENV === 'production'
			      ? config.build.assetsPublicPath
			      : config.dev.assetsPublicPath
	},
	plugins:[
	],
	resolve: {
		extensions: ['.js', '.vue', '.json'],
	    alias: {
	      'vue$': "vue/dist/vue.esm.js",
	      '@': path.join(__dirname,'../src')
	    }
	},	
	module:{
		rules: [
			{
				test:/\.js$/,
				use: [
					{ 
						loader:'babel-loader',
						query:{
							presets:['latest']
						}
					}
				],
				exclude: path.join(__dirname,"../node_modules"),
				include: [path.join(__dirname, '../src'), path.join(__dirname,'../node_modules/webpack-dev-server/client')]
			},
			{
				test:/\.vue$/,
				loader:'vue-loader',
				options:{
					loaders:{
						css:extractPlugin.extract({
						        use: [{loader:"css-loader"},{loader:"postcss-loader"}],
						        fallback: 'vue-style-loader'
						     }),
						less:extractPlugin.extract({
						        use: [{loader:"css-loader"},{loader:"postcss-loader"},{loader:"less-loader"}],
						        fallback: 'vue-style-loader'
						     })
					}
				}
			},
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/\.(png|gif|jpg|jpeg|svg)$/,
				use:[
					{
						loader:'url-loader?limit=1024',
						options: {
							name:'img/[name].[ext]'
						}
					}
				]
			}
		]
	}
}
