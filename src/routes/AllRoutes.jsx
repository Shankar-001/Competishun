import { Route, Routes } from 'react-router-dom';
// import About from '../pages/About';
import Contact from '../pages/Contact';
import Result from '../pages/Result';
import Home from '../pages/Home/Home';
import Course from '../pages/Course/Course';
import TestSeries from '../pages/Test Series/TestSeries';
import CourseDetails from '../pages/Course/CourseDetails';
import Merchandise from '../pages/Merchandise';
import Gallery from '../pages/Gallery';
import { AboutUs } from '../pages/AboutUs/AboutUs';
import { DirectorInfo } from '../pages/Director/DirectorInfo';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/result" element={<Result />} />
      <Route path="/courses/:courseLink" element={<Course />} />
      <Route path="/courses/:courseLink/:courseDetails" element={<CourseDetails />} />
      <Route path="/testSeries" element={<TestSeries />} />
      <Route path="/merchandise" element={<Merchandise />} />
      <Route path="/gallery" element={<Gallery />} />

      {/* extra routes */}
      <Route path="/about" element={<AboutUs />} />
      <Route path="/director/:name" element={<DirectorInfo />} />


      {/* <Route path="/*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};
export default AllRoutes;
