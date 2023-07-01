import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import LocalizedLink from '@/components/i18n/localizedLink';
import style from './index.module.scss';
import type { FC } from 'react';
import LanguageSelector from '@/components/common/LanguageSelector';
import LocalizedMessage from '@/components/i18n/localizedMessage';

type Props = {
	className: string;
};

const Header: FC<Props> = ({ className }) => (
	<header className={`${style.header} ${className}`}>
		<LocalizedLink href="/">
			<Image
				src="/static/logo/logo-color-text-black.svg"
				alt="logo"
				height={50}
				width={200}
			/>
		</LocalizedLink>
		<div className={style.links}>
			<LocalizedLink href="/about">
				<LocalizedMessage id="components.sections.header.about" />
			</LocalizedLink>
			<LocalizedLink href="/events">
				<LocalizedMessage id="components.sections.header.events" />
			</LocalizedLink>
			<LocalizedLink href="/blog">
				<LocalizedMessage id="components.sections.header.blog" />
			</LocalizedLink>
			<LanguageSelector />
			<Link href="https://github.com/belgiumJS" title='Github' target='_blank' rel='noopener noreferrer' aria-label='Github'>
				<FaGithub />
			</Link>
		</div>
	</header>
);

export default Header;
