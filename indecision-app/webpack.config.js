// https://webpack.js.org/concepts/
// Entrypoint
// Where do we put the bundle file

// Node path join https://nodejs.org/api/path.html

const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      // Run Babel everytime it sees a .js file that's not in node_modules
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  // Source mapping: To many easier to see where errors happen
  devtool: 'cheap-module-eval-source-map',
  // Dev Server from webpack
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};

// loader - lets us customize webpack whenever it sees a behaviour
// e.g. everytime it sees a .js file it converts it with babel
// babel-loader is a webpack plugin
