var process = require('process');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
  }

  return sources;
}

module.exports = function() {
  return {
    entry: {
      helloWorld: getEntrySources([
        './js/app'
      ])
    },
    output: {
      filename: './public/[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'jsx-loader',
          exclude: /node_modules/
        }
      ]
    }
  };
};
