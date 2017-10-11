/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HOST = 'localhost';
const PORT = process.env.PORT || 4001;


module.exports = {
  entry: './app/index.js',

  output: {
    path: path.join(__dirname, 'docs'),
    publicPath: '/',
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
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
    new HtmlWebpackPlugin({ template: './app/index.html', inject: 'body' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   mangle: false
    // })
  ],

  devtool: 'source-map'
};
