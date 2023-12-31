import { StaticImageData } from 'next/image';

import AlekPhoto from '@/app/assets/images/authors/alekfrinth.png';
import AnastasiiaKuchmenkoPhoto from '@/app/assets/images/authors/anastasiiakuchmenko.png';
import ArtemPalamarchukPhoto from '@/app/assets/images/authors/artempalamarchuk.png';
import OleksandrHrebeniukPhoto from '@/app/assets/images/authors/oleksandrhrebeniuk.png';

export type AuthorData = {
  imageUrl: string | StaticImageData;
  data: {
    name: string;
    job: string;
    email?: string;
    links: {
      instagram?: string;
      twitter?: string;
      tiktok?: string;
      youtube?: string;
      telegram?: string;
    };
  };
};

export const authors: AuthorData[] = [
  {
    imageUrl: AlekPhoto,
    data: {
      name: 'alek-frinth-name',
      job: 'alek-frinth-job',
      email: 'alekfrinth@gmail.com',
      links: {
        instagram: 'http://instagram.com/alekfrinth/',
        twitter: 'https://twitter.com/AlekFrinth',
        tiktok: 'https://www.tiktok.com/@alekfrinth',
        youtube:
          'https://www.youtube.com/channel/UCf_eyFlSKYJD1-uJQrNqUKg/featured',
      },
    },
  },
  {
    imageUrl: AnastasiiaKuchmenkoPhoto,
    data: {
      name: 'anastasia-karooka-name',
      job: 'anastasia-karooka-job',
      links: {
        instagram: 'http://instagram.com/anastasiyafr/',
        twitter: 'https://twitter.com/RG_Simple',
      },
    },
  },
  {
    imageUrl: OleksandrHrebeniukPhoto,
    data: {
      name: 'oleksandr-hrebeniuk-name',
      job: 'oleksandr-hrebeniuk-job',
      email: 'alex.grebenuk@gmail.com',
      links: {
        instagram: 'http://instagram.com/oleksandr.hrebeniuk/',
        telegram: 'https://t.me/alexsleepwalker',
      },
    },
  },
  {
    imageUrl: ArtemPalamarchukPhoto,
    data: {
      name: 'artem-palamarchuk-name',
      job: 'artem-palamarchuk-job',
      email: 'artvideopalam@gmail.com',
      links: {
        instagram: 'http://instagram.com/artpalam/',
        telegram: 'https://t.me/artpalam',
      },
    },
  },
];
