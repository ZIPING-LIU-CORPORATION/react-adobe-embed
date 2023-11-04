/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    
  },
  
  //ignore 
  ignorePatterns: [
    'node_modules',
    'build',
    'dist',
    'lib',
    "rollup.config.js",
    "rollup.config.*.js",
  ],
  root: true,
};