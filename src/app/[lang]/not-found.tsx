// it's doesn't work with next.js static generation
import LocalizedLink from '@/components/i18n/localizedLink';
import styles from '@/styles/app/not-found.module.scss';
import type { FC } from 'react';

const NotFound: FC = () => (
    <div className={styles.notFound}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <LocalizedLink href="/">Go to homepage</LocalizedLink>
    </div>
);

export default NotFound;
