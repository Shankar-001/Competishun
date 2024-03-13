import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './routes/AllRoutes';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
};
export default Layout;
