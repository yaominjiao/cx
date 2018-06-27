const path = require('path') 
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractPlugin = require('extract-text-webpack-plugin')
const vuxLoader = require('vux-loader')
const baseConf = require('./webpack.base.conf.js') 

baseConf.module.rules.push({
    // less 预处理（这个只在开发环境中使用）
	test:/\.less$/,
	use:[
		'style-loader',
		'css-loader',
		{
			loader:'postcss-loader',
			options:{
				sourceMap:false

			}
		},
		"less-loader"
	]
})
baseConf.devtool = '#cheap-module-eval-source-map'  //webpack官方推荐的。提高效率和准确性
baseConf.devServer = {
	contentBase: false,
		compress: true,
	port:'8000',
	host:'0.0.0.0',
	overlay:{
		errors:true
	},
	hot:true//只加载当前更新的组件而不是加载整个页面
}

baseConf.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),   //减少出现 不必要的错误信息
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new extractPlugin('css/[name].css'),  //将输出的css文件进行hash转换
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname,'../index.html'),
      inject: true
    })
)

module.exports = vuxLoader.merge(baseConf, {
  plugins: ['vux-ui', 'progress-bar', 'duplicate-style']
})
