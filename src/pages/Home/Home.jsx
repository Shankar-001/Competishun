import { Director } from '../../components/Director/Director';
import HighlightSection from '../../components/Home/HighlightSection';
import ResultsSection from '../../components/Home/ResultsSection';
import TestimonialsSection from '../../components/Home/TestimonialsSection';

const Home = () => {
  return (
    <div className="Home">
      <HighlightSection />
      <Director />


      <ResultsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
