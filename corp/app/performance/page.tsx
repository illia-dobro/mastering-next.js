import Hero from '@/components/hero';
import performanceImg from '@/public/performance.jpg';

const PerformancePage = () => {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="performance Img"
      title="We serve high performance apps"
    />
  );
};

export default PerformancePage;
