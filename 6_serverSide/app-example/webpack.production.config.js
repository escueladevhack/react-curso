/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/js/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main-[hash].js',
    publicPath: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!html!./src/index.ejs', // !!html loader to keep ejs variable, part of server-side rendering
      inject: 'body',
      filename: 'index.ejs',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin('style-[hash].css', {
      allChunks: true
    })

  ],
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },


  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'babel' ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css!postcss-loader?sourceMap"),
      },
    ],
  },

  postcss: function (webpack) {
    return [
      require("postcss-import")({ addDependencyTo: webpack }),
      require("postcss-url")(),
      require("postcss-cssnext")({
        features: {
          nesting: true,
          customMedia: true,
          colorHexAlpha: true,
          colorRgba: true,
          mediaQueriesRange: true
        }
      })
    ];
  }
};
