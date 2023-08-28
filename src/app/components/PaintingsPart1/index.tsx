import { useTranslation } from '@/app/i18n';
import Image from 'next/image';

import Painting_1 from '@/app/assets/images/paintings/Painting_1.png';
import Painting_2 from '@/app/assets/images/paintings/Painting_2.png';
import Painting_3 from '@/app/assets/images/paintings/Painting_3.png';

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
          src={Painting_1}
          alt={t('painting-1')}
          width={262}
          height={357}
          style={{ objectFit: 'cover' }}
        />
        <Image
          src={Painting_2}
          alt={t('painting-2')}
          width={262}
          height={357}
          style={{ objectFit: 'cover' }}
        />
        <Image
          src={Painting_3}
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
