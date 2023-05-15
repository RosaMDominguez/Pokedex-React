/* eslint-disable no-undef */

module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    coveragePathIgnorePatterns: ['/node_modules/', 'stories'],
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy',
      '\\.(png|jpg|webp|ttf|woff|woff2|svg|mp4)$': '<rootDir>/src/assets/mock.js'
    },
    testEnvironment: 'jsdom'
  };