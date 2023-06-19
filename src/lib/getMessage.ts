import fs from 'node:fs';

export default function getMessage(lang: string) {
	try {
		return JSON.parse(
			fs.readFileSync(process.cwd() + `/i18n/${lang}.json`, 'utf8')
		);
	} catch (e) {
		try {
			return JSON.parse(
				fs.readFileSync(process.cwd() + '/i18n/en.json', 'utf8')
			);
		} catch (e) {
			throw new Error('No language file found');
		}
	}
}
