import fs from 'node:fs';
import path from 'node:path';

function getContentBySlug(slug: string): string {
	const basePath = path.join(process.cwd(), 'content');
	const content = fs.readFileSync(path.join(basePath, `${slug}.md`), 'utf8');
	return content;
}

export default getContentBySlug;
