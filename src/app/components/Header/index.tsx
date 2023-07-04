'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { languages } from '@/app/i18n/settings';

import HomeSVG from '@/app/assets/icons/home.svg';

import styles from './index.module.scss';

const Header = ({ lng }: { lng: string }) => {
  const pathname = usePathname();

  const availableLanguage = languages.find(language => language !== lng);
  const isHomeLinkVisible = pathname.length > 3;

  return (
    <header className={styles.header}>
      {isHomeLinkVisible && (
        <Link href={`/${lng}`} className={styles.home}>
          <HomeSVG width="42px" height="42px" />
        </Link>
      )}
      <Link
        href={`/${availableLanguage}/${pathname.slice(3)}`}
        className={styles.language}
      >
        {availableLanguage}
      </Link>
    </header>
  );
};

export default Header;
