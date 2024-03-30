import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import NewOffer from './components/NewOffer/NewOffer';
import AllRoutes from './routes/AllRoutes';

const Layout = () => {
  return (
    <div>
      <NewOffer />
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
};
export default Layout;
