import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	dir: './',
});

/** @type {import('jest').Config} */
const config = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.mjs'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	testMatch: ['**/__tests__/*.test.{,ts,tsx}'],
};

export default createJestConfig(config);
