import { getAllSlugs } from '@/lib/getcontent';
import BlogCard from '@/components/blog/blogCard';
import styles from '@/styles/app/about.module.scss';
import Message from '@/components/blog/message';
import type { FC } from 'react';
import type { params } from '@/types/params';

const slugRegex = /(?<slug>.*)\.(?<lang>.*)/;

const Page: FC<params> = async ({ params }) => {
	const allSlugs = getAllSlugs(params.lang, 'blog');

	return (
		<div className={styles.pageContainer}>
			<h1>Blog</h1>
			<div className={styles.container}>
				{allSlugs.length === 0 ? (
					<Message />
				) : (
					allSlugs.map((slug) => (
						<BlogCard
							key={slug}
							/* @ts-ignore */
							slug={slugRegex.exec(slug).groups.slug}
							/* @ts-ignore */
							lang={slugRegex.exec(slug).groups.lang}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Page;
