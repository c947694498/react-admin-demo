/* craco.config.js */
// const {whenProd} = require('@craco/craco')
const { join } = require('path')
const CracoLessPlugin = require('craco-less')
const CracoAlias = require("craco-alias");
// const WebpackBar = require('webpackbar')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();
// const threadLoader = require('thread-loader');
// const resolve = dir => join(__dirname, dir)

// const jsWorkerPool = {
//   workers: 2,
//   poolTimeout: 2000
// }

// // 开启多线程
// threadLoader.warmup(jsWorkerPool, ['babel-loader'])

module.exports = {
  babel: {
    presets: [
      // ...
    ],
    plugins: [
      // 配置 babel-plugin-import
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    ]
  },
  plugins: [
    // alias
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: "./src",
        // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
        tsConfigPath: "./tsconfig.extend.json"
      }
    },
    // less loader 修改ant主题
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}