import { useTranslation } from '@/app/i18n';
import cn from 'classnames';
import Image from 'next/image';

import PaintingDescriptionWrapper from '@/app/components/common/PaintingDescriptionWrapper';

import Painting_4 from '@/app/assets/images/paintings/Painting_4.png';
import Painting_5 from '@/app/assets/images/paintings/Painting_5.png';
import Painting_6 from '@/app/assets/images/paintings/Painting_6.png';

import styles from './index.module.scss';

type Props = {
  lng: string;
};

const PaintingsPart2 = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, 'common');
  return (
    <div className={styles.container}>
      <PaintingDescriptionWrapper
        className={cn(styles.paintings, styles.desktop)}
        position="left"
      >
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

      <div className={cn(styles.images, styles.desktop)}>
        <Image src={Painting_4} alt="painting" width={262} height={188} />
        <Image src={Painting_5} alt="painting" width={262} height={188} />
        <Image src={Painting_6} alt="painting" width={188} height={262} />
      </div>

      <div className={cn(styles.row, styles.mobile, styles.leftPadding)}>
        <Image src={Painting_4} alt="painting" width={202} height={145} />

        <PaintingDescriptionWrapper
          className={cn(styles['painting-description'])}
        >
          <p className={styles.description}>
            <span>{t('canvas-no', { number: 4 })}</span>
            <span>{t('cm', { size: '40x30' })}</span>
            <span>{t('acrylic')}</span>
          </p>
        </PaintingDescriptionWrapper>
      </div>

      <div className={cn(styles.row, styles.mobile, styles.rightPadding)}>
        <PaintingDescriptionWrapper
          className={cn(styles['painting-description'])}
          noBorders
        >
          <p className={styles.description}>
            <span>{t('canvas-no', { number: 5 })}</span>
            <span>{t('cm', { size: '40x30' })}</span>
            <span>{t('acrylic')}</span>
          </p>
        </PaintingDescriptionWrapper>
        <Image src={Painting_5} alt="painting" width={202} height={145} />
      </div>

      <div className={cn(styles.row, styles.mobile, styles.leftPadding)}>
        <Image src={Painting_6} alt="painting" width={145} height={202} />

        <PaintingDescriptionWrapper className={styles['painting-description']}>
          <p className={styles.description}>
            <span>{t('canvas-no', { number: 6 })}</span>
            <span>{t('cm', { size: '30x40' })}</span>
            <span>{t('acrylic')}</span>
          </p>
        </PaintingDescriptionWrapper>
      </div>
    </div>
  );
};

export default PaintingsPart2;
