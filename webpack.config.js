/**
 * @format
 */
const path = require('path')
const devMode = process.env.NODE_ENV !== 'production'
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Uglifyjs = require('uglifyjs-webpack-plugin')
const OptimizeCss = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, '/public'),
  },
  devServer: {
    contentBase: './public',
    port: 9000,
  },
  optimization: {
    minimizer: [
      new Uglifyjs({
        cache: true,
        parallel: true,
      }),
      new OptimizeCss({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      { test: /\.html$/, use: ['html-loader'] },
    ],
  },
}
