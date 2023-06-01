import styles from './index.module.scss';
import { compileMDX } from 'next-mdx-remote/rsc';

type Props = {
	source: string;
};

const Article = async ({ source }: Props) => {
	const { content, frontmatter } = await compileMDX<{ title: string }>({
		source,
		options: { parseFrontmatter: true },
	}).then((res) => res);

	return (
		<article className={styles.articleLayout}>
			<h1>{frontmatter.title}</h1>
			<div>{content}</div>
		</article>
	);
};

export default Article;
