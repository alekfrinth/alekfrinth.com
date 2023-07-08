import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const FreedomBody = ({ params: { lng } }: { params: { lng: string } }) => {
  return (
    <>
      <Header lng={lng} />
      <Footer />
    </>
  );
};

export default FreedomBody;
