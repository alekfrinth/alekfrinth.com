import { useTranslation } from '@/app/i18n';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

import InstagramSVG from '@/app/assets/icons/instagram.svg';
import TelegramSVG from '@/app/assets/icons/telegram.svg';
import TikTokSVG from '@/app/assets/icons/tik-tok.svg';
import TwitterSVG from '@/app/assets/icons/twitter.svg';
import YoutubeSVG from '@/app/assets/icons/youtube.svg';

import styles from './index.module.scss';

type Props = {
  lng: string;
  imageUrl: string | StaticImageData;
  userData: {
    name: string;
    job: string;
    email?: string | null | undefined;
    links?: {
      instagram?: string | null | undefined;
      twitter?: string | null | undefined;
      tiktok?: string | null | undefined;
      youtube?: string | null | undefined;
      telegram?: string | null | undefined;
    };
  };
};

const Author = async ({ lng, imageUrl, userData }: Props) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <div className={styles.container}>
      <Image
        src={imageUrl}
        alt="body"
        width={165}
        height={215}
        className={styles.image}
      />
      <p className={styles.name}>{userData.name}</p>
      <p className={styles.job}>{userData.job}</p>
      <div className={styles.social}>
        {userData.email && <p className={styles.email}>{userData.email}</p>}
        <div className={styles['social-icons-container']}>
          {userData.links?.instagram && (
            <Link
              href={userData.links.instagram}
              className={styles['social-icon']}
              target="_blank"
            >
              <InstagramSVG className={styles['social-icon']} />
            </Link>
          )}
          {userData.links?.twitter && (
            <Link
              href={userData.links.twitter}
              className={styles['social-icon']}
              target="_blank"
            >
              <TwitterSVG className={styles['social-icon']} />
            </Link>
          )}
          {userData.links?.tiktok && (
            <Link
              href={userData.links.tiktok}
              className={styles['social-icon']}
              target="_blank"
            >
              <TikTokSVG className={styles['social-icon']} />
            </Link>
          )}
          {userData.links?.youtube && (
            <Link
              href={userData.links.youtube}
              className={styles['social-icon']}
              target="_blank"
            >
              <YoutubeSVG className={styles['social-icon']} />
            </Link>
          )}
          {userData.links?.telegram && (
            <Link
              href={userData.links.telegram}
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
