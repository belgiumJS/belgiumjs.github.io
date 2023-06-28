'use client';
import { FormattedMessage } from 'react-intl';
import type { FC } from 'react';

type Props = {
	id: string;
};

const LocalizedMessage: FC<Props> = ({ id }) => <FormattedMessage id={id} />;

export default LocalizedMessage;
