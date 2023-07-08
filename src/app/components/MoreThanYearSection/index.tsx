import { useTranslation } from '@/app/i18n';
import Image from 'next/image';

import styles from './index.module.scss';

type Props = {
  lng: string;
};

const MoreThanYearSection = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <>
      <div className={styles.container}>
        <p className={styles.more}>{t('more-than-year')}</p>
        <Image
          src="https://images.unsplash.com/photo-1581439645268-ea7bbe6bd091?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80"
          alt={t('painting-1')}
          width={540}
          height={810}
          style={{ objectFit: 'cover' }}
        />

        <p className={styles.body}>{t('body-freedom-is')}</p>
        <Image
          src="https://images.unsplash.com/photo-1552559789-c57c0a79a8cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt={t('painting-1')}
          width={540}
          height={810}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.images}>
        <Image
          src="https://images.unsplash.com/photo-1571037697753-e796f324bbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2055&q=80"
          alt={t('painting-1')}
          width={720}
          height={480}
          style={{ objectFit: 'cover' }}
        />
        <Image
          src="https://images.unsplash.com/photo-1600016326108-40b24ee22cd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt={t('painting-1')}
          width={720}
          height={480}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </>
  );
};

export default MoreThanYearSection;
