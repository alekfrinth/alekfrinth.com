import { useTranslation } from '@/app/i18n';
import cn from 'classnames';
import Image from 'next/image';

import Info_2_Photo_1 from '@/app/assets/images/photos/Info_2_Photo_1.png';
import Info_2_Photo_2 from '@/app/assets/images/photos/Info_2_Photo_2.png';
import Info_2_Photo_3 from '@/app/assets/images/photos/Info_2_Photo_3.png';
import Info_2_Photo_4 from '@/app/assets/images/photos/Info_2_Photo_4.png';

import styles from './index.module.scss';

type Props = {
  lng: string;
};

const MoreThanYearSection = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <>
      <div className={styles.container}>
        <p className={styles.more}>
          {t('more-than-year-1')} <span>{t('more-than-year-2')}</span>
        </p>
        <Image
          src={Info_2_Photo_1}
          alt={t('painting-1')}
          width={540}
          height={810}
          style={{ objectFit: 'cover' }}
          className={styles.image}
          loading="eager"
        />

        <p className={styles.body}>
          {t('body-freedom-is-1')}
          <span>{t('body-freedom-is-2')}</span>
          <span>{t('body-freedom-is-3')}</span>
        </p>
        <Image
          src={Info_2_Photo_3}
          alt={t('painting-1')}
          width={720}
          height={480}
          className={cn(styles.mobile, styles.image)}
          style={{ objectFit: 'cover' }}
          loading="eager"
        />
        <Image
          src={Info_2_Photo_2}
          alt={t('painting-1')}
          width={540}
          height={810}
          className={cn(styles.desktop)}
          style={{ objectFit: 'cover' }}
          loading="eager"
        />
      </div>

      <div className={styles.images}>
        <Image
          src={Info_2_Photo_3}
          alt={t('painting-1')}
          width={720}
          height={480}
          style={{ objectFit: 'cover' }}
          className={cn(styles.desktop)}
          loading="eager"
        />
        <Image
          src={Info_2_Photo_2}
          alt={t('painting-1')}
          width={540}
          height={810}
          className={cn(styles.mobile, styles.image)}
          style={{ objectFit: 'cover' }}
          loading="eager"
        />
        <Image
          src={Info_2_Photo_4}
          alt={t('painting-1')}
          width={720}
          height={480}
          style={{ objectFit: 'cover' }}
          className={cn(styles.image)}
          loading="eager"
        />
      </div>
    </>
  );
};

export default MoreThanYearSection;
