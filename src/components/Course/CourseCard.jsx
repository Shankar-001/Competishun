import { useNavigate, useParams } from 'react-router-dom';
import {
  NeetShortTermData,
  JeeFullYearMain2025,
  JeeFullYearMainAdv2026,
  JeeFullYearMainAdv2025,
  JeeOfflineData2025,
  JeeOfflineData2026,
  NeetFullYearData2025,
  NeetFullYearData2026,
  NeetOfflineData2025,
  NeetOfflineData2026,
  JeeShortTermMainData,
  JeeShortTermAdvData,
  JeeShortTermMainAndAdvData,
  DLPData2025,
  DLPData2026,
} from '../../Data/CourseData';
import CardComponent from '../CardComponent/CardComponent';
import { useEffect } from 'react';

const CourseCard = () => {
  const { courseLink } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!courseData[courseLink]) {
      navigate('/');
    }
  }, [navigate, courseLink]);

  const courseData = {
    'jee-online-courses': {
      details: [
        {
          title: 'Full Year Online Courses Target JEE (MAIN+ADV)',
          year: '2025',
          data: JeeFullYearMainAdv2025,
        },
        {
          title: 'Full Year Online Course Target JEE (MAIN+ADV)',
          year: '2026',
          data: JeeFullYearMainAdv2026,
        },
        {
          title: 'Full Year Online Course Target JEE (MAIN)',
          year: '2025',
          data: JeeFullYearMain2025,
        },
        // {
        //   title: 'Full Year Online Courses JEE MAIN',
        //   year: '2026',
        //   data: JeeFullYearData,
        // },
        {
          title: 'Short Term Online Courses Target JEE (MAIN)',
          year: '2025',
          data: JeeShortTermMainData,
        },
        {
          title: 'Short Term Online Course Target JEE (ADV)',
          year: '2025',
          data: JeeShortTermAdvData,
        },
        // {
        //   title: 'Short Term Online Course Target JEE (MAIN+ADV)',
        //   year: '2025',
        //   data: JeeShortTermMainAndAdvData,
        // },
        {
          title: '1 Year DLP(Distance Learning Program) Courses Target JEE (Main+Adv)',
          year: '2025',
          data: DLPData2025,
        },
        {
          title: '1 Year DLP(Distance Learning Program) Course Target JEE (Main+Adv)',
          year: '2026',
          data: DLPData2026,
        },
      ],
    },
    'jee-offline-courses': {
      details: [
        {
          title: 'Full Year Offline Courses Target JEE (MAIN+ADV)',
          year: '2025',
          data: JeeOfflineData2025,
        },
        {
          title: 'Full Year Offline Courses Target JEE (MAIN+ADV)',
          year: '2026',
          data: JeeOfflineData2026,
        },
      ],
    },
    'neet-online-courses': {
      details: [
        {
          title: 'Full Year Courses Target NEET (UG)',
          year: '2025',
          data: NeetFullYearData2025,
        },
        {
          title: 'Full Year Course Target NEET (UG)',
          year: '2026',
          data: NeetFullYearData2026,
        },
        {
          title: 'Short Term Online Course Target NEET (UG)',
          year: '2025',
          data: NeetShortTermData,
        },
      ],
    },
    'neet-offline-courses': {
      details: [
        {
          title: 'Full Year Offline Courses Target NEET (UG)',
          year: '2025',
          data: NeetOfflineData2025,
        },
        {
          title: 'Full Year Offline Course Target NEET (UG)',
          year: '2026',
          data: NeetOfflineData2026,
        },
      ],
    },
  };

  const handleCardClick = (item) => {
    navigate(`/courses/${courseLink}/${item.title}`);
  };

  const DataCourseCards = ({ detail }) => {
    const { title, data, year } = detail;

    return (
      <>
        <div className="CourseDetails">
          {title} <span>{year}</span>
        </div>
        <div className="CourseCardComponent">
          {data.map((item, index) => (
            <CardComponent
              key={index}
              data={item}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="CourseCardMainContainer">
      {courseData[courseLink] && (
        <div className="CourseCardSubContainer">
          {courseData[courseLink].details.map((detail, index) => (
            <DataCourseCards key={index} detail={detail} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseCard;
