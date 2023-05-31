import Link from 'next/link';
import styles from './index.module.scss';
import type { FC } from 'react';

type Props = {
	className: string;
};

const Footer: FC<Props> = ({ className }) => (
	<footer className={`${styles.footer} ${className}`}>
		<Link href="https://github.com/belgiumJS/discussions/discussions">Discussions about the project</Link>
	</footer>
);

export default Footer;
