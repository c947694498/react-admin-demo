/* craco.config.js */
const {join} = require('path')
const WebpackBar = require('webpackbar')
const CracoLessPlugin = require('craco-less')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')

const resolve = dir => join(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    },
    plugins: [
      // webpack构建进度条
      new WebpackBar({
        profile: true
      }),
      // 观察打包进度
      new SimpleProgressWebpackPlugin(),
    ]
  },
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