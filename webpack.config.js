module.exports = {
  entry: {
    output: ['./src/scripts.js', './src/handleDisabled.js'],
  },

  output: {
    filename: './dist/bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
