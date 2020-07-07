module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-len': [2, 120, { ignoreStrings: true }],
    'no-tabs': 0,
    'indent': [2, 4],
    'class-methods-use-this': 0,
    'react/jsx-indent': [2, 4, { checkAttributes: true }],
    "react/jsx-indent-props": [2, 4],
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
  },
};
