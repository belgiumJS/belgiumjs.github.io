'use client';
import { FC } from 'react';
import { useTheme } from 'next-themes';
import { BsSun, BsMoon } from 'react-icons/bs';
import styles from './index.module.scss';

const ThemeSwitcher: FC = () => {
	const { theme, setTheme } = useTheme();

	return (
		<button
			aria-label="Toggle theme"
			type="button"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className={styles.themeSwitcher}
		>
			{theme === 'dark' ? <BsSun /> : <BsMoon />}
		</button>
	);
};

export default ThemeSwitcher;
