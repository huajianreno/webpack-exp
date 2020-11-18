/*
 * @Author       : leohua
 * @Date         : 2020-11-11 22:36:16
 * @LastEditTime : 2020-11-18 00:18:39
 * @LastEditors  : leohua
 * @Description  : webpack
 */

'use strict'

const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ],
      },
      {
        test: /\.(png|jpg|gif)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
            },
          }
        ],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};