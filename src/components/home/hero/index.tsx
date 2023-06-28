import styles from './index.module.scss';
import LocalizedMessage from '@/components/i18n/localizedMessage';
import type { FC } from 'react';

const Hero: FC = () => (
	<div className={styles.hero}>
		<div className={styles.content}>
			<h1>BelgiumJS</h1>
			<p>
				<LocalizedMessage id="components.home.hero.description" />
			</p>
		</div>
	</div>
);

export default Hero;
