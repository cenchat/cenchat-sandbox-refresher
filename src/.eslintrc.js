module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'airbnb-base', 'rmmmp/base'],
  env: {
    es6: true,
    node: true,
  },
  rules: {},
  overrides: [
    // test files
    {
      files: [
        'src/**/*-test.js',
        'src/utils/test-helpers/*.js',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
