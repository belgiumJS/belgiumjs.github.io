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

export default getContentBySlug;
