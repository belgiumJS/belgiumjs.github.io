import Link from 'next/link';
import styles from './index.module.scss';
import type { FC } from 'react';
import LocalizedMessage from '@/components/i18n/localizedMessage';

type Props = {
	slug: string;
	lang: string;
	title: string;
	description: string;
	thumbnail?: string;
};

const BlogCard: FC<Props> = ({ slug, lang, title, thumbnail, description }) => (
	<div className={styles.blogCard}>
		{thumbnail ? (
			<>
				<img src={thumbnail} alt={title} />
				<Link href={`/${lang}/blog/${slug}`} className={styles.readMore}>
					<LocalizedMessage id="components.blog.blogCard.readMore" />
				</Link>
			</>
		) : (
			<>
				<div className={styles.content}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<Link href={`/${lang}/blog/${slug}`} className={styles.readMore}>
					<LocalizedMessage id="components.blog.blogCard.readMore" />
				</Link>
			</>
		)}
	</div>
);

export default BlogCard;
