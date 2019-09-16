const utils = require('../utils');

module.exports = [
  {
    test: /\.js$/, 
    exclude: /node_modules/, 
    use: "babel-loader"
  },

  {
    test: /\.css$/,
    exclude: /node_modules/, 
    use: [{loader: 'style-loader'},, {loader: 'css-loader'}]
  },

  {
    test: /\.scss$/,
    exclude: /node_modules/, 
    use: [{loader: 'style-loader'}, {loader: 'css-loader'},{loader: 'sass-loader'}]
  },

  {
    test: /\.less$/,
    exclude: /node_modules/, 
    use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'less-loader'}]
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
    }
  },
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: utils.assetsPath('media/[name].[hash:7].[ext]')
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
    }
  }
]