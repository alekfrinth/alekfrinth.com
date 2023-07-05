import { useTranslation } from '@/app/i18n';

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const Home = async ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <>
      <Header lng={lng} />
      <Footer />
    </>
  );
};

export default Home;
