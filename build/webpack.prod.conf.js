const path = require('path') 
const baseConf = require('./webpack.base.conf.js') 
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractPlugin = require('extract-text-webpack-plugin')
const vuxLoader = require('vux-loader')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const env = require('../config/prod.env')
const config = require('../config')

//对生产环境进行配置
baseConf.entry = {
    app: path.join(__dirname, '../src/index.js'),
    vendor: ['vue','vuex','vue-router','axios-jsonp-pro']   //比如 vendor: ['vue','vue-rooter']
}
baseConf.output.filename = 'js/[name].[chunkhash:8].js'//path.posix.join("", 'js/[name].[chunkhash:8].js') //对生产环境的文件名用 chunkhash

baseConf.module.rules.push({
    // less 预处理（这个只在生产环境中使用）
    test: /\.less/,
    use: extractPlugin.extract({
        fallback: 'style-loader',
        use: [
            'css-loader',
            {//使用 'postcss-loader'所生成的 sourceMap，而不要使用 'less-loader' 所生成的 sourceMap
                loader: 'postcss-loader',
                options: {
                    sourceMap: false
                }
            },
            'less-loader'
        ]
    })
})
baseConf.plugins.push(
    new extractPlugin('css/[name].[contentHash:8].css'),  //将输出的css文件进行hash转换
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'  //注意，name里的值是自己起的，但要和上面的值保持一致。
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: true,
      parallel: true
    }),
    new webpack.DefinePlugin({
      'process.env': env
    }),
    /*new htmlWebpackPlugin({
          filename: config.build.index,
          template: 'index.html',
          inject: true,
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
          }
    }),*/
    new htmlWebpackPlugin({
            template:path.join(__dirname,'../index.html'),
            filename:'index.html',
            inject:'body',
            title:'车险',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
             }
        })
)

module.exports = vuxLoader.merge(baseConf, {
  plugins: ['vux-ui', 'progress-bar', 'duplicate-style']
})