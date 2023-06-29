import Edit from '.';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Edit>;
type Meta = MetaObj<typeof Edit>;

export const Default: Story = {
	args: {
		path: 'about',
		lang: 'en',
	},
};

export default { component: Edit } as Meta;
