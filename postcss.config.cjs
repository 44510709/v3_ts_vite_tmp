module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 设计稿宽度
      viewportUnit: 'vw', // 希望使用的视窗单位
      selectorBlackList: ['.ignore', '.hAIrlines'], // 不转换的类名
      minPixelValue: 1, // 最小的转换数值
      mediaQuery: false // 是否允许在媒体查询中转换px
    }
  }
}
