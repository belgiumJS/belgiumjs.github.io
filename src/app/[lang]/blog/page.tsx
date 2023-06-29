import { getBlogData } from '@/lib/getcontent';
import BlogCard from '@/components/blog/blogCard';
import LocalizedMessage from '@/components/i18n/localizedMessage';
import styles from '@/styles/app/about.module.scss';
import type { FC } from 'react';
import type { params } from '@/types/params';

const Page: FC<params> = async ({ params }) => {
	const blogData = await getBlogData(params.lang);

	return (
		<div className={styles.pageContainer}>
			<h1>
				<LocalizedMessage id="app.blog.title" />
			</h1>
			<div className={styles.container}>
				{blogData.length === 0 ? (
					<LocalizedMessage id="app.blog.noPosts" />
				) : (
					blogData.map((data) => (
						<BlogCard
							key={data.slug}
							slug={data.slug}
							lang={params.lang}
							title={data.title}
							description={data.description}
							thumbnail={data.thumbnail}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Page;
