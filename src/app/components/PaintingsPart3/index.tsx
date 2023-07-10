import { useTranslation } from '@/app/i18n';
import Image from 'next/image';

import PaintingDescriptionWrapper from '@/app/components/common/PaintingDescriptionWrapper';

import styles from './index.module.scss';

type Props = {
  lng: string;
};

const PaintingsPart3 = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <div className={styles.container}>
      <Image
        src="https://images.unsplash.com/photo-1557215121-f6da31003be7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="painting"
        width={425}
        height={195}
        style={{ objectFit: 'cover' }}
      />
      <Image
        src="https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        alt="painting"
        width={195}
        height={425}
        style={{ objectFit: 'cover' }}
      />
      <PaintingDescriptionWrapper className={styles.paintings}>
        <p className={styles.description}>
          <span>{t('canvas-no', { number: 7 })}</span>
          <span>{t('cm', { size: '60x30' })}</span>
          <span>{t('acrylic')}</span>
        </p>
        <p className={styles.description}>
          <span>{t('canvas-no', { number: 8 })}</span>
          <span>{t('cm', { size: '30x60' })}</span>
          <span>{t('acrylic')}</span>
        </p>
      </PaintingDescriptionWrapper>
    </div>
  );
};

export default PaintingsPart3;
