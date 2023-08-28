import { useTranslation } from '@/app/i18n';
import Image from 'next/image';

import PaintingDescriptionWrapper from '@/app/components/common/PaintingDescriptionWrapper';

import Painting_7 from '@/app/assets/images/paintings/Painting_7.png';
import Painting_8 from '@/app/assets/images/paintings/Painting_8.png';

import styles from './index.module.scss';

type Props = {
  lng: string;
};

const PaintingsPart3 = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <div className={styles.container}>
      <Image
        src={Painting_7}
        alt="painting"
        width={425}
        height={195}
        style={{ objectFit: 'cover' }}
      />
      <Image
        src={Painting_8}
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
