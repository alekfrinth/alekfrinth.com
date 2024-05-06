import cn from 'classnames';
import { Cormorant, Roboto_Mono } from 'next/font/google';
import { useTranslation } from 'react-i18next';

import { languages } from '@/app/i18n/settings';

import '@/app/assets/styles/index.scss';

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin', 'cyrillic'],
});
const cormorant = Cormorant({
  variable: '--font-cormorant',
  subsets: ['latin', 'cyrillic'],
});

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export const metadata = {
  title: 'alekfrinth',
  description: 'alekfrinth webportfolio',
};

const RootLayout = async ({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) => {
  return (
    <html lang={lng}>
      <body className={cn(cormorant.variable, roboto_mono.variable)}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
