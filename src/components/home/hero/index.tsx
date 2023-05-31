import styles from './index.module.scss';
import type { FC } from 'react';

const Hero: FC = () => (
	<div className={styles.hero}>
		<div className={styles.content}>
			<h1>BelgiumJS</h1>
			<p>Belgian javascript development community</p>
		</div>
	</div>
);

export default Hero;
