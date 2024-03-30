import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Result from '../pages/Result';
import Home from '../pages/Home/Home';
import Course from '../pages/Course/Course';
import TestSeries from '../pages/Test Series/TestSeries';
import CourseDetails from '../pages/Course/CourseDetails';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/result" element={<Result />} />
      <Route path="/courses/:courseLink" element={<Course />} />
      <Route path="/courses/:courseLink/:courseDetails" element={<CourseDetails />} />
      <Route path="/testSeries" element={<TestSeries />} />
      {/* <Route path="/*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};
export default AllRoutes;
