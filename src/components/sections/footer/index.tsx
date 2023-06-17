'use client';
import Link from 'next/link';
import styles from './index.module.scss';
import type { FC } from 'react';
import { FormattedMessage } from 'react-intl';

type Props = {
	className: string;
};

const Footer: FC<Props> = ({ className }) => (
	<footer className={`${styles.footer} ${className}`}>
		<Link href="https://github.com/belgiumJS/discussions/discussions">
			<FormattedMessage id="components.sections.footer.text" />
		</Link>
	</footer>
);

export default Footer;
