import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
// import NewOffer from './components/NewOffer/NewOffer';
import AllRoutes from './routes/AllRoutes';
import { logEvent } from 'firebase/analytics';
import { analytics } from './constants/Firebase';
import PopupModal from './utils/PopupModal';
import {images} from './Data/UpcomingCoursesPopupData'


const Layout = () => {
  
  const [showModal, setShowModal] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);
  const [currentarray, setcurrentarray] = useState(null);

  // useEffect(() => {
  //   if(window.location.hostname === 'competishun.com'){
  //     logEvent(analytics, 'page_view');
  //   }
  //   else {
  //     logEvent(analytics, 'local_Page_view');
  //   }
  // }, []);

  useEffect(() => {
   
    // Show modal after 3 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
      setCurrentImage(0);
      setcurrentarray(images);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  

  return (
    <div>
      {/* <NewOffer /> */}
      <Navbar />
      <AllRoutes/>
      <Footer />
      { <PopupModal
          show={showModal}
          onClose={handleCloseModal}
          imagearray={currentarray}
          currentImage={currentImage}
        />}
    </div>
  );
};
export default Layout;
