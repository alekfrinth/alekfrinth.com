import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import React from 'react';

import Author from '@/app/components/Authors/Author';

import AlekPhoto from '@/app/assets/images/authors/alekfrinth.png';
import DefaultPhoto from '@/app/assets/images/authors/default.png';

import styles from './index.module.scss';

type Props = {
  lng: string;
};

const Authors = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, 'common');
  const authors = [
    {
      imageUrl: AlekPhoto,
      userData: {
        name: 'Алек Фрінз',
        job: 'митець',
        email: 'alekfrinth@gmail.com',
        links: {
          instagram: 'https://www.instagram.com/alekfrinth/',
          twitter: 'https://twitter.com/AlekFrinth',
          tiktok: 'https://www.tiktok.com/@alekfrinth',
          youtube:
            'https://www.youtube.com/channel/UCf_eyFlSKYJD1-uJQrNqUKg/featured',
        },
      },
    },
    {
      imageUrl: DefaultPhoto,
      userData: {
        name: 'Анастасія Кароока',
        job: 'модель, виконавчий директор “Теронліфанс”',
        links: {
          instagram: 'https://www.instagram.com/anastasiyafr/',
          twitter: 'https://twitter.com/RG_Simple',
        },
      },
    },
    {
      imageUrl: DefaultPhoto,
      userData: {
        name: 'Катерина Анонімна',
        job: 'модель',
        links: {
          instagram: 'https://www.instagram.com/katusha0211/',
        },
      },
    },
    {
      imageUrl: DefaultPhoto,
      userData: {
        name: 'Олександр Гребенюк',
        job: 'фото',
        email: 'alex.grebenuk@gmail.com',
        links: {
          instagram: 'https://www.instagram.com/oleksandr.hrebeniuk/',
          telegram: 'https://t.me/alexsleepwalker',
        },
      },
    },
    {
      imageUrl: DefaultPhoto,
      userData: {
        name: 'Артем Паламарчук',
        job: 'відео, монтаж',
        email: 'artvideopalam@gmail.com',
        links: {
          instagram: 'https://www.instagram.com/artpalam/',
          telegram: 't.me/artpalam',
        },
      },
    },
  ];

  return (
    <div className={styles.container}>
      <p className={styles['worked-by']}>{t('was-worked-on-by')}</p>
      <div className={styles['authors-container']}>
        {authors.map((author, index) => (
          <Author
            key={index}
            lng={lng}
            imageUrl={author.imageUrl}
            userData={author.userData}
          />
        ))}
      </div>
    </div>
  );
};

export default Authors;
