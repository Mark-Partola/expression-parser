module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "./dist/bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [{
        test: /\.js/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
    }]
  }
};
