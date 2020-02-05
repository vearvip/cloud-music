const { smart } = require('webpack-merge')
const config = require('./webpack.config')

module.exports = smart(config, {
  mode: 'production',
  devtool: false
})