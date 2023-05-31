import styles from './index.module.scss';
import type { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode
};

const Article: FC<Props> = ({ children }) => (
    <article className={styles.articleLayout}>
        {children}
    </article>
);

export default Article;
