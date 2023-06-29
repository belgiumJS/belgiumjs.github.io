import BlogCard from '.';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof BlogCard>;
type Meta = MetaObj<typeof BlogCard>;

export const Default: Story = {
	args: {
		slug: 'test',
		lang: 'en',
		title: 'Test',
		description: 'Test',
	},
};

export const WithThumbnail: Story = {
	args: {
		slug: 'test',
		lang: 'en',
		title: 'Test',
		description: 'Test',
		thumbnail: '/static/images/test.jpg',
	},
};

export default { component: BlogCard } as Meta;
