module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      minPixelValue: 1, // 小于 1px 不转
      selectorBlackList: ['.no-rem'], // 需要保留 px 的类名前缀
    },
  },
};
