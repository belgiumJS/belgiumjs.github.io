import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './index.module.scss';
import type { I18nDropdownItem } from '@/types/dropdown';
import type { CSSProperties, FC } from 'react';

type DropdownProps = {
	items: Array<I18nDropdownItem>;
	shouldShow: boolean;
	styles: CSSProperties;
};

const Dropdown: FC<DropdownProps> = ({
	items,
	shouldShow,
	styles: extraStyles,
}) => {
	const pathname = usePathname();
	const currentPath = pathname.split('/').slice(2).join('/');

	const mappedElements = items.map((item) => {
		const extraStyles = { fontWeight: item.active ? 'bold' : 'normal' };
		return (
			<li key={`dropdown-item-${item.label}`}>
				<Link
					style={extraStyles}
					href={`/${item.code}/${currentPath}`}
					type="button"
				>
					{item.title}
				</Link>
			</li>
		);
	});

	const dropdownStyles = {
		display: shouldShow ? 'block' : 'none',
		...extraStyles,
	};

	return (
		<ul className={styles.dropdownList} style={dropdownStyles}>
			{mappedElements}
		</ul>
	);
};

export default Dropdown;
