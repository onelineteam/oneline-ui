const path = require("path");
const runtime = require('../runtime');

module.exports = {
  assetsPath
}

function  assetsPath(src) {
  return path.posix.join(runtime.path.assets, src)
}