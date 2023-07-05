'use client';

import Link from 'next/link';

import InstagramSVG from '@/app/assets/icons/instagram.svg';
import TikTokSVG from '@/app/assets/icons/tik-tok.svg';
import TwitterSVG from '@/app/assets/icons/twitter.svg';
import YoutubeSVG from '@/app/assets/icons/youtube.svg';

import styles from './index.module.scss';

const SocialIcons = ({ iconSize }: { iconSize: number }) => {
  return (
    <div>
      <Link
        href="https://www.instagram.com/alekfrinth/"
        className={styles.social}
      >
        <InstagramSVG width={`${iconSize}px`} height={`${iconSize}px`} />
      </Link>
      <Link href="https://twitter.com/AlekFrinth" className={styles.social}>
        <TwitterSVG width={`${iconSize}px`} height={`${iconSize}px`} />
      </Link>
      <Link href="https://www.tiktok.com/@alekfrinth" className={styles.social}>
        <TikTokSVG width={`${iconSize}px`} height={`${iconSize}px`} />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCf_eyFlSKYJD1-uJQrNqUKg/featured"
        className={styles.social}
      >
        <YoutubeSVG width={`${iconSize}px`} height={`${iconSize}px`} />
      </Link>
    </div>
  );
};

const Mail = () => {
  return (
    <div className={styles.mail}>
      <span>alekfrinth@gmail.com</span>
    </div>
  );
};

const Description = () => {
  return (
    <div className={styles.description}>
      <span>© alekfrinth 2023</span>
    </div>
  );
};

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <SocialIcons iconSize={42} />
      <Mail />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Contacts />
        <Description />
      </div>
    </footer>
  );
};

export default Footer;
