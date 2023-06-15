import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import LocalizedLink from '@/components/localizedLink';
import style from './index.module.scss';
import type { FC } from 'react';

type Props = {
	className: string;
};

const Header: FC<Props> = ({ className }) => (
	<header className={`${style.header} ${className}`}>
		<LocalizedLink href="/">
			<Image
				src="static/logo/logo-color-text-black.svg"
				alt="logo"
				height={50}
				width={200}
			/>
		</LocalizedLink>
		<div className={style.links}>
			<LocalizedLink href="/about">About</LocalizedLink>
			<LocalizedLink href="/events">Events</LocalizedLink>
			<LocalizedLink href="/blog">Blog</LocalizedLink>
			<Link href="https://github.com/belgiumJS">
				<FaGithub />
			</Link>
		</div>
	</header>
);

export default Header;
