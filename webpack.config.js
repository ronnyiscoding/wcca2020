const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postCssConfig = require('./postcss.config');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'wcca-styles.css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: postCssConfig,
          },
          'sass-loader'
        ]
      }
    ],
  },
};