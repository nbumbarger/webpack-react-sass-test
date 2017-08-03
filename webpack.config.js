var process = require('process');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}



module.exports = {
  entry: {
    bundle: getEntrySources([
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
          'jsx-loader',
          'babel-loader?presets[]=latest&presets[]=react'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/bundle.css', {
      allChunks: true
    })
  ]
};
