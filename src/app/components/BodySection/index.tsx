import { useTranslation } from '@/app/i18n';
import Image from 'next/image';

import Info_1_Photo_1 from '@/app/assets/images/photos/Info_1_Photo_1.png';

import styles from './index.module.scss';

type Props = {
  lng: string;
};
const BodySection = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <div className={styles.wrapper}>
      <p className={styles.description}>{t('body-is')}</p>
      <Image
        src={Info_1_Photo_1}
        alt="body"
        width={540}
        height={810}
        className={styles.image}
        loading="eager"
      />
    </div>
  );
};

export default BodySection;
