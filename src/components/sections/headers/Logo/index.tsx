'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FC } from 'react';

const Logo: FC = () => {
	const [link, setLink] = useState<string>(
		'/static/logo/logo-color-text-black.svg'
	);
	const { theme } = useTheme();

	useEffect(() => {
		if (theme === 'dark') {
			setLink('/static/logo/logo-color-text-white.svg');
		} else {
			setLink('/static/logo/logo-color-text-black.svg');
		}
	}, [theme]);

	return <Image src={link} alt="logo" height={50} width={200} />;
};

export default Logo;
