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
        <p className={styles.more}>{t('more-than-year')}</p>
        <Image
          src={Info_2_Photo_1}
          alt={t('painting-1')}
          width={540}
          height={810}
          style={{ objectFit: 'cover' }}
          className={styles.image}
        />

        <p className={styles.body}>{t('body-freedom-is')}</p>
        <Image
          src={Info_2_Photo_3}
          alt={t('painting-1')}
          width={720}
          height={480}
          className={cn(styles.mobile, styles.image)}
          style={{ objectFit: 'cover' }}
        />
        <Image
          src={Info_2_Photo_2}
          alt={t('painting-1')}
          width={540}
          height={810}
          className={cn(styles.desktop)}
          style={{ objectFit: 'cover' }}
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
        />
        <Image
          src={Info_2_Photo_2}
          alt={t('painting-1')}
          width={540}
          height={810}
          className={cn(styles.mobile, styles.image)}
          style={{ objectFit: 'cover' }}
        />
        <Image
          src={Info_2_Photo_4}
          alt={t('painting-1')}
          width={720}
          height={480}
          style={{ objectFit: 'cover' }}
          className={cn(styles.image)}
        />
      </div>
    </>
  );
};

export default MoreThanYearSection;
