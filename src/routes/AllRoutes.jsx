import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Result from '../pages/Result';
import Home from '../pages/Home/Home';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};
export default AllRoutes;
