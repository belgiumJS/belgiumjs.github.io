import Article from '@/components/sections/article';
import Link from 'next/link';
import type { FC } from 'react';

const Page: FC = () => (
    <Article>
        <h1>Blog</h1>
        <p>Page working in progress.</p>
        <p>But you can <Link href="https://github.com/belgiumJS/belgiumjs.github.io">get-involved</Link>.</p>
    </Article>
);

export default Page;
