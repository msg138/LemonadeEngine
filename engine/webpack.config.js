const path = require('path');

module.exports = {
  mode: 'development',
  entry: './core/index.js',
  output: {
    filename: 'engine.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
