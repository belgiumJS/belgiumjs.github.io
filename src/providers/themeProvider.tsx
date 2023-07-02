'use client';
import { ThemeProvider } from 'next-themes';
import type { FC, ReactNode } from 'react';

type ThemeProviderProps = {
	children: ReactNode;
};

const ThemeProviderWrapper: FC<ThemeProviderProps> = ({ children }) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
