'use client';

import Link from 'next/link';

import InstagramSVG from '@/app/assets/icons/instagram.svg';
import TikTokSVG from '@/app/assets/icons/tik-tok.svg';
import TwitterSVG from '@/app/assets/icons/twitter.svg';
import YoutubeSVG from '@/app/assets/icons/youtube.svg';

import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contacts}>
          <div className={styles['social-container']}>
            <Link
              href="https://www.instagram.com/alekfrinth/"
              className={styles.social}
              target="_blank"
            >
              <InstagramSVG className={styles['social-icon']} />
            </Link>
            <Link
              href="https://twitter.com/AlekFrinth"
              className={styles.social}
              target="_blank"
            >
              <TwitterSVG className={styles['social-icon']} />
            </Link>
            <Link
              href="https://www.tiktok.com/@alekfrinth"
              className={styles.social}
              target="_blank"
            >
              <TikTokSVG className={styles['social-icon']} />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCf_eyFlSKYJD1-uJQrNqUKg/featured"
              className={styles.social}
              target="_blank"
            >
              <YoutubeSVG className={styles['social-icon']} />
            </Link>
          </div>
          <div className={styles.mail}>
            <span>alekfrinth@gmail.com</span>
          </div>
        </div>
        <div className={styles.description}>
          <span>© alekfrinth 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
