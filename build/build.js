const path = require('path') 
const webpack = require('webpack')
const webpackConf = require('./webpack.prod.conf.js')
const rm = require('rimraf')
const config = require('../config')
process.env.NODE_ENV = 'production'
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory),function(){
	webpack(webpackConf,(err, stats) => {
  
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log('  Build failed with errors.\n')
      process.exit(1)
    }

    console.log('  Build complete.\n')
    console.log(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    )
  })
});