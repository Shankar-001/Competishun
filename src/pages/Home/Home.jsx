import ContactComponent from '../../components/Contact/Contact';
import { Director } from '../../components/Director/Director';
import FreeStudy from '../../components/Home/FreeStudy';
import HighlightSection from '../../components/Home/HighlightSection';
import ResultsSection from '../../components/Home/ResultsSection';
import TestimonialsSection from '../../components/Home/TestimonialsSection';

const Home = () => {
  return (
    <div className="Home">
      <HighlightSection />
      <Director />
      <ResultsSection />
      <ContactComponent />
      <TestimonialsSection />
      <FreeStudy />
    </div>
  );
};

export default Home;
