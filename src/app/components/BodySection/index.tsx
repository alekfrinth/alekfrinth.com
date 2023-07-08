import { useTranslation } from '@/app/i18n';
import Image from 'next/image';

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
        src="https://images.unsplash.com/photo-1566082544614-23fbacd0322a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
        alt="body"
        width={540}
        height={810}
      />
    </div>
  );
};

export default BodySection;
