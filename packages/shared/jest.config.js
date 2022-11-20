module.exports = {
  preset: 'ts-jest',
  collectCoverage: false,
  testRegex: '(__tests__/.*\\.(__tests__|spec))\\.ts$',
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  testEnvironment: 'node',
};
