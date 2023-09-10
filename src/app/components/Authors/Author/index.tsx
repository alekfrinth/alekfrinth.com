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

const Author = async ({ lng, authorData: { data, imageUrl } }: Props) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <div className={styles.container}>
      <Image
        src={imageUrl}
        alt={t(data.name)}
        width={165}
        height={215}
        className={styles.image}
      />
      <div className={styles.description}>
        <p className={styles.name}>{t(data.name)}</p>
        <p className={styles.job}>{t(data.job)}</p>
        <div className={styles.social}>
          {data.email && (
            <p className={styles.email}>
              <a href={`mailto: ${data.email}`}>{data.email}</a>
            </p>
          )}
          <div className={styles['social-icons-container']}>
            {data.links.instagram && (
              <a
                href={data.links.instagram}
                className={styles['social-icon']}
                target="_blank"
              >
                <InstagramSVG className={styles['social-icon']} />
              </a>
            )}
            {data.links.twitter && (
              <a
                href={data.links.twitter}
                className={styles['social-icon']}
                target="_blank"
              >
                <TwitterSVG className={styles['social-icon']} />
              </a>
            )}
            {data.links.tiktok && (
              <a
                href={data.links.tiktok}
                className={styles['social-icon']}
                target="_blank"
              >
                <TikTokSVG className={styles['social-icon']} />
              </a>
            )}
            {data.links.youtube && (
              <a
                href={data.links.youtube}
                className={styles['social-icon']}
                target="_blank"
              >
                <YoutubeSVG className={styles['social-icon']} />
              </a>
            )}
            {data.links.telegram && (
              <a
                href={data.links.telegram}
                className={styles['social-icon']}
                target="_blank"
              >
                <TelegramSVG className={styles['social-icon']} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
