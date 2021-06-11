module.exports = {
  testEnvironment: 'jsdom',
  testMatch: [
     '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/.out/',
    '/public/',
    '/coverage'
  ],

  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
};