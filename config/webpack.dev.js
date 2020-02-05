const { smart } = require('webpack-merge')
const config = require('./webpack.config')

module.exports = smart(config, {
  mode: 'development',
  devServer: {
    port: 3000,
    open: true
  },
  devtool: "source-map",
})