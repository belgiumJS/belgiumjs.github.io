import Header from '@/components/sections/headers';
import font from '@/utils/fonts';
import Footer from '@/components/sections/footer';
import styles from '@/styles/layout.module.scss';
import type { FC, ReactNode } from 'react';
import '@/styles/global.scss';

export const metadata = {
	title: 'BelgiumJS',
	description: 'Belgian javascript development community',
};

type Props = {
	children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
	<html lang="en">
		<body className={`${font.className} ${styles.layout}`}>
			<Header className={styles.header} />
			<main className={styles.main}>{children}</main>
			<Footer className={styles.footer} />
		</body>
	</html>
);

export default Layout;
