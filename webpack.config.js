const webpack = require('webpack');
const path = require('path');

const entry = [
  './client/index.js'
];

const output = {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist/',
  filename: 'bundle.js',
};
  
module.exports = {
  mode: 'production', 
  performance: { hints: false },
  entry, output,
  devtool: "eval-source-map",
  module: {
    rules : [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:[ 'es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ],
  },
};    