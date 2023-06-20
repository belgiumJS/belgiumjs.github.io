import fs from 'node:fs';
import path from 'node:path';

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

export { getAllSlugs };
export default getContentBySlug;
