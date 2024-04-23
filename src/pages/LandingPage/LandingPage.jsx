import CoursesSection from '../../components/LandingComponent/CoursesSection';
import LandingDirector from '../../components/LandingComponent/LandingDirector';
import LandingFAQ from '../../components/LandingComponent/LandingFAQ';
import LandingHomeSection from '../../components/LandingComponent/LandingHomeSection';
import LandingTestimonials from '../../components/LandingComponent/LandingTestimonials';
import LandingVideo from '../../components/LandingComponent/LandingVideo';
import LandingWhyCompethisun from '../../components/LandingComponent/LandingWhyCompethisun';
import ResultSection from '../../components/LandingComponent/ResultSection';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LandingPageData from '../../Data/LandingPageCourseDetail';

const LandingPage = () => {
  const { courseName } = useParams();
  const [selectedData, setSelectedData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedData = LandingPageData.find(
      (data) => data.title === courseName
    );
    if (selectedData) setSelectedData(selectedData);
    else navigate('/');
  }, []);

  return (
    <div className="Landing-Page-Main-Container">
      {selectedData && (
        <>
          <LandingHomeSection CourseData={selectedData} />
          <LandingVideo data={selectedData} />
          <LandingWhyCompethisun CourseData={selectedData} />
          <LandingTestimonials />
          <ResultSection />
          <CoursesSection />
          <LandingFAQ />
        </>
      )}
    </div>
  );
};
export default LandingPage;
