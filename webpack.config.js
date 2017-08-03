var process = require('process');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
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
      publicPath: 'http://localhost:8080/',
      filename: './public/[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: [
            'react-hot-loader',
            'jsx-loader'
          ],
          exclude: /node_modules/
        }
      ]
    }
  };
};
