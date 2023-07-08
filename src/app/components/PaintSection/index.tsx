import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import React from 'react';

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
          src="https://images.unsplash.com/photo-1570089434134-9fe163fcfb8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=808&q=80"
          alt="body"
          width={540}
          height={810}
          className={styles.image}
        />

        <p>{t('paint-is')}</p>
        <Image
          src="https://images.unsplash.com/photo-1614220683044-58f9e9548df6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
          alt="body"
          width={540}
          height={810}
          className={styles.image}
        />
      </div>
      <div className={styles.images}>
        <Image
          src="https://images.unsplash.com/photo-1615966996783-5d361a011237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          width={720}
          height={480}
          alt="body"
          className={styles.image}
          style={{ objectFit: 'cover' }}
        />
        <Image
          src="https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80"
          width={720}
          height={480}
          alt="body"
          className={styles.image}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </>
  );
};

export default PaintSection;
