import { useTranslation } from '@/app/i18n';
import cn from 'classnames';
import Image from 'next/image';
import React from 'react';

import Info_1_Photo_2 from '@/app/assets/images/photos/Info_1_Photo_2.png';
import Info_1_Photo_3 from '@/app/assets/images/photos/Info_1_Photo_3.png';
import Info_1_Photo_4 from '@/app/assets/images/photos/Info_1_Photo_4.png';
import Info_1_Photo_5 from '@/app/assets/images/photos/Info_1_Photo_5.png';

import styles from './index.module.scss';

type Props = {
  lng: string;
};

const PaintSection = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <>
      <div className={styles.container}>
        <Image
          src={Info_1_Photo_2}
          alt="body"
          width={540}
          height={810}
          className={styles.image}
        />

        <Image
          src={Info_1_Photo_4}
          width={720}
          height={480}
          alt="body"
          className={cn(styles.image, styles.mobile)}
          style={{ objectFit: 'cover' }}
        />

        <p>{t('paint-is')}</p>
        <Image
          src={Info_1_Photo_3}
          alt="body"
          width={540}
          height={810}
          className={cn(styles.image, styles.desktop)}
        />
      </div>
      <div className={styles.images}>
        <Image
          src={Info_1_Photo_4}
          width={720}
          height={480}
          alt="body"
          className={cn(styles.image, styles.desktop)}
        />
        <Image
          src={Info_1_Photo_3}
          alt="body"
          width={540}
          height={810}
          className={cn(styles.image, styles.mobile)}
        />
        <Image
          src={Info_1_Photo_5}
          width={720}
          height={480}
          alt="body"
          className={styles.image}
        />
      </div>
    </>
  );
};

export default PaintSection;
