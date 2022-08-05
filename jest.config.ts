import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/.next/'],
  testMatch: ['**/__tests__/**/*.test.ts(x)'],

  collectCoverage: true,
  collectCoverageFrom: [
    'src/templates/**/*.ts(x)?',
    'src/components/**/*.ts(x)?',
    'src/contexts/**/*.ts(x)?',
    '!src/**/*.d.ts',
    '!src/**/mock.ts',
    '!src/**/*.stories.ts(x)?'
  ],
  modulePaths: ['<rootDir>/src', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss|png|jpeg|jpg|svg)$'
  ],

  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts']
}

export default config
