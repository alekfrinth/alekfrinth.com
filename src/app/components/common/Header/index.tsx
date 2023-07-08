'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Button from '@/app/components/common/Button';

import { languages } from '@/app/i18n/settings';

import HomeSVG from '@/app/assets/icons/home.svg';

import styles from './index.module.scss';

const LANGUAGE_PREFIX_LENGTH = 3;

const Header = ({ lng }: { lng: string }) => {
  const pathname = usePathname();

  const availableLanguage = languages.find(language => language !== lng);
  const isHomeLinkVisible = pathname.length > LANGUAGE_PREFIX_LENGTH;

  return (
    <header className={styles.header}>
      {isHomeLinkVisible && (
        <Link href={`/${lng}`} className={styles.home}>
          <HomeSVG width="42px" height="42px" />
        </Link>
      )}
      <Link
        href={`/${availableLanguage}/${pathname.slice(LANGUAGE_PREFIX_LENGTH)}`}
        className={styles.language}
      >
        <Button type="button" className={styles.button}>
          {availableLanguage}
        </Button>
      </Link>
    </header>
  );
};

export default Header;
