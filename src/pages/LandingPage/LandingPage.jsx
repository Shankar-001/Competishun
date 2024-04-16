import LandingFAQ from '../../components/LandingComponent/LandingFAQ';
import LandingHomeSection from '../../components/LandingComponent/LandingHomeSection';

import LandingTestimonials from '../../components/LandingComponent/LandingTestimonials';

import CoursesSection from '../../components/LandingComponent/CoursesSection';

import ResultSection from '../../components/LandingComponent/ResultSection';

const LandingPage = () => {
  return (
    <div className="Landing-Page-Main-Container">
      <LandingHomeSection />
      <LandingTestimonials />
      <LandingFAQ />
      <CoursesSection />
      <ResultSection />
    </div>
  );
};
