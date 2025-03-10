export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
    },
  },
}
