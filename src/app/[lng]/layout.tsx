import { languages } from '@/app/i18n/settings';

import '@/app/assets/styles/index.scss';

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export const metadata = {
  title: 'alekfrinth',
  description: 'alekfrinth webportfolio',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
