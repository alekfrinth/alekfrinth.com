import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { AuthorData } from '@/app/components/Authors/authors';

import InstagramSVG from '@/app/assets/icons/instagram.svg';
import TelegramSVG from '@/app/assets/icons/telegram.svg';
import TikTokSVG from '@/app/assets/icons/tik-tok.svg';
import TwitterSVG from '@/app/assets/icons/twitter.svg';
import YoutubeSVG from '@/app/assets/icons/youtube.svg';

import styles from './index.module.scss';

type Props = {
  lng: string;
  authorData: AuthorData;
};

const Author = async ({ lng, authorData }: Props) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <div className={styles.container}>
      <Image
        src={authorData.imageUrl}
        alt={t(authorData.data.name)}
        width={165}
        height={215}
        className={styles.image}
      />
      <p className={styles.name}>{t(authorData.data.name)}</p>
      <p className={styles.job}>{t(authorData.data.job)}</p>
      <div className={styles.social}>
        {authorData.data.email && (
          <p className={styles.email}>{authorData.data.email}</p>
        )}
        <div className={styles['social-icons-container']}>
          {authorData.data.links.instagram && (
            <Link
              href={authorData.data.links.instagram}
              className={styles['social-icon']}
              target="_blank"
            >
              <InstagramSVG className={styles['social-icon']} />
            </Link>
          )}
          {authorData.data.links.twitter && (
            <Link
              href={authorData.data.links.twitter}
              className={styles['social-icon']}
              target="_blank"
            >
              <TwitterSVG className={styles['social-icon']} />
            </Link>
          )}
          {authorData.data.links.tiktok && (
            <Link
              href={authorData.data.links.tiktok}
              className={styles['social-icon']}
              target="_blank"
            >
              <TikTokSVG className={styles['social-icon']} />
            </Link>
          )}
          {authorData.data.links.youtube && (
            <Link
              href={authorData.data.links.youtube}
              className={styles['social-icon']}
              target="_blank"
            >
              <YoutubeSVG className={styles['social-icon']} />
            </Link>
          )}
          {authorData.data.links.telegram && (
            <Link
              href={authorData.data.links.telegram}
              className={styles['social-icon']}
              target="_blank"
            >
              <TelegramSVG className={styles['social-icon']} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Author;
