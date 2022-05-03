const path = require('./webpack.common.js');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    usedExports: true
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: []
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: []
};