'use client';
import Link from 'next/link';
import styles from './index.module.scss';
import type { FC } from 'react';
import LocalizedMessage from '@/components/i18n/localizedMessage';

type Props = {
	className: string;
};

const Footer: FC<Props> = ({ className }) => (
	<footer className={`${styles.footer} ${className}`}>
		<Link href="https://github.com/belgiumJS/discussions/discussions">
			<LocalizedMessage id="components.sections.footer.text" />
		</Link>
	</footer>
);

export default Footer;
