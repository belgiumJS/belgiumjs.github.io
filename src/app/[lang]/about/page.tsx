import Article from '@/components/layout/article';
import getContentBySlug from '@/lib/getcontent';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { FC } from 'react';
import type { Metadata } from 'next';
import type { params } from '@/types/params';

const generateMetadata = async ({ params }: params): Promise<Metadata> => {
	const rawSource = getContentBySlug('about', params.lang);

	if (!rawSource) {
		return {
			title: '404',
		};
	}

	const { frontmatter } = await compileMDX<{
		title: string;
		description: string;
	}>({
		source: rawSource,
		options: { parseFrontmatter: true },
	});

	return {
		title: frontmatter.title,
		description: frontmatter.description,
	};
};

const Page: FC<params> = ({ params }) => {
	const content = getContentBySlug('about', params.lang);

	if (!content) {
		return <div>404</div>;
	}

	return <Article source={content} />;
};

export { generateMetadata };
export default Page;
