'use client';

import { usePathname } from 'next/navigation';

import Button from '@/app/components/common/Button';

import { languages } from '@/app/i18n/settings';

import HomeSVG from '@/app/assets/icons/home.svg';

import styles from './index.module.scss';

const LANGUAGE_PREFIX_LENGTH = 4;

const Header = ({ lng }: { lng: string }) => {
  const pathname = usePathname();

  const availableLanguage = languages.find(language => language !== lng);
  const isHomeLinkVisible = pathname.length > LANGUAGE_PREFIX_LENGTH;

  const pathnameSuffix = pathname.slice(LANGUAGE_PREFIX_LENGTH);
  const newLanguageLink = pathnameSuffix
    ? `/${availableLanguage}/${pathnameSuffix}`
    : `/${availableLanguage}`;

  return (
    <header className={styles.header}>
      {isHomeLinkVisible && (
        <a href={`/${lng}`} className={styles.home}>
          <HomeSVG width="42px" height="42px" />
        </a>
      )}
      <a href={newLanguageLink} className={styles.language}>
        <Button type="button" className={styles.button}>
          {availableLanguage}
        </Button>
      </a>
    </header>
  );
};

export default Header;
