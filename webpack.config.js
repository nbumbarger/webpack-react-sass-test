const webpack = require('webpack');
const process = require('process');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


  module.exports = {
    entry: {
     app: './js/app'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './public',
      hot: true
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: [
            'react-hot-loader',
            'jsx-loader',
            'babel-loader?presets[]=latest&presets[]=react'
          ],
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'sass-loader'
            ]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('assets/main.css', {
        allChunks: true
      }),
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    output: {
      filename: 'assets/bundle.js',
      path: path.resolve(__dirname, 'public')
    }
  };
