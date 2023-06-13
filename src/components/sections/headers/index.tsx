import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import style from './index.module.scss';
import type { FC } from 'react';

type Props = {
	className: string;
};

const Header: FC<Props> = ({ className }) => (
	<header className={`${style.header} ${className}`}>
		<Link href="/">
			<Image
				src="static/logo/logo-color-text-black.svg"
				alt="logo"
				height={50}
				width={200}
			/>
		</Link>
		<div className={style.links}>
			<Link href="/about">About</Link>
			<Link href="/events">Events</Link>
			<Link href="/blog">Blog</Link>
			<Link href="https://github.com/belgiumJS">
				<FaGithub />
			</Link>
		</div>
	</header>
);

export default Header;
