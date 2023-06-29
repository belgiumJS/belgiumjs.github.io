import { compileMDX } from 'next-mdx-remote/rsc';
import LocalizedDate from '@/components/i18n/localizedDate';
import styles from './index.module.scss';
import LocalizedLink from '@/components/i18n/localizedLink';
import LocalizedMessage from '@/components/i18n/localizedMessage';

type Props = {
	source: string;
};

const Article = async ({ source }: Props) => {
	const { content, frontmatter } = await compileMDX<{
		title: string;
		desciption: string;
		date: Date;
	}>({
		source,
		options: { parseFrontmatter: true },
	}).then((res) => res);

	return (
		<article className={styles.layout}>
			<div className={styles.header}>
				<h1>{frontmatter.title}</h1>
				<p>{frontmatter.desciption}</p>
				<LocalizedDate
					value={frontmatter.date}
					year="numeric"
					month="long"
					day="numeric"
				/>
			</div>
			<div className={styles.content}>
				{content}
				<div className={styles.footer}>
					<LocalizedLink href="/blog">
						<LocalizedMessage id="components.layout.blogArticle.backToBlog" />
					</LocalizedLink>
				</div>
			</div>
		</article>
	);
};

export default Article;
