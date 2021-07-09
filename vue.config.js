// const path = require('path');
const env = require('./build/dev.config');

// function resolve(params) {
//   return path.resolve(__dirname, params);
// }

module.exports = {
  devServer: {
    open: true,
    port: 9000,
    openPage: 'index.html',
    proxy: {
      '/apis': {
        target: env.localTarget,
        pathRewrite: {
          '^/apis': ''
        },
        changeOrigin: true
      }
    }
  }
};