import { notFound } from 'next/navigation';
import Article from '@/components/layout/blogArticle';
import getContentBySlug, { getAllSlugs } from '@/lib/getcontent';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { FC } from 'react';
import type { Metadata } from 'next';
import type { blogParams, params } from '@/types/params';

const slugRegex = /(?<slug>.*)\.(?<lang>.*)/;

const generateStaticParams = ({ params }: params) => {
	const slugs = getAllSlugs(params.lang, 'blog');
	return slugs.map((slug) => ({
		// @ts-ignore
		slug: slug.match(slugRegex).groups.slug,
	}));
};

const generateMetadata = async ({ params }: blogParams): Promise<Metadata> => {
	const rawSource = getContentBySlug(`blog/${params.slug}`, params.lang);
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

const Page: FC<blogParams> = ({ params }) => {
	const rawSource = getContentBySlug(`blog/${params.slug}`, params.lang);

	if (!rawSource) {
		return notFound();
	}

	return <Article source={rawSource} />;
};

export { generateMetadata, generateStaticParams };
export default Page;
