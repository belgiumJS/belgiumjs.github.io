import Link from 'next/link';
import getContentBySlug from '@/lib/getcontent';
import { compileMDX } from 'next-mdx-remote/rsc';
import styles from './index.module.scss';
import type { FC } from 'react';

type Props = {
	slug: string;
	lang: string;
};

const BlogCard: FC<Props> = async ({ slug, lang }) => {
	const rawSource = getContentBySlug(`/blog/${slug}`, lang);

	if (!rawSource) return null;

	const { frontmatter } = await compileMDX<{
		title: string;
		description: string;
		thumbnail?: string;
	}>({
		source: rawSource,
		options: { parseFrontmatter: true },
	});

	return (
		<div className={styles.blogCard}>
			{frontmatter.thumbnail ? (
				<>
					<img src={frontmatter.thumbnail} alt={frontmatter.title} />
					<div className={styles.content}>
						<p>{frontmatter.description}</p>
						<Link href={`/${lang}/blog/${slug}`}>Read more</Link>
					</div>
				</>
			) : (
				<div className={styles.content}>
					<h2>{frontmatter.title}</h2>
					<p>{frontmatter.description}</p>
					<Link href={`/${lang}/blog/${slug}`}>Read more</Link>
				</div>
			)}
		</div>
	);
};

export default BlogCard;
