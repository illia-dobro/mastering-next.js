import Hero from '@/components/hero';
import reliabilityImg from '@/public/reliability.jpg';

const ReliabilityPage = () => {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="performance Img"
      title="We are reliable"
    />
  );
};

export default ReliabilityPage;
