'use client';
import { IntlProvider } from 'react-intl';
import type { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    lang: string;
    messages: Record<string, string>;
};

const LocalProvider: FC<Props> = ({ children, lang, messages }) => (
    <IntlProvider locale={lang} messages={messages} defaultLocale='en'>
        {children}
    </IntlProvider>
);

export default LocalProvider;
