const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
 },
  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    publicPath: '/dist',
  },
};
