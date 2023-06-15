import i18nconfig from './i18n.config';

function getlabels() {
	let labels: string[] = [];
	i18nconfig.forEach((item) => {
		labels.push(item.label);
	});
	return labels;
}

function getlabel(code: string) {
	let label = '';
	i18nconfig.forEach((item) => {
		if (item.code === code) {
			label = item.label;
		}
	});
	return label;
}

export { getlabels, getlabel };
