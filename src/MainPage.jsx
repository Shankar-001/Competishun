import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
// import NewOffer from './components/NewOffer/NewOffer';
import AllRoutes from './routes/AllRoutes';
import { logEvent } from 'firebase/analytics';
import { analytics } from './constants/Firebase';

const Layout = () => {
  
  useEffect(() => {
    // if(window.location.hostname === 'competishun.com'){
    //   logEvent(analytics, 'page_view');
    // }
    // else {
    //   logEvent(analytics, 'local_Page_view');
    // }
  }, []);
  return (
    <div>
      {/* <NewOffer /> */}
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
};
export default Layout;
