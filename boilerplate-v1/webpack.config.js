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
    },
    {
      // Allow webpack to load css assets and convert them
      // to a js representation of the css
      // loader: 'css-loader',
      // Takes the css that's in javascript and injects it into the
      // DOM by injecting a style tag : Getting styles showing up in 
      // the browser
      // DOM: https://www.w3schools.com/js/js_htmldom.asp
      // loader: 'style-loader',
      // Array of loaders
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        // sass-loader: Allow us to import sass files
        // node-sass: Takes sass and converts it to regular css
        // Behind the scenes, sass-loader user node-sass to convert the files
        { loader: "sass-loader" }
      ],
      test: /\.s?css$/,
    }]
  },
  // Source mapping: To make easier to see where errors happen
  devtool: 'cheap-module-eval-source-map',
  // Dev Server from webpack
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 4500
  }
};

// loader - lets us customize webpack whenever it sees a behaviour
// e.g. everytime it sees a .js file it converts it with babel
// babel-loader is a webpack plugin
