/*
 * @Date: 2020-07-24 10:20:43
 * @FilePath: \front-model\jest.config.js
 */
module.exports = {
  transform: {"\\.ts$": ['ts-jest']},
  moduleFileExtensions: ['js', 'ts'],
  collectCoverage: false,
  collectCoverageFrom: [
    './src/store/**/*.{js,ts}',
    './src/modules/**/*.{js,ts}',
    './src/utils/**/*.{js,ts}',
    './src/common/**/*.{js,ts}',
    '!**/node_modules/**',
  ],
  transformIgnorePatterns: [],
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsConfig:"tsconfig.json",
    },
  },
};
