import fs from 'node:fs';
import path from 'node:path';
import { compileMDX } from 'next-mdx-remote/rsc';

function getContentBySlug(slug: string, lang: string): string | undefined {
	const basePath = path.join(process.cwd(), 'content');
	try {
		return fs.readFileSync(path.join(basePath, `${slug}.${lang}.md`), 'utf8');
	} catch (e) {
		try {
			return fs.readFileSync(path.join(basePath, `${slug}.en.md`), 'utf8');
		} catch (e) {
			return undefined;
		}
	}
}

function getAllSlugs(lang: string, dir: string): string[] {
	const basePath = path.join(process.cwd(), 'content', dir);
	const files = fs.readdirSync(basePath);
	const slugs = files.map((file) => {
		const slug = file.replace('.md', '');
		return slug;
	});
	const slugBuffer: string[] = [];
	slugs.forEach((slug) => {
		if (slug.includes('.gitKeep')) {
			return;
		}
		if (slug.endsWith(`.${lang}`)) {
			slugBuffer.push(slug);
		} else if (
			slug.endsWith('.en') &&
			!slugBuffer.includes(slug.replace('.en', `.${lang}`))
		) {
			const correspondingLangFile = slug.replace('.en', `.${lang}`);
			const correspondingLangFileExists = slugs.includes(correspondingLangFile);
			if (!correspondingLangFileExists) {
				slugBuffer.push(slug);
			}
		}
	});
	return slugBuffer;
}
type BlogData = {
	title: string;
	description: string;
	date: Date;
	thumbnail?: string;
	slug: string;
	lang: string;
};

async function getBlogData(lang: string): Promise<BlogData[]> {
	const slugRegex = /(?<slug>.*)\.(?<lang>.*)/;
	const primitivData = getAllSlugs(lang, 'blog');
	const data = primitivData.map(async (slug) => {
		// @ts-ignore
		const { groups } = slug.match(slugRegex);
		if (!groups) {
			throw new Error('No groups found');
		}
		const rawContent = getContentBySlug(`/blog/${groups.slug}`, groups.lang);
		if (!rawContent) {
			throw new Error('No content found');
		}
		const { frontmatter } = await compileMDX<{
			title: string;
			description: string;
			date: Date;
			thumbnail?: string;
		}>({
			source: rawContent,
			options: { parseFrontmatter: true },
		});
		return {
			...frontmatter,
			slug: groups.slug,
			lang: groups.lang,
		};
	});

	return (await Promise.all(data)).sort((a, b) => {
		if (a.date > b.date) {
			return -1;
		}
		if (a.date < b.date) {
			return 1;
		}
		return 0;
	});
}

export { getAllSlugs, getBlogData };
export default getContentBySlug;
