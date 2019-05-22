const loader = require('./bind.loader');
const plugins = require('./bind.plugins');
const path = require('path');
function resolve(source) {
  return path.resolve(__dirname, "../../" + source)
}
module.exports = {
  entry: ['babel-polyfill', resolve("src/app/main.ts")],
  output: { 
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },
  module: {
    rules: [
     

      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: [{loader: "css-loader"}, {loader: "vue-style-loader"}],
            scss: [{loader: "sass-loader"}, {loader: "vue-style-loader"}],
            less: [{loader: 'less-loader'}, {loader: "vue-style-loader"}]
          }
        }
      },

      ...loader
    ]
  },

  plugins: [
    ...plugins
  ],

  resolve: {
    alias: {
      '@': resolve('src'),
      'vue$': 'vue/dist/vue.esm.js',
      '@core': resolve('src/lib/core'),
      '@utils': resolve('src/lib/utils')
    },
    extensions: [".js", ".vue", ".json", ".ts", ".tsx"]
  }
}