'use client';

import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import Link from 'next/link';

import GithubSVG from '@/app/assets/icons/github.svg';
import InstagramSVG from '@/app/assets/icons/instagram.svg';
import LinkedInSVG from '@/app/assets/icons/linkedin.svg';
import TikTokSVG from '@/app/assets/icons/tik-tok.svg';
import TwitterSVG from '@/app/assets/icons/twitter.svg';
import YoutubeSVG from '@/app/assets/icons/youtube.svg';
import AvatarPolina from '@/app/assets/images/developers/polina_baksheieva.jpeg';
import AvatarVladyslav from '@/app/assets/images/developers/vladyslav_marchenko.png';

import styles from './index.module.scss';

const developers = [
  {
    name: 'polina-baksheieva-name',
    avatar: AvatarPolina,
    github: 'https://github.com/Polina04',
    linkedin: 'https://www.linkedin.com/in/polina-baksheieva-6909691b5',
    position: 'polina-baksheieva-position',
  },
  {
    name: 'vladyslav-marchenko-name',
    avatar: AvatarVladyslav,
    github: 'https://github.com/vvmarchenko',
    linkedin: 'https://www.linkedin.com/in/vvmarchenko/',
    position: 'vladyslav-marchenko-position',
  },
];

type Props = {
  lng: string;
};

const Footer = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <footer className={styles.footer}>
      <ul className={styles.developers}>
        {developers.map(developer => (
          <li className={styles.developer} key={developer.name}>
            <Image
              src={developer.avatar}
              alt="Polina Baksheieva"
              width={100}
              height={100}
              className={styles.avatar}
            />
            <div>
              <p className={styles.name}>
                <span>{t(developer.name)}</span>
                <a href={developer.linkedin} target="_blank">
                  <LinkedInSVG />
                </a>
                <a href={developer.github} target="_blank">
                  <GithubSVG />
                </a>
              </p>
              <p className={styles.position}>{t(developer.position)}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.contacts}>
        <div className={styles['social-container']}>
          <a
            href="https://www.instagram.com/alekfrinth/"
            className={styles.social}
            target="_blank"
          >
            <InstagramSVG className={styles['social-icon']} />
          </a>
          <a
            href="https://twitter.com/AlekFrinth"
            className={styles.social}
            target="_blank"
          >
            <TwitterSVG className={styles['social-icon']} />
          </a>
          <a
            href="https://www.tiktok.com/@alekfrinth"
            className={styles.social}
            target="_blank"
          >
            <TikTokSVG className={styles['social-icon']} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCf_eyFlSKYJD1-uJQrNqUKg/featured"
            className={styles.social}
            target="_blank"
          >
            <YoutubeSVG className={styles['social-icon']} />
          </a>
        </div>
        <div className={styles.mail}>
          <span>alekfrinth@gmail.com</span>
        </div>
      </div>
      <div className={styles.description}>
        <span>© alekfrinth 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
