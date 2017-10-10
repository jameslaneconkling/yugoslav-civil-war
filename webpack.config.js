/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HOST = 'localhost';
const PORT = process.env.PORT || 4000;


module.exports = {
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server',
    './index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index.js'
  },

  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   include: path.join(__dirname, 'app'),
      //   use: ['babel-loader']
      // },
      // {
      //   test: /\.css$/,
      //   include: path.join(__dirname, 'app'),
      //   loader: 'style-loader!css-loader'
      // }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './index.html', inject: 'body' }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: 'eval-source-map',

  devServer: {
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: HOST,
    port: PORT
  }
};
