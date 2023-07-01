/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://belgiumjs.github.io/',
	generateRobotsTxt: true,
	generateIndexSitemap: false,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
			},
		],
	},
};
