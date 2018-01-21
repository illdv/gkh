module.exports = {
  entry: {
    output: ['./src/output.js', './src/storage.js'],
  },

  output: {
    filename: './dist/bundle.js',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
