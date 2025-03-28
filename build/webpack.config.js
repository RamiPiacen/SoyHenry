const path = require('path');

module.exports = {
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'public'), 
    filename: 'bundle.js', 
  },
  mode: 'development', 
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        
      },
    ],
  },
  devtool: 'source-map'
}