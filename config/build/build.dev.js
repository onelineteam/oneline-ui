const config = require('./build.base');

module.exports = {
  mode: 'development',
  ...config,
  devServer: {
    port: 8081
  }
}