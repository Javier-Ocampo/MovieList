module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        'no-inline-styles': false,
      },
    ],
    'react-native/no-inline-styles': 0,
  },
};
