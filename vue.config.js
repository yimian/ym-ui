const path = require('path');
const ignorePlugin = require('webpack').IgnorePlugin;

const authApi = 'http://172.16.24.42:17510/';
const commonApi = 'xxx';

module.exports = {
  devServer: {
    proxy: {
      '/api/auth': {
        target: authApi,
        changeOrigin: true,
        pathRewrite: { '/api/auth': '/auth' },
      },
      '/api/common': {
        target: commonApi,
        changeOrigin: true,
        pathRewrite: { '/api/common': '/api' },
      },
    },
    host: '0.0.0.0',
    port: 8090,
    https: false,
    open: false,
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    sourceMap: true,
  },
  productionSourceMap: false,
  runtimeCompiler: true,
  transpileDependencies: [
    'vue-echarts',
    'resize-detector',
  ],
  chainWebpack: (config) => {
    config
      .plugin('ignorePlugin')
      .use(ignorePlugin, [{
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }]);
    const resolve = (dir) => path.join(__dirname, dir);
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();
    svgRule
      .test(/\.(svg)(\?.*)?$/)
      .oneOf('name')
      .include
      .add(resolve('src/assets/sprite.svg'))
      .end()
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'img/[name].[hash:8].[ext]',
      })
      .end()
      .end()
      .oneOf('normal')
      .exclude
      .add(resolve('src/assets/sprite'))
      .end()
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'img/[name].[hash:8].[ext]',
      })
      .end()
      .end()
      .oneOf('sprite')
      .include
      .add(resolve('src/assets/sprite'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'sprite-[name]',
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        plugins: [
          { removeTitle: true },
          { convertColors: { shorthex: false } },
          { convertPathData: false },
        ],
      });
  },
};
