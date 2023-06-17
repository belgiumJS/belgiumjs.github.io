'use client';
import { useState, useCallback } from 'react';
import { MdOutlineTranslate } from 'react-icons/md';
import Dropdown from '@/components/common/LanguageSelector/Dropdown';
import styles from './index.module.scss';
import i18nConfig from '@/utils/i18n.config';
import { useClickOutside } from '@/hooks/useClickOutside';

const dropdownStyle = {
	position: 'absolute',
	top: '60%',
	right: '0',
	margin: 0,
} as const;

const LanguageSelector = () => {
	const [showDropdown, setShowDropdown] = useState(false);

	const dropdownHandler = useCallback(() => setShowDropdown(false), []);
	const ref = useClickOutside<HTMLDivElement>(dropdownHandler);

	const items = i18nConfig.map(({ locale, label, code }) => ({
		title: label,
		active: locale === 'en',
		label,
		locale,
		code: code,
	}));

	return (
		<div className={styles.container} ref={ref}>
			<button
				type="button"
				className={styles.languageSwitch}
				onClick={() => setShowDropdown(!showDropdown)}
				aria-expanded={showDropdown}
			>
				<MdOutlineTranslate />
			</button>

			<Dropdown
				items={items}
				shouldShow={showDropdown}
				styles={dropdownStyle}
			/>
		</div>
	);
};

export default LanguageSelector;
