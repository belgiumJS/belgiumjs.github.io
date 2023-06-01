import Article from '@/components/sections/article';
import getContentBySlug from '@/lib/getcontent';
import type { FC } from 'react';

// @ts-ignore
const Page: FC = () => <Article source={getContentBySlug('about')} />;

export default Page;
