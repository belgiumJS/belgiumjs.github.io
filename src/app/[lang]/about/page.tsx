import Article from '@/components/sections/article';
import getContentBySlug from '@/lib/getcontent';
import type { FC } from 'react';
import type { params } from '@/types/i18n';

const Page: FC<params> = ({ params }) => {
	const content = getContentBySlug('about', params.lang);

	if (!content) {
		return <div>404</div>;
	}

	return <Article source={content} />;
};

export default Page;
