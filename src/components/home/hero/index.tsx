'use client';
import styles from './index.module.scss';
import { FormattedMessage } from 'react-intl';
import type { FC } from 'react';

const Hero: FC = () => (
	<div className={styles.hero}>
		<div className={styles.content}>
			<h1>BelgiumJS</h1>
			<p>
				<FormattedMessage id="components.home.hero.description" />
			</p>
		</div>
	</div>
);

export default Hero;
