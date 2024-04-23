import { Navigate, Route, Routes } from 'react-router-dom';
// import About from '../pages/About';
import Contact from '../pages/Contact';
import Result from '../pages/Result';
import Home from '../pages/Home/Home';
import Course from '../pages/Course/Course';
import TestSeries from '../pages/Test Series/TestSeries';
import CourseDetails from '../pages/Course/CourseDetails';
import Merchandise from '../pages/Merchandise/Merchandise';
import Gallery from '../pages/Gallery';
import DirectorInfo from '../pages/Director/DirectorInfo';
import AboutUs from '../pages/AboutUs/AboutUs';
import TestSeriesDetails from '../pages/Test Series/TestSeriesDetails';
import { StudyFree } from '../pages/StudyFree';
import MerchandiseDetails from '../pages/Merchandise/MerchandiseDetails';
import { Admin } from '../pages/Admin/Admin';
import LandingPage from '../pages/LandingPage/LandingPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/result" element={<Result />} />
      <Route path="/courses/:courseLink" element={<Course />} />
      <Route
        path="/courses/:courseLink/:courseDetails"
        element={<CourseDetails />}
      />
      <Route path="/testSeries" element={<TestSeries />} />
      <Route
        path="/testSeries/:testSeriesDetails"
        element={<TestSeriesDetails />}
      />
      <Route path="/merchandise" element={<Merchandise />} />
      <Route
        path="/merchandise/:merchandiseDetails"
        element={<MerchandiseDetails />}
      />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/studyfree" element={<StudyFree />} />
      {/* extra routes */}
      <Route path="/about" element={<AboutUs />} />
      <Route path="/director/:name" element={<DirectorInfo />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/enroll-now/praveen" element={<LandingPage />} />
      <Route path="/*" element={<Navigate to="/" />} />   
    </Routes>
  );
};
export default AllRoutes;
