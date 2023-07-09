import { useTranslation } from '@/app/i18n';
import React from 'react';

import Author from '@/app/components/Authors/Author';
import { authors } from '@/app/components/Authors/authors';

import styles from './index.module.scss';

type Props = {
  lng: string;
};

const Authors = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <div className={styles.container}>
      <p className={styles['worked-by']}>{t('was-worked-on-by')}</p>
      <div className={styles['authors-container']}>
        {authors.map(author => (
          <Author key={author.data.name} lng={lng} authorData={author} />
        ))}
      </div>
    </div>
  );
};

export default Authors;
