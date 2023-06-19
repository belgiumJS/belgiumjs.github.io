'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import LocalizedLink from '@/components/localizedLink';
import style from './index.module.scss';
import type { FC } from 'react';
import LanguageSelector from '@/components/common/LanguageSelector';
import { FormattedMessage } from 'react-intl';

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
				<FormattedMessage id="components.sections.header.about" />
			</LocalizedLink>
			<LocalizedLink href="/events">
				<FormattedMessage id="components.sections.header.events" />
			</LocalizedLink>
			<LocalizedLink href="/blog">
				<FormattedMessage id="components.sections.header.blog" />
			</LocalizedLink>
			<LanguageSelector />
			<Link href="https://github.com/belgiumJS">
				<FaGithub />
			</Link>
		</div>
	</header>
);

export default Header;
