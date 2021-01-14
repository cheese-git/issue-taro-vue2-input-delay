const config = {
  projectName: 'issue-taro-vue2-input-delay',
  date: '2021-1-14',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
      { from: 'src/vant-weapp/wxs', to: 'dist/vant-weapp/wxs' },
      { from: 'src/vant-weapp/common/style', to: 'dist/vant-weapp/common/style' },
      { from: 'src/vant-weapp/common/index.wxss', to: 'dist/vant-weapp/common/index.wxss' },
      { from: 'src/vant-weapp/cell/index.wxss', to: 'dist/vant-weapp/cell/index.wxss' },
      { from: 'src/vant-weapp/field/index.wxss', to: 'dist/vant-weapp/field/index.wxss' },
      { from: 'src/vant-weapp/field/index.wxs', to: 'dist/vant-weapp/field/index.wxs' },
      { from: 'src/vant-weapp/icon/index.wxs', to: 'dist/vant-weapp/icon/index.wxs' },
    ],
    options: {
    }
  },
  framework: 'vue',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/]
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
