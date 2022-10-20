module.exports = {
  verbose: false,
  preset: '@vue/cli-plugin-unit-jest',
  setupFiles: ['./tests/setup.js'],
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],

  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
  },
};
