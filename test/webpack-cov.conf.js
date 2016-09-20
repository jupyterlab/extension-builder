var path = require('path');

module.exports = {
  entry: './test/build/index.js',
  output: {
    path: __dirname + "/build",
    filename: "coverage.js",
    publicPath: "./build/"
  },
  bail: true,
  module: {
    preLoaders: [
      // instrument only testing sources with Istanbul
      {
        test: /\.js$/,
        include: path.resolve('lib/'),
        loader: 'istanbul-instrumenter'
      }
    ]
  }
}
