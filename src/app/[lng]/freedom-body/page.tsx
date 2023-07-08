import { useTranslation } from '@/app/i18n';

import Authors from '@/app/components/Authors';
import BodySection from '@/app/components/BodySection';
import MoreThanYearSection from '@/app/components/MoreThanYearSection';
import PaintSection from '@/app/components/PaintSection';
import PaintingsPart1 from '@/app/components/PaintingsPart1';
import PaintingsPart2 from '@/app/components/PaintingsPart2';
import PaintingsPart3 from '@/app/components/PaintingsPart3';
import YoutubeVideo from '@/app/components/YoutubeVideo';
import Footer from '@/app/components/common/Footer';
import Header from '@/app/components/common/Header';

import styles from './index.module.scss';

const FreedomBody = async ({
  params: { lng },
}: {
  params: { lng: string };
}) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <>
      <Header lng={lng} />

      <main className={styles.main}>
        <div className={styles.container}>
          <h1>{t('body-freedom')}</h1>
          <p>{t('project-freedom-body')}</p>
          <YoutubeVideo className={styles.video} />
        </div>
        <PaintingsPart1 lng={lng} />
        <BodySection lng={lng} />
        <PaintSection lng={lng} />
        <PaintingsPart2 lng={lng} />
        <MoreThanYearSection lng={lng} />
        <PaintingsPart3 lng={lng} />
        <Authors lng={lng} />
        <p className={styles.report}>{t('wait-for-report')}</p>
      </main>

      <Footer />
    </>
  );
};

export default FreedomBody;
