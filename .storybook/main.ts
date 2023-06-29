import path from 'node:path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../src/components/**/*.stories.@(ts|tsx)'],
	addons: [
		'@storybook/addon-controls',
		'@storybook/addon-interactions',
		'@storybook/addon-storyshots',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	features: {
		storyStoreV7: true,
	},
	docs: {
		autodocs: 'tag',
	},
	staticDirs: ['../public'],
	webpackFinal: async (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname, '../src/'),
		};

		return config;
	},
};

export default config;
