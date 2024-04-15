import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import db from '../../constants/Firebase';
import { getAuth, signOut } from 'firebase/auth';

const AdminComponent = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    fetchContactData();
  }, []);
  const fetchContactData=async()=>{ 
    try {
       const contactDataSnap = await getDocs(collection(db, 'SupportQueries'));
       const contactData = contactDataSnap.docs.map((doc) => doc.data());
       console.log('contactData', contactData);
        setContactData(contactData);
    } catch (error) {
      console.log('error fetching data', error);
    }
  }

  const handleSignOut = async() => {
    const auth = getAuth();
    await signOut(auth);
    Swal.fire({
      icon: 'success',
      title: 'Signed Out Successfully!',
      text: 'You have been signed out successfully!',
    });
  };
  return (
    <div className="Admin-container">
      <button onClick={handleSignOut} className="signOut">
        Sign Out
      </button>
    </div>
  );
}
export default AdminComponent;
