/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HOST = 'localhost';
const PORT = process.env.PORT || 4001;


module.exports = {
  entry: './index.js',

  output: {
    path: path.join(__dirname, 'docs'),
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
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

  devtool: 'source-map'
};
