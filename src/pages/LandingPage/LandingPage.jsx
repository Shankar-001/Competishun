import CoursesSection from '../../components/LandingComponent/CoursesSection';
import LandingDirector from '../../components/LandingComponent/LandingDirector';
import LandingFAQ from '../../components/LandingComponent/LandingFAQ';
import LandingHomeSection from '../../components/LandingComponent/LandingHomeSection';
import LandingTestimonials from '../../components/LandingComponent/LandingTestimonials';
import LandingVideo from '../../components/LandingComponent/LandingVideo';
import LandingWhyCompethisun from '../../components/LandingComponent/LandingWhyCompethisun';
import ResultSection from '../../components/LandingComponent/ResultSection';

import praveenThumbnail from '../../assets/LandingPage/thumbnail/PraveenThumbnail.png';
import prakharThumbnail from '../../assets/LandingPage/thumbnail/PrakharThumbnail.png';
import prathamThumbnail from '../../assets/LandingPage/thumbnail/PrathamThumbnail.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const LandingPage = () => {
  const LandingPageData = [
    {
      title: 'praveen',
      name: 'Praveen',
      videoUrl: 'https://www.youtube.com/embed/7PlZ4dwT56I?&autoplay=1',
      thumbnail: praveenThumbnail,
    },
    {
      title: 'prakhar',
      name: 'Prakhar',
      videoUrl: 'https://www.youtube.com/embed/LCLJSlJF74M?&autoplay=1',
      thumbnail: prakharThumbnail,
    },
    {
      title: 'pratham',
      name: 'Pratham',
      videoUrl: 'https://www.youtube.com/embed/fttHYcikB_U?&autoplay=1',
      thumbnail: prathamThumbnail,
    },
  ];

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

  console.log(selectedData);
  return (
    <div className="Landing-Page-Main-Container">
      {selectedData && (
        <>
          <LandingHomeSection />
          <LandingVideo data={selectedData} />
          <LandingWhyCompethisun />
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
