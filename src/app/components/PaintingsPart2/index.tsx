import { useTranslation } from '@/app/i18n';
import Image from 'next/image';

import PaintingDescriptionWrapper from '@/app/components/common/PaintingDescriptionWrapper';

import styles from './index.module.scss';

type Props = {
  lng: string;
};

const PaintingsPart2 = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, 'common');
  return (
    <div className={styles.container}>
      <PaintingDescriptionWrapper className={styles.paintings} position="left">
        <p className={styles.description}>
          <span>{t('canvas-no', { number: 4 })}</span>
          <span>{t('cm', { size: '40x30' })}</span>
          <span>{t('acrylic')}</span>
        </p>
        <p className={styles.description}>
          <span>{t('canvas-no', { number: 5 })}</span>
          <span>{t('cm', { size: '40x30' })}</span>
          <span>{t('acrylic')}</span>
        </p>
        <p className={styles.description}>
          <span>{t('canvas-no', { number: 6 })}</span>
          <span>{t('cm', { size: '30x40' })}</span>
          <span>{t('acrylic')}</span>
        </p>
      </PaintingDescriptionWrapper>

      <div className={styles.images}>
        <Image
          src="https://images.unsplash.com/photo-1618418721668-0d1f72aa4bab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="painting"
          width={262}
          height={188}
        />
        <Image
          src="https://images.unsplash.com/photo-1584902645120-f86567d892b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1625&q=80"
          alt="painting"
          width={262}
          height={188}
        />
        <Image
          src="https://images.unsplash.com/photo-1617654112368-307921291f42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80"
          alt="painting"
          width={188}
          height={262}
        />
      </div>
    </div>
  );
};

export default PaintingsPart2;
