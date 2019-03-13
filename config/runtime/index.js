const runtime = {
  build: {
    path: {
      root: 'dist',
      assets: 'src/public/assets',
      public: '/'
    }
  },
  dev: {
    path: {
      root: 'dist',
      assets: 'src/public/assets',
      public: '/'
    }
  }
}

const env = process.env.NODE_ENV;

if(env === "dev" || env === "development") {
  module.exports = runtime.dev;
} else {
  module.exports = runtime.build;
}