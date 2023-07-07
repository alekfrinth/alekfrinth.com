import { useTranslation } from '@/app/i18n';
import Link from 'next/link';

import Button from '@/app/components/Button';
import Header from '@/app/components/Header';

import styles from './index.module.scss';

const Home = async ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <>
      <Header lng={lng} />
      <main className={styles.main}>
        <Link href={`/${lng}/freedom-body`} className={styles.button}>
          <Button>{t('body-freedom')}</Button>
        </Link>
        <Button color="secondary" disabled className={styles.button}>
          {t('in-progress')}
        </Button>
        <Button color="tertiary" disabled className={styles.button}>
          {t('in-progress')}
        </Button>
      </main>
    </>
  );
};

export default Home;
