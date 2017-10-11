/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HOST = 'localhost';
const PORT = process.env.PORT || 4001;


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
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './index.html', inject: 'body' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
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
