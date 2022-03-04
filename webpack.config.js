const path = require('path');
const webpack = require('webpack');

const productionMode = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  target: 'web',

  entry: ['./src/index.tsx'],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [productionMode ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'constaHeaderInit',
      type: 'umd',
      export: 'default',
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),

    new webpack.ProgressPlugin(),

    new MiniCssExtractPlugin({ filename: 'styles.css' }),

    new CssMinimizerPlugin(),
  ],
};
