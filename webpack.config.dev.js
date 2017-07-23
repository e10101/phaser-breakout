var path = require('path')
var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
})

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, './src/main.ts')
    ]
  },
  devtool: 'cheap-source-map',
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'output'),
    publicPath: './output/',
    filename: 'breakout.js'
  },
  watch: true,
  plugins: [
    definePlugin,
    new BrowserSyncPlugin({
      host: process.env.IP || 'localhost',
      port: process.env.PORT || 3011,
      open: false,
      server: {
        baseDir: ['./', './output']
      }
    }),

  ],
  module: {
    loaders: [
      {
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
      }
    ]
  },
  node: {
    fs: "empty"
  },
  externals: {
    'phaser': 'Phaser'
  }
};