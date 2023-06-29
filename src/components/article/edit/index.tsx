import Link from 'next/link';
import { BsFillPencilFill } from 'react-icons/bs';
import type { FC } from 'react';

const BASE_EditURL =
	'https://github.com/belgiumJS/belgiumjs.github.io/edit/main/content';

type Props = {
	path: string;
	lang: string;
};

const Edit: FC<Props> = ({ path, lang }) => (
	<Link href={`${BASE_EditURL}/${path}.${lang}.md`} passHref>
		Edit this page <BsFillPencilFill />
	</Link>
);

export default Edit;
