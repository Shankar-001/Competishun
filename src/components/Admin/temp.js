import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';
import db from '../../constants/Firebase';
import { getAuth, signOut } from 'firebase/auth';

const AdminComponent = () => {
  const [contactData, setContactData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      const contactDataSnap = await getDocs(collection(db, 'SupportQueries'));
      const contactData = contactDataSnap.docs.map((doc) => doc.data());
      console.log('contactData', contactData);
      setContactData(contactData);
    } catch (error) {
      console.log('error fetching data', error);
    }
  };

  const handleSignOut = async () => {
    const auth = getAuth();
    await signOut(auth);
    Swal.fire({
      icon: 'success',
      title: 'Signed Out Successfully!',
      text: 'You have been signed out successfully!',
    });
  };
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const sortedData = contactData.sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div className="Admin-container">
      <button
        onClick={handleSignOut}
        className="signOut"
        variant="contained"
        color="primary"
      >
        Sign Out
      </button>
    </div>
  );
};

export default AdminComponent;
