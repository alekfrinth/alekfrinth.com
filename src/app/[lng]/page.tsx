import Link from 'next/link';
import { useTranslation } from '../i18n';
import Header from '../components/Header';

const Home = async ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng);

  return (
    <>
      <Header lng={lng} />
    </>
  );
};

export default Home;

// export const getStaticProps = () => {
//   const { locales } = i18nextConfig.i18n;
//   return {
//     props: {
//       locales,
//     },
//   };
// };
