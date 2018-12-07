module.exports = {
  extends: 'airbnb-base',
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', './src'],
      },
    },
  },
};
