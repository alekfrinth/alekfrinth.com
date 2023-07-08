import { useTranslation } from '@/app/i18n';
import Image from 'next/image';

import PaintingDescriptionWrapper from '../common/PaintingDescriptionWrapper';
import styles from './index.module.scss';

type Props = {
  lng: string;
};

const PaintingsPart1 = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <div className={styles.container}>
      <p className={styles.description}>{t('8-paintings')}</p>
      <div className={styles.images}>
        <Image
          src="https://images.unsplash.com/photo-1609703048009-d3576872b32c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80"
          alt={t('painting-1')}
          width={262}
          height={357}
          style={{ objectFit: 'cover' }}
        />
        <Image
          src="https://images.unsplash.com/photo-1568074532275-b57393b08c64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt={t('painting-2')}
          width={262}
          height={357}
          style={{ objectFit: 'cover' }}
        />
        <Image
          src="https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
          alt={t('painting-3')}
          width={262}
          height={357}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <PaintingDescriptionWrapper className={styles['painting-description']}>
        <p className={styles.painting}>
          <span>{t('painting-1')}</span>
          <span>{t('cm', { size: '60x80' })}</span>
          <span>{t('acrylic')}</span>
        </p>
        <p className={styles.painting}>
          <span>{t('painting-2')}</span>
          <span>{t('cm', { size: '60x80' })}</span>
          <span>{t('acrylic')}</span>
        </p>
        <p className={styles.painting}>
          <span>{t('painting-3')}</span>
          <span>{t('cm', { size: '60x80' })}</span>
          <span>{t('acrylic')}</span>
        </p>
      </PaintingDescriptionWrapper>
    </div>
  );
};

export default PaintingsPart1;
