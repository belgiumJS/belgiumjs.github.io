import Header from '@/components/sections/headers';
import font from '@/utils/fonts';
import Footer from '@/components/sections/footer';
import i18nconfig from '@/utils/i18n.config';
import styles from '@/styles/layout.module.scss';
import type { FC, ReactNode } from 'react';
import '@/styles/global.scss';

const metadata = {
	title: 'BelgiumJS',
	description: 'Belgian javascript development community',
};

type Props = {
	children: ReactNode;
	params: {
		lang: string;
	};
};

export async function generateStaticParams() {
	return i18nconfig.map((lang) => ({
		lang: lang.code,
	}));
}

const Layout: FC<Props> = ({ children, params }) => (
	<html lang={params.lang}>
		<body className={`${font.className} ${styles.layout}`}>
			<Header className={styles.header} />
			<main className={styles.main}>{children}</main>
			<Footer className={styles.footer} />
		</body>
	</html>
);

export { metadata };
export default Layout;
