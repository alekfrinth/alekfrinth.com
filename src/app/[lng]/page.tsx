import { useTranslation } from '@/app/i18n';
import Link from 'next/link';

import Button from '@/app/components/common/Button';
import Footer from '@/app/components/common/Footer';
import Header from '@/app/components/common/Header';

import styles from './index.module.scss';

const Home = async ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <>
      <Header lng={lng} />

      <main className={styles.main}>
        <Link href={`/${lng}/the-body-of-freedom`} className={styles.button}>
          <Button>{t('body-freedom')}</Button>
        </Link>
        <Button color="secondary" disabled className={styles.button}>
          {t('in-progress')}
        </Button>
        <Button color="tertiary" disabled className={styles.button}>
          {t('in-progress')}
        </Button>
      </main>
      <Footer lng={lng} />
    </>
  );
};

export default Home;
