import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import LocalizedLink from '@/components/i18n/localizedLink';
import LocalizedMessage from '@/components/i18n/localizedMessage';
import LanguageSelector from '@/components/common/LanguageSelector';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';
import style from './index.module.scss';
import type { FC } from 'react';
import Logo from './Logo';

type Props = {
	className: string;
};

const Header: FC<Props> = ({ className }) => (
	<header className={`${style.header} ${className}`}>
		<LocalizedLink href="/">
			<Logo />
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
			<ThemeSwitcher />
			<Link
				href="https://github.com/belgiumJS"
				title="Github"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Github"
			>
				<FaGithub />
			</Link>
		</div>
	</header>
);

export default Header;
