import Article from '@/components/sections/article';
import getContentBySlug from '@/lib/getcontent';
import type { FC } from 'react';

// @ts-expect-error Server Component
const Page: FC = () => <Article source={getContentBySlug('blog')} />;

export default Page;
