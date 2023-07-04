import Header from '@/app/components/Header';

const FreedomBody = ({ params: { lng } }: { params: { lng: string } }) => {
  return (
    <>
      <Header lng={lng} />
    </>
  );
};

export default FreedomBody;