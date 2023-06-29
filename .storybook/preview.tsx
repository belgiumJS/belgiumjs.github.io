import LocaleProvider from '../src/providers/localProvider';
import messages from '../i18n/en.json';
import font from '../src/utils/fonts';
import type { Preview } from '@storybook/react';
import '../src/styles/global.scss';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		backgrounds: { disable: true },
	},
};

export const parameters = {
	nextjs: {
		appDirectory: true,
	},
};

export const decorators = [
	(Story) => (
		<div data-test-id="story-root">
			<LocaleProvider locale="en" messages={messages}>
				<div className={font.className}>
					<Story />
				</div>
			</LocaleProvider>
		</div>
	),
];

export default preview;
