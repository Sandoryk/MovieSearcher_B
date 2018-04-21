const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
		exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
	  {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
	  {
		test: /\.(png|jpg|gif|svg)$/,
		use: ['url-loader']
	  },
	]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};