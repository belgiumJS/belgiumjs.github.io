import { compileMDX } from 'next-mdx-remote/rsc';
import styles from './index.module.scss';

type Props = {
	source: string;
};

const Article = async ({ source }: Props) => {
	const { content, frontmatter } = await compileMDX<{
		title: string;
		description: string;
	}>({
		source,
		options: { parseFrontmatter: true },
	}).then((res) => res);

	return (
		<article className={styles.articleLayout}>
			<div className={styles.header}>
				<h1>{frontmatter.title}</h1>
				<p>{frontmatter.description}</p>
			</div>
			<div>{content}</div>
		</article>
	);
};

export default Article;
