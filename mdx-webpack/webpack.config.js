const path = require('path');

module.exports = {
  entry: ['./src/example.mdx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'app.js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: ['babel-loader'] },
      { test: /\.mdx?$/, use: ['babel-loader', '@mdx-js/loader'] },
    ],
  },
};
